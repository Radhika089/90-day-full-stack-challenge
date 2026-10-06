import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Coffee, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { getMyOrders } from "../api/orderApi";
import toast from "react-hot-toast";
import OrderFilters from "../components/OrderFilters";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [customFromDate, setCustomFromDate] = useState("");
  const [customToDate, setCustomToDate] = useState("");

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [dateFilter, setDateFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const ordersPerPage = 5;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getMyOrders();

        if (data.success) {
          setOrders(data.orders || []);
        } else {
          setError(data.message || "Failed to load orders");

          toast.error(data.message || "Failed to load orders");
        }
      } catch (error) {
        console.error("Get orders error:", error);

        setError("Unable to load your orders");

        toast.error(
          error.response?.data?.message || "Failed to load your orders",
        );
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

  const getStatusStyle = (status) => {
    switch (status) {
      case "processing":
        return "bg-[#fff4d6] text-[#9a6b00]";

      case "shipped":
        return "bg-[#e8f1fb] text-[#35658f]";

      case "delivered":
        return "bg-[#e8f5ec] text-[#34704a]";

      case "cancelled":
        return "bg-[#fbe8e6] text-[#a13f35]";

      default:
        return "bg-[#f3e5d3] text-[#795548]";
    }
  };

  // Search date filter
  const filteredOrders = useMemo(() => {
    let result = [...orders];

    // Search by product name
    if (search.trim()) {
      const searchText = search.toLowerCase();

      result = result.filter((order) =>
        order.items?.some((item) =>
          item.product?.name?.toLowerCase().includes(searchText),
        ),
      );
    }

    // Status filter
    if (status !== "all") {
      result = result.filter(
        (order) => order.orderStatus?.toLowerCase() === status,
      );
    }

    // Date filter
    if (dateFilter !== "all") {
      result = result.filter((order) => {
        const orderDate = new Date(order.createdAt);

        // Custom date range
        if (dateFilter === "custom") {
          if (!customFromDate && !customToDate) {
            return true;
          }

          const fromDate = customFromDate
            ? new Date(`${customFromDate}T00:00:00`)
            : null;

          const toDate = customToDate
            ? new Date(`${customToDate}T23:59:59.999`)
            : null;

          if (fromDate && orderDate < fromDate) {
            return false;
          }

          if (toDate && orderDate > toDate) {
            return false;
          }

          return true;
        }

        const now = new Date();
        let filterDate = new Date();

        if (dateFilter === "7") {
          filterDate.setDate(now.getDate() - 7);
        }

        if (dateFilter === "30") {
          filterDate.setDate(now.getDate() - 30);
        }

        if (dateFilter === "90") {
          filterDate.setDate(now.getDate() - 90);
        }

        if (dateFilter === "180") {
          filterDate.setDate(now.getDate() - 180);
        }

        if (dateFilter === "365") {
          filterDate = new Date(now.getFullYear(), 0, 1);
        }

        return orderDate >= filterDate;
      });
    }

    return result;
  }, [orders, search, status, dateFilter, customFromDate, customToDate]);

  // Pagination
  const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);

  const startIndex = (currentPage - 1) * ordersPerPage;

  const paginatedOrders = filteredOrders.slice(
    startIndex,
    startIndex + ordersPerPage,
  );

  // Reset page if current page becomes invalid
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fffaf4] px-6 py-16 md:px-10 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="h-10 w-40 animate-pulse rounded-lg bg-[#ead8c5]" />

          <div className="mt-4 h-5 w-64 animate-pulse rounded bg-[#f3e5d3]" />

          <div className="mt-10 space-y-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-28 animate-pulse rounded-2xl bg-[#f3e5d3]"
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

        {/* Header */}
        <div className="mb-8 flex flex-col gap-5 border-b border-[#ead8c5] pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#a05f38]">
              Order History
            </p>

            <h1 className="text-3xl font-semibold text-[#431b0d] md:text-4xl">
              My Orders
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3e5d3]">
              <Package size={18} className="text-[#8a4f32]" />
            </div>

            <div>
              <p className="text-xs text-[#9b7866]">Total Orders</p>

              <p className="text-lg font-semibold text-[#431b0d]">
                {orders.length}
              </p>
            </div>
          </div>
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
          <>
            {/* Filters */}
            <OrderFilters
              search={search}
              setSearch={setSearch}
              status={status}
              setStatus={setStatus}
              dateFilter={dateFilter}
              setDateFilter={setDateFilter}
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />

            {/* No Filter Results */}
            {paginatedOrders.length === 0 ? (
              <div className="rounded-2xl border border-[#ead8c5] bg-white px-6 py-14 text-center">
                <Coffee className="mx-auto mb-4 text-[#a05f38]" size={34} />

                <h2 className="text-xl font-semibold text-[#431b0d]">
                  No matching orders
                </h2>

                <p className="mt-2 text-sm text-[#795548]">
                  Try changing your search or filters.
                </p>
              </div>
            ) : (
              <>
                {/* Order List */}
                <div className="space-y-3">
                  {paginatedOrders.map((order) => (
                    <div
                      key={order._id}
                      className="rounded-2xl border border-[#ead8c5] bg-white px-4 py-4 transition hover:border-[#d9bea7] hover:shadow-sm md:px-5">
                      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        {/* Order Info */}
                        <div className="flex min-w-0 items-center gap-4">
                          {/* Product Images */}
                          <div className="flex shrink-0 -space-x-2">
                            {order.items.slice(0, 3).map((item) => (
                              <img
                                key={item._id}
                                src={item.product?.image}
                                alt={item.product?.name}
                                className="h-12 w-12 rounded-xl border-2 border-white object-cover"
                              />
                            ))}

                            {order.items.length > 3 && (
                              <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-white bg-[#f3e5d3] text-xs font-medium text-[#795548]">
                                +{order.items.length - 3}
                              </div>
                            )}
                          </div>

                          {/* Order Info */}
                          <div className="min-w-0">
                            <div className="flex flex-wrap items-center gap-3">
                              <h2 className="font-semibold text-[#431b0d]">
                                #AURA-{order._id.slice(-6).toUpperCase()}
                              </h2>

                              <span
                                className={`rounded-full px-3 py-1 text-[11px] font-medium capitalize ${getStatusStyle(
                                  order.orderStatus,
                                )}`}>
                                {order.orderStatus}
                              </span>
                            </div>

                            <p className="mt-1 text-xs text-[#8c6b5a]">
                              {formatDate(order.createdAt)} ·{" "}
                              {order.items.length}{" "}
                              {order.items.length === 1 ? "item" : "items"}
                            </p>
                          </div>
                        </div>

                        {/* Order Meta */}
                        <div className="flex flex-wrap items-center gap-6 lg:gap-8">
                          <div>
                            <p className="text-[11px] uppercase tracking-[0.12em] text-[#9b7866]">
                              Payment
                            </p>

                            <p className="mt-1 text-sm font-medium capitalize text-[#431b0d]">
                              {order.paymentMethod === "cod"
                                ? "Cash on Delivery"
                                : "Razorpay"}
                            </p>
                          </div>

                          <div>
                            <p className="text-[11px] uppercase tracking-[0.12em] text-[#9b7866]">
                              Total
                            </p>

                            <p className="mt-1 text-base font-semibold text-[#431b0d]">
                              ₹{order.totalAmount.toFixed(2)}
                            </p>
                          </div>

                          <Link
                            to={`/orders/${order._id}`}
                            className="group inline-flex items-center gap-2 rounded-full border border-[#d9bea7] px-4 py-2 text-sm font-medium text-[#431b0d] transition hover:border-[#431b0d] hover:bg-[#431b0d] hover:text-white">
                            View
                            <ArrowRight
                              size={15}
                              className="transition-transform group-hover:translate-x-1"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Pagination */}
                {totalPages > 1 && (
                  <div className="mt-6 flex items-center justify-center gap-3">
                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      disabled={currentPage === 1}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#eadfd5] bg-white text-[#795548] transition hover:bg-[#f8f1eb] disabled:cursor-not-allowed disabled:opacity-40">
                      <ArrowRight size={16} className="rotate-180" />
                    </button>

                    <span className="text-sm text-[#795548]">
                      Page {currentPage} of {totalPages}
                    </span>

                    <button
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      disabled={currentPage === totalPages}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#eadfd5] bg-white text-[#795548] transition hover:bg-[#f8f1eb] disabled:cursor-not-allowed disabled:opacity-40">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MyOrders;
