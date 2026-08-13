import { Search, X } from "lucide-react";
import React from "react";

const Filters = () => {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="relative min-w-[250px] flex-1">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search orders..."
          className="w-full py-3 pl-12 pr-2.5 rounded-xl border border-gray-300 outline-none focus:border-[#29b354] placeholder:text-gray-400"
        />
      </div>

      {/* Status */}
      <select className="rounded-xl px-2 py-2.5 border border-gray-200 bg-white text-sm outline-none focus:border-[#29b354]">
        <option value="">Status</option>
        <option value="">Pending</option>
        <option value="">Processing</option>
        <option value="">Shipped</option>
        <option value="">Delivered</option>
        <option value="">Cancelled</option>
      </select>

      {/* Payment */}
      <select className="rounded-xl px-2 py-2.5 border border-gray-200 bg-white text-sm outline-none focus:border-[#29b354]">
        <option value="">Payment</option>
        <option value="">Pending</option>
        <option value="">Paid</option>
      </select>

      {/* Sort */}
      <select className="rounded-xl px-2 py-2.5 border border-gray-200 bg-white text-sm outline-none focus:border-[#29b354]">
        <option value="">Sort</option>
        <option value="">Name A-Z</option>
        <option value="">Ascending</option>
        <option value="">Descending</option>
        <option value="">Price</option>
      </select>

      <button className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600">
        <X size={18} />
        Clear
      </button>
    </div>
  );
};

export default Filters;
