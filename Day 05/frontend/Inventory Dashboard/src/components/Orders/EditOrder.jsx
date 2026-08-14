import React, { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getOrderById, updateOrder } from "../../api/OrderApi";

const EditOrder = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    customerName: "",
    phone: "",
    email: "",
    paymentMethod: "",
    paymentStatus: "",
    orderStatus: "",
    shippingAddress: "",
  });

  const [orderId, setOrderId] = useState("");

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const data = await getOrderById(id);

        const order = data.order;

        setOrderId(order.orderId);

        setFormData({
          customerName: order.customer.name || "",
          phone: order.customer.phone || "",
          email: order.customer.email || "",
          paymentMethod: order.paymentMethod || "",
          paymentStatus: order.paymentStatus || "Pending",
          orderStatus: order.orderStatus || "Pending",
          shippingAddress: order.shippingAddress || "",
        });
      } catch (error) {
        console.log(error);

        setError(error.response?.data?.message || "Failed to fetch order");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!formData.customerName.trim()) {
      setError("Customer name is required");
      return;
    }

    if (!formData.phone.trim()) {
      setError("Phone is required");
      return;
    }

    if (!formData.paymentMethod) {
      setError("Payment method is required");
      return;
    }

    if (!formData.shippingAddress.trim()) {
      setError("Shipping address is required");
      return;
    }

    try {
      setSaving(true);

      const data = await updateOrder(id, formData);

      console.log(data);

      setSuccess("Order updated successfully");

      setTimeout(() => {
        navigate(`/orders/${id}`);
      }, 800);
    } catch (error) {
      console.log(error);

      setError(error.response?.data?.message || "Failed to update order");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-gray-500">Loading order...</p>
      </div>
    );
  }

  if (error && !orderId) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
        <p className="text-red-600">{error}</p>

        <Link
          to="/orders"
          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700">
          <ArrowLeft size={16} />
          Back to Orders
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link
              to="/orders"
              className="mb-4 flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800">
              <ArrowLeft className="h-4 w-4" />
              Back to Orders
            </Link>

            <h1 className="mt-2 text-3xl font-bold tracking-wide text-gray-900">
              Edit Order Details
            </h1>

            <p className="mt-2 text-gray-500">
              Update customer and order information.
            </p>
          </div>

          <button
            type="submit"
            form="edit-order-form"
            disabled={saving}
            className="rounded-xl bg-zinc-900 px-5 py-3 font-semibold text-white hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50">
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>

        {/* Form */}
        <form id="edit-order-form" onSubmit={handleSubmit} className="mt-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            {/* Error */}
            {error && (
              <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                {error}
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-600">
                {success}
              </div>
            )}

            {/* Order Information */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Order Information
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Update customer and payment details.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Order ID */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Order ID
                </label>

                <input
                  type="text"
                  value={orderId}
                  readOnly
                  className="w-full cursor-not-allowed rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-gray-500 outline-none"
                />
              </div>

              {/* Customer */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Customer
                </label>

                <input
                  type="text"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Phone
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Payment Method
                </label>

                <select
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500">
                  <option value="">Select payment method</option>
                  <option value="Cash">Cash</option>
                  <option value="Card">Card</option>
                  <option value="UPI">UPI</option>
                </select>
              </div>

              {/* Payment Status */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Payment Status
                </label>

                <select
                  name="paymentStatus"
                  value={formData.paymentStatus}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500">
                  <option value="Pending">Pending</option>
                  <option value="Paid">Paid</option>
                  <option value="Failed">Failed</option>
                  <option value="Refunded">Refunded</option>
                </select>
              </div>

              {/* Order Status */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Order Status
                </label>

                <select
                  name="orderStatus"
                  value={formData.orderStatus}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500">
                  <option value="Pending">Pending</option>
                  <option value="Processing">Processing</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="mt-8 border-t border-gray-100 pt-6">
              <h2 className="text-lg font-semibold text-gray-800">
                Shipping Address
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Update the customer's delivery address.
              </p>

              <textarea
                name="shippingAddress"
                value={formData.shippingAddress}
                onChange={handleChange}
                rows="4"
                className="mt-5 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500"
              />
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 flex justify-end gap-3 border-t border-gray-100 pt-6">
              <Link
                to="/orders"
                className="rounded-xl border border-gray-200 px-5 py-3 font-semibold text-gray-600 hover:bg-gray-50">
                Cancel
              </Link>

              <button
                type="submit"
                disabled={saving}
                className="rounded-xl bg-zinc-900 px-5 py-3 font-semibold text-white hover:bg-zinc-700 disabled:cursor-not-allowed disabled:opacity-50">
                {saving ? "Updating..." : "Update Order"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditOrder;
