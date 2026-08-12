import { Plus, Search } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="space-y-8">
      {/* Top section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-wide text-gray-900">
            Categories
          </h1>
          <p className="text-gray-500 mt-2">Manage product categories</p>
        </div>

        <Link
          to={"/category/add"}
          className="flex items-center gap-2 bg-zinc-900 py-3 px-5 rounded-xl font-medium text-white text-sm transition hover:bg-zinc-800">
          <Plus size={18} /> Add Category
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl flex-1 gap-3 shadow-sm flex items-center border border-gray-200 p-4">
        <div className="relative min-w-[200px] flex-1">
          <Search className="h-5 w-5 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by category...."
            className="py-2.5 pl-11 pr-4 text-sm w-full bg-white rounded-xl border border-gray-300 outline-none placeholder:text-gray-400 focus:border-[#29b354] "
          />
        </div>

        <select className="border border-gray-200 py-2.5 px-4 text-sm bg-white rounded-xl outline-none focus:border-[#29b354]">
          <option value="">Sort</option>
          <option value="name_asc">Name A-Z</option>
          <option value="name_desc">Name Z-A</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Header;
