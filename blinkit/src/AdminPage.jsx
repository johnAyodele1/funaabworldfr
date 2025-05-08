import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useNavigate } from "react-router";
import logo from "/logo.png";
import getProduct from "./store/store";
import { category } from "../public/categoryName";

const AdminPage = () => {
  const { products, loading, error, fetchProduct, deleteProduct } =
    getProduct();

  const [sellers, setSellers] = useState([]);
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);
  const product = products?.data?.product;

  // useEffect(() => {
  //   if (user?.user?.role !== "admin") {
  //     swal("Error", "You don't have access to the page", "error");
  //     navigate("/");
  //   }
  // }, []);

  const handleDeleteProduct = (id) => {
    console.log(id);
    deleteProduct(id);
  };

  // Populate sellers from products, assuming each product has a seller object
  useEffect(() => {
    const uniqueSellers = [];
    product?.forEach((product) => {
      if (
        product.seller &&
        !uniqueSellers.some((s) => s.id === product.seller.id)
      ) {
        uniqueSellers.push(product.seller);
      }
    });
    setSellers(uniqueSellers);
  }, [products]);

  console.log(sellers, products);
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
            width: "15rem",
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
            // onChange={handleCategory}
          >
            {category.map((el) => (
              <option key={el} value={el}>
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
              {product?.map((product) => (
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
        {products.length === 0 ? (
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
              {sellers?.map((seller) => (
                <tr key={seller?.id} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ padding: "8px" }}>{seller?.id}</td>
                  <td style={{ padding: "8px" }}>{seller?.name}</td>
                  <td style={{ padding: "8px" }}>{seller?.email}</td>
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
