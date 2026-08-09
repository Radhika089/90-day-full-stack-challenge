import { Bell, Mail, Search, User2 } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="relative">
        <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
        <input
          type="search"
          placeholder="Search Here...."
          className="rounded-xl w-92 pl-10 py-2 pr-3 outline-none border bg-white border-gray-200 focus:border-green-800"
        />
      </div>
      <div className="flex gap-3">
        <button className="rounded-full bg-white p-3 shadow-sm hover:bg-gray-100 transition">
          <Mail className="h-6 w-6 text-gray-500" />
        </button>

        <button className="rounded-full bg-white p-3 shadow-sm hover:bg-gray-100 transition">
          <Bell className="h-6 w-6 text-gray-500" />
        </button>

        <button className="rounded-full bg-[#327848] p-3 text-white shadow-sm hover:bg-[#239947] transition">
          <User2 className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Header;
