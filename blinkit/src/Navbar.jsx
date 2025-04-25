import blinkit from "/logo.svg";
import { useState, useLayoutEffect, useEffect, useRef } from "react";
import styles from "./Navbar.module.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Cart from "./Cart";
const Navbar = () => {
  const loginName = useRef(null);
  const overlayCart = document.querySelector("._mainDiv_1edos_1");
  const openOverlay = () => {
    overlayCart.style.display = "grid";
  };
  const [placeholder, setPlaceholder] = useState("Search");
  const [login, setLogin] = useState(false);
  const overlay = useRef(null);
  const [remove, setRemove] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));

  //For Searh bar changing the search  name.
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

  //Prevent login overlay from showing
  const toggleLogIn = () => {
    setLogin(true);
  };
  //To sign up or login
  const toggleSignIn = () => {
    setLogin(false);
  };
  // to remove the event listner on loginName

  useLayoutEffect(() => {
    //Function to open or close overlay
    const closeBtn = document.querySelector(".closeBtn");

    if (!overlay) return; // Ensure overlay exists
    if (user) {
      loginName.current.textContent = user.user.name;
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
    };
    //remove event listner of loginName
    if (remove) {
      loginName.current.removeEventListener("click", toogleOverlay);
      console.log("Event Removed");
    }
    //Ensure the login button can only show overlay if there is no user
    if (!user) {
      loginName.current.addEventListener("click", toogleOverlay);
      closeBtn.addEventListener("click", closeOverlay);
    }

    return () => {
      // Cleanup function
      if (!user) {
        closeBtn.removeEventListener("click", closeOverlay);
        loginName.current.removeEventListener("click", toogleOverlay);
      }
      // Cleanup
    };
  }, []);
  const removeEvent = () => {
    loginName.current.removeEventListener("click", toogleOverlay);
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
      <Cart />
    </div>
  );
};

export default Navbar;
