import React from "react";
import Product from "./Product";
import styles from "./ProductSec.module.css";
import { useState, useEffect } from "react";
import Section from "./Section";
import section from "../public/categories";
const ProductSec = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://funaabworld-production-64e9.up.railway.app/getproducts")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {section.map((el) => (
        <Section category={el.category} title={el.title} data={data} />
      ))}
    </div>
  );
};

export default ProductSec;
