import React, { useState } from "react";
import { ArrowLeft, UploadCloud } from "lucide-react";
import { Link } from "react-router-dom";

const EditProduct = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black transition">
              <ArrowLeft size={16} />
              Back to Products
            </Link>

            <h1 className="mt-4 text-3xl font-bold text-gray-900">
              Edit Product
            </h1>

            <p className="mt-2 text-gray-500">
              Update your inventory product information.
            </p>
          </div>
          <button className="rounded-xl bg-zinc-900 px-6 py-3 font-medium text-white transition hover:bg-zinc-800">
            Save Changes
          </button>
        </div>

        <div className="space-y-6">
          {/* Basic Information */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-lg font-semibold text-gray-900">
              Basic Information
            </h2>

            <div className="space-y-5">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Product Name
                </label>

                <input
                  type="text"
                  defaultValue="Wireless Mouse"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#29b354]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Description
                </label>

                <textarea
                  rows={5}
                  defaultValue="Ergonomic wireless mouse with adjustable DPI and long battery life."
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#29b354]"
                />
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-lg font-semibold text-gray-900">
                Pricing
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Price
                  </label>

                  <input
                    type="number"
                    defaultValue="999"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#29b354]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Category
                  </label>

                  <select className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#29b354]">
                    <option>Electronics</option>
                    <option>Furniture</option>
                    <option>Groceries</option>
                    <option>Accessories</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-lg font-semibold text-gray-900">
                Inventory
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Stock
                  </label>

                  <input
                    type="number"
                    defaultValue="35"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#29b354]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Status
                  </label>

                  <select className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#29b354]">
                    <option>In Stock</option>
                    <option>Low Stock</option>
                    <option>Out of Stock</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-lg font-semibold text-gray-900">
              Product Image
            </h2>

            <div className="flex flex-col items-center rounded-2xl border-2 border-dashed border-gray-300 p-8">
              <img
                src="https://images.unsplash.com/photo-1527814050087-3793815479db?w=300"
                alt="Product"
                className="mb-5 h-40 w-40 rounded-2xl border object-cover"
              />

              <button className="flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 font-medium transition hover:bg-gray-50">
                <UploadCloud size={18} />
                Change Image
              </button>

              <p className="mt-3 text-sm text-gray-400">JPG, PNG up to 5MB</p>
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Link
              to="/products"
              className="rounded-xl border border-gray-200 bg-white px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100">
              Cancel
            </Link>

            <button className="rounded-xl bg-zinc-900 px-6 py-3 font-medium text-white transition hover:bg-zinc-800">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
