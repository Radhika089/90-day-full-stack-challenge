import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLayout, GuestLayout } from "./pages/Layout";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Builder from "./pages/Builder";
import Preview from "./pages/Preview";
import Publish from "./pages/Publish";

const App = () => {
  return (
    <Routes>
      {/* guest routes */}
      <Route element={<GuestLayout />}>
        <Route path="/login" element={<Auth mode="login" />} />
        <Route path="/register" element={<Auth mode="register" />} />
      </Route>

      {/* protected routes */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/builder/:id" element={<Builder />} />
        <Route path="/preview/:id" element={<Preview />} />
      </Route>

      {/* public routes */}
      <Route path="/publish/:id" element={<Publish />} />

      <Route path="*" element={<Navigate to={"/"} replace />} />
    </Routes>
  );
};

export default App;
