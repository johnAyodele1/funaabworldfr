import React from "react";
import Product from "./Product";
import image1 from "./assets/10 tendances packaging à connaître en 2018.jpg";
import image2 from "./assets/91ade789-1640-44b5-b7bd-cf0cebf5cf4d - Copy.jpg";
import image3 from "./assets/100.jpg";
import image4 from "./assets/2203be32-ae13-421f-8331-b623bfe6f27d - Copy.jpg";
import image5 from "./assets/biscuits.jpg";
import image6 from "./assets/Café Tradicional Del Trópico - Copy.jpg";
import image7 from "./assets/dcdc560e-759f-4322-b959-22e0459b928d - Copy.jpg";
import image8 from "./assets/images.jpg";
import image9 from "./assets/nathan-dumlao-SlUoDl_SBMs-unsplash.jpg";
import image0 from "./assets/nils-beckmann-RGknkFIoxnQ-unsplash.jpg";
import image11 from "./assets/safya.jpg";
import image12 from "./assets/simple.jpg";
import image13 from "./assets/toppng.com-canned-food-618x400.png";
import image14 from "./assets/tried.jpg";
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
              image: image1,
              id: 1,
              name: "Amul Gold Full Cream Fresh Milk",
              price: "$25",
              size: "500ml",
              time: "30 MINS",
            },
            {
              image: image2,
              id: 2,
              name: "Amul Salted Butter",
              price: "$30",
              size: "300ml",
              time: "45 MINS",
            },
            {
              image: image0,
              id: 3,
              name: "Amul Blend Diced Cheese",
              price: "$20",
              size: "200ml",
              time: "60 MINS",
            },
            {
              image: image4,
              id: 4,
              name: "Harvest Gold - White Bread",
              price: "$28",
              size: "100ml",
              time: "15 MINS",
            },
            {
              image: image5,
              id: 5,
              name: "Amul Taaza Toned Fresh Milk",
              price: "$22",
              size: "500ml",
              time: "30 MINS",
            },
            {
              image: image6,
              id: 6,
              name: "Mother Dairy Full Cream Fresh Milk",
              price: "$28",
              size: "540ml",
              time: "23 MINS",
            },
          ].map((product) => (
            <Product
              key={product.id}
              image={product.image}
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
