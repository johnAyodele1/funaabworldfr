import React, { useState, useEffect } from "react";
import Product from "./Product";

const SellerPage = () => {
  // Mock seller products data
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Mock data simulating seller's products
    const mockProducts = [
      {
        id: 1,
        name: "Sunflower Oil",
        price: 1200,
        size: "1 L",
        image: "Safya - 100% Pure Sunflower Oil, 1 L (33_8 fl oz).jpg",
      },
      {
        id: 2,
        name: "Organic Biscuits",
        price: 500,
        size: "200 g",
        image: "bakeryBiscuits.jpg",
      },
      {
        id: 3,
        name: "Green Tea",
        price: 800,
        size: "250 g",
        image: "teaCoffee.jpg",
      },
    ];
    setProducts(mockProducts);
  }, []);

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
            // Random delivery time between 10 and 60 minutes
            const time = Math.floor(Math.random() * 51) + 10;
            const imageUrl = `http://127.0.0.1:3000/uploads/${product.image}`;
            return (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                size={product.size}
                image={imageUrl}
                time={time}
              />
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
