import blinkit from "/logo.svg";
import { useState, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Cart from "./Cart";
const Navbar = () => {
  const overlayCart = document.querySelector("._mainDiv_1edos_1");
  const openOverlay = () => {
    overlayCart.style.display = "grid";
  };
  const [placeholder, setPlaceholder] = useState("Search");
  const [login, setLogin] = useState(false);
  const overlay = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
  const toggleLogIn = () => {
    setLogin(true);
  };
  const toggleSignIn = () => {
    setLogin(false);
  };
  useEffect(() => {
    // const overlay = document.querySelector("._overlay_sqgjf_103");
    const login = document.querySelector("._login_4r1zq_71");
    const closeBtn = document.querySelector(".closeBtn");
    if (!overlay) return; // Ensure overlay exists
    if (isLoggedIn) {
      overlay.style.display = "none";
    }

    const closeOverlay = () => {
      overlay.current.style.display = "none";
    };
    const toogleOverlay = () => {
      setIsLoggedIn(false);
      if (overlay.current) {
        overlay.current.style.display = "none"; // Temporarily hide
        setTimeout(() => {
          overlay.current.style.display = "block"; // Then show
        }, 10); // A slight delay forces repaint
      }
      // Correct function definition
    };

    login.addEventListener("click", toogleOverlay);
    closeBtn.addEventListener("click", closeOverlay);

    return () => {
      login.removeEventListener("click", toogleOverlay);
      closeBtn.removeEventListener("click", closeOverlay); // Cleanup
    };
  }, []);
  return (
    <div className={styles.body}>
      <div ref={overlay} className={styles.overlay}>
        {login ? (
          <Login toggle={toggleSignIn} />
        ) : (
          <Signup toggle={toggleLogIn} />
        )}
      </div>

      <div className={styles.logoDiv}>
        <img className={styles.logo} src={blinkit} alt="BlinkIt logo" />
        <div className={styles.logoLine}></div>
      </div>
      <div>
        <h2 className={styles.delivery}>Delivery in 0 minutes</h2>
        <span
          style={{
            color: "black",
          }}
        >
          Loni, Ghaziabad, Uttar Pradesh
        </span>
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
        <button className={styles.cart} onClick={openOverlay}>
          My cart
        </button>
      </div>
      <Cart />
    </div>
  );
};

export default Navbar;
