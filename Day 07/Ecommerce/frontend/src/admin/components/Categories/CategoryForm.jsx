import { ArrowLeft, Save } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CategoryForm = ({
  initialCategory,
  onSubmit,
  submitLabel = "Add Category",
}) => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    onSubmit({
      name: formData.get("name").trim(),
      description: formData.get("description").trim(),
      status: initialCategory?.status ?? true,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-7">
        <div className="mb-6 border-b border-gray-100 pb-5">
          <h2 className="text-base font-semibold text-gray-900">
            Category Information
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Enter the details for this store category.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label
              htmlFor="category-name"
              className="mb-2 block text-sm font-medium text-gray-700">
              Category Name <span className="text-red-500">*</span>
            </label>

            <input
              id="category-name"
              name="name"
              type="text"
              required
              maxLength={60}
              defaultValue={initialCategory?.name ?? ""}
              placeholder="e.g. Coffee Beans"
              className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#315C4A] focus:ring-2 focus:ring-[#315C4A]/10"
            />
          </div>

          <div>
            <label
              htmlFor="category-description"
              className="mb-2 block text-sm font-medium text-gray-700">
              Description
            </label>

            <textarea
              id="category-description"
              name="description"
              rows={4}
              maxLength={300}
              defaultValue={initialCategory?.description ?? ""}
              placeholder="Describe the products in this category..."
              className="w-full resize-y rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#315C4A] focus:ring-2 focus:ring-[#315C4A]/10"
            />

            <p className="mt-2 text-xs text-gray-400">
              A short description helps keep your categories organized.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => navigate("/admin/categories")}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50">
          <ArrowLeft size={16} />
          Cancel
        </button>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#315C4A] px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#284C3D]">
          <Save size={16} />
          {submitLabel}
        </button>
      </div>
    </form>
  );
};

export default CategoryForm;
