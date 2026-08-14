import React from "react";
import { FileDown } from "lucide-react";

const Header = ({ orders = [] }) => {
  const handleExport = () => {
    if (orders.length === 0) {
      return;
    }

    const headers = [
      "Order ID",
      "Customer",
      "Phone",
      "Items",
      "Total Amount",
      "Order Status",
      "Payment Status",
      "Created At",
    ];

    const rows = orders.map((order) => [
      order.orderId,
      order.customer?.name || "N/A",
      order.customer?.phone || "N/A",
      order.items?.length || 0,
      order.totalAmount || 0,
      order.orderStatus || "N/A",
      order.paymentStatus || "N/A",
      new Date(order.createdAt).toLocaleDateString("en-IN"),
    ]);

    const csvContent = [
      headers.join(","),
      ...rows.map((row) =>
        row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(","),
      ),
    ].join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "orders.csv";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold tracking-wider text-zinc-800">
          Orders
        </h1>

        <p className="mt-2 text-md text-gray-500">
          Manage and track customer orders
        </p>
      </div>

      <button
        type="button"
        onClick={handleExport}
        disabled={orders.length === 0}
        className="flex items-center gap-2 rounded-2xl bg-zinc-900 px-6 py-3 text-white transition hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50">
        <FileDown size={18} />
        Export
      </button>
    </div>
  );
};

export default Header;
