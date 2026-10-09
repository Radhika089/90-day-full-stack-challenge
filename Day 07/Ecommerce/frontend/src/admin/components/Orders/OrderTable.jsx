import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";

const statusColors = {
  pending: "bg-amber-50 text-amber-700",
  processing: "bg-orange-50 text-orange-700",
  shipped: "bg-blue-50 text-blue-700",
  delivered: "bg-[#EEF5F1] text-[#315C4A]",
  cancelled: "bg-red-50 text-red-600",
};

const paymentColors = {
  paid: "bg-[#EEF5F1] text-[#315C4A]",
  pending: "bg-amber-50 text-amber-700",
  failed: "bg-red-50 text-red-600",
};

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const formatLabel = (value) => value.charAt(0).toUpperCase() + value.slice(1);

const OrderTable = ({ orders, onViewOrder }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentOrders = orders.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [orders]);

  useEffect(() => {
    setCurrentPage((page) => Math.min(page, Math.max(totalPages, 1)));
  }, [totalPages]);

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[950px]">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/70">
              {[
                "Order",
                "Customer",
                "Date",
                "Total",
                "Payment",
                "Status",
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
            {currentOrders.map((order) => (
              <tr key={order._id} className="transition hover:bg-gray-50/50">
                <td className="px-5 py-4">
                  <p className="text-sm font-medium text-gray-800">
                    #{order._id.slice(-6).toUpperCase()}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    {order.items.length} item
                    {order.items.length !== 1 ? "s" : ""}
                  </p>
                </td>

                <td className="px-5 py-4">
                  <p className="text-sm font-medium text-gray-700">
                    {order.shippingAddress.name}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    {order.shippingAddress.email || "No email provided"}
                  </p>
                </td>

                <td className="px-5 py-4 text-sm text-gray-500">
                  {formatDate(order.createdAt)}
                </td>

                <td className="px-5 py-4 text-sm font-semibold text-gray-800">
                  ₹{order.totalAmount.toLocaleString("en-IN")}
                </td>

                <td className="px-5 py-4">
                  <div className="space-y-1.5">
                    <p className="text-xs text-gray-500">
                      {order.paymentMethod === "cod"
                        ? "Cash on Delivery"
                        : "Razorpay"}
                    </p>
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${paymentColors[order.paymentStatus]}`}>
                      {formatLabel(order.paymentStatus)}
                    </span>
                  </div>
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${statusColors[order.orderStatus]}`}>
                    {formatLabel(order.orderStatus)}
                  </span>
                </td>

                <td className="px-5 py-4">
                  <button
                    type="button"
                    onClick={() => onViewOrder(order)}
                    className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 transition hover:border-[#315C4A] hover:text-[#315C4A]">
                    <Eye size={14} />
                    View
                  </button>
                </td>
              </tr>
            ))}

            {currentOrders.length === 0 && (
              <tr>
                <td colSpan={7} className="px-6 py-16 text-center">
                  <p className="text-sm font-medium text-gray-700">
                    No orders found
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    Try changing your search or filters.
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-gray-500">
          Showing {orders.length ? startIndex + 1 : 0} to{" "}
          {Math.min(startIndex + itemsPerPage, orders.length)} of{" "}
          {orders.length} orders
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

export default OrderTable;
