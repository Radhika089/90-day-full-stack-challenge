import React, { useEffect, useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import EditCategoryModal from "./EditCategoryModal";
import DeleteCategoryModal from "./DeleteCategoryModal";
import { getCategories } from "../../api/CategoryApi";
import { updateCategory } from "../../api/CategoryApi";

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data.categories);
      } catch (error) {
        console.log(error);
        setError(error.response?.data?.message || "Failed to fetch categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleStatus = async (category) => {
    try {
      const data = await updateCategory(category._id, {
        active: !category.active,
      });

      setCategories((prevCategories) =>
        prevCategories.map((item) =>
          item._id === category._id ? data.category : item,
        ),
      );
    } catch (error) {
      console.log(error);
      setError(
        error.response?.data?.message || "Failed to update category status",
      );
    }
  };

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setShowEditModal(true);
  };

  const handleDelete = (category) => {
    setSelectedCategory(category);
    setShowDeleteModal(true);
  };

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        {loading && <p className="p-6 text-gray-500">Loading categories...</p>}

        {error && <p className="p-6 text-red-500">{error}</p>}
        {!loading && !error && (
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr className="border-b border-gray-200">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">
                  #
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">
                  Category
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">
                  Products
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">
                  Status
                </th>

                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500">
                  Created At
                </th>

                <th className="px-6 py-4 text-center text-sm font-semibold text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {categories.map((category, index) => (
                <tr
                  key={category._id}
                  className="border-b border-gray-100 transition hover:bg-slate-50">
                  <td className="px-6 py-5 font-medium text-gray-500">
                    {index + 1}
                  </td>

                  <td className="px-6 py-5 font-semibold text-gray-900">
                    {category.name.charAt(0).toUpperCase() +
                      category.name.slice(1)}
                  </td>

                  <td className="px-6 py-5 text-gray-600">
                    {category.products}
                  </td>

                  {/* Status Toggle */}
                  <td className="px-6 py-5">
                    <button
                      type="button"
                      onClick={() => toggleStatus(category)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
                        category.active ? "bg-emerald-500" : "bg-gray-300"
                      }`}
                      aria-label={`Toggle ${category.name} status`}>
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white shadow transition ${
                          category.active ? "translate-x-6" : "translate-x-1"
                        }`}
                      />
                    </button>

                    <span
                      className={`ml-3 text-sm font-medium ${
                        category.active ? "text-emerald-600" : "text-gray-500"
                      }`}>
                      {category.active ? "Active" : "Inactive"}
                    </span>
                  </td>

                  <td className="px-6 py-5 text-gray-600">
                    {new Date(category.createdAt).toLocaleDateString("en-GB")}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleEdit(category)}
                        className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:bg-emerald-50 hover:text-emerald-600"
                        title="Edit category">
                        <Pencil size={18} />
                      </button>

                      <button
                        type="button"
                        onClick={() => handleDelete(category)}
                        className="rounded-lg border border-gray-200 p-2 text-gray-500 transition hover:bg-red-50 hover:text-red-600"
                        title="Delete category">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {showEditModal && (
        <EditCategoryModal
          category={selectedCategory}
          onClose={() => setShowEditModal(false)}
        />
      )}

      {showDeleteModal && (
        <DeleteCategoryModal
          category={selectedCategory}
          onClose={() => setShowDeleteModal(false)}
        />
      )}
    </div>
  );
};

export default CategoryList;
