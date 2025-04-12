import React from "react";
import Navbar from "./Navbar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./Hero";
import Products from "./Products";
import ProductSec from "./ProductSec";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      <Hero />

      <Products />
      <ProductSec />
      <Footer />
    </div>
  );
};

export default Home;
