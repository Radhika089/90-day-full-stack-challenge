import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Pencil } from "lucide-react";
import Swal from "sweetalert2";

const InventoryTable = ({ products, onStockUpdate }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newStock, setNewStock] = useState("");

  const itemsPerPage = 5;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setCurrentPage((page) => Math.max(1, Math.min(page, totalPages || 1)));
  }, [totalPages]);

  const getStockStatus = (stock) => {
    if (stock === 0) {
      return {
        label: "Out of Stock",
        className: "bg-red-50 text-red-600",
        bar: "bg-red-500",
        width: "0%",
      };
    }

    if (stock <= 5) {
      return {
        label: "Low Stock",
        className: "bg-amber-50 text-amber-600",
        bar: "bg-amber-500",
        width: `${Math.min((stock / 20) * 100, 100)}%`,
      };
    }

    return {
      label: "In Stock",
      className: "bg-[#EEF5F1] text-[#315C4A]",
      bar: "bg-[#315C4A]",
      width: `${Math.min((stock / 20) * 100, 100)}%`,
    };
  };

  const handleStockSave = async (event) => {
    event.preventDefault();

    const quantity = Number(newStock);

    if (!Number.isInteger(quantity) || quantity < 0) {
      await Swal.fire({
        title: "Invalid stock quantity",
        text: "Enter a whole number greater than or equal to zero.",
        icon: "warning",
        confirmButtonColor: "#315C4A",
      });
      return;
    }

    const result = await Swal.fire({
      title: "Update stock?",
      text: `Set ${editingProduct.name} stock to ${quantity} units?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Update Stock",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#315C4A",
    });

    if (result.isConfirmed) {
      onStockUpdate(editingProduct.id, quantity);
      setEditingProduct(null);
      setNewStock("");

      await Swal.fire({
        title: "Stock updated!",
        text: `${editingProduct.name} now has ${quantity} units.`,
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
        <table className="w-full min-w-[850px]">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/70">
              <th className="px-5 py-4 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
                Product
              </th>
              <th className="px-5 py-4 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
                Category
              </th>
              <th className="px-5 py-4 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
                Quantity
              </th>
              <th className="px-5 py-4 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
                Stock Level
              </th>
              <th className="px-5 py-4 text-left text-xs font-medium uppercase tracking-wide text-gray-400">
                Status
              </th>
              <th className="px-5 py-4 text-right text-xs font-medium uppercase tracking-wide text-gray-400">
                Action
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {currentProducts.map((product) => {
              const stockStatus = getStockStatus(product.stock);

              return (
                <tr key={product.id} className="hover:bg-gray-50/50">
                  <td className="px-5 py-4">
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

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {product.category}
                  </td>

                  <td className="px-5 py-4">
                    <span className="text-sm font-semibold text-gray-800">
                      {product.stock}
                    </span>
                    <span className="ml-1 text-xs text-gray-400">units</span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="w-28">
                      <div className="mb-2 h-1.5 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className={`h-full rounded-full ${stockStatus.bar}`}
                          style={{ width: stockStatus.width }}
                        />
                      </div>
                      <p className="text-xs text-gray-400">
                        {product.stock} of 20 units
                      </p>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${stockStatus.className}`}>
                      {stockStatus.label}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-right">
                    <button
                      type="button"
                      onClick={() => {
                        setEditingProduct(product);
                        setNewStock(String(product.stock));
                      }}
                      className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-xs font-medium text-gray-600 transition hover:border-[#315C4A] hover:text-[#315C4A]">
                      <Pencil size={14} />
                      Update
                    </button>
                  </td>
                </tr>
              );
            })}

            {currentProducts.length === 0 && (
              <tr>
                <td colSpan={6} className="px-6 py-16 text-center">
                  <p className="text-sm font-medium text-gray-700">
                    No products found
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
          Showing {products.length ? startIndex + 1 : 0} to{" "}
          {Math.min(startIndex + itemsPerPage, products.length)} of{" "}
          {products.length} products
        </p>

        <div className="flex items-center gap-1">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((page) => page - 1)}
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40">
            <ChevronLeft size={15} />
          </button>

          {Array.from({ length: totalPages }, (_, index) => {
            const page = index + 1;

            return (
              <button
                key={page}
                type="button"
                onClick={() => setCurrentPage(page)}
                className={`flex h-8 min-w-8 items-center justify-center rounded-lg px-2 text-xs font-medium ${
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
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-40">
            <ChevronRight size={15} />
          </button>
        </div>
      </div>

      {editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <h2 className="text-lg font-semibold text-gray-900">
              Update Stock
            </h2>
            <p className="mt-1 text-sm text-gray-500">{editingProduct.name}</p>

            <form onSubmit={handleStockSave} className="mt-6">
              <label
                htmlFor="stock-quantity"
                className="mb-2 block text-sm font-medium text-gray-700">
                Available quantity
              </label>
              <input
                id="stock-quantity"
                type="number"
                min="0"
                step="1"
                required
                value={newStock}
                onChange={(event) => setNewStock(event.target.value)}
                className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-[#315C4A] focus:ring-2 focus:ring-[#315C4A]/10"
              />

              <div className="mt-6 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50">
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-[#315C4A] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#284C3D]">
                  Save Stock
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InventoryTable;
