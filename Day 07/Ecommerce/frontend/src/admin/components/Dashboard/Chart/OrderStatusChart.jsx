import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const OrderStatusChart = () => {
  const orderData = [
    { status: "Delivered", orders: 94 },
    { status: "Shipped", orders: 32 },
    { status: "Processing", orders: 24 },
    { status: "Pending", orders: 18 },
    { status: "Cancelled", orders: 12 },
  ];

  const COLORS = ["#315C4A", "#6F8F80", "#9FB5A9", "#C8D5CF", "#E5E7EB"];

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-gray-900">Order Status</h2>

        <p className="mt-1 text-xs text-gray-400">Current order distribution</p>
      </div>

      <div className="h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={orderData}
              dataKey="orders"
              nameKey="status"
              cx="50%"
              cy="50%"
              innerRadius={75}
              outerRadius={105}
              paddingAngle={3}
              stroke="none">
              {orderData.map((entry, index) => (
                <Cell key={entry.status} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>

            <Tooltip
              formatter={(value, name) => [value, name]}
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #E5E7EB",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-3">
        {orderData.map((item, index) => (
          <div
            key={item.status}
            className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              />

              <span className="text-gray-500">{item.status}</span>
            </div>

            <span className="font-medium text-gray-800">{item.orders}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderStatusChart;
