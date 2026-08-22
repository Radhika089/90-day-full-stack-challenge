import React from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductCard />
    </div>
  );
};

export default App;
