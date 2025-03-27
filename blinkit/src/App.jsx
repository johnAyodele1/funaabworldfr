import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Loader from "./Loader";
import { useState, useEffect } from "react";
const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Navbar />
          <Hero />
        </div>
      )}
    </div>
  );
};

export default App;
