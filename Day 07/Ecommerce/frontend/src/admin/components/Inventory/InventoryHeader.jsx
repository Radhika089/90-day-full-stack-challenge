import { Boxes, Package, AlertTriangle, CircleX } from "lucide-react";

const InventoryHeader = ({ products }) => {
  const totalProducts = products.length;
  const lowStock = products.filter(
    (product) => product.stock > 0 && product.stock <= 5,
  ).length;
  const outOfStock = products.filter((product) => product.stock === 0).length;

  const stats = [
    {
      label: "Total Products",
      value: totalProducts,
      icon: Boxes,
    },
    {
      label: "In Stock",
      value: products.filter((product) => product.stock > 5).length,
      icon: Package,
    },
    {
      label: "Low Stock",
      value: lowStock,
      icon: AlertTriangle,
    },
    {
      label: "Out of Stock",
      value: outOfStock,
      icon: CircleX,
    },
  ];

  return (
    <div className="mb-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          Inventory
        </h1>
        <p className="mt-1.5 text-sm text-gray-500">
          Monitor stock levels and manage product inventory
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="rounded-2xl border border-gray-200 bg-white p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">{label}</p>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF5F1] text-[#315C4A]">
                <Icon size={19} />
              </div>
            </div>
            <p className="mt-4 text-2xl font-semibold text-gray-900">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InventoryHeader;
