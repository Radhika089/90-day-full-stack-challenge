import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProductForm from "../components/Products/ProductForm";

const ProductEdit = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <button
            type="button"
            onClick={() => navigate("/admin/products")}
            className="mb-3 flex items-center gap-2 text-sm text-gray-500 transition hover:text-[#315C4A]">
            <ArrowLeft size={16} />
            Back to Products
          </button>

          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Edit Product
          </h1>

          <p className="mt-1.5 text-sm text-gray-500">
            Update your product information.
          </p>
        </div>
      </div>

      <ProductForm mode="edit" />
    </div>
  );
};

export default ProductEdit;
