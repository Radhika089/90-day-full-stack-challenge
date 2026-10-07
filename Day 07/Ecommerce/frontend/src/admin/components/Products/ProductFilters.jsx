import { Search, RotateCcw } from "lucide-react";

const ProductFilters = () => {
  return (
    <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-4">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={18}
            strokeWidth={1.8}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search products..."
            className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#315C4A]/40 focus:bg-white focus:ring-2 focus:ring-[#315C4A]/10"
          />
        </div>

        {/* Category */}
        <select className="h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-600 outline-none transition focus:border-[#315C4A]/40 focus:bg-white focus:ring-2 focus:ring-[#315C4A]/10 lg:w-44">
          <option value="">All Categories</option>
          <option value="brews">Brews</option>
          <option value="gear">Gear</option>
          <option value="accessories">Accessories</option>
        </select>

        {/* Status */}
        <select className="h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-600 outline-none transition focus:border-[#315C4A]/40 focus:bg-white focus:ring-2 focus:ring-[#315C4A]/10 lg:w-36">
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        {/* Reset */}
        <button
          type="button"
          className="flex h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 text-sm font-medium text-gray-600 transition hover:border-gray-300 hover:bg-gray-50">
          <RotateCcw size={15} strokeWidth={1.8} />
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProductFilters;
