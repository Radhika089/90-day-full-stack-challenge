import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  MapPin,
  Package,
  CreditCard,
  User,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getOrderById } from "../../api/OrderApi";

const OrderDetail = () => {
  const { id } = useParams();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const data = await getOrderById(id);
        setOrder(data.order);
      } catch (error) {
        console.log(error);
        setError(error.response?.data?.message || "Failed to fetch order");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-gray-500">Loading order...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-red-600">
        {error}
      </div>
    );
  }

  if (!order) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <p className="text-gray-500">Order not found.</p>
      </div>
    );
  }

  const getStatusClass = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Processing":
        return "bg-blue-100 text-blue-700";

      case "Shipped":
        return "bg-purple-100 text-purple-700";

      case "Delivered":
        return "bg-emerald-100 text-emerald-700";

      case "Cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getPaymentClass = (status) => {
    switch (status) {
      case "Paid":
        return "bg-emerald-100 text-emerald-700";

      case "Pending":
        return "bg-yellow-100 text-yellow-700";

      case "Failed":
        return "bg-red-100 text-red-700";

      case "Refunded":
        return "bg-purple-100 text-purple-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/orders"
            className="rounded-xl border border-gray-200 p-2.5 text-gray-500 transition hover:bg-gray-100">
            <ArrowLeft size={20} />
          </Link>

          <div>
            <h1 className="text-2xl font-bold text-gray-900">Order Details</h1>

            <p className="mt-1 text-sm text-gray-500">{order.orderId}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span
            className={`rounded-full px-4 py-2 text-sm font-semibold ${getStatusClass(
              order.orderStatus,
            )}`}>
            {order.orderStatus}
          </span>

          <span
            className={`rounded-full px-4 py-2 text-sm font-semibold ${getPaymentClass(
              order.paymentStatus,
            )}`}>
            {order.paymentStatus}
          </span>
        </div>
      </div>

      {/* Customer / Payment / Shipping */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Customer */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <User size={20} />
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">Customer</h2>

              <p className="text-sm text-gray-500">Customer information</p>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <p>
              <span className="text-gray-500">Name:</span>{" "}
              <span className="font-medium text-gray-900">
                {order.customer.name}
              </span>
            </p>

            <p>
              <span className="text-gray-500">Email:</span>{" "}
              <span className="font-medium text-gray-900">
                {order.customer.email || "N/A"}
              </span>
            </p>

            <p>
              <span className="text-gray-500">Phone:</span>{" "}
              <span className="font-medium text-gray-900">
                {order.customer.phone}
              </span>
            </p>
          </div>
        </div>

        {/* Payment */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <CreditCard size={20} />
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">Payment</h2>

              <p className="text-sm text-gray-500">Payment information</p>
            </div>
          </div>

          <div className="space-y-3 text-sm">
            <p>
              <span className="text-gray-500">Status:</span>{" "}
              <span className="font-medium text-emerald-600">
                {order.paymentStatus}
              </span>
            </p>

            <p>
              <span className="text-gray-500">Method:</span>{" "}
              <span className="font-medium text-gray-900">
                {order.paymentMethod}
              </span>
            </p>

            <p>
              <span className="text-gray-500">Order Date:</span>{" "}
              <span className="font-medium text-gray-900">
                {formatDate(order.createdAt)}
              </span>
            </p>
          </div>
        </div>

        {/* Shipping */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <MapPin size={20} />
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">Shipping Address</h2>

              <p className="text-sm text-gray-500">Delivery information</p>
            </div>
          </div>

          <div className="text-sm leading-6 text-gray-600">
            <p>{order.shippingAddress}</p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="flex items-center gap-3 border-b border-gray-100 p-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
            <Package size={20} />
          </div>

          <div>
            <h2 className="font-semibold text-gray-900">Ordered Products</h2>

            <p className="text-sm text-gray-500">
              {order.items.length}{" "}
              {order.items.length === 1 ? "product" : "products"} in this order
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr className="border-b border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">
                  Product
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">
                  Price
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">
                  Quantity
                </th>

                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-500">
                  Total
                </th>
              </tr>
            </thead>

            <tbody>
              {order.items.map((item) => (
                <tr
                  key={item.product._id}
                  className="border-b border-gray-100 last:border-0 hover:bg-slate-50">
                  <td className="px-6 py-5 font-medium text-gray-900">
                    {item.product.name}
                  </td>

                  <td className="px-6 py-5 text-gray-600">
                    ₹{item.price.toLocaleString("en-IN")}
                  </td>

                  <td className="px-6 py-5 text-gray-600">{item.quantity}</td>

                  <td className="px-6 py-5 text-right font-medium text-gray-900">
                    ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Timeline */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 font-semibold text-gray-900">Order Timeline</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle2 className="text-emerald-500" size={22} />

              <div>
                <p className="font-medium text-gray-900">Order Placed</p>

                <p className="text-sm text-gray-500">
                  {formatDate(order.createdAt)}
                </p>
              </div>
            </div>

            {order.orderStatus !== "Pending" &&
              order.orderStatus !== "Cancelled" && (
                <div className="flex gap-4">
                  <CheckCircle2 className="text-emerald-500" size={22} />

                  <div>
                    <p className="font-medium text-gray-900">Processing</p>

                    <p className="text-sm text-gray-500">
                      Order is being processed
                    </p>
                  </div>
                </div>
              )}

            {(order.orderStatus === "Shipped" ||
              order.orderStatus === "Delivered") && (
              <div className="flex gap-4">
                <CheckCircle2 className="text-purple-500" size={22} />

                <div>
                  <p className="font-medium text-gray-900">Shipped</p>

                  <p className="text-sm text-gray-500">
                    Order has been shipped
                  </p>
                </div>
              </div>
            )}

            {order.orderStatus === "Delivered" ? (
              <div className="flex gap-4">
                <CheckCircle2 className="text-emerald-500" size={22} />

                <div>
                  <p className="font-medium text-gray-900">Delivered</p>

                  <p className="text-sm text-gray-500">
                    Order delivered successfully
                  </p>
                </div>
              </div>
            ) : order.orderStatus !== "Cancelled" ? (
              <div className="flex gap-4">
                <Clock3 className="text-gray-400" size={22} />

                <div>
                  <p className="font-medium text-gray-400">Delivered</p>

                  <p className="text-sm text-gray-400">Pending</p>
                </div>
              </div>
            ) : (
              <div className="flex gap-4">
                <Clock3 className="text-red-400" size={22} />

                <div>
                  <p className="font-medium text-red-500">Cancelled</p>

                  <p className="text-sm text-gray-400">Order was cancelled</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 font-semibold text-gray-900">Order Summary</h2>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Total Items</span>

              <span className="font-medium text-gray-900">
                {order.items.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Total Amount</span>

              <span className="font-medium text-gray-900">
                ₹{order.totalAmount.toLocaleString("en-IN")}
              </span>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <span className="text-lg font-semibold text-gray-900">
                  Total
                </span>

                <span className="text-lg font-bold text-gray-900">
                  ₹{order.totalAmount.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
