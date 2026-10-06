import { ChevronDown, Search } from "lucide-react";

const OrderFilters = ({
  search,
  setSearch,
  status,
  setStatus,
  dateFilter,
  setDateFilter,
  customFromDate,
  setCustomFromDate,
  customToDate,
  setCustomToDate,
  setCurrentPage,
}) => {
  const handleDateFilterChange = (value) => {
    setDateFilter(value);
    setCurrentPage(1);

    if (value !== "custom") {
      setCustomFromDate("");
      setCustomToDate("");
    }
  };

  return (
    <div className="mb-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
        {/* Search */}
        <div className="relative w-full lg:w-72">
          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9b7866]"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search orders..."
            className="w-full rounded-xl border border-[#eadfd5] bg-white py-2.5 pl-10 pr-4 text-sm text-[#431b0d] outline-none transition placeholder:text-[#b59c8d] focus:border-[#b96447]"
          />
        </div>

        {/* Status Filter */}
        <div className="relative">
          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full appearance-none rounded-xl border border-[#eadfd5] bg-white py-2.5 pl-4 pr-10 text-sm text-[#5b3829] outline-none focus:border-[#b96447] lg:w-44">
            <option value="all">All Status</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </select>

          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9b7866]"
          />
        </div>

        {/* Date Filter */}
        <div className="relative">
          <select
            value={dateFilter}
            onChange={(e) => handleDateFilterChange(e.target.value)}
            className="w-full appearance-none rounded-xl border border-[#eadfd5] bg-white py-2.5 pl-4 pr-10 text-sm text-[#5b3829] outline-none focus:border-[#b96447] lg:w-44">
            <option value="all">All Time</option>
            <option value="7">Last 7 Days</option>
            <option value="30">Last 30 Days</option>
            <option value="90">Last 3 Months</option>
            <option value="180">Last 6 Months</option>
            <option value="365">This Year</option>
            <option value="custom">Custom Date</option>
          </select>

          <ChevronDown
            size={16}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#9b7866]"
          />
        </div>
      </div>

      {/* Custom Date Range */}
      {dateFilter === "custom" && (
        <div className="mt-3 flex flex-col gap-3 rounded-xl border border-[#eadfd5] bg-white p-4 sm:flex-row sm:items-end">
          <div className="w-full sm:w-48">
            <label className="mb-1.5 block text-xs font-medium text-[#795548]">
              From
            </label>

            <input
              type="date"
              value={customFromDate}
              max={customToDate || undefined}
              onChange={(e) => {
                setCustomFromDate(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full rounded-lg border border-[#eadfd5] bg-[#fffaf4] px-3 py-2.5 text-sm text-[#431b0d] outline-none focus:border-[#b96447]"
            />
          </div>

          <div className="w-full sm:w-48">
            <label className="mb-1.5 block text-xs font-medium text-[#795548]">
              To
            </label>

            <input
              type="date"
              value={customToDate}
              min={customFromDate || undefined}
              onChange={(e) => {
                setCustomToDate(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full rounded-lg border border-[#eadfd5] bg-[#fffaf4] px-3 py-2.5 text-sm text-[#431b0d] outline-none focus:border-[#b96447]"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderFilters;
