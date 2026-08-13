import { ArrowLeft } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const EditOrder = () => {
  return (
    <div className="min-h-screen p-8 bg-slate-50">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-between items-center">
          <div>
            <Link
              to={"/orders"}
              className="flex items-center gap-1 text-sm text-gray-500 mb-4">
              <ArrowLeft className="w-4 h-4" /> Back to Orders
            </Link>

            <h1 className="text-3xl font-bold mt-2 tracking-wide">
              Edit Order Details
            </h1>

            <p className="text-gray-500 mt-2">
              Update your inventory order information.
            </p>
          </div>

          <button
            type="submit"
            form="edit-order-form"
            className="rounded-xl py-3 px-5 font-semibold hover:bg-zinc-700 bg-zinc-900 text-white">
            Save Changes
          </button>
        </div>

        {/* Form */}
        <form id="edit-order-form" className="mt-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
            {/* Order Information */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Order Information
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Update customer and payment details.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Order ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Order ID
                </label>

                <input
                  type="text"
                  value="ORD-1001"
                  readOnly
                  className="w-full rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-gray-500 outline-none cursor-not-allowed"
                />
              </div>

              {/* Customer */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Customer
                </label>

                <input
                  type="text"
                  defaultValue="Rahul Sharma"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>

                <input
                  type="tel"
                  defaultValue="9876543210"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>

                <input
                  type="email"
                  defaultValue="rahul@email.com"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Payment Method
                </label>

                <select
                  defaultValue="Paid"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 bg-white outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500">
                  <option value="Paid">Paid</option>
                  <option value="Pending">Pending</option>
                  <option value="Failed">Failed</option>
                  <option value="Refunded">Refunded</option>
                </select>
              </div>

              {/* Order Status */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Order Status
                </label>

                <select
                  defaultValue="Processing"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 bg-white outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500">
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800">
                Shipping Address
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Update the customer's delivery address.
              </p>

              <textarea
                rows="4"
                defaultValue="123 Model Town, Ludhiana, Punjab"
                className="w-full mt-5 rounded-xl border border-gray-200 px-4 py-3 outline-none resize-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
              />
            </div>

            {/* Bottom Actions */}
            <div className="flex justify-end gap-3 mt-8 pt-6 border-t border-gray-100">
              <Link
                to="/orders"
                className="rounded-xl px-5 py-3 font-semibold border border-gray-200 text-gray-600 hover:bg-gray-50">
                Cancel
              </Link>

              <button
                type="submit"
                className="rounded-xl px-5 py-3 font-semibold bg-zinc-900 text-white hover:bg-zinc-700">
                Update Order
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditOrder;
