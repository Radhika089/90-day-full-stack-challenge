import { RotateCcw, Search } from "lucide-react";

const InventoryFilters = ({
  search,
  setSearch,
  category,
  setCategory,
  stockStatus,
  setStockStatus,
  onReset,
}) => {
  return (
    <div className="mb-5 rounded-2xl border border-gray-200 bg-white p-4">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products..."
            className="w-full rounded-xl border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#315C4A] focus:ring-2 focus:ring-[#315C4A]/10"
          />
        </div>

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-600 outline-none focus:border-[#315C4A]">
          <option value="">All Categories</option>
          <option value="Brews">Brews</option>
          <option value="Gear">Gear</option>
          <option value="Accessories">Accessories</option>
        </select>

        <select
          value={stockStatus}
          onChange={(event) => setStockStatus(event.target.value)}
          className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-600 outline-none focus:border-[#315C4A]">
          <option value="">All Stock Levels</option>
          <option value="in-stock">In Stock</option>
          <option value="low-stock">Low Stock</option>
          <option value="out-of-stock">Out of Stock</option>
        </select>

        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50">
          <RotateCcw size={15} />
          Reset
        </button>
      </div>
    </div>
  );
};

export default InventoryFilters;
