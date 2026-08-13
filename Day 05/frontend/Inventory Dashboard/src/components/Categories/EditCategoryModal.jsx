import { X } from "lucide-react";
import React from "react";

const EditCategoryModal = ({ category, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full bg-white rounded-2xl shadow-xl max-w-md px-3">
        <div className="flex items-start justify-between border-b border-gray-100 px-6 py-4">
          <div>
            <h1 className="text-xl font-bold tracking-wide text-gray-900">
              Edit Category
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Update category information
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        {/* form */}
        <form>
          <div className="p-2">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Category Name
            </label>
            <input
              type="text"
              placeholder="Electronic"
              value={category.name}
              className="w-full border border-gray-300 outline-none px-4 py-3 rounded-xl placeholder:text-gray-400 focus:border-[#29b354]"
            />
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-gray-700">
              Description
            </label>

            <textarea
              rows="4"
              value={category.description}
              placeholder="Enter category description"
              className="w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-[#29b354]"
            />
          </div>

          <div className="mt-6 flex items-center justify-end p-3 gap-3">
            <button
              className="px-5 py-2 border border-gray-300 text-sm font-medium hover:bg-gray-50 transition rounded-xl"
              onClick={onClose}>
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 border border-gray-300 text-sm font-medium hover:bg-zinc-800 bg-black text-white rounded-xl">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditCategoryModal;
