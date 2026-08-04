import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
} from "recharts";

const data = [
  { month: "Jan", purchase: 32, sales: 25 },
  { month: "Feb", purchase: 28, sales: 22 },
  { month: "Mar", purchase: 40, sales: 35 },
  { month: "Apr", purchase: 35, sales: 30 },
  { month: "May", purchase: 48, sales: 42 },
  { month: "Jun", purchase: 44, sales: 38 },
  { month: "Jul", purchase: 38, sales: 31 },
  { month: "Aug", purchase: 50, sales: 45 },
  { month: "Sep", purchase: 46, sales: 40 },
  { month: "Oct", purchase: 42, sales: 34 },
  { month: "Nov", purchase: 54, sales: 48 },
  { month: "Dec", purchase: 58, sales: 52 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-xl">
      <h3 className="mb-3 font-semibold text-gray-800">{label}</h3>

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-sky-300"></span>
            <p className="text-sm text-gray-600">Purchase</p>
          </div>

          <p className="font-semibold">{payload[0].value}K</p>
        </div>

        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#29b354]"></span>
            <p className="text-sm text-gray-600">Sales</p>
          </div>

          <p className="font-semibold">{payload[1].value}K</p>
        </div>

        <hr />

        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Difference</p>

          <p className="font-bold text-[#29b354]">
            {payload[1].value - payload[0].value}K
          </p>
        </div>
      </div>
    </div>
  );
};

const SalesPurchaseChart = () => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Sales Overview</h2>

          <p className="mt-1 text-gray-500">
            Sales vs Purchase throughout the year
          </p>
        </div>

        <select className="rounded-xl border border-gray-200 px-4 py-2 text-sm outline-none focus:border-[#29b354]">
          <option>This Year</option>
          <option>Last Year</option>
        </select>
      </div>

      {/* Summary */}

      <div className="mb-8 flex gap-8">
        <div>
          <p className="text-sm text-gray-500">Total Sales</p>

          <h2 className="text-3xl font-bold text-[#29b354]">₹2.48M</h2>
        </div>

        <div>
          <p className="text-sm text-gray-500">Total Purchase</p>

          <h2 className="text-3xl font-bold text-sky-400">₹2.12M</h2>
        </div>
      </div>

      {/* Chart */}

      <div className="h-[360px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={6} barCategoryGap="35%">
            <CartesianGrid
              stroke="#F1F5F9"
              vertical={false}
              strokeDasharray="3 3"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "#6B7280",
                fontSize: 13,
              }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}K`}
              tick={{
                fill: "#6B7280",
                fontSize: 13,
              }}
            />

            <Tooltip cursor={{ fill: "#F8FAFC" }} content={<CustomTooltip />} />

            <Bar dataKey="purchase" radius={[8, 8, 0, 0]} barSize={16}>
              {data.map((_, index) => (
                <Cell key={index} fill="#BFDBFE" />
              ))}
            </Bar>

            <Bar dataKey="sales" radius={[8, 8, 0, 0]} barSize={16}>
              {data.map((_, index) => (
                <Cell key={index} fill="#86EFAC" />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesPurchaseChart;
