import { useState } from "react";
import {
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
  Pencil,
  Trash2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ProductTable = ({ products, onStatusToggle }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;

  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState();

  const handleStatusChange = async (product) => {
    const willActivate = !product.status;

    const result = await Swal.fire({
      title: willActivate ? "Activate product?" : "Deactivate product?",
      text: willActivate
        ? `Do you want to make ${product.name} available in your store?`
        : `Do you want to make ${product.name} unavailable in your store?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: willActivate ? "Yes, activate" : "Yes, deactivate",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#315C4A",
      cancelButtonColor: "#6B7280",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      onStatusToggle(product.id);

      Swal.fire({
        title: willActivate ? "Product activated!" : "Product deactivated!",
        text: `${product.name} is now ${willActivate ? "active" : "inactive"}.`,
        icon: "success",
        confirmButtonColor: "#315C4A",
        timer: 1800,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/70">
              <th className="w-16 px-5 py-4 text-center text-xs font-medium uppercase tracking-wide text-gray-400">
                #
              </th>

              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
                Product
              </th>

              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
                Category
              </th>

              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
                Price
              </th>

              <th className="px-6 py-4 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
                Stock
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
            {currentProducts.map((product, index) => (
              <tr key={product.id} className="transition hover:bg-gray-50/50">
                {/* Number */}
                <td className="px-5 py-4 text-center">
                  <span className="text-sm text-gray-400">
                    {String(startIndex + index + 1).padStart(2, "0")}
                  </span>
                </td>

                {/* Product */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-11 w-11 rounded-xl object-cover"
                    />

                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {product.name}
                      </p>

                      <p className="mt-0.5 text-xs text-gray-400">
                        #{String(product.id).padStart(4, "0")}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-600">
                    {product.category}
                  </span>
                </td>

                {/* Price */}
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-gray-800">
                    ₹{product.price.toLocaleString("en-IN")}
                  </span>
                </td>

                {/* Stock */}
                <td className="px-6 py-4">
                  <span
                    className={`text-sm font-medium ${
                      product.stock === 0
                        ? "text-red-500"
                        : product.stock <= 5
                          ? "text-amber-500"
                          : "text-gray-700"
                    }`}>
                    {product.stock}
                  </span>
                </td>

                {/* Status */}
                <td className="px-6 py-4">
                  <button
                    type="button"
                    role="switch"
                    aria-checked={product.status}
                    aria-label={`Toggle ${product.name} status`}
                    onClick={() => handleStatusChange(product)}
                    className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#315C4A] focus-visible:ring-offset-2 ${
                      product.status ? "bg-[#315C4A]" : "bg-gray-300"
                    }`}>
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-sm ring-0 transition-transform duration-200 ${
                        product.status ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </td>

                {/* Action */}
                <td className="px-6 py-4 text-right">
                  <div className="relative inline-block">
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMenu(openMenu === product.id ? null : product.id)
                      }
                      className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700">
                      <MoreHorizontal size={18} />
                    </button>

                    {openMenu === product.id && (
                      <div className="absolute right-0 top-10 z-20 w-36 rounded-xl border border-gray-200 bg-white p-1.5 text-left shadow-lg">
                        <button
                          type="button"
                          onClick={() =>
                            navigate(`/admin/products/${product.id}/edit`)
                          }
                          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-600 transition hover:bg-gray-50">
                          <Pencil size={15} />
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={async () => {
                            const result = await Swal.fire({
                              title: "Delete product?",
                              text: `Are you sure you want to delete ${product.name}?`,
                              icon: "warning",
                              showCancelButton: true,
                              confirmButtonText: "Yes, delete it",
                              cancelButtonText: "Cancel",
                              confirmButtonColor: "#315C4A",
                            });

                            if (result.isConfirmed) {
                              // Backend delete will be connected here
                              Swal.fire({
                                title: "Deleted!",
                                text: `${product.name} has been deleted.`,
                                icon: "success",
                                confirmButtonColor: "#315C4A",
                              });
                            }

                            setOpenMenu(null);
                          }}
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
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex flex-col gap-3 border-t border-gray-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-gray-500">
          Showing{" "}
          <span className="font-medium text-gray-700">{startIndex + 1}</span> to{" "}
          <span className="font-medium text-gray-700">
            {Math.min(startIndex + itemsPerPage, products.length)}
          </span>{" "}
          of{" "}
          <span className="font-medium text-gray-700">{products.length}</span>{" "}
          products
        </p>

        <div className="flex items-center gap-1">
          {/* Previous */}
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40">
            <ChevronLeft size={15} />
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                type="button"
                onClick={() => handlePageChange(page)}
                className={`flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-xs font-medium transition ${
                  currentPage === page
                    ? "bg-[#315C4A] text-white"
                    : "text-gray-500 hover:bg-gray-50"
                }`}>
                {page}
              </button>
            );
          })}

          {/* Next */}
          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-40">
            <ChevronRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
