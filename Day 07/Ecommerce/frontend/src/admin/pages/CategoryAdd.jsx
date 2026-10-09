import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import CategoryForm from "../components/Categories/CategoryForm";
import { addCategory, getCategories } from "../utils/categoryStorage";

const CategoryAdd = () => {
  const navigate = useNavigate();
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (formData) => {
    const duplicate = getCategories().some(
      (category) => category.name.toLowerCase() === formData.name.toLowerCase(),
    );

    if (duplicate) {
      await Swal.fire({
        title: "Category already exists",
        text: "Please choose a different category name.",
        icon: "warning",
        confirmButtonColor: "#315C4A",
      });

      return;
    }

    setSaving(true);

    try {
      addCategory(formData);

      await Swal.fire({
        title: "Category added!",
        text: `${formData.name} has been added successfully.`,
        icon: "success",
        confirmButtonColor: "#315C4A",
        timer: 1600,
        showConfirmButton: false,
      });

      navigate("/admin/categories");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-4xl">
      <button
        type="button"
        onClick={() => navigate("/admin/categories")}
        className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#315C4A]">
        <ArrowLeft size={17} />
        Back to Categories
      </button>

      <div className="mb-7">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          Add Category
        </h1>
        <p className="mt-1.5 text-sm text-gray-500">
          Create a new category for your store.
        </p>
      </div>

      <CategoryForm
        onSubmit={handleSubmit}
        submitLabel={saving ? "Saving..." : "Add Category"}
      />
    </div>
  );
};

export default CategoryAdd;
