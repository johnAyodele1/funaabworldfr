import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div
      style={{
        width: "95vw",
        margin: "0 auto",
        marginTop: "5rem",
        display: "flex",
      }}
    >
      <div
        style={{
          width: "35%",
        }}
      >
        <div
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: "1.4rem",
            opacity: "90%",
          }}
        >
          Useful Links
        </div>
        <div
          className={styles.aDiv}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <a href="#" className="">
              About
            </a>
            <a href="#" className="">
              Careers
            </a>
            <a href="#" className="">
              Blog
            </a>
            <a href="#" className="">
              Press
            </a>
            <a href="#" className="">
              Lead
            </a>
            <a href="#" className="">
              Value
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <a href="#" className="">
              Privacy
            </a>
            <a href="#" className="">
              Terms
            </a>
            <a href="#" className="">
              FAQs
            </a>
            <a href="#" className="">
              Security
            </a>
            <a href="#" className="">
              Mobile
            </a>
            <a href="#" className="">
              Contact
            </a>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <a href="#" className="">
              Partner
            </a>
            <a href="#" className="">
              Franchise
            </a>
            <a href="addproduct" className="">
              Seller
            </a>
            <a href="#" className="">
              Warehouse
            </a>
            <a href="#" className="">
              Deliver
            </a>
            <a href="#" className="">
              Resources
            </a>
          </div>
        </div>
      </div>
      <div>
        <div
          style={{
            color: "black",
            fontWeight: "bold",
            fontSize: "1.4rem",
            opacity: "90%",
          }}
        >
          Categories
        </div>
        <div
          className={styles.aDiv}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
          }}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
