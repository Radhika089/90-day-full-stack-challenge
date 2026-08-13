import React from "react";
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  MapPin,
  Package,
  CreditCard,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";

const order = {
  id: "ORD-1003",
  customer: "Aman Kumar",
  email: "aman@example.com",
  phone: "+91 98765 43210",
  status: "Shipped",
  payment: "Paid",
  paymentMethod: "UPI",
  createdAt: "3 Aug 2026",
  shippingAddress: {
    address: "45 Model Town",
    city: "Ludhiana",
    state: "Punjab",
    pincode: "141001",
  },
  items: [
    {
      id: 1,
      name: "Wireless Headphones",
      quantity: 1,
      price: 2499,
    },
    {
      id: 2,
      name: "USB-C Cable",
      quantity: 2,
      price: 499,
    },
    {
      id: 3,
      name: "Wireless Mouse",
      quantity: 1,
      price: 1099,
    },
  ],
};

const OrderDetail = () => {
  const subtotal = order.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const shipping = 100;
  const total = subtotal + shipping;

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
            <p className="mt-1 text-sm text-gray-500">
              View complete order information
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-700">
            {order.status}
          </span>

          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            {order.payment}
          </span>
        </div>
      </div>

      {/* Order  */}
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
                {order.customer}
              </span>
            </p>

            <p>
              <span className="text-gray-500">Email:</span>{" "}
              <span className="font-medium text-gray-900">{order.email}</span>
            </p>

            <p>
              <span className="text-gray-500">Phone:</span>{" "}
              <span className="font-medium text-gray-900">{order.phone}</span>
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
                {order.payment}
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
                {order.createdAt}
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
            <p>{order.shippingAddress.address}</p>
            <p>
              {order.shippingAddress.city}, {order.shippingAddress.state}
            </p>
            <p>{order.shippingAddress.pincode}</p>
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
              {order.items.length} products in this order
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
                  key={item.id}
                  className="border-b border-gray-100 last:border-0 hover:bg-slate-50">
                  <td className="px-6 py-5 font-medium text-gray-900">
                    {item.name}
                  </td>

                  <td className="px-6 py-5 text-gray-600">₹{item.price}</td>

                  <td className="px-6 py-5 text-gray-600">{item.quantity}</td>

                  <td className="px-6 py-5 text-right font-medium text-gray-900">
                    ₹{item.price * item.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Bottom  */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Timeline */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 font-semibold text-gray-900">Order Timeline</h2>

          <div className="space-y-6">
            <div className="flex gap-4">
              <CheckCircle2 className="text-emerald-500" size={22} />

              <div>
                <p className="font-medium text-gray-900">Order Placed</p>
                <p className="text-sm text-gray-500">3 Aug 2026</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-emerald-500" size={22} />

              <div>
                <p className="font-medium text-gray-900">Processing</p>
                <p className="text-sm text-gray-500">3 Aug 2026</p>
              </div>
            </div>

            <div className="flex gap-4">
              <CheckCircle2 className="text-purple-500" size={22} />

              <div>
                <p className="font-medium text-gray-900">Shipped</p>
                <p className="text-sm text-gray-500">4 Aug 2026</p>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock3 className="text-gray-400" size={22} />

              <div>
                <p className="font-medium text-gray-400">Delivered</p>
                <p className="text-sm text-gray-400">Pending</p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="mb-6 font-semibold text-gray-900">Order Summary</h2>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Subtotal</span>
              <span className="font-medium text-gray-900">₹{subtotal}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Shipping</span>
              <span className="font-medium text-gray-900">₹{shipping}</span>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="flex justify-between">
                <span className="text-lg font-semibold text-gray-900">
                  Total
                </span>

                <span className="text-lg font-bold text-gray-900">
                  ₹{total}
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
