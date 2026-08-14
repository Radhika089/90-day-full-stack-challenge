import {
  ArrowDown,
  ArrowUp,
  CircleCheck,
  CircleX,
  Clock3,
  ShoppingCart,
} from "lucide-react";
import React from "react";

const Stats = ({ orders = [] }) => {
  const totalOrders = orders.length;

  const pendingOrders = orders.filter(
    (order) => order.orderStatus === "Pending",
  ).length;

  const completedOrders = orders.filter(
    (order) => order.orderStatus === "Delivered",
  ).length;

  const cancelledOrders = orders.filter(
    (order) => order.orderStatus === "Cancelled",
  ).length;

  const stats = [
    {
      title: "Total Orders",
      value: totalOrders,
      change: "12.5%",
      trend: "up",
      icon: ShoppingCart,
      iconBg: "bg-sky-50",
      iconColor: "text-sky-600",
      changeColor: "text-emerald-600",
    },
    {
      title: "Pending Orders",
      value: pendingOrders,
      change: "8.2%",
      trend: "up",
      icon: Clock3,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      changeColor: "text-emerald-600",
    },
    {
      title: "Completed Orders",
      value: completedOrders,
      change: "15.4%",
      trend: "up",
      icon: CircleCheck,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      changeColor: "text-emerald-600",
    },
    {
      title: "Cancelled Orders",
      value: cancelledOrders,
      change: "3.1%",
      trend: "down",
      icon: CircleX,
      iconBg: "bg-red-50",
      iconColor: "text-red-600",
      changeColor: "text-red-600",
    },
  ];

  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            {/* Top */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">
                  {stat.value}
                </h2>
              </div>

              {/* Icon */}
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${stat.iconBg} ${stat.iconColor}`}>
                <Icon size={20} />
              </div>
            </div>

            {/* Change */}
            <div className="mt-5 flex items-center gap-2 text-sm">
              <span
                className={`flex items-center gap-1 font-semibold ${stat.changeColor}`}>
                {stat.trend === "up" ? (
                  <ArrowUp size={16} />
                ) : (
                  <ArrowDown size={16} />
                )}

                {stat.change}
              </span>

              <span className="text-gray-400">from last month</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stats;
