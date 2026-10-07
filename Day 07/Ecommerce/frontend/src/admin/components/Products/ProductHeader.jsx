const ProductHeader = () => {
  return (
    <div className="mb-8 w-full">
      <div className="flex items-center justify-between">
        {/* Left */}
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Products
          </h1>

          <p className="mt-1.5 text-sm text-gray-500">
            Manage your store products
          </p>
        </div>

        {/* Right */}
        <div>
          <button className="rounded-xl bg-[#315C4A] px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-[#284C3D]">
            + Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
