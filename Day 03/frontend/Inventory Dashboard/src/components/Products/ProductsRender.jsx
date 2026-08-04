import { Eye, Pencil, Trash2 } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: "₹999",
    stock: 35,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn937ob7K-rr3yUjKR8ZxrsI9MHp2ems9uQpTQTb5WDg&s=10",
    status: "In Stock",
  },
  {
    id: 2,
    name: "Gaming Keyboard",
    category: "Electronics",
    price: "₹2,499",
    stock: 12,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn937ob7K-rr3yUjKR8ZxrsI9MHp2ems9uQpTQTb5WDg&s=10",
    status: "Low Stock",
  },
  {
    id: 3,
    name: "Office Chair",
    category: "Furniture",
    price: "₹7,999",
    stock: 0,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn937ob7K-rr3yUjKR8ZxrsI9MHp2ems9uQpTQTb5WDg&s=10",
    status: "Out of Stock",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: "₹3,499",
    stock: 18,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn937ob7K-rr3yUjKR8ZxrsI9MHp2ems9uQpTQTb5WDg&s=10",
    status: "In Stock",
  },
];

const ProductsRender = () => {
  const handleDelete = (id) => {
    console.log("Delete product:", id);
  };

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr className="border-b border-gray-200">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">
                #
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">
                Product
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">
                Category
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">
                Price
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">
                Stock
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">
                Status
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-gray-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr
                key={product.id}
                className="border-b border-gray-100 transition hover:bg-slate-50">
                <td className="px-6 py-5 font-medium text-gray-500">
                  {product.id}
                </td>

                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-14 w-14 rounded-xl border border-gray-200 object-cover"
                    />

                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500">
                        SKU-{1000 + product.id}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5 text-gray-600">{product.category}</td>

                <td className="px-6 py-5 font-semibold text-gray-900">
                  {product.price}
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-lg bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700">
                    {product.stock} pcs
                  </span>
                </td>

                <td className="px-6 py-5">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      product.status === "In Stock"
                        ? "bg-emerald-100 text-emerald-700"
                        : product.status === "Low Stock"
                          ? "bg-amber-100 text-amber-700"
                          : "bg-red-100 text-red-700"
                    }`}>
                    {product.status}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-center gap-2">
                    <Link
                      to={`/products/${product.id}`}
                      className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                      <Eye size={18} />
                    </Link>

                    <Link
                      to={`/products/edit/${product.id}`}
                      className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:bg-emerald-50 hover:text-emerald-600">
                      <Pencil size={18} />
                    </Link>

                    <button
                      onClick={() => handleDelete(product.id)}
                      className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:bg-red-50 hover:text-red-600">
                      <Trash2 size={18} />
                    </button>
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

export default ProductsRender;
