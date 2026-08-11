import { Eye, Pencil, Trash2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { deleteProduct, getProducts } from "../../api/ProductApi";
import { useAuth } from "../../context/AuthContext";

const ProductsRender = () => {
  const [products, setProducts] = useState([]);

  const [pagination, setPagination] = useState({
    currentPage: 1,
    pageLimit: 10,
    totalProducts: 0,
    totalPages: 1,
    hasNextPage: false,
    hasPreviousPage: false,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  const { user } = useAuth();

  const isAdmin = user?.role === "Admin";

  // URL FILTERS
  const search = searchParams.get("search") || "";
  const category = searchParams.get("category") || "";
  const status = searchParams.get("status") || "";
  const sort = searchParams.get("sort") || "";
  const price = searchParams.get("price") || "";

  const currentPage = Number(searchParams.get("page")) || 1;

  // FETCH PRODUCTS
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const params = {
          page: currentPage,
          limit: 10,
        };

        // Search
        if (search) {
          params.search = search;
        }

        // Category
        if (category) {
          params.category = category;
        }

        // Status
        if (status) {
          params.status = status;
        }

        // Sort
        if (sort) {
          params.sort = sort;
        }

        //! Header gives:
        // price=500
        //! Backend expects:
        // maxPrice=500
        if (price) {
          params.maxPrice = price;
        }

        console.log("API params:", params);

        const data = await getProducts(params);

        setProducts(data.products || []);

        if (data.pagination) {
          setPagination(data.pagination);
        } else {
          setPagination({
            currentPage: data.page || 1,
            pageLimit: data.limit || 10,
            totalProducts: data.total || 0,
            totalPages: data.totalPages || 1,
            hasNextPage: (data.page || 1) < (data.totalPages || 1),
            hasPreviousPage: (data.page || 1) > 1,
          });
        }
      } catch (error) {
        console.log("API Error:", error);

        setError(error.response?.data?.message || "Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [search, category, status, sort, price, currentPage]);

  // DELETE PRODUCT
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

  // STOCK STATUS
  const getStatus = (stock) => {
    if (stock === 0) {
      return "Out Of Stock";
    }

    if (stock <= 10) {
      return "Low Stock";
    }

    return "In Stock";
  };

  // PAGINATION
  const changePage = (page) => {
    const params = new URLSearchParams(searchParams);

    params.set("page", page);

    setSearchParams(params);
  };

  // LOADING
  if (loading) {
    return (
      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-8 text-center text-gray-500">
        Loading products...
      </div>
    );
  }

  // ERROR
  if (error) {
    return (
      <div className="mt-8 rounded-2xl bg-red-100 px-4 py-3 text-red-700">
        {error}
      </div>
    );
  }

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      {message && (
        <div
          className={`m-4 rounded-lg px-4 py-3 text-sm font-medium ${
            messageType === "success"
              ? "bg-emerald-100 text-emerald-700"
              : "bg-red-100 text-red-700"
          }`}>
          {message}
        </div>
      )}

      {/* TABLE */}

      <div className="overflow-x-auto">
        {products.length === 0 ? (
          <div className="p-10 text-center text-gray-500">
            No products found.
          </div>
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
              {products.map((product, index) => (
                <tr
                  key={product._id}
                  className="border-b border-gray-100 transition hover:bg-slate-50">
                  <td className="px-6 py-5 font-medium text-gray-500">
                    {(currentPage - 1) * pagination.pageLimit + index + 1}
                  </td>

                  {/* PRODUCT */}

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-14 w-14 rounded-xl border border-gray-200 object-cover"
                        />
                      ) : (
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-gray-100 text-xs text-gray-400">
                          No Image
                        </div>
                      )}

                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {product.name}
                        </h3>

                        <p className="mt-1 text-xs text-gray-500">
                          {product._id}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* CATEGORY */}

                  <td className="px-6 py-5 text-gray-600">
                    {product.category}
                  </td>

                  {/* PRICE */}

                  <td className="px-6 py-5 font-semibold text-gray-900">
                    ₹{product.price}
                  </td>

                  {/* STOCK */}

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

                  {/* ACTIONS */}

                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-2">
                      {/* VIEW */}

                      <Link
                        to={`/products/${product._id}`}
                        className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:bg-blue-50 hover:text-blue-600">
                        <Eye size={18} />
                      </Link>

                      {/* EDIT */}

                      {isAdmin && (
                        <Link
                          to={`/products/edit/${product._id}`}
                          className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:bg-emerald-50 hover:text-emerald-600">
                          <Pencil size={18} />
                        </Link>
                      )}

                      {/* DELETE */}

                      {isAdmin && (
                        <button
                          onClick={() => handleDelete(product._id)}
                          className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:bg-red-50 hover:text-red-600">
                          <Trash2 size={18} />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* PAGINATION */}

      {pagination.totalPages > 1 && (
        <div className="flex items-center justify-between border-t border-gray-200 px-6 py-4">
          {/* RESULTS */}

          <p className="text-sm text-gray-500">
            Page {pagination.currentPage} of {pagination.totalPages} •{" "}
            {pagination.totalProducts} products
          </p>

          {/* BUTTONS */}

          <div className="flex items-center gap-2">
            {/* PREVIOUS */}
            <button
              disabled={!pagination.hasPreviousPage}
              onClick={() => changePage(pagination.currentPage - 1)}
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40">
              Previous
            </button>

            {/* PAGE NUMBERS */}

            {Array.from(
              {
                length: pagination.totalPages,
              },
              (_, index) => index + 1,
            ).map((page) => (
              <button
                key={page}
                onClick={() => changePage(page)}
                className={`h-9 w-9 rounded-lg text-sm font-medium transition ${
                  page === pagination.currentPage
                    ? "bg-zinc-900 text-white"
                    : "border border-gray-200 text-gray-700 hover:bg-gray-100"
                }`}>
                {page}
              </button>
            ))}

            {/* NEXT */}

            <button
              disabled={!pagination.hasNextPage}
              onClick={() => changePage(pagination.currentPage + 1)}
              className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40">
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsRender;
