import { ArrowUpRight } from "lucide-react";

const RecentOrders = () => {
  const orders = [
    {
      id: "#ORD-1024",
      customer: "Rahul Sharma",
      date: "Oct 7, 2026",
      amount: "₹2,450",
      status: "Delivered",
    },
    {
      id: "#ORD-1023",
      customer: "Priya Singh",
      date: "Oct 7, 2026",
      amount: "₹1,850",
      status: "Processing",
    },
    {
      id: "#ORD-1022",
      customer: "Aman Kumar",
      date: "Oct 6, 2026",
      amount: "₹3,200",
      status: "Shipped",
    },
    {
      id: "#ORD-1021",
      customer: "Neha Verma",
      date: "Oct 6, 2026",
      amount: "₹950",
      status: "Pending",
    },
    {
      id: "#ORD-1020",
      customer: "Karan Mehta",
      date: "Oct 5, 2026",
      amount: "₹1,680",
      status: "Delivered",
    },
  ];

  const statusStyles = {
    Delivered: "bg-[#EEF5F1] text-[#315C4A]",
    Processing: "bg-amber-50 text-amber-600",
    Shipped: "bg-blue-50 text-blue-600",
    Pending: "bg-gray-100 text-gray-600",
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-900">
            Recent Orders
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            Latest orders from your store
          </p>
        </div>

        <button
          type="button"
          className="flex items-center gap-1 text-xs font-medium text-[#315C4A] transition hover:opacity-70">
          View all
          <ArrowUpRight size={14} />
        </button>
      </div>

      {/* Orders */}
      <div className="divide-y divide-gray-100">
        {orders.map((order) => (
          <div
            key={order.id}
            className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
            {/* Customer */}
            <div className="min-w-0">
              <p className="text-sm font-medium text-gray-800">
                {order.customer}
              </p>

              <div className="mt-1 flex items-center gap-2">
                <span className="text-xs text-gray-400">{order.id}</span>

                <span className="text-gray-300">•</span>

                <span className="text-xs text-gray-400">{order.date}</span>
              </div>
            </div>

            {/* Amount + Status */}
            <div className="flex shrink-0 items-center gap-4">
              <p className="text-sm font-medium text-gray-800">
                {order.amount}
              </p>

              <span
                className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${statusStyles[order.status]}`}>
                {order.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrders;
