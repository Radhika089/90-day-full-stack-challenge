import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Brews from "./pages/Brews";
import Gear from "./pages/Gear";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/brews" element={<Brews />} />
        <Route path="/gear" element={<Gear />} />
        <Route path="/products/:productId" element={<ProductDetails />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
