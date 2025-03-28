import React from "react";
import styles from "./Hero.module.css";
import image from "./assets/toppng.com-canned-food-618x400.png";
import image2 from "./assets/zoshua-colah-ioOxl44C3Wc-unsplash.jpg";
const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.paan}>
        <h1 className={styles.h1}>Paan corner</h1>
        <p>Your favourite paan shop is now online</p>
        <button className={styles.button}>Shop Now</button>
        <img src={image} alt="" className={styles.image} />
      </div>
      <div className={styles.templates}>
        <div className={styles.templateB}>
          <h2>
            Pharmacy at <span>your doorstep!</span>
          </h2>
          <p>
            Cough syrups, pain <span>relif spray & more</span>
          </p>
          <button>Order Now</button>
        </div>
        <div className={styles.templateO}>
          <h2>
            Pet Care supplies<span>in minutes</span>
          </h2>
          <p>
            Foods, treats <span>toys & more</span>
          </p>
          <button>Order Now</button>
          {/* <img src={image2} alt="" className={styles.image2} /> */}
        </div>
        <div className={styles.templateW}>
          {" "}
          <h2>
            No time for<span>a diaper run</span>
          </h2>
          <p>
            Get baby care<span>essentials in minutes</span>
          </p>
          <button>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
