import { Eye, Pencil } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const OrdersList = ({ orders, loading, error }) => {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        {/* Loading */}
        {loading && (
          <div className="p-6 text-center text-gray-500">Loading orders...</div>
        )}

        {/* Error */}
        {error && <div className="p-6 text-center text-red-500">{error}</div>}

        {/* Empty */}
        {!loading && !error && orders.length === 0 && (
          <div className="p-10 text-center">
            <p className="text-gray-500">No orders found.</p>
          </div>
        )}

        {/* Table */}
        {!loading && !error && orders.length > 0 && (
          <table className="w-full min-w-[1100px]">
            <thead className="bg-slate-50">
              <tr className="border-b border-gray-200">
                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  #
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Order ID
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Customer
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Items
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Total
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Status
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Payment
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Created At
                </th>

                <th className="px-6 py-4 text-center text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order, index) => (
                <tr
                  key={order._id}
                  className="border-b border-gray-100 transition hover:bg-slate-50">
                  {/* Number */}
                  <td className="px-6 py-5 text-sm font-medium text-gray-400">
                    {index + 1}
                  </td>

                  {/* Order ID */}
                  <td className="px-6 py-5">
                    <span className="text-sm font-semibold text-gray-800">
                      {order.orderId}
                    </span>
                  </td>

                  {/* Customer */}
                  <td className="px-6 py-5">
                    <span className="text-sm font-medium text-gray-900">
                      {order.customer?.name || "N/A"}
                    </span>
                  </td>

                  {/* Items */}
                  <td className="px-6 py-5 text-sm text-gray-500">
                    {order.items?.length || 0}{" "}
                    {order.items?.length === 1 ? "item" : "items"}
                  </td>

                  {/* Total */}
                  <td className="px-6 py-5">
                    <span className="text-sm font-semibold text-gray-900">
                      ₹{order.totalAmount?.toLocaleString("en-IN") || 0}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
                        order.orderStatus === "Pending"
                          ? "bg-yellow-50 text-yellow-700"
                          : order.orderStatus === "Processing"
                            ? "bg-blue-50 text-blue-700"
                            : order.orderStatus === "Shipped"
                              ? "bg-purple-50 text-purple-700"
                              : order.orderStatus === "Delivered"
                                ? "bg-emerald-50 text-emerald-700"
                                : "bg-red-50 text-red-700"
                      }`}>
                      {order.orderStatus}
                    </span>
                  </td>

                  {/* Payment */}
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
                        order.paymentStatus === "Paid"
                          ? "bg-emerald-50 text-emerald-700"
                          : order.paymentStatus === "Pending"
                            ? "bg-amber-50 text-amber-700"
                            : order.paymentStatus === "Refunded"
                              ? "bg-purple-50 text-purple-700"
                              : "bg-red-50 text-red-700"
                      }`}>
                      {order.paymentStatus}
                    </span>
                  </td>

                  {/* Created At */}
                  <td className="whitespace-nowrap px-6 py-5 text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleDateString("en-IN")}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-center gap-2">
                      {/* View */}
                      <Link
                        to={`/orders/${order._id}`}
                        title="View order"
                        className="rounded-xl border border-gray-200 p-2 text-gray-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600">
                        <Eye size={18} />
                      </Link>

                      {/* Edit */}
                      <Link
                        to={`/orders/edit/${order._id}`}
                        title="Edit order"
                        className="rounded-xl border border-gray-200 p-2 text-gray-500 transition hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-600">
                        <Pencil size={18} />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default OrdersList;
