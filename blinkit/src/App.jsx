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
import SellerPage from "./SellerPage";
import CategoryPage from "./CategoryPage";

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
            <Route path="/warehouse" element={<CategoryPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/adminpage" element={<AdminPage />} />
            <Route path="/seller" element={<SellerPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
