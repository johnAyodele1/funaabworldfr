import React from "react";

import Loader from "./Loader";
import { useState, useEffect } from "react";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Footer from "./Footer";
import AddProduct from "./AddProduct";
import Warehouse from "./Warehouse";
import ProductPage from "./ProductPage";
import AdminPage from "./AdminPage";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <Router>
      <div className="appBody">
        {loading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/adminpage" element={<AdminPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
