import React from "react";

import { Layers, Grid2x2, ShoppingCart, IndianRupee } from "lucide-react";

const stats = [
  {
    title: "Total Products",
    value: "563",
    change: "+12 this month",
    icon: Layers,
    color: "blue",
  },
  {
    title: "Categories",
    value: "25",
    change: "+2 this month",
    icon: Grid2x2,
    color: "yellow",
  },
  {
    title: "Orders",
    value: "180",
    change: "+18 this month",
    icon: ShoppingCart,
    color: "pink",
  },
  {
    title: "Revenue",
    value: "₹56,357",
    change: "+8% this month",
    icon: IndianRupee,
    color: "green",
  },
];

const colors = {
  blue: {
    bg: "bg-sky-100",
    text: "text-sky-500",
    change: "text-sky-500",
  },
  green: {
    bg: "bg-emerald-100",
    text: "text-emerald-500",
    change: "text-emerald-500",
  },
  yellow: {
    bg: "bg-amber-100",
    text: "text-amber-500",
    change: "text-amber-500",
  },
  pink: {
    bg: "bg-pink-100",
    text: "text-pink-500",
    change: "text-pink-500",
  },
};

const StatsCard = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-9">
      {stats.map((stat) => {
        const Icon = stat.icon;
        const style = colors[stat.color];
        return (
          <div
            key={stat.title}
            className="rounded-2xl bg-white p-6 shadow-sm border border-gray-200 hover:shadow-md transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{stat.title}</p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                  {stat.value}
                </h2>

                <p className={`mt-2 text-sm font-medium ${style.change}`}>
                  {stat.change}
                </p>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.bg}`}>
                <Icon className={`h-7 w-7 ${style.text}`} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCard;
