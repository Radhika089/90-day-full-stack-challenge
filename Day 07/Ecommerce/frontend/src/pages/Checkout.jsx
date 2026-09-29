import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  CreditCard,
  Lock,
  ShoppingBag,
} from "lucide-react";
import { Link } from "react-router-dom";
import products from "../utils/constant";

const Checkout = () => {
  // Temporary checkout data.
  // Replace this with your backend cart data later.
  const cartItems = [
    {
      product: products[0],
      quantity: 1,
    },
    {
      product: products[1],
      quantity: 1,
    },
    {
      product: products[2],
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  const shipping = subtotal >= 50 ? 0 : 5;
  const discount = 0;
  const total = subtotal + shipping - discount;

  return (
    <main className="min-h-screen bg-[#fffaf4] font-sans text-[#2f211b]">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 md:px-10 lg:pt-10">
        {/* BREADCRUMB */}
        <div className="mb-8 flex items-center gap-2 text-[11px] text-[#8c7b70]">
          <Link to="/" className="transition-colors hover:text-[#8d4f2d]">
            Home
          </Link>

          <span className="text-[#c5b5a7]">›</span>

          <Link to="/cart" className="transition-colors hover:text-[#8d4f2d]">
            Cart
          </Link>

          <span className="text-[#c5b5a7]">›</span>

          <span className="font-medium text-[#3a1407]">Checkout</span>
        </div>

        {/* HEADER */}
        <div className="mb-9 flex items-end justify-between gap-5 border-b border-[#e3d9ce] pb-6">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a05f38]">
              SECURE CHECKOUT
            </p>

            <h1 className="text-4xl font-medium tracking-[-0.04em] text-[#3a1407] sm:text-5xl">
              Checkout
            </h1>

            <p className="mt-2 text-xs leading-5 text-[#817168] sm:text-sm">
              Complete your details and place your coffee order.
            </p>
          </div>

          <div className="hidden items-center gap-2 text-[10px] text-[#8c7b70] sm:flex">
            <Lock size={13} className="text-[#a05f38]" />
            Secure checkout
          </div>
        </div>

        {/* MAIN */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_350px] lg:items-start">
          {/* LEFT */}
          <div className="space-y-6">
            {/* CONTACT + SHIPPING */}
            <section className="rounded-[18px] border border-[#e3d9ce] bg-[#fffdf9] p-5 sm:p-6">
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1e8dd] text-[10px] font-semibold text-[#a05f38]">
                  01
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-[#3a1407]">
                    Contact & Shipping
                  </h2>

                  <p className="mt-1 text-xs text-[#817168]">
                    Where should we send your order?
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="h-11 w-full rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 text-xs text-[#3a1407] outline-none transition-colors placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                />
              </div>

              {/* NAME */}
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                    First Name
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    className="h-11 w-full rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 text-xs text-[#3a1407] outline-none transition-colors placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    className="h-11 w-full rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 text-xs text-[#3a1407] outline-none transition-colors placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                  />
                </div>
              </div>

              {/* ADDRESS */}
              <div className="mt-5">
                <label
                  htmlFor="address"
                  className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                  Street Address
                </label>

                <input
                  id="address"
                  type="text"
                  placeholder="House number and street name"
                  className="h-11 w-full rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 text-xs text-[#3a1407] outline-none transition-colors placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                />
              </div>

              {/* APARTMENT */}
              <div className="mt-5">
                <label
                  htmlFor="apartment"
                  className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                  Apartment, Suite{" "}
                  <span className="font-normal text-[#a0948b]">(optional)</span>
                </label>

                <input
                  id="apartment"
                  type="text"
                  placeholder="Apartment, suite, etc."
                  className="h-11 w-full rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 text-xs text-[#3a1407] outline-none transition-colors placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                />
              </div>

              {/* CITY STATE ZIP */}
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                    City
                  </label>

                  <input
                    id="city"
                    type="text"
                    placeholder="City"
                    className="h-11 w-full rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 text-xs text-[#3a1407] outline-none transition-colors placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="state"
                    className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                    State
                  </label>

                  <input
                    id="state"
                    type="text"
                    placeholder="State"
                    className="h-11 w-full rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 text-xs text-[#3a1407] outline-none transition-colors placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="zip"
                    className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                    ZIP / Postal Code
                  </label>

                  <input
                    id="zip"
                    type="text"
                    placeholder="Postal code"
                    className="h-11 w-full rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 text-xs text-[#3a1407] outline-none transition-colors placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                  />
                </div>
              </div>

              {/* COUNTRY */}
              <div className="mt-5">
                <label
                  htmlFor="country"
                  className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                  Country
                </label>

                <select
                  id="country"
                  defaultValue="India"
                  className="h-11 w-full rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 text-xs text-[#3a1407] outline-none transition-colors focus:border-[#a05f38]">
                  <option>India</option>
                  <option>United States</option>
                  <option>United Kingdom</option>
                  <option>Canada</option>
                  <option>Australia</option>
                </select>
              </div>
            </section>

            {/* PAYMENT */}
            <section className="rounded-[18px] border border-[#e3d9ce] bg-[#fffdf9] p-5 sm:p-6">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1e8dd] text-[10px] font-semibold text-[#a05f38]">
                    02
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold text-[#3a1407]">
                      Payment
                    </h2>

                    <p className="mt-1 text-xs text-[#817168]">
                      Enter your payment details securely.
                    </p>
                  </div>
                </div>

                <CreditCard
                  size={18}
                  strokeWidth={1.7}
                  className="text-[#a05f38]"
                />
              </div>

              {/* CARD NUMBER */}
              <div>
                <label
                  htmlFor="cardNumber"
                  className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                  Card Number
                </label>

                <div className="relative">
                  <input
                    id="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="h-11 w-full rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 pr-10 text-xs text-[#3a1407] outline-none transition-colors placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                  />

                  <CreditCard
                    size={15}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#a0948b]"
                  />
                </div>
              </div>

              {/* EXPIRY + CVV */}
              <div className="mt-5 grid grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="expiry"
                    className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                    Expiry Date
                  </label>

                  <input
                    id="expiry"
                    type="text"
                    placeholder="MM / YY"
                    className="h-11 w-full rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 text-xs text-[#3a1407] outline-none transition-colors placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="cvv"
                    className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                    CVV
                  </label>

                  <input
                    id="cvv"
                    type="text"
                    placeholder="123"
                    className="h-11 w-full rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 text-xs text-[#3a1407] outline-none transition-colors placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                  />
                </div>
              </div>

              {/* NAME */}
              <div className="mt-5">
                <label
                  htmlFor="cardName"
                  className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                  Name on Card
                </label>

                <input
                  id="cardName"
                  type="text"
                  placeholder="Full name"
                  className="h-11 w-full rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 text-xs text-[#3a1407] outline-none transition-colors placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                />
              </div>

              {/* SECURITY */}
              <div className="mt-5 flex items-start gap-2 border-t border-[#e8e0d8] pt-5">
                <Lock size={13} className="mt-0.5 shrink-0 text-[#a05f38]" />

                <p className="text-[10px] leading-5 text-[#a0948b]">
                  Your payment information is encrypted and securely processed.
                </p>
              </div>
            </section>
          </div>

          {/* ORDER SUMMARY */}
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-[18px] border border-[#e3d9ce] bg-[#fffdf9] p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <ShoppingBag size={16} className="text-[#a05f38]" />

                <h2 className="text-base font-semibold text-[#3a1407]">
                  Order Summary
                </h2>
              </div>

              {/* ITEMS */}
              <div className="mt-6 space-y-4 border-b border-[#e8e0d8] pb-5">
                {cartItems.map(({ product, quantity }) => (
                  <div key={product.id} className="flex gap-3">
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-[8px] bg-[#f1e8dd]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />

                      <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#3a1407] text-[8px] text-white">
                        {quantity}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#a05f38]">
                        {product.category}
                      </p>

                      <h3 className="mt-1 truncate text-xs font-semibold text-[#3a1407]">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-[9px] text-[#8d7d72]">
                        {product.roast
                          ? `${product.roast} Roast`
                          : "Coffee Essential"}
                      </p>
                    </div>

                    <span className="text-xs font-semibold text-[#3a1407]">
                      ₹{(product.price * quantity).toFixed(0)}
                    </span>
                  </div>
                ))}
              </div>

              {/* PROMO */}
              <div className="mt-5">
                <label
                  htmlFor="promo"
                  className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8d8178]">
                  Promo Code
                </label>

                <div className="mt-2 flex h-10">
                  <input
                    id="promo"
                    type="text"
                    placeholder="Enter code"
                    className="min-w-0 flex-1 rounded-l-[8px] border border-r-0 border-[#ded2c5] bg-[#faf6f0] px-3 text-[10px] text-[#3a1407] outline-none placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                  />

                  <button
                    type="button"
                    className="rounded-r-[8px] bg-[#3a1407] px-4 text-[9px] font-semibold text-white transition-colors hover:bg-[#54200f]">
                    Apply
                  </button>
                </div>
              </div>

              {/* TOTALS */}
              <div className="mt-6 space-y-3 border-t border-[#e8e0d8] pt-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#8d8178]">Subtotal</span>

                  <span className="font-medium text-[#40352f]">
                    ₹{subtotal.toFixed(0)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#8d8178]">Shipping</span>

                  <span className="font-medium text-[#40352f]">
                    {shipping === 0 ? "Free" : `₹${shipping.toFixed(0)}`}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#8d8178]">Discount</span>

                  <span className="font-medium text-[#a05f38]">
                    -₹{discount.toFixed(0)}
                  </span>
                </div>
              </div>

              {/* TOTAL */}
              <div className="mt-5 flex items-center justify-between border-t border-[#e8e0d8] pt-5">
                <span className="text-sm font-semibold text-[#3a1407]">
                  Total
                </span>

                <span className="text-2xl font-semibold tracking-tight text-[#3a1407]">
                  ₹{total.toFixed(0)}
                </span>
              </div>

              {/* PLACE ORDER */}
              <Link
                to="/order-success"
                className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#3a1407] text-[10px] font-semibold text-white transition-all duration-300 hover:bg-[#54200f]">
                Place Order
                <ArrowRight size={14} />
              </Link>

              <p className="mt-3 text-center text-[9px] leading-4 text-[#a0948b]">
                By placing your order, you agree to our terms and conditions.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
