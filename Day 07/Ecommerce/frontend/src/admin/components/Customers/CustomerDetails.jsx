import { X, Mail, Phone, ShoppingBag, MapPin } from "lucide-react";

const CustomerDetails = ({ customer, onClose }) => {
  if (!customer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gray-900/40 p-4">
      <div className="my-auto w-full max-w-xl rounded-2xl bg-white shadow-xl">
        <div className="flex items-start justify-between border-b border-gray-100 p-5 sm:p-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-gray-400">
              Customer Profile
            </p>
            <h2 className="mt-1 text-xl font-semibold text-gray-900">
              {customer.name}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close customer details"
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-700">
            <X size={19} />
          </button>
        </div>

        <div className="space-y-6 p-5 sm:p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#EEF5F1] text-xl font-semibold text-[#315C4A]">
              {customer.name
                .split(" ")
                .map((part) => part[0])
                .slice(0, 2)
                .join("")
                .toUpperCase()}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {customer.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Customer since {customer.joined}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-gray-200 p-4">
              <ShoppingBag size={18} className="text-[#315C4A]" />
              <p className="mt-3 text-xs text-gray-500">Total Orders</p>
              <p className="mt-1 text-xl font-semibold text-gray-900">
                {customer.orders}
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-xs text-gray-500">Total Spent</p>
              <p className="mt-1 text-xl font-semibold text-gray-900">
                ₹{customer.totalSpent.toLocaleString("en-IN")}
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-sm font-semibold text-gray-800">
              Contact Information
            </h3>
            <div className="space-y-4 rounded-xl border border-gray-200 p-4">
              <div className="flex items-start gap-3">
                <Mail size={17} className="mt-0.5 text-gray-400" />
                <div className="min-w-0">
                  <p className="text-xs text-gray-400">Email</p>
                  <p className="mt-1 break-all text-sm text-gray-700">
                    {customer.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={17} className="mt-0.5 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-400">Phone</p>
                  <p className="mt-1 text-sm text-gray-700">{customer.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={17} className="mt-0.5 text-gray-400" />
                <div>
                  <p className="text-xs text-gray-400">Address</p>
                  <p className="mt-1 text-sm leading-6 text-gray-700">
                    {customer.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-[#EEF5F1] p-4">
            <p className="text-sm font-medium text-[#315C4A]">
              {customer.orders > 1 ? "Returning Customer" : "New Customer"}
            </p>
            <p className="mt-1 text-sm text-gray-600">
              {customer.orders > 1
                ? "This customer has placed multiple orders with AURA Coffee."
                : "This customer has placed one order so far."}
            </p>
          </div>
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

export default CustomerDetails;
