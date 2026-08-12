import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

const CategoryList = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Electronics",
      products: 14,
      active: true,
      createdAt: "25 July 2026",
    },
    {
      id: 2,
      name: "Clothing",
      products: 22,
      active: true,
      createdAt: "26 July 2026",
    },
    {
      id: 3,
      name: "Furniture",
      products: 8,
      active: false,
      createdAt: "28 July 2026",
    },
    {
      id: 4,
      name: "Food",
      products: 31,
      active: true,
      createdAt: "30 July 2026",
    },
  ]);

  const toggleStatus = (id) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === id
          ? { ...category, active: !category.active }
          : category,
      ),
    );
  };

  const handleEdit = (category) => {
    console.log("Edit:", category);
  };

  const handleDelete = (id) => {
    setCategories((prevCategories) =>
      prevCategories.filter((category) => category.id !== id),
    );
  };

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
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
                key={category.id}
                className="border-b border-gray-100 transition hover:bg-slate-50">
                <td className="px-6 py-5 font-medium text-gray-500">
                  {index + 1}
                </td>

                <td className="px-6 py-5 font-semibold text-gray-900">
                  {category.name}
                </td>

                <td className="px-6 py-5 text-gray-600">{category.products}</td>

                {/* Status Toggle */}
                <td className="px-6 py-5">
                  <button
                    type="button"
                    onClick={() => toggleStatus(category.id)}
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
                  {category.createdAt}
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
                      onClick={() => handleDelete(category.id)}
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
      </div>
    </div>
  );
};

export default CategoryList;
