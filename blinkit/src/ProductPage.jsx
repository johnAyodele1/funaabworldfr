import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import Navbar from "./Navbar";
import image6 from "./assets/Café Tradicional Del Trópico - Copy.jpg";
import img1 from "./warehouse/warehouse-icon-medical_1.webp";
import img2 from "./warehouse/warehouse-icon-shift_1.webp";
import img3 from "./warehouse/warehouse-icon-salary_1.webp";
import img4 from "./warehouse/warehouse-icon-transportation_1.webp";
import styles from "./ProductPage.module.css";
const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    fetch(`http://127.0.0.1:3000/product/${id}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.status !== "success") {
          swal("Error", "No product with this route exist", "error");
          return navigate("/");
        }
        setData(res);
      });
  }, []);
  const product = data?.data.product;
  const image = `http://127.0.0.1:3000/uploads/${product?.image}`;
  return (
    <div>
      <Navbar />
      <div className={styles.mainDiv}>
        <div className={styles.leftView}>
          <img src={image} className={styles.firstView} />
        </div>
        <div className={styles.rightView}>
          <div className={styles.section}>
            <p className={styles.title}>
              Home / Curd & Yorghurt / <span>{product && product.name}</span>
            </p>
            <h1 className={styles.heading}>{product && product?.name}</h1>
            <p className={styles.time}>⏳ 13 MINS</p>
            <p className={styles.link}>View all by Del</p>
          </div>
          <div>
            <div className={styles.productDetails}>
              <div>
                <p className={styles.size}>{product && product?.size}</p>
                <p className={styles.price}>
                  MRP <span>N{product && product?.price}</span>
                </p>
                <p className={styles.tax}>(Inclusive of all taxes)</p>
              </div>
              <div>
                <button className={styles.button}>- 1 +</button>
              </div>
            </div>
            <div>
              <h1 className={styles.title2}>Why shop from funaab world</h1>
              <div>
                <div className={styles.bait}>
                  <div>
                    <img src={img2} className={styles.delivery} />
                  </div>
                  <div>
                    <div className={styles.superFast}>Superfast Delivery</div>
                    <div className={styles.get}>
                      Get your order delivered to your doorstep at the earliest
                      from dark stores near you.
                    </div>
                  </div>
                </div>
                <div className={styles.bait}>
                  <div>
                    <img src={img3} className={styles.delivery} />
                  </div>
                  <div>
                    <div className={styles.superFast}>Best Prices & Offers</div>
                    <div className={styles.get}>
                      Best price destination with offers directly from the
                      manufacturers.
                    </div>
                  </div>
                </div>
                <div className={styles.bait}>
                  <div>
                    <img src={img1} className={styles.delivery} />
                  </div>
                  <div>
                    <div className={styles.superFast}>Wide Assortment</div>
                    <div className={styles.get}>
                      Choose from 5000+ products across foods, personal care,
                      household care
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
