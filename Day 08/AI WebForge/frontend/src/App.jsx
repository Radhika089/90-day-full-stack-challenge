import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout, GuestLayout } from "./pages/Layout";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Builder from "./pages/Builder";
import Preview from "./pages/Preview";

const App = () => {
  return (
    <Routes>
      <Route element={<GuestLayout />}>
        <Route path="/login" element={<Auth mode="login" />} />
        <Route path="/register" element={<Auth mode="register" />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/builder/:id" element={<Builder />} />
        <Route path="/preview/:id" element={<Preview />} />
      </Route>

      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
};

export default App;
