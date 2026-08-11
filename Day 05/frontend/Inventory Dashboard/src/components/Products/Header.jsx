import { Search, Plus, X } from "lucide-react";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Header = () => {
  const { user } = useAuth();

  const [searchParams, setSearchParams] = useSearchParams();

  const isAdmin = user?.role === "Admin";

  // Get values from URL
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const status = searchParams.get("status") || "";
  const price = searchParams.get("price") || "";
  const sort = searchParams.get("sort") || "";

  // Check if any filter is active
  const hasFilters = search || category || status || price || sort;

  // UPDATE URL PARAM
  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    // Reset pagination whenever filter changes
    params.delete("page");

    setSearchParams(params);
  };

  // CLEAR ALL FILTERS
  const clearFilters = () => {
    setSearchParams({});
  };

  return (
    <div className="space-y-8">
      {/* TOP SECTION */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-wide text-gray-900">
            Products
          </h2>

          <p className="mt-2 text-gray-500">Manage your inventory products</p>
        </div>

        {isAdmin && (
          <Link
            to="/products/add"
            className="flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800">
            <Plus size={18} />
            Add Product
          </Link>
        )}
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        {/* SEARCH */}
        <div className="relative min-w-[260px] flex-1">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

          <input
            type="search"
            value={search}
            onChange={(e) => updateParam("search", e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-11 pr-4 text-sm outline-none placeholder:text-gray-400 focus:border-[#29b354]"
          />
        </div>

        {/* CATEGORY */}
        <select
          value={category}
          onChange={(e) => updateParam("category", e.target.value)}
          className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#29b354]">
          <option value="">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Furniture">Furniture</option>
          <option value="Food">Food</option>
        </select>

        {/* STATUS */}
        <select
          value={status}
          onChange={(e) => updateParam("status", e.target.value)}
          className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#29b354]">
          <option value="">All Status</option>
          <option value="in">In Stock</option>
          <option value="low">Low Stock</option>
          <option value="out">Out of Stock</option>
        </select>

        {/* PRICE */}
        <select
          value={price}
          onChange={(e) => updateParam("price", e.target.value)}
          className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#29b354]">
          <option value="">All Prices</option>
          <option value="500">Under ₹500</option>
          <option value="1000">Under ₹1,000</option>
          <option value="5000">Under ₹5,000</option>
          <option value="10000">Under ₹10,000</option>
        </select>

        {/* SORT */}

        <select
          value={sort}
          onChange={(e) => updateParam("sort", e.target.value)}
          className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-[#29b354]">
          <option value="">Sort By</option>
          <option value="name_asc">Name A-Z</option>
          <option value="name_desc">Name Z-A</option>
          <option value="price_asc">Price Low-High</option>
          <option value="price_desc">Price High-Low</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>

        {/* CLEAR FILTERS */}

        {hasFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600">
            <X size={16} />
            Clear Filters
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
