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
import { useState, useEffect } from "react";
const ProductSec = () => {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image0,
    image11,
    image12,
    image13,
    image14,
  ];
  const [data, setData] = useState([]);
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    fetch("http://127.0.0.1:3000/getproducts")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    if (data.data?.product) {
      setFetchedData(data.data.product);
    }
    console.log(data, fetchedData);
  }, [data, fetchedData]);
  const secData = fetchedData?.filter((el) => el.category == "dairyBreads");

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
      <div>
        {
          // Mock product data
          secData?.length > 0 ? (
            <div className={styles.mainDiv}>
              {secData?.map((product) => {
                let time = Math.floor(Math.random() * 58) + 1;
                console.log(product.id);
                // random number between 1-14
                const image = `http://127.0.0.1:3000/uploads/${product.image}`;
                return (
                  <Product
                    key={product.id}
                    id={product.id}
                    image={image}
                    name={product.name}
                    price={product.price}
                    size={product.size}
                    time={time}
                    // If you want to pass the random number to the Product component
                  />
                );
              })}
            </div>
          ) : (
            <div>
              <p
                style={{
                  color: "black",
                  fontSize: "1.5rem",
                  opacity: "80%",
                  textAlign: "center",
                }}
              >
                No Product avaliable for this section
              </p>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default ProductSec;
