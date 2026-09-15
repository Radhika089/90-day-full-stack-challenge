import React from "react";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { Link } from "react-router-dom";
import hero from "../assets/hero/hero3.jpg";

const Cart = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf7] px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10">
          <Link
            to="/shop"
            className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#6f6259] transition hover:text-[#9a7658]">
            <ArrowLeft size={16} />
            Continue Shopping
          </Link>

          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="mb-3 flex items-center gap-3">
                <span className="h-px w-8 bg-[#9a7658]" />

                <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9a7658]">
                  Your Selection
                </p>
              </div>

              <h1 className="text-4xl font-semibold tracking-tight text-[#2d211b] sm:text-5xl">
                Shopping Cart
              </h1>

              <p className="mt-3 text-sm text-[#8d8178]">
                Review your items before checkout.
              </p>
            </div>

            <span className="hidden text-sm text-[#8d8178] sm:block">
              1 item
            </span>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
          {/* Cart Items */}
          <div className="space-y-4">
            {/* Cart Item */}
            <div className="relative border border-[#e7dfd7] bg-white p-4 sm:p-5">
              <div className="flex gap-4 sm:gap-6">
                {/* Product Image */}
                <div className="h-28 w-28 shrink-0 overflow-hidden bg-[#f1ece5] sm:h-36 sm:w-36">
                  <img
                    src={hero}
                    alt="Coffee"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Product Information */}
                <div className="flex min-w-0 flex-1 flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a7658]">
                        Brews
                      </p>

                      <h2 className="mt-1 text-lg font-semibold tracking-tight text-[#2d211b] sm:text-xl">
                        Signature Coffee
                      </h2>

                      <p className="mt-1 text-xs text-[#92857b]">
                        Medium Roast · 250g
                      </p>
                    </div>

                    {/* Remove */}
                    <button
                      type="button"
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[#8d8178] transition hover:bg-[#f5f0eb] hover:text-[#2d211b]"
                      aria-label="Remove item">
                      <X size={17} strokeWidth={1.8} />
                    </button>
                  </div>

                  <div className="mt-auto flex flex-wrap items-end justify-between gap-4 pt-6">
                    {/* Quantity */}
                    <div>
                      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.15em] text-[#a0948b]">
                        Quantity
                      </p>

                      <div className="flex h-9 items-center border border-[#dcd2c9]">
                        <button
                          type="button"
                          className="flex h-full w-9 items-center justify-center text-[#5d4b3e] transition hover:bg-[#f5f0eb]">
                          <Minus size={13} />
                        </button>

                        <span className="flex h-full w-9 items-center justify-center border-x border-[#dcd2c9] text-sm font-medium text-[#2d211b]">
                          1
                        </span>

                        <button
                          type="button"
                          className="flex h-full w-9 items-center justify-center text-[#5d4b3e] transition hover:bg-[#f5f0eb]">
                          <Plus size={13} />
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-[11px] text-[#a0948b]">$20.00 × 1</p>

                      <p className="mt-1 text-lg font-semibold text-[#2d211b]">
                        $20.00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clear Cart */}
            <div className="flex justify-end pt-2">
              <button
                type="button"
                className="inline-flex items-center gap-2 text-xs font-medium text-[#8d8178] transition hover:text-[#b45f46]">
                <Trash2 size={14} />
                Remove all items
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <aside className="border border-[#e7dfd7] bg-white p-6 sm:p-7 lg:sticky lg:top-28">
            <div className="flex items-center gap-2">
              <ShoppingBag size={18} className="text-[#9a7658]" />

              <h2 className="text-lg font-semibold text-[#2d211b]">
                Order Summary
              </h2>
            </div>

            {/* Coupon */}
            <div className="mt-7">
              <label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8d8178]">
                Promo Code
              </label>

              <div className="mt-2 flex h-11">
                <input
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

            {/* Price Breakdown */}
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

            {/* Checkout */}
            <Link
              to="/checkout"
              className="mt-7 flex h-12 w-full items-center justify-center bg-[#2d211b] text-sm font-medium text-white transition hover:bg-[#40312a]">
              Proceed to Checkout
            </Link>

            <p className="mt-4 text-center text-[11px] leading-5 text-[#a0948b]">
              Taxes and shipping are calculated at checkout.
            </p>
          </aside>
        </div>

        {/* Trust / Bottom Info */}
        <div className="mt-16 grid grid-cols-1 gap-6 border-t border-[#e8e0d8] pt-8 sm:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5d4b3e]">
              Freshly Roasted
            </p>

            <p className="mt-2 text-xs leading-5 text-[#9d9289]">
              Carefully selected and roasted for a better cup.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5d4b3e]">
              Secure Checkout
            </p>

            <p className="mt-2 text-xs leading-5 text-[#9d9289]">
              Your information is protected throughout your purchase.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#5d4b3e]">
              Need Help?
            </p>

            <p className="mt-2 text-xs leading-5 text-[#9d9289]">
              We're here if you need help with your order.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
