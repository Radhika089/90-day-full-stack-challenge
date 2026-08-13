import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Product from "./pages/Product";
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";
import EditProduct from "./pages/EditProduct";
import AddProduct from "./pages/AddProduct";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import AdminRoute from "./components/Auth/AdminRoute";
import ProductDetails from "./components/Products/ProductDetails";
import OrderDetail from "./components/Orders/OrdersDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to={"/dashboard"} replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Product />} />
          <Route path="categories" element={<Categories />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
          <Route path="products/:id" element={<ProductDetails />} />
          <Route
            path="/products/edit/:id"
            element={
              <AdminRoute>
                <EditProduct />
              </AdminRoute>
            }
          />
          <Route
            path="/products/add"
            element={
              <AdminRoute>
                <AddProduct />
              </AdminRoute>
            }
          />
          <Route path="orders/:id" element={<OrderDetail />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
