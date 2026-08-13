import { X } from "lucide-react";
import React, { useState } from "react";
import { updateCategory } from "../../api/CategoryApi";

const EditCategoryModal = ({ category, onClose }) => {
  const [name, setName] = useState(category.name);
  const [description, setDescription] = useState(category.description || "");
  const [active, setActive] = useState(category.active);
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

      await updateCategory(category._id, {
        name,
        description,
        active,
      });

      onClose();
      window.location.reload();
    } catch (error) {
      setError(error.response?.data?.message || "Failed to update category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white shadow-xl">
        <div className="flex items-start justify-between border-b p-6">
          <div>
            <h1 className="text-xl font-bold">Edit Category</h1>
            <p className="mt-2 text-sm text-gray-500">
              Update category information
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

          <label className="mb-2 block text-sm font-medium">
            Category Name
          </label>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#29b354]"
          />

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium">
              Description
            </label>

            <textarea
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#29b354]"
            />
          </div>

          <div className="mt-5 flex items-center gap-3">
            <input
              type="checkbox"
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
            />
            <label className="text-sm font-medium">Active</label>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <button type="button" onClick={onClose}>
              Cancel
            </button>

            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-black px-5 py-2 text-sm font-medium text-white">
              {loading ? "Updating..." : "Update"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategoryModal;
