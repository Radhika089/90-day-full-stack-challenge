import { Eye, Pencil } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const orders = [
  {
    id: "ORD-1001",
    customer: "Rahul Sharma",
    items: 3,
    total: 2499,
    status: "Pending",
    payment: "Paid",
    createdAt: "2 Aug 2026",
  },
  {
    id: "ORD-1002",
    customer: "Priya Singh",
    items: 1,
    total: 899,
    status: "Processing",
    payment: "Paid",
    createdAt: "3 Aug 2026",
  },
  {
    id: "ORD-1003",
    customer: "Aman Kumar",
    items: 5,
    total: 4599,
    status: "Shipped",
    payment: "Paid",
    createdAt: "3 Aug 2026",
  },
  {
    id: "ORD-1004",
    customer: "Neha Verma",
    items: 2,
    total: 1299,
    status: "Delivered",
    payment: "Paid",
    createdAt: "4 Aug 2026",
  },
  {
    id: "ORD-1005",
    customer: "Arjun Mehta",
    items: 4,
    total: 3299,
    status: "Cancelled",
    payment: "Refunded",
    createdAt: "4 Aug 2026",
  },
  {
    id: "ORD-1006",
    customer: "Simran Kaur",
    items: 2,
    total: 1799,
    status: "Pending",
    payment: "COD",
    createdAt: "5 Aug 2026",
  },
  {
    id: "ORD-1007",
    customer: "Karan Singh",
    items: 6,
    total: 5799,
    status: "Processing",
    payment: "Paid",
    createdAt: "5 Aug 2026",
  },
  {
    id: "ORD-1008",
    customer: "Anjali Sharma",
    items: 1,
    total: 599,
    status: "Delivered",
    payment: "Paid",
    createdAt: "6 Aug 2026",
  },
];

const OrdersList = () => {
  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
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
                key={order.id}
                className="border-b border-gray-100 transition hover:bg-slate-50">
                {/* Number */}
                <td className="px-6 py-5 text-sm font-medium text-gray-400">
                  {index + 1}
                </td>

                {/* Order ID */}
                <td className="px-6 py-5">
                  <span className="text-sm font-semibold text-gray-800">
                    {order.id}
                  </span>
                </td>

                {/* Customer */}
                <td className="px-6 py-5">
                  <span className="text-sm font-medium text-gray-900">
                    {order.customer}
                  </span>
                </td>

                {/* Items */}
                <td className="px-6 py-5 text-sm text-gray-500">
                  {order.items} {order.items === 1 ? "item" : "items"}
                </td>

                {/* Total */}
                <td className="px-6 py-5">
                  <span className="text-sm font-semibold text-gray-900">
                    ₹{order.total.toLocaleString("en-IN")}
                  </span>
                </td>

                {/* Status */}
                <td className="px-6 py-5">
                  <span
                    className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
                      order.status === "Pending"
                        ? "bg-yellow-50 text-yellow-700"
                        : order.status === "Processing"
                          ? "bg-blue-50 text-blue-700"
                          : order.status === "Shipped"
                            ? "bg-purple-50 text-purple-700"
                            : order.status === "Delivered"
                              ? "bg-emerald-50 text-emerald-700"
                              : "bg-red-50 text-red-700"
                    }`}>
                    {order.status}
                  </span>
                </td>

                {/* Payment */}
                <td className="px-6 py-5">
                  <span
                    className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
                      order.payment === "Paid"
                        ? "bg-emerald-50 text-emerald-700"
                        : order.payment === "COD"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-red-50 text-red-700"
                    }`}>
                    {order.payment}
                  </span>
                </td>

                {/* Created At */}
                <td className="whitespace-nowrap px-6 py-5 text-sm text-gray-500">
                  {order.createdAt}
                </td>

                {/* Actions */}
                <td className="px-6 py-5">
                  <div className="flex items-center justify-center gap-2">
                    <Link
                      to={`/orders/${order.id}`}
                      title="View order"
                      className="rounded-xl border border-gray-200 p-2 text-gray-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600">
                      <Eye size={18} />
                    </Link>

                    <Link
                      to={`/orders/edit/${order.id}`}
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
      </div>
    </div>
  );
};

export default OrdersList;
