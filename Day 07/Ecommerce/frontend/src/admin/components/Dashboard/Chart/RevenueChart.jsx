import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const RevenueChart = () => {
  const revenueData = [
    { month: "Jan", revenue: 42000 },
    { month: "Feb", revenue: 48000 },
    { month: "Mar", revenue: 45000 },
    { month: "Apr", revenue: 52000 },
    { month: "May", revenue: 49000 },
    { month: "Jun", revenue: 56357 },
  ];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <div className="mb-6">
        <h2 className="text-base font-semibold text-gray-900">
          Revenue Overview
        </h2>
        <p className="mt-1 text-xs text-gray-400">
          Monthly revenue performance
        </p>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={revenueData}
            margin={{
              top: 5,
              right: 10,
              left: 0,
              bottom: 5,
            }}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#E5E7EB"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
              tickFormatter={(value) => `₹${value / 1000}k`}
            />

            <Tooltip
              formatter={(value) => [`₹${value.toLocaleString()}`, "Revenue"]}
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            />

            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#315C4A"
              strokeWidth={2.5}
              dot={{
                r: 4,
                fill: "#315C4A",
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;
