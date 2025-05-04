import blinkit from "/logo.png";
import { useState, useLayoutEffect, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
import Login from "./Login";
import Signup from "./Signup";
import Cart from "./Cart";

const Navbar = () => {
  const loginName = useRef(null);
  const overlayCart = useRef(null);
  const [placeholder, setPlaceholder] = useState("Search");
  const [login, setLogin] = useState(false);
  const overlay = useRef(null);
  const [remove, setRemove] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

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

  const openOverlay = () => {
    if (overlayCart.current) {
      overlayCart.current.style.display = "grid";
    }
  };

  useLayoutEffect(() => {
    const closeBtn = document.querySelector(".closeBtn");

    if (user) {
      loginName.current.textContent = user.user.name;
    }

    const closeOverlay = () => {
      if (overlay.current) {
        overlay.current.style.display = "none";
      }
    };

    const toggleOverlay = () => {
      setIsLoggedIn(false);
      if (overlay.current) {
        overlay.current.style.display = "none";
        setTimeout(() => {
          overlay.current.style.display = "block";
        }, 10);
      }
    };

    if (remove) {
      loginName.current.removeEventListener("click", toggleOverlay);
    }

    if (!user) {
      loginName.current.addEventListener("click", toggleOverlay);
      closeBtn.addEventListener("click", closeOverlay);
    }

    return () => {
      if (!user) {
        closeBtn.removeEventListener("click", closeOverlay);
        loginName.current.removeEventListener("click", toggleOverlay);
      }
    };
  }, [user, remove]);

  const removeEvent = () => {
    loginName.current.removeEventListener("click", toggleOverlay);
  };

  return (
    <div className={styles.body}>
      {user ? null : (
        <div ref={overlay} className={styles.overlay}>
          {login ? (
            <Login toggle={toggleSignIn} remove={removeEvent} />
          ) : (
            <Signup toggle={toggleLogIn} remove={removeEvent} />
          )}
        </div>
      )}

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
        <a href="#" className={styles.login} ref={loginName}>
          Login
        </a>
        <button className={styles.cart} onClick={openOverlay}>
          My cart
        </button>
      </div>
      <Cart ref={overlayCart} />
    </div>
  );
};

export default Navbar;
