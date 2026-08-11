import React, { useEffect, useState } from "react";
import { ArrowLeft, UploadCloud } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../api/ProductApi";

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [loading, setLoading] = useState(true);

  // Fetch single product
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);

        setFormData({
          name: data.product.name || "",
          description: data.product.description || "",
          price: data.product.price || "",
          category: data.product.category || "",
          stock: data.product.stock || "",
        });
      } catch (error) {
        console.log(error);

        setMessage(error.response?.data?.message || "Failed to load product");
        setMessageType("error");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Update product
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await updateProduct(id, formData);

      setMessage(data.message || "Product updated successfully!");
      setMessageType("success");

      // Go back to products after successful update
      setTimeout(() => {
        navigate("/products");
      }, 1000);
    } catch (error) {
      console.log(error);

      setMessage(error.response?.data?.message || "Failed to update product");
      setMessageType("error");
    }
  };

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 p-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-gray-500">Loading product...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl">
        {/* Message */}
        {message && (
          <div
            className={`mb-6 rounded-lg px-4 py-3 text-sm font-medium ${
              messageType === "success"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-700"
            }`}>
            {message}
          </div>
        )}

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
              Edit Product
            </h1>

            <p className="mt-2 text-gray-500">
              Update your inventory product information.
            </p>
          </div>

          <button
            type="submit"
            form="edit-product-form"
            className="rounded-xl bg-zinc-900 px-6 py-3 font-medium text-white transition hover:bg-zinc-800">
            Save Changes
          </button>
        </div>

        {/* Form */}
        <form
          id="edit-product-form"
          onSubmit={handleSubmit}
          className="space-y-6">
          {/* Basic Information */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-lg font-semibold text-gray-900">
              Basic Information
            </h2>

            <div className="space-y-5">
              {/* Product Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-700">
                  Product Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#29b354]"
                />
              </div>

              {/* Description */}
              <div>
                <label
                  htmlFor="description"
                  className="mb-2 block text-sm font-medium text-gray-700">
                  Description
                </label>

                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#29b354]"
                />
              </div>
            </div>
          </div>

          {/* Pricing + Inventory */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Pricing */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-lg font-semibold text-gray-900">
                Pricing
              </h2>

              <div className="space-y-5">
                {/* Price */}
                <div>
                  <label
                    htmlFor="price"
                    className="mb-2 block text-sm font-medium text-gray-700">
                    Price
                  </label>

                  <input
                    id="price"
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#29b354]"
                  />
                </div>

                {/* Category */}
                <div>
                  <label
                    htmlFor="category"
                    className="mb-2 block text-sm font-medium text-gray-700">
                    Category
                  </label>

                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#29b354]">
                    <option value="">Select Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Furniture">Furniture</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Accessories">Accessories</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Inventory */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="mb-6 text-lg font-semibold text-gray-900">
                Inventory
              </h2>

              <div className="space-y-5">
                {/* Stock */}
                <div>
                  <label
                    htmlFor="stock"
                    className="mb-2 block text-sm font-medium text-gray-700">
                    Stock
                  </label>

                  <input
                    id="stock"
                    type="number"
                    name="stock"
                    value={formData.stock}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#29b354]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Product Image */}
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

              <button
                type="button"
                className="flex items-center gap-2 rounded-xl border border-gray-200 px-5 py-3 font-medium transition hover:bg-gray-50">
                <UploadCloud size={18} />
                Change Image
              </button>

              <p className="mt-3 text-sm text-gray-400">JPG, PNG up to 5MB</p>
            </div>
          </div>

          {/* Bottom Buttons */}
          <div className="flex justify-end gap-4">
            <Link
              to="/products"
              className="rounded-xl border border-gray-200 bg-white px-6 py-3 font-medium text-gray-700 transition hover:bg-gray-100">
              Cancel
            </Link>

            <button
              type="submit"
              className="rounded-xl bg-zinc-900 px-6 py-3 font-medium text-white transition hover:bg-zinc-800">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
