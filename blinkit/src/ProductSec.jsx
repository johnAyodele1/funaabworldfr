import React from "react";

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
            fontSize: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          Dairy, Bread & Egg
        </h2>
        <p
          style={{
            cursor: "pointer",
          }}
        >
          see all
        </p>
      </div>
    </div>
  );
};

export default ProductSec;
