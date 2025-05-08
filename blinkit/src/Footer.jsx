import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  const links = ["About", "Careers", "Blog", "Press", "Lead", "Value"];
  const linkB = ["Privacy", "Terms", "FAQs", "Security", "Mobile", "Contact"];
  const linkC = [
    { title: "Partner", href: "#" },
    { title: "Franchise", href: "#" },
    { title: "Seller", href: "addproduct" },
    { title: "Warehouse", href: "warehouse" },
    { title: "Deliver", href: "#" },
    { title: "Resources", href: " #" },
  ];
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
            {links.map((el) => (
              <a href="#">{el}</a>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {linkB.map((el) => (
              <a href="#">{el}</a>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {linkC.map((el) => (
              <a href={el.href}>{el.title}</a>
            ))}
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
