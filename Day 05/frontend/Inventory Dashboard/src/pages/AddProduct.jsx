import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, UploadCloud } from "lucide-react";
import { createProduct } from "../api/ProductApi";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await createProduct(formData);
      setMessage(data.message);
      setMessageType("success");
    } catch (error) {
      setMessage(error.response?.data?.message || "Failed to create product");
      setMessageType("error");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl">
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
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link
              to={"/products"}
              className="inline-flex items-center gap-2 text-sm text-gray-500">
              <ArrowLeft size={16} />
              Back to Products
            </Link>
            <h2 className="text-3xl mt-3 font-bold text-gray-900">
              Add Product
            </h2>
            <p className="mt-2 text-gray-500">Add product to your inventory.</p>
          </div>
          <button className="bg-black text-white px-7 font-medium py-3 rounded-xl transition hover:bg-zinc-800">
            Add Product
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Basic */}
            <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
              <h2 className="mb-6 font-semibold text-lg">Basic Information</h2>
              <div className="space-y-5">
                <div>
                  <label className="text-sm block mb-2 font-medium text-gray-700">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="px-4 py-3 outline-none border border-gray-300 w-full rounded-xl focus:border-[#29b354] transition"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter Product Name"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Description
                  </label>
                  <textarea
                    rows={5}
                    value={formData.description}
                    name="description"
                    onChange={handleChange}
                    className="outline-none border border-gray-300 w-full rounded-xl px-4 py-3 transition focus:border-[#29b354] resize-none"></textarea>
                </div>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {/* price */}
              <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
                <h2 className="mb-6 font-semibold text-lg">Pricing</h2>
                <div className="space-y-5">
                  <div>
                    <label className="text-sm block mb-2 font-medium text-gray-700">
                      Price
                    </label>
                    <input
                      type="number"
                      className="px-4 py-3 outline-none border border-gray-300 w-full rounded-xl focus:border-[#29b354] transition"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="Enter Price"
                    />
                  </div>
                  <div>
                    <label className="text-sm block mb-2 font-medium text-gray-700">
                      Category
                    </label>
                    <select
                      className="px-4 py-3 outline-none border border-gray-300 w-full rounded-xl focus:border-[#29b354] transition"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}>
                      <option value="Electronics">Electronics</option>
                      <option value="">Furniture</option>
                      <option value="">Groceries</option>
                      <option value="">Accessories</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Inventory */}
              <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-sm">
                <h2 className="mb-6 font-semibold text-lg">Inventory</h2>
                <div className="space-y-5">
                  <div>
                    <label className="text-sm block mb-2 font-medium text-gray-700">
                      Stock
                    </label>
                    <input
                      type="number"
                      className="px-4 py-3 outline-none border border-gray-300 w-full rounded-xl focus:border-[#29b354] transition"
                      name="stock"
                      value={formData.stock}
                      onChange={handleChange}
                      placeholder="Enter Stock"
                    />
                  </div>
                  {/* <div>
                    <label className="text-sm block mb-2 font-medium text-gray-700">
                      Status
                    </label>
                    <select className="px-4 py-3 outline-none border border-gray-300 w-full rounded-xl focus:border-[#29b354] transition">
                      <option value="">In Stock</option>
                      <option value="">Low Stock</option>
                      <option value="">Out of Stock</option>
                    </select>
                  </div> */}
                </div>
              </div>
            </div>

            {/* image */}
            <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm">
              <h2 className="mb-6 text-lg font-semibold text-gray-900">
                Product Image
              </h2>
              <div className="flex flex-col items-center rounded-2xl border-2 border-dashed border-gray-300 p-8">
                <img
                  src=""
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

              <button
                type="submit"
                className="rounded-xl bg-zinc-900 px-6 py-3 font-medium text-white transition hover:bg-zinc-800">
                Add Product
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
