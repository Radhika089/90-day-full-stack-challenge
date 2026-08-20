import React from "react";
import { Search, ShoppingBag, User } from "lucide-react";

const Navbar = () => {
  const navItems = ["Category", "Men", "Women", "Kids", "Promo"];

  return (
    <nav className="h-20 bg-white shadow-sm border-b sticky top-0 z-50 border-gray-200">
      <div className="max-w-7xl mx-auto h-full flex items-center  justify-between px-6">
        <div>
          <h2 className="text-2xl font-black tracking-[0.2rem] text-gray-900">
            AIKE
          </h2>
        </div>

        <div className="flex items-center hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-black"
              key={item}>
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <button className="text-gray-600 hover:text-black transition">
            <Search size={20} />
          </button>
          <button className="relative text-gray-600 hover:text-black transition">
            <ShoppingBag size={20} />
            <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-black text-white text-[10px] ">
              2
            </span>
          </button>
          <button className="text-gray-600 hover:text-black transition">
            <User size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
