import { ImagePlus, X } from "lucide-react";
import { useState } from "react";

const ProductForm = ({ mode = "add" }) => {
  const [formData, setFormData] = useState({
    name: mode === "edit" ? "House Blend" : "",
    brand: mode === "edit" ? "AURA Coffee Co." : "",
    description:
      mode === "edit"
        ? "A smooth and balanced coffee with rich chocolate notes."
        : "",
    category: mode === "edit" ? "Brews" : "",
    price: mode === "edit" ? "850" : "",
    stock: mode === "edit" ? "12" : "",
    type: mode === "edit" ? "Coffee Beans" : "",
    roast: mode === "edit" ? "Medium" : "",
    origin: mode === "edit" ? "Colombia" : "",
  });

  const [image, setImage] = useState(
    mode === "edit"
      ? "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
      : null,
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImage(URL.createObjectURL(file));
  };

  const removeImage = () => {
    setImage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Product data:", formData);
    console.log("Product image:", image);
  };

  const inputClass =
    "mt-2 h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#315C4A]/40 focus:bg-white focus:ring-2 focus:ring-[#315C4A]/10";

  const textareaClass =
    "mt-2 min-h-[120px] w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#315C4A]/40 focus:bg-white focus:ring-2 focus:ring-[#315C4A]/10";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Basic Information */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <div className="mb-6">
          <h2 className="text-base font-semibold text-gray-900">
            Basic Information
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            Add the basic details of your product.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Product Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Product Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className={inputClass}
            />
          </div>

          {/* Brand */}
          <div>
            <label className="text-sm font-medium text-gray-700">Brand</label>

            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              placeholder="Enter brand name"
              className={inputClass}
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter product description"
              className={textareaClass}
            />
          </div>
        </div>
      </div>

      {/* Pricing & Inventory */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <div className="mb-6">
          <h2 className="text-base font-semibold text-gray-900">
            Pricing & Inventory
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            Manage product pricing, category and stock.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Price */}
          <div>
            <label className="text-sm font-medium text-gray-700">Price</label>

            <div className="relative">
              <span className="absolute left-4 top-[22px] text-sm text-gray-400">
                ₹
              </span>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="0"
                min="0"
                className={`${inputClass} pl-8`}
              />
            </div>
          </div>

          {/* Stock */}
          <div>
            <label className="text-sm font-medium text-gray-700">Stock</label>

            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
              placeholder="0"
              min="0"
              className={inputClass}
            />
          </div>

          {/* Category */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={inputClass}>
              <option value="">Select category</option>
              <option value="Brews">Brews</option>
              <option value="Gear">Gear</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>

          {/* Type */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Product Type
            </label>

            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="e.g. Coffee Beans"
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Coffee Details */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <div className="mb-6">
          <h2 className="text-base font-semibold text-gray-900">
            Coffee Details
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            Add additional details for your coffee product.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* Roast */}
          <div>
            <label className="text-sm font-medium text-gray-700">Roast</label>

            <select
              name="roast"
              value={formData.roast}
              onChange={handleChange}
              className={inputClass}>
              <option value="">Select roast</option>
              <option value="Light">Light</option>
              <option value="Medium">Medium</option>
              <option value="Medium Dark">Medium Dark</option>
              <option value="Dark">Dark</option>
            </select>
          </div>

          {/* Origin */}
          <div>
            <label className="text-sm font-medium text-gray-700">Origin</label>

            <input
              type="text"
              name="origin"
              value={formData.origin}
              onChange={handleChange}
              placeholder="e.g. Colombia"
              className={inputClass}
            />
          </div>
        </div>
      </div>

      {/* Product Image */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <div className="mb-6">
          <h2 className="text-base font-semibold text-gray-900">
            Product Image
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            Upload a clear image of your product.
          </p>
        </div>

        {image ? (
          <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
            <img
              src={image}
              alt="Product preview"
              className="h-full w-full object-cover"
            />

            <button
              type="button"
              onClick={removeImage}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-white text-gray-500 shadow-sm transition hover:bg-gray-100 hover:text-red-500">
              <X size={16} />
            </button>
          </div>
        ) : (
          <label className="flex h-56 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 transition hover:border-[#315C4A]/30 hover:bg-[#EEF5F1]/40">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF5F1] text-[#315C4A]">
              <ImagePlus size={21} strokeWidth={1.8} />
            </div>

            <p className="mt-3 text-sm font-medium text-gray-700">
              Upload product image
            </p>

            <p className="mt-1 text-xs text-gray-400">
              PNG, JPG or WEBP up to 5MB
            </p>

            <input
              type="file"
              accept="image/png,image/jpeg,image/webp"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3 pb-2">
        <button
          type="button"
          className="rounded-xl border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50">
          Cancel
        </button>

        <button
          type="submit"
          className="rounded-xl bg-[#315C4A] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#284C3D]">
          {mode === "edit" ? "Update Product" : "Add Product"}
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
