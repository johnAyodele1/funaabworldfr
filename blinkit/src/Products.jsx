import React from "react";
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
import styles from "./Product.module.css";
const Products = () => {
  const images = [
    [image11, "Oil More"],
    [image9, "Fruits Vegetables"],
    [image1, "Cleaning Essentials"],
    [image2, "Personal Care"],
    [image4, "Sauces Spreads"],
    [image5, "Snacks Munchies"],
    [image6, "Tea Coffee"],
    [image7, "Chicken Meat"],
    [image8, "Drinks Juices"],
    [image7, "Chicken Meat"],
    [image0, "Dairy Breads"],
    [image11, "Oil More"],
    [image12, "Home Offices"],
    [image13, "Organic Instant"],
    [image14, "Bakery Biscuits"],
    [image0, "Dairy Breads"],
  ];
  return (
    <div className={styles.main}>
      {images.map((img, i) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            margin: "10px",
          }}
        >
          <div className={styles.divImg}>
            <img
              key={i}
              src={img[0]}
              alt={`Product ${i + 1}`}
              className={styles.image}
            />
          </div>
          <p
            style={{
              display: "block",
              color: "black",
              fontSize: "1.2rem",
              fontWeight: "600",
              opacity: "70%",
              textAlign: "center",
              margin: "0",
              padding: "0",
            }}
          >
            {img[1].split(" ")[0]} &
            <span
              style={{
                display: "block",
              }}
            >
              {img[1].split(" ")[1]}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Products;
