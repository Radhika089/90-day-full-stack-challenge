import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Check,
  Coffee,
  Package,
  Truck,
  XCircle,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOrderById, cancelOrder } from "../api/orderApi";

const OrderDetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cancelling, setCancelling] = useState(false);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const data = await getOrderById(orderId);

        if (data.success) {
          navigate("/orders");
        } else {
          setError(data.message || "Order not found");
        }
      } catch (error) {
        console.error("Get order error:", error);
        setError("Unable to load order details");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const handleCancelOrder = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this order?",
    );

    if (!confirmed) return;

    try {
      setCancelling(true);

      const data = await cancelOrder(orderId);

      if (data.success) {
        setOrder(data.order);
      } else {
        window.alert(data.message || "Failed to cancel order");
      }
    } catch (error) {
      console.error("Cancel order error:", error);

      window.alert(error.response?.data?.message || "Failed to cancel order");
    } finally {
      setCancelling(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fffaf4] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="h-8 w-48 animate-pulse rounded bg-[#ead8c5]" />
          <div className="mt-8 h-96 animate-pulse rounded-3xl bg-[#f3e5d3]" />
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-screen bg-[#fffaf4] px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <Coffee className="mx-auto text-[#a05f38]" size={42} />

          <h1 className="mt-5 text-2xl font-semibold text-[#431b0d]">
            Order not found
          </h1>

          <p className="mt-2 text-[#795548]">
            {error || "We couldn't find this order."}
          </p>

          <Link
            to="/orders"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#431b0d] px-6 py-3 text-sm font-medium text-white">
            <ArrowLeft size={16} />
            Back to Orders
          </Link>
        </div>
      </div>
    );
  }

  const canCancel = !["shipped", "delivered", "cancelled"].includes(
    order.orderStatus,
  );

  return (
    <div className="min-h-screen bg-[#fffaf4] px-6 py-12 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Back */}
        <button
          onClick={() => navigate("/orders")}
          className="mb-8 flex items-center gap-2 text-sm text-[#795548] transition hover:text-[#431b0d]">
          <ArrowLeft size={17} />
          Back to My Orders
        </button>

        {/* Header */}
        <div className="flex flex-col gap-5 border-b border-[#ead8c5] pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[#a05f38]">
              Order Details
            </p>

            <h1 className="mt-2 text-3xl font-semibold text-[#431b0d] md:text-4xl">
              #AURA-{order._id.slice(-6).toUpperCase()}
            </h1>

            <p className="mt-2 text-sm text-[#795548]">
              Placed on {formatDate(order.createdAt)}
            </p>
          </div>

          <span className="w-fit rounded-full bg-[#f3e5d3] px-5 py-2 text-sm font-medium capitalize text-[#795548]">
            {order.orderStatus}
          </span>
        </div>

        {/* Order Status */}
        <div className="mt-8 rounded-3xl border border-[#ead8c5] bg-white p-6 md:p-8">
          <h2 className="text-lg font-semibold text-[#431b0d]">Order Status</h2>

          <div className="mt-8 grid grid-cols-3">
            <div className="relative text-center">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#431b0d] text-white">
                <Check size={19} />
              </div>

              <p className="mt-3 text-sm font-medium text-[#431b0d]">
                Confirmed
              </p>
            </div>

            <div className="relative text-center">
              <div
                className={`mx-auto flex h-11 w-11 items-center justify-center rounded-full ${
                  ["processing", "shipped", "delivered"].includes(
                    order.orderStatus,
                  )
                    ? "bg-[#431b0d] text-white"
                    : "bg-[#f3e5d3] text-[#a98a78]"
                }`}>
                <Package size={19} />
              </div>

              <p className="mt-3 text-sm font-medium text-[#431b0d]">
                Processing
              </p>
            </div>

            <div className="relative text-center">
              <div
                className={`mx-auto flex h-11 w-11 items-center justify-center rounded-full ${
                  ["shipped", "delivered"].includes(order.orderStatus)
                    ? "bg-[#431b0d] text-white"
                    : "bg-[#f3e5d3] text-[#a98a78]"
                }`}>
                <Truck size={19} />
              </div>

              <p className="mt-3 text-sm font-medium text-[#431b0d]">
                {order.orderStatus === "delivered" ? "Delivered" : "Shipped"}
              </p>
            </div>
          </div>

          {order.orderStatus === "cancelled" && (
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-[#f8e8e5] p-4 text-sm text-[#8a3d32]">
              <XCircle size={20} />
              This order has been cancelled.
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* Items */}
          <div className="rounded-3xl border border-[#ead8c5] bg-white p-6 md:p-8">
            <h2 className="text-lg font-semibold text-[#431b0d]">Your Items</h2>

            <div className="mt-6 divide-y divide-[#eee1d4]">
              {order.items.map((item) => (
                <div
                  key={item._id}
                  className="flex gap-4 py-5 first:pt-0 last:pb-0">
                  <Link to={`/products/${item.product?._id}`}>
                    <img
                      src={item.product?.image}
                      alt={item.product?.name}
                      className="h-24 w-24 rounded-2xl object-cover"
                    />
                  </Link>

                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div>
                      <p className="text-xs text-[#a05f38]">
                        {item.product?.category}
                      </p>

                      <h3 className="mt-1 font-medium text-[#431b0d]">
                        {item.product?.name}
                      </h3>

                      <p className="mt-1 text-sm text-[#795548]">
                        Quantity: {item.quantity}
                      </p>
                    </div>

                    <p className="mt-2 font-medium text-[#431b0d]">
                      ₹{(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-6">
            <div className="rounded-3xl border border-[#ead8c5] bg-white p-6">
              <h2 className="text-lg font-semibold text-[#431b0d]">
                Order Summary
              </h2>

              <div className="mt-6 space-y-3 text-sm">
                <div className="flex justify-between text-[#795548]">
                  <span>Subtotal</span>
                  <span>₹{order.subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-[#795548]">
                  <span>Shipping</span>
                  <span>
                    {order.shippingFee === 0
                      ? "Free"
                      : `₹${order.shippingFee.toFixed(2)}`}
                  </span>
                </div>

                <div className="border-t border-[#eee1d4] pt-4">
                  <div className="flex justify-between text-base font-semibold text-[#431b0d]">
                    <span>Total</span>
                    <span>₹{order.totalAmount.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="rounded-3xl border border-[#ead8c5] bg-white p-6">
              <h2 className="text-lg font-semibold text-[#431b0d]">Payment</h2>

              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#795548]">Method</span>
                  <span className="font-medium capitalize text-[#431b0d]">
                    {order.paymentMethod === "cod"
                      ? "Cash on Delivery"
                      : "Razorpay"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-[#795548]">Status</span>
                  <span className="font-medium capitalize text-[#431b0d]">
                    {order.paymentStatus}
                  </span>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="rounded-3xl border border-[#ead8c5] bg-white p-6">
              <h2 className="text-lg font-semibold text-[#431b0d]">
                Shipping Address
              </h2>

              <div className="mt-4 text-sm leading-6 text-[#795548]">
                <p className="font-medium text-[#431b0d]">
                  {order.shippingAddress.name}
                </p>

                <p>{order.shippingAddress.address}</p>

                <p>
                  {order.shippingAddress.city}, {order.shippingAddress.state} -{" "}
                  {order.shippingAddress.pincode}
                </p>

                <p className="mt-2">{order.shippingAddress.phone}</p>
              </div>
            </div>

            {/* Cancel */}
            {canCancel && (
              <button
                type="button"
                onClick={handleCancelOrder}
                disabled={cancelling}
                className="w-full rounded-full border border-[#c98b78] px-5 py-3 text-sm font-medium text-[#8a3d32] transition hover:bg-[#f8e8e5]">
                {cancelling ? "Cancelling..." : "Cancel Order"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
