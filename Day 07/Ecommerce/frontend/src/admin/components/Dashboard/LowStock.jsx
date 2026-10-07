import { ArrowUpRight, AlertTriangle } from "lucide-react";

const LowStock = () => {
  const products = [
    {
      name: "Ethiopian Roast",
      category: "Brews",
      stock: 2,
    },
    {
      name: "Classic French Press",
      category: "Gear",
      stock: 3,
    },
    {
      name: "Ceramic Coffee Dripper",
      category: "Gear",
      stock: 4,
    },
    {
      name: "Cold Brew Bottle",
      category: "Accessories",
      stock: 1,
    },
    {
      name: "House Blend",
      category: "Brews",
      stock: 5,
    },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Low Stock Products
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            Products that need your attention
          </p>
        </div>

        <button
          type="button"
          className="flex items-center gap-1 text-xs font-medium text-[#315C4A] transition hover:opacity-70">
          View inventory
          <ArrowUpRight size={14} />
        </button>
      </div>

      {/* Products */}
      <div className="divide-y divide-gray-100">
        {products.map((product) => (
          <div
            key={product.name}
            className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
            {/* Product */}
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EEF5F1] text-[#315C4A]">
                <AlertTriangle size={17} strokeWidth={1.8} />
              </div>

              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-gray-800">
                  {product.name}
                </p>

                <p className="mt-1 text-xs text-gray-400">{product.category}</p>
              </div>
            </div>

            {/* Stock */}
            <div className="shrink-0 text-right">
              <p
                className={`text-sm font-semibold ${
                  product.stock <= 2 ? "text-red-500" : "text-amber-500"
                }`}>
                {product.stock}
              </p>

              <p className="mt-1 text-[11px] text-gray-400">left</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LowStock;
