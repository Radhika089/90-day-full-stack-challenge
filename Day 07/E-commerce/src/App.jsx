import React from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProductCard />
      <About />
      <Footer />
    </div>
  );
};

export default App;
