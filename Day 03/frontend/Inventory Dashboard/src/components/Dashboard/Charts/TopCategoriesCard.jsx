import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  {
    name: "Electronics",
    value: 42,
  },
  {
    name: "Fashion",
    value: 28,
  },
  {
    name: "Furniture",
    value: 18,
  },
  {
    name: "Groceries",
    value: 12,
  },
];

const COLORS = ["#A7F3D0", "#BFDBFE", "#FDE68A", "#FBCFE8"];

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-3 shadow-lg">
      <h3 className="font-semibold">{payload[0].name}</h3>

      <p className="mt-1 text-sm text-gray-600">
        {payload[0].value}% of inventory
      </p>
    </div>
  );
};

const TopCategoriesCard = () => {
  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Top Categories</h2>

        <button className="text-sm font-medium text-[#29b354]">View All</button>
      </div>

      {/* Chart */}

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={65}
              outerRadius={90}
              paddingAngle={4}>
              {data.map((entry, index) => (
                <Cell key={entry.name} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}

      <div className="mt-4 space-y-4">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor: COLORS[index],
                }}
              />

              <p className="text-sm text-gray-600">{item.name}</p>
            </div>

            <p className="font-semibold">{item.value}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategoriesCard;
