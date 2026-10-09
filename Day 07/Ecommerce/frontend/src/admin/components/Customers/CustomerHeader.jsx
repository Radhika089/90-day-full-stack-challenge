import { Users, UserCheck, ShoppingBag, IndianRupee } from "lucide-react";

const CustomerHeader = ({ customers }) => {
  const totalOrders = customers.reduce(
    (total, customer) => total + customer.orders,
    0,
  );

  const totalSpent = customers.reduce(
    (total, customer) => total + customer.totalSpent,
    0,
  );

  const stats = [
    { label: "Total Customers", value: customers.length, icon: Users },
    {
      label: "Returning Customers",
      value: customers.filter((customer) => customer.orders > 1).length,
      icon: UserCheck,
    },
    { label: "Orders Placed", value: totalOrders, icon: ShoppingBag },
    {
      label: "Customer Revenue",
      value: `₹${totalSpent.toLocaleString("en-IN")}`,
      icon: IndianRupee,
    },
  ];

  return (
    <div className="mb-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
          Customers
        </h1>
        <p className="mt-1.5 text-sm text-gray-500">
          View your customers and their shopping activity
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

export default CustomerHeader;
