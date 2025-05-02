import React from "react";
import Product from "./Product";
import styles from "./ProductSec.module.css";
import { useState, useEffect } from "react";
import Section from "./Section";
const ProductSec = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:3000/getproducts")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);
  const section = [
    { title: "Oil & More", category: "oilMore" },
    { title: "Fruits & Vegetables", category: "fruitsVegetables" },
    { title: "Cleaning & Essentials", category: "cleaningEssentials" },
    { title: "Personal & Care", category: "personalCare" },
    { title: "Sauces & Spreads", category: "saucesSpreads" },
    { title: "Snacks & Munchies", category: "snacksMunchies" },
    { title: "Tea & Coffee", category: "teaCoffee" },
    { title: "Chicken & Meat", category: "chickenMeat" },
    { title: "Drinks & Juices", category: "drinksJuices" },
    { title: "Dairy & Breads", category: "dairyBreads" },
    { title: "Home & Offices", category: "HomeOffices" },
    { title: "Organic & Instant", category: "organicInstant" },
    { title: "Bakery & Biscuits", category: "bakeryBiscuits" },
  ];

  return (
    <div>
      {section.map((el) => (
        <Section category={el.category} title={el.title} data={data} />
      ))}
    </div>
  );
};

export default ProductSec;
