import { useEffect, useState } from "react";
import { ArrowRight, Coffee, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { getMyOrders } from "../api/orderApi";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getMyOrders();

        if (data.success) {
          setOrders(data.orders || []);
        } else {
          setError(data.message || "Failed to load orders");
        }
      } catch (error) {
        console.error("Get orders error:", error);
        setError("Unable to load your orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fffaf4] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="h-8 w-40 animate-pulse rounded bg-[#ead8c5]" />
          <div className="mt-8 space-y-5">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-48 animate-pulse rounded-2xl bg-[#f3e5d3]"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#fffaf4] px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <Coffee className="mx-auto mb-4 text-[#a05f38]" size={42} />

          <h1 className="text-2xl font-semibold text-[#431b0d]">
            Something went wrong
          </h1>

          <p className="mt-2 text-[#795548]">{error}</p>

          <button
            onClick={() => window.location.reload()}
            className="mt-6 rounded-full bg-[#431b0d] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#5c2816]">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#fffaf4] px-6 py-12 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-[#8c6b5a]">
          <Link to="/" className="transition hover:text-[#431b0d]">
            Home
          </Link>

          <ArrowRight size={14} />

          <span className="text-[#431b0d]">My Orders</span>
        </div>

        {/* Heading */}
        <div className="mb-10">
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#a05f38]">
            Your AURA journey
          </p>

          <h1 className="text-4xl font-semibold text-[#431b0d] md:text-5xl">
            My Orders
          </h1>

          <p className="mt-3 max-w-xl text-[#795548]">
            Keep track of your coffee orders, payments, and delivery status.
          </p>
        </div>

        {/* Empty State */}
        {orders.length === 0 ? (
          <div className="rounded-3xl border border-[#ead8c5] bg-white px-6 py-20 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#f3e5d3]">
              <Coffee className="text-[#a05f38]" size={28} />
            </div>

            <h2 className="mt-6 text-2xl font-semibold text-[#431b0d]">
              No orders yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm text-[#795548]">
              Your next coffee order is waiting. Explore our collection and find
              something you love.
            </p>

            <Link
              to="/shop"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#431b0d] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#5c2816]">
              Shop Coffee
              <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="space-y-5">
            {orders.map((order) => (
              <div
                key={order._id}
                className="rounded-3xl border border-[#ead8c5] bg-white p-5 shadow-sm md:p-7">
                {/* Order Header */}
                <div className="flex flex-col gap-4 border-b border-[#eee1d4] pb-5 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.15em] text-[#9b7866]">
                      Order
                    </p>

                    <h2 className="mt-1 font-semibold text-[#431b0d]">
                      #AURA-{order._id.slice(-6).toUpperCase()}
                    </h2>

                    <p className="mt-1 text-sm text-[#795548]">
                      {formatDate(order.createdAt)}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-[#f3e5d3] px-4 py-2 text-xs font-medium capitalize text-[#795548]">
                      {order.orderStatus}
                    </span>
                  </div>
                </div>

                {/* Order Details */}
                <div className="grid gap-6 py-6 md:grid-cols-3">
                  {/* Items */}
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-[#9b7866]">
                      Items
                    </p>

                    <div className="mt-2 flex items-center gap-2 text-[#431b0d]">
                      <Package size={18} />
                      <span className="text-sm font-medium">
                        {order.items.length}{" "}
                        {order.items.length === 1 ? "item" : "items"}
                      </span>
                    </div>
                  </div>

                  {/* Payment */}
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-[#9b7866]">
                      Payment
                    </p>

                    <p className="mt-2 text-sm font-medium capitalize text-[#431b0d]">
                      {order.paymentMethod === "cod"
                        ? "Cash on Delivery"
                        : "Razorpay"}
                    </p>

                    <p className="mt-1 text-xs capitalize text-[#795548]">
                      {order.paymentStatus}
                    </p>
                  </div>

                  {/* Total */}
                  <div>
                    <p className="text-xs uppercase tracking-[0.12em] text-[#9b7866]">
                      Total
                    </p>

                    <p className="mt-2 text-lg font-semibold text-[#431b0d]">
                      ₹{order.totalAmount.toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Product Preview */}
                <div className="flex items-center justify-between gap-4 border-t border-[#eee1d4] pt-5">
                  <div className="flex -space-x-3">
                    {order.items.slice(0, 4).map((item) => (
                      <img
                        key={item._id}
                        src={item.product?.image}
                        alt={item.product?.name}
                        className="h-12 w-12 rounded-full border-2 border-white object-cover"
                      />
                    ))}

                    {order.items.length > 4 && (
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-[#f3e5d3] text-xs font-medium text-[#795548]">
                        +{order.items.length - 4}
                      </div>
                    )}
                  </div>

                  <Link
                    to={`/orders/${order._id}`}
                    className="group flex items-center gap-2 text-sm font-medium text-[#431b0d]">
                    View Order
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
