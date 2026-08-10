import { Eye, Pencil, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteProduct, getProducts } from "../../api/ProductApi";

const ProductsRender = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleDelete = async (id) => {
    try {
      const data = await deleteProduct(id);
      setMessage(data.message);
      setMessageType("success");
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id),
      );

      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to delete product");
      setMessageType("error");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  const getStatus = (stock) => {
    if (stock === 0) return "Out Of Stock";

    if (stock <= 10) return "Low Stock";

    return "In Stock";
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data.products);
      } catch (error) {
        console.log("API Error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        {message && (
          <div
            className={`mb-4 rounded-lg px-4 py-3 text-sm font-medium ${
              messageType === "success"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-700"
            }`}>
            {message}
          </div>
        )}
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
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

                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr
                  key={product._id}
                  className="border-b border-gray-100 transition hover:bg-slate-50">
                  <td className="px-6 py-5 font-medium text-gray-500">
                    {product._id}
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
                          SKU-{product.sku}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-5 text-gray-600">
                    {product.category}
                  </td>

                  <td className="px-6 py-5 font-semibold text-gray-900">
                    {product.price}
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        getStatus(product.stock) === "In Stock"
                          ? "bg-emerald-100 text-emerald-700"
                          : getStatus(product.stock) === "Low Stock"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-red-100 text-red-700"
                      }`}>
                      {getStatus(product.stock)}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-2">
                      <Link
                        to={`/products/${product._id}`}
                        className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                        <Eye size={18} />
                      </Link>

                      <Link
                        to={`/products/edit/${product._id}`}
                        className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:bg-emerald-50 hover:text-emerald-600">
                        <Pencil size={18} />
                      </Link>

                      <button
                        onClick={() => handleDelete(product._id)}
                        className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:bg-red-50 hover:text-red-600">
                        <Trash2 size={18} />
                      </button>
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

export default ProductsRender;
