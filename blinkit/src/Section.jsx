import React, { useEffect, useState } from "react";
import styles from "./ProductSec.module.css";
import Product from "./Product";
const Section = (props) => {
  const data = props.data;
  const fetchedData = data.data?.product;
  const secData = fetchedData?.filter((el) => el.category == props.category);

  return (
    <div>
      {secData?.length > 0 ? (
        <>
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
              {props.title}
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
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Section;
