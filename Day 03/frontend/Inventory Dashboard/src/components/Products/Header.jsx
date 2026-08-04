import { Search, Plus } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="space-y-8">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-wide text-gray-900">
            Products
          </h2>

          <p className="mt-2 text-gray-500">Manage your inventory products</p>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800">
          <Plus size={18} />
          Add Product
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        {/* Search */}
        <div className="relative flex-1 min-w-[260px]">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

          <input
            type="search"
            placeholder="Search products..."
            className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-11 pr-4 text-sm outline-none placeholder:text-gray-400 focus:border-[#29b354]"
          />
        </div>

        {/* Category */}
        <select className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#29b354]">
          <option>All Categories</option>
          <option>Electronics</option>
          <option>Furniture</option>
          <option>Groceries</option>
        </select>

        {/* Status */}
        <select className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#29b354]">
          <option>All Status</option>
          <option>In Stock</option>
          <option>Low Stock</option>
          <option>Out of Stock</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
