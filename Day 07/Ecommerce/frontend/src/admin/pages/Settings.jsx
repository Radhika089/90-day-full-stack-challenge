import { useState } from "react";
import Swal from "sweetalert2";
import { Store, Settings2, Bell, Save, RotateCcw } from "lucide-react";

const initialStore = {
  storeName: "AURA Coffee Co.",
  email: "hello@auracoffee.com",
  phone: "+91 98765 43210",
  address: "Ludhiana, Punjab, India",
  currency: "INR",
  freeShippingThreshold: "1500",
  processingTime: "1-2 business days",
  allowCod: true,
  orderConfirmation: true,
  orderUpdates: true,
  lowStockAlerts: true,
  marketingEmails: false,
};

const Toggle = ({ label, description, checked, onChange }) => (
  <div className="flex items-center justify-between gap-4 py-4">
    <div>
      <p className="text-sm font-medium text-gray-800">{label}</p>
      <p className="mt-1 text-xs leading-5 text-gray-500">{description}</p>
    </div>

    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative h-6 w-11 shrink-0 rounded-full transition ${
        checked ? "bg-[#315C4A]" : "bg-gray-300"
      }`}>
      <span
        className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-all ${
          checked ? "left-[22px]" : "left-0.5"
        }`}
      />
    </button>
  </div>
);

const Settings = () => {
  const [settings, setSettings] = useState(initialStore);

  const updateField = (field, value) => {
    setSettings((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await Swal.fire({
      title: "Settings saved",
      text: "Your changes are applied in this preview until you refresh the page.",
      icon: "success",
      confirmButtonColor: "#315C4A",
    });
  };

  const handleReset = async () => {
    const result = await Swal.fire({
      title: "Reset settings?",
      text: "All fields will return to their initial demo values.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Reset",
      cancelButtonText: "Keep changes",
      confirmButtonColor: "#315C4A",
      reverseButtons: true,
    });

    if (result.isConfirmed) {
      setSettings(initialStore);
    }
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-gray-200 bg-white px-3.5 py-2.5 text-sm text-gray-700 outline-none transition focus:border-[#315C4A] focus:ring-2 focus:ring-[#315C4A]/10";

  const labelClass = "text-sm font-medium text-gray-700";

  return (
    <div className="w-full pb-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Settings
          </h1>
          <p className="mt-1.5 text-sm text-gray-500">
            Manage your store details and preferences
          </p>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:bg-gray-50">
          <RotateCcw size={16} />
          Reset Changes
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4 sm:px-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF5F1] text-[#315C4A]">
              <Store size={19} />
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-900">
                Store Information
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Your store's public contact details
              </p>
            </div>
          </div>

          <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
            <label className={labelClass}>
              Store Name
              <input
                required
                value={settings.storeName}
                onChange={(event) =>
                  updateField("storeName", event.target.value)
                }
                className={inputClass}
                placeholder="Your store name"
              />
            </label>

            <label className={labelClass}>
              Contact Email
              <input
                required
                type="email"
                value={settings.email}
                onChange={(event) => updateField("email", event.target.value)}
                className={inputClass}
                placeholder="hello@example.com"
              />
            </label>

            <label className={labelClass}>
              Contact Phone
              <input
                required
                type="tel"
                value={settings.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className={inputClass}
                placeholder="+91 98765 43210"
              />
            </label>

            <label className={labelClass}>
              Store Address
              <input
                required
                value={settings.address}
                onChange={(event) => updateField("address", event.target.value)}
                className={inputClass}
                placeholder="City, State, Country"
              />
            </label>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4 sm:px-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF5F1] text-[#315C4A]">
              <Settings2 size={19} />
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-900">
                Store Preferences
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Configure currency and order handling
              </p>
            </div>
          </div>

          <div className="grid gap-5 p-5 sm:grid-cols-2 sm:p-6">
            <label className={labelClass}>
              Currency
              <select
                value={settings.currency}
                onChange={(event) =>
                  updateField("currency", event.target.value)
                }
                className={inputClass}>
                <option value="INR">INR — Indian Rupee (₹)</option>
                <option value="USD">USD — US Dollar ($)</option>
                <option value="EUR">EUR — Euro (€)</option>
                <option value="GBP">GBP — British Pound (£)</option>
              </select>
            </label>

            <label className={labelClass}>
              Free Shipping Threshold
              <input
                type="number"
                min="0"
                value={settings.freeShippingThreshold}
                onChange={(event) =>
                  updateField("freeShippingThreshold", event.target.value)
                }
                className={inputClass}
                placeholder="1500"
              />
              <span className="mt-1 block text-xs font-normal text-gray-400">
                Order amount required for free shipping
              </span>
            </label>

            <label className={labelClass}>
              Order Processing Time
              <select
                value={settings.processingTime}
                onChange={(event) =>
                  updateField("processingTime", event.target.value)
                }
                className={inputClass}>
                <option>Same business day</option>
                <option>1-2 business days</option>
                <option>3-5 business days</option>
                <option>5-7 business days</option>
              </select>
            </label>

            <div className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 p-4">
              <div>
                <p className="text-sm font-medium text-gray-800">
                  Cash on Delivery
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Allow customers to pay when their order arrives
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={settings.allowCod}
                aria-label="Cash on Delivery"
                onClick={() => updateField("allowCod", !settings.allowCod)}
                className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                  settings.allowCod ? "bg-[#315C4A]" : "bg-gray-300"
                }`}>
                <span
                  className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-all ${
                    settings.allowCod ? "left-[22px]" : "left-0.5"
                  }`}
                />
              </button>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
          <div className="flex items-center gap-3 border-b border-gray-100 px-5 py-4 sm:px-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF5F1] text-[#315C4A]">
              <Bell size={19} />
            </div>
            <div>
              <h2 className="text-base font-semibold text-gray-900">
                Notifications
              </h2>
              <p className="mt-1 text-xs text-gray-500">
                Choose which store notifications you want enabled
              </p>
            </div>
          </div>

          <div className="divide-y divide-gray-100 px-5 sm:px-6">
            <Toggle
              label="Order Confirmations"
              description="Enable confirmation notifications for new orders"
              checked={settings.orderConfirmation}
              onChange={(value) => updateField("orderConfirmation", value)}
            />

            <Toggle
              label="Order Status Updates"
              description="Enable notifications when order statuses change"
              checked={settings.orderUpdates}
              onChange={(value) => updateField("orderUpdates", value)}
            />

            <Toggle
              label="Low Stock Alerts"
              description="Enable alerts when product inventory runs low"
              checked={settings.lowStockAlerts}
              onChange={(value) => updateField("lowStockAlerts", value)}
            />

            <Toggle
              label="Marketing Emails"
              description="Enable promotional email notifications"
              checked={settings.marketingEmails}
              onChange={(value) => updateField("marketingEmails", value)}
            />
          </div>
        </section>

        <div className="flex justify-end">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#315C4A] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#284C3D]">
            <Save size={17} />
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
