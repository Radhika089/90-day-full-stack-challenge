import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <div>
      <Hero />
      <ProductCard />
      <About />
    </div>
  );
};

export default Home;
