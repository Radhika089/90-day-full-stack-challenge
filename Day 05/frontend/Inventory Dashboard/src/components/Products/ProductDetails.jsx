import React, { useEffect, useState } from "react";
import { ArrowLeft, Pencil } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getSingleProduct } from "../../api/ProductApi";

const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const getStatus = (stock) => {
    if (stock === 0) return "Out Of Stock";
    if (stock <= 10) return "Low Stock";
    return "In Stock";
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getSingleProduct(id);
        setProduct(data.product);
      } catch (error) {
        console.log(error);
        setError(error.response?.data?.message || "Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div className="p-8 text-gray-500">Loading product...</div>;
  }

  if (error) {
    return (
      <div className="p-8">
        <p className="rounded-lg bg-red-100 px-4 py-3 text-red-700">{error}</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="p-8">
        <p className="text-gray-500">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-black">
              <ArrowLeft size={16} />
              Back to Products
            </Link>

            <h1 className="mt-4 text-3xl font-bold text-gray-900">
              Product Details
            </h1>

            <p className="mt-2 text-gray-500">
              View product information and inventory details.
            </p>
          </div>

          <Link
            to={`/products/edit/${product._id}`}
            className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-5 py-3 font-medium text-white transition hover:bg-zinc-800">
            <Pencil size={18} />
            Edit Product
          </Link>
        </div>

        {/* Product */}
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Image */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex min-h-[350px] items-center justify-center rounded-2xl bg-slate-50">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-72 w-72 rounded-2xl object-cover"
                />
              ) : (
                <div className="text-gray-400">No Image</div>
              )}
            </div>
          </div>

          {/* Information */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm lg:col-span-2">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {product.name}
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Product ID: {product._id}
                </p>
              </div>

              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  getStatus(product.stock) === "In Stock"
                    ? "bg-emerald-100 text-emerald-700"
                    : getStatus(product.stock) === "Low Stock"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-red-100 text-red-700"
                }`}>
                {getStatus(product.stock)}
              </span>
            </div>

            {/* Description */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="mb-2 font-semibold text-gray-900">Description</h3>

              <p className="leading-7 text-gray-500">
                {product.description || "No description available."}
              </p>
            </div>

            {/* Details */}
            <div className="grid gap-6 py-6 sm:grid-cols-3">
              <div>
                <p className="text-sm text-gray-500">Price</p>

                <p className="mt-1 text-xl font-bold text-gray-900">
                  ₹{product.price}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Category</p>

                <p className="mt-1 font-semibold text-gray-900">
                  {product.category}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Stock</p>

                <p className="mt-1 font-semibold text-gray-900">
                  {product.stock}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
