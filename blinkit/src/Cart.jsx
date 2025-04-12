import React from "react";
import styles from "./Cart.module.css";
import { useState, useEffect } from "react";
const Cart = () => {
  const overlay = document.querySelector("._mainDiv_1edos_1");
  const closeOverlay = () => {
    overlay.style.display = "none";
  };

  return (
    <div
      className={styles.mainDiv}
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <div></div>
      <div className={styles.cartList}>
        <div className={styles.heading}>
          <div className={styles.carts}>
            <div>My Cart</div>
            <div
              style={{
                cursor: "pointer",
              }}
              onClick={closeOverlay}
            >
              X
            </div>
          </div>
        </div>
        <div className=""></div>
        <div className=""></div>
      </div>
    </div>
  );
};

export default Cart;
