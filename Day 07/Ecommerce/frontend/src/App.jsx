import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Brews from "./pages/Brews";
import Gear from "./pages/Gear";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./layout/MainLayout";
import Wishlist from "./pages/Wishlist";
import ScrollToTop from "./components/ScrollToTop";
import Profile from "./pages/Profile";
import MyOrders from "./pages/MyOrders";
import OrderDetails from "./pages/OrderDetails";
import Accessories from "./pages/Accessories";
import About from "./pages/About";
import Subscribe from "./pages/Subscribe";
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import Products from "./admin/pages/Products";
import Sidebar from "./admin/Sidebar";
import ProductAdd from "./admin/pages/ProductAdd";
import ProductEdit from "./admin/pages/ProductEdit";
import Categories from "./admin/pages/Categories";
import CategoryAdd from "./admin/pages/CategoryAdd";
import CategoryEdit from "./admin/pages/CategoryEdit";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/brews" element={<Brews />} />
          <Route path="/gear" element={<Gear />} />
          <Route path="/accessories" element={<Accessories />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<MyOrders />} />
          <Route path="/orders/:orderId" element={<OrderDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Route>

        {/* Admin */}

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="products/add" element={<ProductAdd />} />
          <Route path="products/:id/edit" element={<ProductEdit />} />
          <Route path="categories" element={<Categories />} />
          <Route path="categories/add" element={<CategoryAdd />} />
          <Route path="categories/:id/edit" element={<CategoryEdit />} />
        </Route>

        <Route path="/sidebar" element={<Sidebar />} />
      </Routes>
    </>
  );
};

export default App;
