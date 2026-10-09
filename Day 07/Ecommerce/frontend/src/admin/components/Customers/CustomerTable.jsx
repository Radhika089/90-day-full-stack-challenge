import { useEffect, useState } from "react";
import { Search, Eye, ChevronLeft, ChevronRight } from "lucide-react";

const CustomerTable = ({ customers, onViewCustomer }) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCustomers = customers.filter((customer) => {
    const query = search.trim().toLowerCase();

    return (
      customer.name.toLowerCase().includes(query) ||
      customer.email.toLowerCase().includes(query) ||
      customer.phone.toLowerCase().includes(query)
    );
  });

  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleCustomers = filteredCustomers.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, Math.max(totalPages, 1)));
  }, [totalPages]);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="border-b border-gray-100 p-4">
        <div className="relative max-w-md">
          <Search
            size={17}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search name, email, or phone..."
            className="w-full rounded-xl border border-gray-200 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#315C4A] focus:ring-2 focus:ring-[#315C4A]/10"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[850px]">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/70">
              {[
                "Customer",
                "Phone",
                "Orders",
                "Total Spent",
                "Joined",
                "Action",
              ].map((heading) => (
                <th
                  key={heading}
                  className="px-5 py-4 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {visibleCustomers.map((customer) => (
              <tr key={customer.id} className="transition hover:bg-gray-50/50">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF5F1] text-sm font-semibold text-[#315C4A]">
                      {customer.name
                        .split(" ")
                        .map((part) => part[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {customer.name}
                      </p>
                      <p className="mt-1 text-xs text-gray-400">
                        {customer.email}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4 text-sm text-gray-500">
                  {customer.phone}
                </td>

                <td className="px-5 py-4 text-sm text-gray-600">
                  {customer.orders}
                </td>

                <td className="px-5 py-4 text-sm font-semibold text-gray-800">
                  ₹{customer.totalSpent.toLocaleString("en-IN")}
                </td>

                <td className="px-5 py-4 text-sm text-gray-500">
                  {customer.joined}
                </td>

                <td className="px-5 py-4">
                  <button
                    type="button"
                    onClick={() => onViewCustomer(customer)}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 transition hover:border-[#315C4A] hover:text-[#315C4A]">
                    <Eye size={14} />
                    View
                  </button>
                </td>
              </tr>
            ))}

            {visibleCustomers.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-16 text-center">
                  <p className="text-sm font-medium text-gray-700">
                    No customers found
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    Try another name, email, or phone number.
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-gray-500">
          Showing {filteredCustomers.length ? startIndex + 1 : 0} to{" "}
          {Math.min(startIndex + itemsPerPage, filteredCustomers.length)} of{" "}
          {filteredCustomers.length} customers
        </p>

        <div className="flex items-center gap-1">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((page) => page - 1)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40">
            <ChevronLeft size={15} />
          </button>

          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-xs font-medium ${
                  currentPage === page
                    ? "bg-[#315C4A] text-white"
                    : "text-gray-500 hover:bg-gray-50"
                }`}>
                {page}
              </button>
            );
          })}

          <button
            type="button"
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage((page) => page + 1)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40">
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;
