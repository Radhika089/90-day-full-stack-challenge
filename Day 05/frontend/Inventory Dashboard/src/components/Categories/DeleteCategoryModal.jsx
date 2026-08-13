import { Trash } from "lucide-react";
import React from "react";

const DeleteCategoryModal = ({ category, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
            <Trash size={22} className="text-red-600" />
          </div>

          <h1 className="mt-4 text-2xl font-bold text-zinc-900">
            Delete Category?
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Are you sure you want to delete "{category.name}"? This action
            cannot be undone.
          </p>

          <div className="mt-7 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50">
              Cancel
            </button>

            <button
              type="button"
              className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-700">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeleteCategoryModal;
