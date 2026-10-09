import { useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Folder,
  MoreHorizontal,
  Pencil,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CategoryTable = ({ categories, onDelete, onStatusToggle }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [openMenu, setOpenMenu] = useState(null);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCategories = categories.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  useEffect(() => {
    setCurrentPage((page) => Math.max(1, Math.min(page, totalPages || 1)));
  }, [totalPages]);

  const handleStatusChange = async (category) => {
    const willActivate = !category.status;

    const result = await Swal.fire({
      title: willActivate ? "Activate category?" : "Deactivate category?",
      text: willActivate
        ? `Do you want to activate ${category.name}?`
        : `Do you want to deactivate ${category.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: willActivate ? "Yes, activate" : "Yes, deactivate",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#315C4A",
      cancelButtonColor: "#6B7280",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      onStatusToggle(category.id);

      await Swal.fire({
        title: willActivate ? "Category activated!" : "Category deactivated!",
        text: `${category.name} is now ${willActivate ? "active" : "inactive"}.`,
        icon: "success",
        confirmButtonColor: "#315C4A",
        timer: 1600,
        showConfirmButton: false,
      });
    }
  };

  const handleDelete = async (category) => {
    setOpenMenu(null);

    const result = await Swal.fire({
      title: "Delete category?",
      text: `Are you sure you want to delete ${category.name}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#315C4A",
      cancelButtonColor: "#6B7280",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      onDelete(category.id);

      await Swal.fire({
        title: "Deleted!",
        text: `${category.name} has been deleted.`,
        icon: "success",
        confirmButtonColor: "#315C4A",
        timer: 1600,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[760px]">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/70">
              <th className="w-16 px-5 py-4 text-center text-xs font-medium uppercase tracking-wide text-gray-400">
                #
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
                Category
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
                Products
              </th>
              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
                Status
              </th>
              <th className="px-6 py-4 text-right text-xs font-medium uppercase tracking-wide text-gray-400">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {currentCategories.map((category, index) => (
              <tr key={category.id} className="transition hover:bg-gray-50/50">
                <td className="px-5 py-4 text-center">
                  <span className="text-sm text-gray-400">
                    {String(startIndex + index + 1).padStart(2, "0")}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF5F1] text-[#315C4A]">
                      <Folder size={19} />
                    </div>

                    <div className="max-w-sm">
                      <p className="text-sm font-medium text-gray-800">
                        {category.name}
                      </p>
                      <p className="mt-1 truncate text-xs text-gray-400">
                        {category.description || "No description"}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-4">
                  <span className="text-sm text-gray-600">
                    {category.productCount}
                  </span>
                </td>

                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      role="switch"
                      aria-checked={category.status}
                      aria-label={`Toggle ${category.name} status`}
                      onClick={() => handleStatusChange(category)}
                      className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#315C4A] focus-visible:ring-offset-2 ${
                        category.status ? "bg-[#315C4A]" : "bg-gray-300"
                      }`}>
                      <span
                        className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm transition-transform duration-200 ${
                          category.status ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>

                    <span
                      className={`text-xs font-medium ${
                        category.status ? "text-[#315C4A]" : "text-gray-400"
                      }`}>
                      {category.status ? "Active" : "Inactive"}
                    </span>
                  </div>
                </td>

                <td className="px-6 py-4 text-right">
                  <div className="relative inline-block">
                    <button
                      type="button"
                      aria-label={`Actions for ${category.name}`}
                      onClick={() =>
                        setOpenMenu(
                          openMenu === category.id ? null : category.id,
                        )
                      }
                      className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700">
                      <MoreHorizontal size={18} />
                    </button>

                    {openMenu === category.id && (
                      <div className="absolute right-0 top-10 z-20 w-36 rounded-xl border border-gray-200 bg-white p-1.5 text-left shadow-lg">
                        <button
                          type="button"
                          onClick={() => {
                            setOpenMenu(null);
                            navigate(`/admin/categories/${category.id}/edit`);
                          }}
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50">
                          <Pencil size={15} />
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={() => handleDelete(category)}
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-500 transition hover:bg-red-50">
                          <Trash2 size={15} />
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))}

            {currentCategories.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-16 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-50 text-gray-400">
                    <Folder size={22} />
                  </div>
                  <p className="mt-3 text-sm font-medium text-gray-700">
                    No categories found
                  </p>
                  <p className="mt-1 text-sm text-gray-400">
                    Try changing your search or filters.
                  </p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-gray-500">
          Showing{" "}
          <span className="font-medium text-gray-700">
            {categories.length ? startIndex + 1 : 0}
          </span>{" "}
          to{" "}
          <span className="font-medium text-gray-700">
            {Math.min(startIndex + itemsPerPage, categories.length)}
          </span>{" "}
          of{" "}
          <span className="font-medium text-gray-700">{categories.length}</span>{" "}
          categories
        </p>

        <div className="flex items-center gap-1">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((page) => page - 1)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40">
            <ChevronLeft size={15} />
          </button>

          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-xs font-medium transition ${
                  currentPage === page
                    ? "bg-[#315C4A] text-white"
                    : "text-gray-500 hover:bg-gray-50"
                }`}>
                {page}
              </button>
            );
          })}

          <button
            type="button"
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() => setCurrentPage((page) => page + 1)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40">
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryTable;
