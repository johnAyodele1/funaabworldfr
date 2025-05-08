import React, { useState } from "react";
import { useEffect } from "react";
import Navbar from "./Navbar";
import categories from "../public/categories";
import image3 from "../src/assets/100.jpg";
import image5 from "../src/assets/biscuits.jpg";
import image8 from "../src/assets/images.jpg";
import image9 from "../src/assets/nathan-dumlao-SlUoDl_SBMs-unsplash.jpg";
import image0 from "../src/assets/nils-beckmann-RGknkFIoxnQ-unsplash.jpg";

const CategoryPage = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetch("https://127.0.0.1/3000/getproducts")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  });
  const value = [image0, image3, image9, image5, image8];
  return (
    <div>
      <Navbar />
      <div
        style={{
          backgroundColor: "#F8F8F8",
          width: "80vw",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            boxShadow: "1px 1px 1px 1px  rgba(82, 83, 83, 0.205)",
            paddingLeft: "1rem",
            backgroundColor: "white",
          }}
        >
          <p
            style={{
              fontWeight: "700",
              margin: "0px",
              fontSize: "1.2rem",
              color: "black",
            }}
          >
            Buy Milk Online
          </p>
        </div>
        <div
          style={{
            marginTop: "1px",
            display: "flex",
            alignItems: "center",
            gap: "2px",
          }}
        >
          <div
            style={{
              marginRight: "1px",
              height: "80vh",
              backgroundColor: "white",
              width: "5.5rem",
              overflow: "clip",
              PaddingTop: "2rem",
            }}
          >
            {value.map((el) => (
              <div
                style={{
                  backgroundColor: " rgba(82, 83, 83, 0.205)",
                  width: "4rem",
                  height: "5rem",
                  borderRadius: ".2rem",
                  display: "flex",
                  alignItems: "flex-end",
                  marginBottom: "1rem",
                  borderTopLeftRadius: "1.5rem",
                  borderTopRightRadius: "1.5rem",
                }}
              >
                <img
                  src={el}
                  style={{
                    width: "4rem",
                    height: "3rem",
                    borderTopRightRadius: "1rem",
                    borderTopLeftRadius: "1rem",
                  }}
                />
              </div>
            ))}
          </div>
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                height: "80vh",

                gap: "1rem",
              }}
            >
              {value.map((el) => (
                <div
                  style={{
                    width: "12rem",
                    marginTop: "2rem",
                    height: "17rem",
                    borderRadius: "1.5rem",
                    color: "black",
                    backgroundColor: "white",
                  }}
                >
                  NKK
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
