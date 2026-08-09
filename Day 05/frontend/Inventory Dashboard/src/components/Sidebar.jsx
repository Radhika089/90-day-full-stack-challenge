import React from "react";
import {
  ClipboardList,
  Home,
  LayoutGrid,
  PanelLeft,
  Settings,
  ShoppingBag,
} from "lucide-react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const navLinks = [
  {
    title: "Dashboard",
    to: "/dashboard",
    icon: Home,
  },
  {
    title: "Products",
    to: "/products",
    icon: ShoppingBag,
  },
  {
    title: "Categories",
    to: "/categories",
    icon: LayoutGrid,
  },
  {
    title: "Orders",
    to: "/orders",
    icon: ClipboardList,
  },
  {
    title: "Settings",
    to: "/settings",
    icon: Settings,
  },
];
const Sidebar = () => {
  return (
    <aside className="w-72 sticky top-0 h-screen bg-white border-r border-gray-200">
      <div className="flex items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <img src={logo} className="w-10 h-10 rounded-lg" />
          <h1 className="font-bold text-xl">Inventory</h1>
        </div>

        <PanelLeft className="w-5 h-5 text-gray-500 cursor-pointer" />
      </div>

      <nav className="mt-8 px-4 space-y-2">
        {navLinks.map((nav, index) => {
          const Icon = nav.icon;

          return (
            <Link
              key={nav.title}
              to={nav.to}
              className={`flex items-center justify-between px-4 py-3 rounded-2xl transition
          ${
            index === 0
              ? "bg-zinc-900 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}>
              <div className="flex items-center gap-3">
                <Icon size={20} />
                <span className="font-medium">{nav.title}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      <div className="mx-5 my-8 border-t" />

      <div className="px-4 space-y-2">
        <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100">
          <Settings size={20} />
          Logout
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
