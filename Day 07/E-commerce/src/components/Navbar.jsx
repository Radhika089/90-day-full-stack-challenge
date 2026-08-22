import React from "react";
import { Search, ShoppingBag, User } from "lucide-react";

const Navbar = () => {
  const navItems = ["Shop", "Brews", "Gear", "Subscribe", "About"];

  return (
    <nav className="h-20 bg-[#1f2f2e] shadow-sm  sticky top-0 z-50 ">
      <div className="max-w-7xl mx-auto h-full flex items-center text-white justify-between px-6">
        <div className="leading-none">
          <h2 className="text-2xl font-black tracking-[0.2rem]">AURA</h2>
          <span className="block text-[10px] tracking-[0.15rem]">
            COFFEE CO.
          </span>
        </div>

        <div className="flex items-center hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              href="#"
              className="text-sm font-medium hover:text-gray-300"
              key={item}>
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <button className=" cursor-pointer hover:text-gray-300 transition">
            <Search size={20} strokeWidth={1.8} />
          </button>
          <button className=" cursor-pointer relative hover:text-gray-300 transition">
            <ShoppingBag size={20} strokeWidth={1.8} />
            <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-white text-black text-[10px] ">
              2
            </span>
          </button>
          <button className=" cursor-pointer hover:text-gray-300 transition">
            <User size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
