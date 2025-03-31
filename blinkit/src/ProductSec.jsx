import React from "react";
import Product from "./Product";
import styles from "./ProductSec.module.css";
const ProductSec = () => {
  return (
    <div>
      <div
        style={{
          color: "black",
          display: "flex",
          width: "95vw",
          margin: "0 auto",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2
          style={{
            fontWeight: "bold",
            fontSize: "2rem",
            marginBottom: "1rem",
            opacity: "85%",
          }}
        >
          Dairy, Bread & Egg
        </h2>
        <p
          style={{
            cursor: "pointer",
            fontWeight: "400",
            fontSize: "1.5rem",
            color: " #0c831f",
          }}
        >
          see all
        </p>
      </div>
      <div className={styles.mainDiv}>
        {
          // Mock product data
          [
            {
              id: 1,
              name: "Product 1",
              price: "$25",
              size: "500ml",
              time: "30min",
            },
            {
              id: 2,
              name: "Product 2",
              price: "$30",
              size: "300ml",
              time: "45min",
            },
            {
              id: 3,
              name: "Product 3",
              price: "$20",
              size: "200ml",
              time: "60min",
            },
            {
              id: 4,
              name: "Product 4",
              price: "$28",
              size: "100ml",
              time: "15min",
            },
            {
              id: 5,
              name: "Product 5",
              price: "$22",
              size: "500ml",
              time: "30min",
            },
          ].map((product) => (
            <Product
              key={product.id}
              name={product.name}
              price={product.price}
              size={product.size}
              time={product.time}
            />
          ))
        }
      </div>
    </div>
  );
};

export default ProductSec;
