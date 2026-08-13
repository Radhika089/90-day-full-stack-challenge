import React from "react";
import { FileDown } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-wider text-zinc-800">
          Orders
        </h1>
        <p className="text-gray-500 text-md mt-2">
          Manage and track customer orders
        </p>
      </div>
      <button
        type="button"
        className="bg-zinc-900 text-white px-6 py-3 rounded-2xl flex items-center gap-2 hover:bg-zinc-700">
        <FileDown size={18} />
        Export
      </button>
    </div>
  );
};

export default Header;
