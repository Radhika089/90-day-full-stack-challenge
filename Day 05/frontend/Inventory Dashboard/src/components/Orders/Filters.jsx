import { Search, X } from "lucide-react";
import React from "react";

const Filters = ({
  search,
  setSearch,
  status,
  setStatus,
  payment,
  setPayment,
  sort,
  setSort,
  clearFilters,
}) => {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Search */}
      <div className="relative min-w-[250px] flex-1">
        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search orders..."
          className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-2.5 outline-none focus:border-[#29b354] placeholder:text-gray-400"
        />
      </div>

      {/* Status */}
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#29b354]">
        <option value="">Status</option>
        <option value="Pending">Pending</option>
        <option value="Processing">Processing</option>
        <option value="Shipped">Shipped</option>
        <option value="Delivered">Delivered</option>
        <option value="Cancelled">Cancelled</option>
      </select>

      {/* Payment */}
      <select
        value={payment}
        onChange={(e) => setPayment(e.target.value)}
        className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#29b354]">
        <option value="">Payment</option>
        <option value="Pending">Pending</option>
        <option value="Paid">Paid</option>
        <option value="Failed">Failed</option>
        <option value="Refunded">Refunded</option>
      </select>

      {/* Sort */}
      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        className="rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#29b354]">
        <option value="">Sort</option>
        <option value="name-asc">Name A-Z</option>
        <option value="amount-asc">Amount Low-High</option>
        <option value="amount-desc">Amount High-Low</option>
      </select>

      {/* Clear */}
      <button
        type="button"
        onClick={clearFilters}
        className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600">
        <X size={18} />
        Clear
      </button>
    </div>
  );
};

export default Filters;
