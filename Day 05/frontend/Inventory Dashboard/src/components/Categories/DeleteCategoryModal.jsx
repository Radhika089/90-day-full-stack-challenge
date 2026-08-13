import { Trash } from "lucide-react";
import React, { useState } from "react";
import { deleteCategory } from "../../api/CategoryApi";

const DeleteCategoryModal = ({ category, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async () => {
    try {
      setLoading(true);
      setError("");

      await deleteCategory(category._id);

      onClose();
      window.location.reload();
    } catch (error) {
      setError(error.response?.data?.message || "Failed to delete category");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <Trash size={22} className="text-red-600" />
          </div>

          <h1 className="mt-4 text-2xl font-bold">Delete Category?</h1>

          <p className="mt-3 text-sm text-gray-500">
            Are you sure you want to delete "{category.name}"?
          </p>

          {error && (
            <div className="mt-4 rounded-lg bg-red-100 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="mt-7 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border px-5 py-2.5">
              Cancel
            </button>

            <button
              type="button"
              onClick={handleDelete}
              disabled={loading}
              className="rounded-xl bg-red-600 px-5 py-2.5 text-white">
              {loading ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteCategoryModal;
