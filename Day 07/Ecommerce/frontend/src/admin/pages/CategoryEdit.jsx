import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import CategoryForm from "../components/Categories/CategoryForm";
import {
  getCategories,
  getCategoryById,
  updateCategory,
} from "../utils/categoryStorage";

const CategoryEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [category, setCategory] = useState(() => getCategoryById(id));
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setCategory(getCategoryById(id));
  }, [id]);

  useEffect(() => {
    if (!category) {
      navigate("/admin/categories", { replace: true });
    }
  }, [category, navigate]);

  const handleSubmit = async (formData) => {
    const duplicate = getCategories().some(
      (item) =>
        item.id !== String(id) &&
        item.name.toLowerCase() === formData.name.toLowerCase(),
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
      updateCategory(id, formData);

      await Swal.fire({
        title: "Category updated!",
        text: `${formData.name} has been updated successfully.`,
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

  if (!category) {
    return null;
  }

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
          Edit Category
        </h1>
        <p className="mt-1.5 text-sm text-gray-500">
          Update the information for {category.name}.
        </p>
      </div>

      <CategoryForm
        key={category.id}
        initialCategory={category}
        onSubmit={handleSubmit}
        submitLabel={saving ? "Saving..." : "Update Category"}
      />
    </div>
  );
};

export default CategoryEdit;
