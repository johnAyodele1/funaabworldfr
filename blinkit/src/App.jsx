import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Loader from "./Loader";
import { useState, useEffect } from "react";
import Products from "./Products";
import ProductSec from "./ProductSec";
import "./App.css";
import Footer from "./Footer";
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div className="appBody">
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Hero />
          <Products />
          <ProductSec />
          <Footer />
        </div>
      )}
    </div>
  );
};

export default App;
