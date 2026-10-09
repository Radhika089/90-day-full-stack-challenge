import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CategoryHeader = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          Categories
        </h1>
        <p className="mt-1.5 text-sm text-gray-500">
          Organize and manage your store categories
        </p>
      </div>

      <button
        type="button"
        onClick={() => navigate("/admin/categories/add")}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#315C4A] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#284C3D]">
        <Plus size={17} />
        Add Category
      </button>
    </div>
  );
};

export default CategoryHeader;
