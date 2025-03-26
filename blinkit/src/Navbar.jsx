import blinkit from "/logo.svg";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [placeholder, setPlaceholder] = useState("Search");
  useEffect(() => {
    const displayItems = [
      "egg",
      "chips",
      "crud",
      "chocolate",
      "rice",
      "chips",
      "milk",
      "bread",
      "sugar",
      "butter",
    ];
    let count = 0;
    const interval = setInterval(() => {
      setPlaceholder(`Search "${displayItems[count]}"`);
      count++;
      if (count === 10) count = 0;
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={styles.body}>
      <div className={styles.logoDiv}>
        <img className={styles.logo} src={blinkit} alt="BlinkIt logo" />
        <div className={styles.logoLine}></div>
      </div>
      <div>
        <h2 className={styles.delivery}>Delivery in 0 minutes</h2>
        <span>Loni, Ghaziabad, Uttar Pradesh</span>
        <select className={styles.location}>
          <option value="" disabled selected>
            Choose a location
          </option>
          <option value="1">1-5 days</option>
          <option value="2">6-10 days</option>
          <option value="3">11-15 days</option>
        </select>
      </div>
      <div>
        <input
          type="text"
          placeholder={placeholder}
          className={styles.searchInput}
        />
      </div>
      <div className={styles.register}>
        <a href="#" className={styles.login}>
          Login
        </a>
        <button className={styles.cart}>My cart</button>
      </div>
    </div>
  );
};

export default Navbar;
