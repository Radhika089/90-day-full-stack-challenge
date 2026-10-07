import { IndianRupee, ShoppingBag, Users, Package } from "lucide-react";

const StatsCard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "₹56,357",
      change: "+8.2%",
      description: "from last month",
      icon: IndianRupee,
    },
    {
      title: "Total Orders",
      value: "180",
      change: "+12.5%",
      description: "from last month",
      icon: ShoppingBag,
    },
    {
      title: "Customers",
      value: "248",
      change: "+9.4%",
      description: "from last month",
      icon: Users,
    },
    {
      title: "Products",
      value: "86",
      change: "5",
      description: "low stock",
      icon: Package,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="group rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-sm">
            <div className="flex items-start justify-between">
              {/* Content */}
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {stat.title}
                </p>

                <p className="mt-3 text-2xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </p>

                <p className="mt-2 text-xs text-gray-400">
                  <span className="font-medium text-[#315C4A]">
                    {stat.change}
                  </span>{" "}
                  {stat.description}
                </p>
              </div>

              {/* Icon */}
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF5F1] text-[#315C4A] transition-colors group-hover:bg-[#315C4A] group-hover:text-white">
                <Icon size={19} strokeWidth={1.8} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCard;
