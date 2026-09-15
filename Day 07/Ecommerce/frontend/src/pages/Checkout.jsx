import { ArrowLeft, CreditCard, Lock, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import hero from "../assets/hero/hero3.jpg";

const Checkout = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf7] px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <Link
            to="/cart"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#6f6259] transition hover:text-[#9a7658]">
            <ArrowLeft size={16} />
            Back to Cart
          </Link>

          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-[#9a7658]" />

            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9a7658]">
              Secure Checkout
            </p>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-[#2d211b] sm:text-5xl">
            Checkout
          </h1>

          <p className="mt-3 text-sm text-[#8d8178]">
            Complete your details to place your order.
          </p>
        </div>

        {/* Main */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
          {/* Left */}
          <div className="space-y-6">
            {/* Contact & Shipping */}
            <section className="border border-[#e7dfd7] bg-white p-6 sm:p-7">
              <div className="mb-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a7658]">
                  01
                </p>

                <h2 className="mt-1 text-lg font-semibold text-[#2d211b]">
                  Contact & Shipping
                </h2>

                <p className="mt-1 text-xs text-[#92857b]">
                  Where should we send your order?
                </p>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs font-medium text-[#5d4b3e]">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-11 w-full border border-[#dcd2c9] bg-[#fdfbf7] px-3 text-sm text-[#2d211b] outline-none placeholder:text-[#b2a69d] focus:border-[#9a7658]"
                />
              </div>

              {/* Name */}
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-xs font-medium text-[#5d4b3e]">
                    First Name
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    className="h-11 w-full border border-[#dcd2c9] bg-[#fdfbf7] px-3 text-sm text-[#2d211b] outline-none placeholder:text-[#b2a69d] focus:border-[#9a7658]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-xs font-medium text-[#5d4b3e]">
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    className="h-11 w-full border border-[#dcd2c9] bg-[#fdfbf7] px-3 text-sm text-[#2d211b] outline-none placeholder:text-[#b2a69d] focus:border-[#9a7658]"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="mt-5">
                <label
                  htmlFor="address"
                  className="mb-2 block text-xs font-medium text-[#5d4b3e]">
                  Street Address
                </label>

                <input
                  id="address"
                  type="text"
                  placeholder="House number and street name"
                  className="h-11 w-full border border-[#dcd2c9] bg-[#fdfbf7] px-3 text-sm text-[#2d211b] outline-none placeholder:text-[#b2a69d] focus:border-[#9a7658]"
                />
              </div>

              {/* Apartment */}
              <div className="mt-5">
                <label
                  htmlFor="apartment"
                  className="mb-2 block text-xs font-medium text-[#5d4b3e]">
                  Apartment, Suite{" "}
                  <span className="font-normal text-[#a0948b]">(optional)</span>
                </label>

                <input
                  id="apartment"
                  type="text"
                  placeholder="Apartment, suite, etc."
                  className="h-11 w-full border border-[#dcd2c9] bg-[#fdfbf7] px-3 text-sm text-[#2d211b] outline-none placeholder:text-[#b2a69d] focus:border-[#9a7658]"
                />
              </div>

              {/* City / State / ZIP */}
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 block text-xs font-medium text-[#5d4b3e]">
                    City
                  </label>

                  <input
                    id="city"
                    type="text"
                    placeholder="City"
                    className="h-11 w-full border border-[#dcd2c9] bg-[#fdfbf7] px-3 text-sm text-[#2d211b] outline-none placeholder:text-[#b2a69d] focus:border-[#9a7658]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="state"
                    className="mb-2 block text-xs font-medium text-[#5d4b3e]">
                    State
                  </label>

                  <input
                    id="state"
                    type="text"
                    placeholder="State"
                    className="h-11 w-full border border-[#dcd2c9] bg-[#fdfbf7] px-3 text-sm text-[#2d211b] outline-none placeholder:text-[#b2a69d] focus:border-[#9a7658]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="zip"
                    className="mb-2 block text-xs font-medium text-[#5d4b3e]">
                    ZIP / Postal Code
                  </label>

                  <input
                    id="zip"
                    type="text"
                    placeholder="Postal code"
                    className="h-11 w-full border border-[#dcd2c9] bg-[#fdfbf7] px-3 text-sm text-[#2d211b] outline-none placeholder:text-[#b2a69d] focus:border-[#9a7658]"
                  />
                </div>
              </div>

              {/* Country */}
              <div className="mt-5">
                <label
                  htmlFor="country"
                  className="mb-2 block text-xs font-medium text-[#5d4b3e]">
                  Country
                </label>

                <select
                  id="country"
                  defaultValue="India"
                  className="h-11 w-full border border-[#dcd2c9] bg-[#fdfbf7] px-3 text-sm text-[#2d211b] outline-none focus:border-[#9a7658]">
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                </select>
              </div>
            </section>

            {/* Payment */}
            <section className="border border-[#e7dfd7] bg-white p-6 sm:p-7">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a7658]">
                    02
                  </p>

                  <h2 className="mt-1 text-lg font-semibold text-[#2d211b]">
                    Payment
                  </h2>

                  <p className="mt-1 text-xs text-[#92857b]">
                    Enter your payment details securely.
                  </p>
                </div>

                <CreditCard
                  size={19}
                  strokeWidth={1.7}
                  className="text-[#9a7658]"
                />
              </div>

              {/* Card Number */}
              <div>
                <label
                  htmlFor="cardNumber"
                  className="mb-2 block text-xs font-medium text-[#5d4b3e]">
                  Card Number
                </label>

                <div className="relative">
                  <input
                    id="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="h-11 w-full border border-[#dcd2c9] bg-[#fdfbf7] px-3 pr-10 text-sm text-[#2d211b] outline-none placeholder:text-[#b2a69d] focus:border-[#9a7658]"
                  />

                  <CreditCard
                    size={16}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a0948b]"
                  />
                </div>
              </div>

              {/* Expiry / CVV */}
              <div className="mt-5 grid grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="expiry"
                    className="mb-2 block text-xs font-medium text-[#5d4b3e]">
                    Expiry Date
                  </label>

                  <input
                    id="expiry"
                    type="text"
                    placeholder="MM / YY"
                    className="h-11 w-full border border-[#dcd2c9] bg-[#fdfbf7] px-3 text-sm text-[#2d211b] outline-none placeholder:text-[#b2a69d] focus:border-[#9a7658]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cvv"
                    className="mb-2 block text-xs font-medium text-[#5d4b3e]">
                    CVV
                  </label>

                  <input
                    id="cvv"
                    type="text"
                    placeholder="123"
                    className="h-11 w-full border border-[#dcd2c9] bg-[#fdfbf7] px-3 text-sm text-[#2d211b] outline-none placeholder:text-[#b2a69d] focus:border-[#9a7658]"
                  />
                </div>
              </div>

              {/* Card Name */}
              <div className="mt-5">
                <label
                  htmlFor="cardName"
                  className="mb-2 block text-xs font-medium text-[#5d4b3e]">
                  Name on Card
                </label>

                <input
                  id="cardName"
                  type="text"
                  placeholder="Full name"
                  className="h-11 w-full border border-[#dcd2c9] bg-[#fdfbf7] px-3 text-sm text-[#2d211b] outline-none placeholder:text-[#b2a69d] focus:border-[#9a7658]"
                />
              </div>

              {/* Security Note */}
              <div className="mt-5 flex items-start gap-2 border-t border-[#e8e0d8] pt-5">
                <Lock size={13} className="mt-0.5 shrink-0 text-[#9a7658]" />

                <p className="text-[11px] leading-5 text-[#a0948b]">
                  Your payment information is encrypted and securely processed.
                </p>
              </div>
            </section>
          </div>

          {/* Right - Order Summary */}
          <aside className="border border-[#e7dfd7] bg-white p-6 sm:p-7 lg:sticky lg:top-28">
            <div className="flex items-center gap-2">
              <ShoppingBag size={18} className="text-[#9a7658]" />

              <h2 className="text-lg font-semibold text-[#2d211b]">
                Order Summary
              </h2>
            </div>

            {/* Product */}
            <div className="mt-7 flex gap-4 border-b border-[#e8e0d8] pb-6">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden bg-[#f1ece5]">
                <img
                  src={hero}
                  alt="Signature Coffee"
                  className="h-full w-full object-cover"
                />

                <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center bg-[#2d211b] text-[10px] text-white">
                  1
                </span>
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9a7658]">
                  Brews
                </p>

                <h3 className="mt-1 text-sm font-semibold text-[#2d211b]">
                  Signature Coffee
                </h3>

                <p className="mt-1 text-xs text-[#92857b]">
                  Medium Roast · 250g
                </p>
              </div>

              <p className="text-sm font-medium text-[#40352f]">$20.00</p>
            </div>

            {/* Promo */}
            <div className="mt-6">
              <label
                htmlFor="promo"
                className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8d8178]">
                Promo Code
              </label>

              <div className="mt-2 flex h-11">
                <input
                  id="promo"
                  type="text"
                  placeholder="Enter code"
                  className="min-w-0 flex-1 border border-r-0 border-[#dcd2c9] bg-[#fdfbf7] px-3 text-sm text-[#2d211b] outline-none placeholder:text-[#b2a69d] focus:border-[#9a7658]"
                />

                <button
                  type="button"
                  className="bg-[#2d211b] px-5 text-xs font-medium text-white transition hover:bg-[#40312a]">
                  Apply
                </button>
              </div>
            </div>

            {/* Breakdown */}
            <div className="mt-7 space-y-4 border-t border-[#e8e0d8] pt-6">
              <div className="flex items-center justify-between text-sm">
                <span className="text-[#8d8178]">Subtotal</span>

                <span className="font-medium text-[#40352f]">$20.00</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-[#8d8178]">Shipping</span>

                <span className="font-medium text-[#40352f]">$5.00</span>
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-[#8d8178]">Discount</span>

                <span className="font-medium text-[#9a7658]">-$0.00</span>
              </div>
            </div>

            {/* Total */}
            <div className="mt-6 flex items-center justify-between border-t border-[#e8e0d8] pt-6">
              <span className="text-base font-semibold text-[#2d211b]">
                Total
              </span>

              <span className="text-2xl font-semibold tracking-tight text-[#2d211b]">
                $25.00
              </span>
            </div>

            {/* Place Order */}
            <Link
              to="/order-success"
              className="mt-7 flex h-12 w-full items-center justify-center bg-[#2d211b] text-sm font-medium text-white transition hover:bg-[#40312a]">
              Place Order
            </Link>

            <p className="mt-4 text-center text-[11px] leading-5 text-[#a0948b]">
              By placing your order, you agree to our terms and conditions.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
