import React from "react";
import { Navigate, replace, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";
import EditProduct from "./pages/EditProduct";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate to={"/dashboard"} replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Product />} />
        <Route path="categories" element={<Categories />} />
        <Route path="orders" element={<Orders />} />
        <Route path="settings" element={<Settings />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
      </Route>
    </Routes>
  );
};

export default App;
