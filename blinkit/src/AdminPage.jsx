import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router";
import logo from "/logo.svg";

const AdminPage = () => {
  const category = [
    "Choose a category",
    "Oil & More",
    "Fruits & Vegetables",
    "Cleaning & Essentials",
    "Personal & Care",
    "Sauces & Spreads",
    "Snacks & Munchies",
    "Tea & Coffee",
    "Chicken & Meat",
    "Drinks & Juices",
    "Dairy & Breads",
    "Home & Offices",
    "Organic & Instant",
    "Bakery & Biscuits",
  ];
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const [products, setProducts] = useState([
    { id: 1, name: "Product A", price: 10.99 },
    { id: 2, name: "Product B", price: 15.49 },
    { id: 3, name: "Product C", price: 7.99 },
  ]);
  const [data, setData] = useState();
  const [sellers, setSellers] = useState([
    { id: 1, name: "Seller One", email: "seller1@example.com" },
    { id: 2, name: "Seller Two", email: "seller2@example.com" },
    { id: 3, name: "Seller Three", email: "seller3@example.com" },
  ]);
  useEffect(() => {
    if (data?.data.product.length > 0) {
      setProducts(data.data.product);
    }
  }, [data]);
  useEffect(() => {
    console.log(products);
  }, [products]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/getproducts")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res);
      });
  }, []);

  // useEffect(() => {
  //   if (user.user.role !== "admin") {
  //     swal("Error", "You don't have access to the page", "error");
  //     navigate("/");
  //   }
  // }, []);

  const handleDeleteProduct = (id) => {
    console.log(id);
    if (window.confirm("Are you sure you want to delete this product?")) {
      fetch("http://127.0.0.1:3000/deleteproduct", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }).finally((res) => {
        console.log(res);
        console.log(JSON.stringify(id));
        setProducts(products.filter((product) => product.id !== id));
      });
    }
  };

  return (
    <div
      style={{
        color: "black",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          style={{
            width: "13rem",
          }}
        />
        <h1>Admin Control Panel</h1>
      </div>

      <section style={{ marginBottom: "40px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>Products ({products.length})</h2>
          {/* onChange={handleChange} */}
          <select
            name="category"
            style={{
              border: "none",
              padding: ".5rem 1rem",
              backgroundColor: "rgba(153, 153, 153, 0.238)",
            }}
          >
            {category.map((el) => (
              <option value={el.split("&").join("").split(" ").join("")}>
                {el}
              </option>
            ))}
          </select>
        </div>
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #ccc" }}>
                <th style={{ textAlign: "left", padding: "8px" }}>ID</th>
                <th style={{ textAlign: "left", padding: "8px" }}>Name</th>
                <th style={{ textAlign: "left", padding: "8px" }}>Price</th>
                <th style={{ textAlign: "left", padding: "8px" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "8px" }}>{product.id}</td>
                  <td style={{ padding: "8px" }}>{product.name}</td>
                  <td style={{ padding: "8px" }}>N{product.price}</td>
                  <td style={{ padding: "8px" }}>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      style={{
                        backgroundColor: "#e74c3c",
                        color: "white",
                        border: "none",
                        padding: "6px 12px",
                        cursor: "pointer",
                        borderRadius: "4px",
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      <section>
        <h2>Sellers ({sellers.length})</h2>
        {sellers.length === 0 ? (
          <p>No sellers available.</p>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #ccc" }}>
                <th style={{ textAlign: "left", padding: "8px" }}>ID</th>
                <th style={{ textAlign: "left", padding: "8px" }}>Name</th>
                <th style={{ textAlign: "left", padding: "8px" }}>Email</th>
              </tr>
            </thead>
            <tbody>
              {sellers.map((seller) => (
                <tr key={seller.id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "8px" }}>{seller.id}</td>
                  <td style={{ padding: "8px" }}>{seller.name}</td>
                  <td style={{ padding: "8px" }}>{seller.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </div>
  );
};

export default AdminPage;
