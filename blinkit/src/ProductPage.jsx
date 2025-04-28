import React from "react";
import { useParams } from "react-router";
import Navbar from "./Navbar";
import image6 from "./assets/Café Tradicional Del Trópico - Copy.jpg";
import img1 from "./warehouse/warehouse-icon-medical_1.webp";
import img2 from "./warehouse/warehouse-icon-shift_1.webp";
import img3 from "./warehouse/warehouse-icon-salary_1.webp";
import img4 from "./warehouse/warehouse-icon-transportation_1.webp";
import styles from "./ProductPage.module.css";
const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.mainDiv}>
        <div className={styles.leftView}>
          <img src={image6} className={styles.firstView} />
        </div>
        <div className={styles.rightView}>
          <div className={styles.section}>
            <p className={styles.title}>
              Home / Curd & Yorghurt / <span>Del Cafe Traditional</span>
            </p>
            <h1 className={styles.heading}>Del Cafe Traditional</h1>
            <p className={styles.time}>⏳ 13 MINS</p>
            <p className={styles.link}>View all by Del</p>
          </div>
          <div>
            <div className={styles.productDetails}>
              <div>
                <p className={styles.size}>400g</p>
                <p className={styles.price}>
                  MRP <span>N35</span>
                </p>
                <p className={styles.tax}>(Inclusive of all taxes)</p>
              </div>
              <div>
                <button className={styles.button}>- 1 +</button>
              </div>
            </div>
            <div>
              <h1 className={styles.title2}>Why shop from blinkit</h1>
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
