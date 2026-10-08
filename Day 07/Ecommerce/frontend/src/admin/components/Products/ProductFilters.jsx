import { Search, RotateCcw, ArrowDownUp } from "lucide-react";

const ProductFilters = ({
  search,
  setSearch,
  category,
  setCategory,
  status,
  setStatus,
  priceSort,
  setPriceSort,
  stockSort,
  setStockSort,
}) => {
  return (
    <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-4">
      <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#315C4A]/40 focus:bg-white focus:ring-2 focus:ring-[#315C4A]/10"
          />
        </div>

        {/* Category */}
        <select
          className="h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-600 outline-none transition focus:border-[#315C4A]/40 focus:bg-white focus:ring-2 focus:ring-[#315C4A]/10 xl:w-44"
          value={category}
          onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="brews">Brews</option>
          <option value="gear">Gear</option>
          <option value="accessories">Accessories</option>
        </select>

        {/* Status */}
        <select
          className="h-11 rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-600 outline-none transition focus:border-[#315C4A]/40 focus:bg-white focus:ring-2 focus:ring-[#315C4A]/10 xl:w-36"
          value={status}
          onChange={(e) => setStatus(e.target.value)}>
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        {/* Price Sort */}
        <div className="relative">
          <ArrowDownUp
            size={15}
            strokeWidth={1.8}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <select
            className="h-11 w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 pl-9 pr-9 text-sm text-gray-600 outline-none transition focus:border-[#315C4A]/40 focus:bg-white focus:ring-2 focus:ring-[#315C4A]/10 xl:w-44"
            value={priceSort}
            onChange={(e) => {
              setPriceSort(e.target.value);
              setStockSort("");
            }}>
            <option value="">Price</option>
            <option value="low-high">Price: Low → High</option>
            <option value="high-low">Price: High → Low</option>
          </select>
        </div>

        {/* Stock Sort */}
        <div className="relative">
          <ArrowDownUp
            size={15}
            strokeWidth={1.8}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <select
            className="h-11 w-full appearance-none rounded-xl border border-gray-200 bg-gray-50 pl-9 pr-9 text-sm text-gray-600 outline-none transition focus:border-[#315C4A]/40 focus:bg-white focus:ring-2 focus:ring-[#315C4A]/10 xl:w-44"
            value={stockSort}
            onChange={(e) => {
              setStockSort(e.target.value);
              setPriceSort("");
            }}>
            <option value="">Stock</option>
            <option value="low-high">Stock: Low → High</option>
            <option value="high-low">Stock: High → Low</option>
          </select>
        </div>

        {/* Reset */}
        <button
          type="button"
          className="flex h-11 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 text-sm font-medium text-gray-600 transition hover:border-gray-300 hover:bg-gray-50"
          onClick={() => {
            setSearch("");
            setCategory("");
            setStatus("");
            setPriceSort("");
            setStockSort("");
          }}>
          <RotateCcw size={15} strokeWidth={1.8} />
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProductFilters;
