import { ShoppingBag, Clock3, Truck, CheckCircle2 } from "lucide-react";

const OrderHeader = ({ orders }) => {
  const stats = [
    {
      label: "Total Orders",
      value: orders.length,
      icon: ShoppingBag,
    },
    {
      label: "Pending",
      value: orders.filter((order) => order.orderStatus === "pending").length,
      icon: Clock3,
    },
    {
      label: "Shipped",
      value: orders.filter((order) => order.orderStatus === "shipped").length,
      icon: Truck,
    },
    {
      label: "Delivered",
      value: orders.filter((order) => order.orderStatus === "delivered").length,
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="mb-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          Orders
        </h1>
        <p className="mt-1.5 text-sm text-gray-500">
          Manage orders, payments, and delivery status
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

export default OrderHeader;
