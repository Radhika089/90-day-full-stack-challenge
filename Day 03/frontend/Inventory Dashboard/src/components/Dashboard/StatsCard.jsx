import { Layers } from "lucide-react";
import React from "react";

const stats = [
  {
    title: "Total Products",
    value: "563",
    change: "+12 this month",
  },
  {
    title: "Categories",
    value: "25",
    change: "+2 this month",
  },
  {
    title: "Orders",
    value: "180",
    change: "+18 this month",
  },
  {
    title: "Revenue",
    value: "₹56,357",
    change: "+8% this month",
  },
];

const StatsCard = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-9">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">{stat.title}</p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                {stat.value}
              </h2>

              <p className="mt-2 text-sm font-medium text-[#29b354]">
                {stat.change}
              </p>
            </div>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#29b354]/10">
              <Layers className="h-7 w-7 text-[#29b354]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
