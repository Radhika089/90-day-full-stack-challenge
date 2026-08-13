import { X } from "lucide-react";
import React, { useState } from "react";
import { createCategory } from "../../api/CategoryApi";

const AddCategoryModal = ({ onClose }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      setError("Category name is required");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await createCategory({
        name,
        description,
      });

      onClose();
      window.location.reload();
    } catch (error) {
      setError(error.response?.data?.message || "Failed to create category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">
        <div className="flex items-start justify-between border-b border-gray-100 p-6">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Add Category</h2>
            <p className="mt-1 text-sm text-gray-500">
              Create a new product category
            </p>
          </div>

          <button type="button" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          {error && (
            <div className="mb-4 rounded-lg bg-red-100 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <div>
            <label className="mb-2 block text-sm font-medium">
              Category Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter category name"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#29b354]"
            />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium">
              Description
            </label>

            <textarea
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter category description"
              className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#29b354]"
            />
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button type="button" onClick={onClose}>
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white">
              {loading ? "Adding..." : "Add Category"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCategoryModal;
