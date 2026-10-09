import { X, MapPin, Package, CreditCard } from "lucide-react";

const statusColors = {
  pending: "bg-amber-50 text-amber-700",
  processing: "bg-orange-50 text-orange-700",
  shipped: "bg-blue-50 text-blue-700",
  delivered: "bg-[#EEF5F1] text-[#315C4A]",
  cancelled: "bg-red-50 text-red-600",
};

const paymentColors = {
  paid: "bg-[#EEF5F1] text-[#315C4A]",
  pending: "bg-amber-50 text-amber-700",
  failed: "bg-red-50 text-red-600",
};

const formatLabel = (value) => value.charAt(0).toUpperCase() + value.slice(1);

const formatDate = (date) =>
  new Date(date).toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

const formatMoney = (amount) =>
  `₹${amount.toLocaleString("en-IN", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;

const OrderDetails = ({ order, onClose, onStatusChange }) => {
  if (!order) return null;

  const nextStatuses = {
    pending: ["processing", "cancelled"],
    processing: ["shipped", "cancelled"],
    shipped: ["delivered", "cancelled"],
    delivered: [],
    cancelled: [],
  };

  const address = order.shippingAddress;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gray-900/40 p-4">
      <div className="my-auto w-full max-w-3xl rounded-2xl bg-white shadow-xl">
        <div className="flex items-start justify-between border-b border-gray-100 p-5 sm:p-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Order Details
            </p>
            <h2 className="mt-1 text-xl font-semibold text-gray-900">
              #{order._id.slice(-6).toUpperCase()}
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Placed {formatDate(order.createdAt)}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close order details"
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700">
            <X size={19} />
          </button>
        </div>

        <div className="max-h-[70vh] space-y-6 overflow-y-auto p-5 sm:p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 p-4">
              <div className="mb-3 flex items-center gap-2 text-gray-700">
                <Package size={17} />
                <h3 className="text-sm font-semibold">Order Status</h3>
              </div>
              <span
                className={`inline-flex rounded-full px-3 py-1.5 text-xs font-medium ${statusColors[order.orderStatus]}`}>
                {formatLabel(order.orderStatus)}
              </span>
              <p className="mt-3 text-xs text-gray-400">
                Last updated: {formatDate(order.updatedAt)}
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-4">
              <div className="mb-3 flex items-center gap-2 text-gray-700">
                <CreditCard size={17} />
                <h3 className="text-sm font-semibold">Payment</h3>
              </div>
              <p className="text-sm text-gray-600">
                {order.paymentMethod === "cod"
                  ? "Cash on Delivery"
                  : "Razorpay"}
              </p>
              <span
                className={`mt-2 inline-flex rounded-full px-3 py-1.5 text-xs font-medium ${paymentColors[order.paymentStatus]}`}>
                {formatLabel(order.paymentStatus)}
              </span>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-800">
              Customer Information
            </h3>
            <div className="grid gap-4 rounded-xl border border-gray-200 p-4 sm:grid-cols-2">
              <div>
                <p className="text-xs text-gray-400">Full name</p>
                <p className="mt-1 text-sm font-medium text-gray-700">
                  {address.name}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400">Phone</p>
                <p className="mt-1 text-sm text-gray-700">{address.phone}</p>
              </div>
              <div className="sm:col-span-2">
                <p className="text-xs text-gray-400">Email</p>
                <p className="mt-1 break-all text-sm text-gray-700">
                  {address.email || "Not provided"}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-800">
              <MapPin size={17} />
              Shipping Address
            </h3>
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-sm leading-6 text-gray-600">
                {address.address}
                <br />
                {address.city}, {address.state} - {address.pincode}
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-800">
              Items Ordered ({order.items.length})
            </h3>
            <div className="divide-y divide-gray-100 rounded-xl border border-gray-200 px-4">
              {order.items.map((item, index) => (
                <div
                  key={item.product?._id || index}
                  className="flex items-center justify-between gap-3 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      {item.product?.name || "Product"}
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      {formatMoney(item.price)} × {item.quantity}
                    </p>
                  </div>
                  <p className="whitespace-nowrap text-sm font-semibold text-gray-800">
                    {formatMoney(item.price * item.quantity)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl bg-gray-50 p-4">
            <div className="space-y-3">
              <div className="flex justify-between gap-4 text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="text-gray-700">
                  {formatMoney(order.subtotal)}
                </span>
              </div>
              <div className="flex justify-between gap-4 text-sm">
                <span className="text-gray-500">Shipping fee</span>
                <span className="text-gray-700">
                  {formatMoney(order.shippingFee)}
                </span>
              </div>
              <div className="flex justify-between gap-4 text-sm">
                <span className="text-gray-500">Discount</span>
                <span className="text-[#315C4A]">
                  −{formatMoney(order.discount)}
                </span>
              </div>
              <div className="flex justify-between gap-4 border-t border-gray-200 pt-3">
                <span className="font-semibold text-gray-800">
                  Total Amount
                </span>
                <span className="text-lg font-semibold text-gray-900">
                  {formatMoney(order.totalAmount)}
                </span>
              </div>
            </div>
          </div>

          {nextStatuses[order.orderStatus].length > 0 && (
            <div>
              <h3 className="mb-3 text-sm font-semibold text-gray-800">
                Update Order Status
              </h3>
              <div className="flex flex-wrap gap-2">
                {nextStatuses[order.orderStatus].map((nextStatus) => (
                  <button
                    key={nextStatus}
                    type="button"
                    onClick={() => onStatusChange(order, nextStatus)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                      nextStatus === "cancelled"
                        ? "border border-red-200 text-red-600 hover:bg-red-50"
                        : "bg-[#315C4A] text-white hover:bg-[#284C3D]"
                    }`}>
                    Mark {formatLabel(nextStatus)}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end border-t border-gray-100 p-5">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-gray-200 px-5 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50">
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
