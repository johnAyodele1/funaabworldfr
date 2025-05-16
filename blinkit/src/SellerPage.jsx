import React, { useState, useEffect } from "react";
import Product from "./Product";
import { useNavigate } from "react-router-dom";

const SellerPage = () => {
  const [products, setProducts] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) return;
    fetch("https://funaabworld-production-64e9.up.railway.app/getproducts")
      .then((res) => res.json())
      .then((res) => {
        // Filter products by seller ID
        const sellerProducts = res.data.product.filter(
          (product) => product.seller._id === user.user._id
        );
        setProducts(sellerProducts);
      })
      .catch((err) => console.log(err));
  }, []); // Removed user from dependency array to prevent rerender loop

  const handleEdit = (id) => {
    navigate(`/editproduct/${id}`);
  };

  const handleDelete = (id) => {
    fetch("https://funaabworld-production-64e9.up.railway.app/deleteproduct", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => {
        if (res.status === 204) {
          setProducts(products.filter((product) => product._id !== id));
        } else {
          alert("Failed to delete product");
        }
      })
      .catch((err) => alert("Error deleting product: " + err.message));
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Seller's Products</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "flex-start",
        }}
      >
        {products.length > 0 ? (
          products.map((product) => {
            // Mock sales and revenue
            const sales = Math.floor(Math.random() * 1000);
            const revenue = sales * parseFloat(product.price);
            const time = Math.floor(Math.random() * 51) + 10;
            const imageUrl = `https://funaabworld-production-64e9.up.railway.app/uploads/${product.image}`;
            return (
              <div key={product._id} style={{ position: "relative" }}>
                <Product
                  id={product._id}
                  name={product.name}
                  price={product.price}
                  size={product.size}
                  image={imageUrl}
                  time={time}
                />
                <div
                  style={{
                    marginTop: "0.5rem",
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "0.9rem",
                    width: "13rem",
                    textAlign: "center",
                  }}
                >
                  <p>Sales: {sales}</p>
                  <p>Revenue: ₹{revenue.toFixed(2)}</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "0.5rem",
                    width: "13rem",
                  }}
                >
                  <button
                    onClick={() => handleEdit(product._id)}
                    style={{
                      backgroundColor: "#0c831f",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      padding: "0.3rem 0.6rem",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    style={{
                      backgroundColor: "#d9534f",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      padding: "0.3rem 0.6rem",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <p>No products found for this seller.</p>
        )}
      </div>
    </div>
  );
};

export default SellerPage;
