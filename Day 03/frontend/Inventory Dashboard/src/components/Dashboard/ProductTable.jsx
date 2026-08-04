import React from "react";
import { Link } from "react-router-dom";
import { Pencil, Trash2, Package, MoreHorizontal } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: "₹999",
    stock: 35,
    status: "In Stock",
  },
  {
    id: 2,
    name: "Gaming Keyboard",
    category: "Electronics",
    price: "₹2,499",
    stock: 12,
    status: "Low Stock",
  },
  {
    id: 3,
    name: "Office Chair",
    category: "Furniture",
    price: "₹7,999",
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: "₹3,499",
    stock: 18,
    status: "In Stock",
  },
];

const ProductTable = () => {
  return (
    <div className="mt-6 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 p-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Recent Products
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Latest products added to inventory
          </p>
        </div>

        <Link
          to="/products"
          className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
          View All
        </Link>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap items-center gap-3 border-b border-gray-100 p-6">
        <button className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white">
          All
        </button>
        <button className="rounded-full border border-gray-200 px-5 py-2 text-sm text-gray-600 transition hover:bg-gray-100">
          Electronics
        </button>
        <button className="rounded-full border border-gray-200 px-5 py-2 text-sm text-gray-600 transition hover:bg-gray-100">
          Furniture
        </button>
        <button className="rounded-full border border-gray-200 px-5 py-2 text-sm text-gray-600 transition hover:bg-gray-100">
          Grocery
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Product
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Category
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Price
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Stock
              </th>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-t border-gray-100 transition hover:bg-gray-50">
                {/* Product */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100">
                      <Package className="h-6 w-6 text-gray-500" />
                    </div>

                    <div>
                      <h3 className="font-medium text-gray-900">
                        {product.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        Product #{product.id}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5 text-sm text-gray-600">
                  {product.category}
                </td>

                <td className="px-6 py-5 font-medium text-gray-900">
                  {product.price}
                </td>

                <td className="px-6 py-5 text-sm text-gray-700">
                  {product.stock}
                </td>

                <td className="px-6 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      product.status === "In Stock"
                        ? "bg-emerald-100 text-emerald-700"
                        : product.status === "Low Stock"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-red-100 text-red-700"
                    }`}>
                    {product.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
        <p className="text-sm text-gray-500">
          Showing <span className="font-medium text-gray-900">4</span> recent
          products
        </p>

        <Link
          to="/products"
          className="text-sm font-medium text-[#29b354] hover:underline">
          Manage Inventory →
        </Link>
      </div>
    </div>
  );
};

export default ProductTable;
