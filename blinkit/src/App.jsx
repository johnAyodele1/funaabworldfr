import React from "react";

import Loader from "./Loader";
import { useState, useEffect } from "react";

import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddProduct from "./AddProduct";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
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
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
