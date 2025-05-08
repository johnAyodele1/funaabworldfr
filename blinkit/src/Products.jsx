import React from "react";
import images from "../public/images";
import styles from "./Product.module.css";
const Products = () => {
  const image = [
    [images[3], "Fruits Vegetables"],
    [images[10], "Oil More"],
    [images[1], "Cleaning Essentials"],
    [images[13], "Personal Care"],
    [images[12], "Sauces Spreads"],
    [images[11], "Snacks Munchies"],
    [images[0], "Tea Coffee"],
    [images[9], "Chicken Meat"],
    [images[8], "Drinks Juices"],
    [images[7], "Chicken Meat"],
    [images[6], "Dairy Breads"],
    [images[5], "Oil More"],
    [images[4], "Home Offices"],
    [images[3], "Organic Instant"],
    [images[2], "Bakery Biscuits"],
    [images[1], "Dairy Breads"],
  ];
  return (
    <div className={styles.main}>
      {image.map((img, i) => (
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
