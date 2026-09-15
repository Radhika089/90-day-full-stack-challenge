import { ArrowRight, Check, Coffee, Package } from "lucide-react";
import { Link } from "react-router-dom";
import hero from "../assets/hero/hero3.jpg";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf7] px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] max-w-3xl items-center justify-center">
        <div className="w-full">
          {/* Success Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#d8c8bb] bg-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2d211b] text-white">
              <Check size={20} strokeWidth={2} />
            </div>
          </div>

          {/* Heading */}
          <div className="mt-7 text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <span className="h-px w-8 bg-[#9a7658]" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9a7658]">
                Order Confirmed
              </p>

              <span className="h-px w-8 bg-[#9a7658]" />
            </div>

            <h1 className="text-4xl font-semibold tracking-tight text-[#2d211b] sm:text-5xl">
              Thank You
            </h1>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-[#8d8178]">
              Your order has been placed successfully. We're getting your coffee
              ready.
            </p>
          </div>

          {/* Order Card */}
          <div className="mx-auto mt-10 max-w-xl border border-[#e7dfd7] bg-white">
            {/* Order Header */}
            <div className="flex flex-col gap-2 border-b border-[#e8e0d8] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9a7658]">
                  Order Number
                </p>

                <p className="mt-1 text-sm font-semibold text-[#2d211b]">
                  #AURA-1042
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#8d8178]">
                <Package size={14} />
                <span>Estimated delivery: 3–5 days</span>
              </div>
            </div>

            {/* Product */}
            <div className="flex gap-4 px-5 py-6 sm:px-6">
              <div className="h-20 w-20 shrink-0 overflow-hidden bg-[#f1ece5]">
                <img
                  src={hero}
                  alt="Signature Coffee"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9a7658]">
                  Brews
                </p>

                <h2 className="mt-1 text-sm font-semibold text-[#2d211b]">
                  Signature Coffee
                </h2>

                <p className="mt-1 text-xs text-[#92857b]">
                  Medium Roast · 250g
                </p>

                <p className="mt-2 text-xs text-[#8d8178]">Quantity: 1</p>
              </div>

              <div className="text-right">
                <p className="text-sm font-semibold text-[#2d211b]">$20.00</p>
              </div>
            </div>

            {/* Total */}
            <div className="border-t border-[#e8e0d8] px-5 py-5 sm:px-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#8d8178]">Subtotal</span>
                  <span className="font-medium text-[#40352f]">$20.00</span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#8d8178]">Shipping</span>
                  <span className="font-medium text-[#40352f]">$5.00</span>
                </div>

                <div className="flex items-center justify-between border-t border-[#e8e0d8] pt-4">
                  <span className="text-base font-semibold text-[#2d211b]">
                    Total
                  </span>

                  <span className="text-xl font-semibold text-[#2d211b]">
                    $25.00
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/shop"
              className="flex h-11 w-full items-center justify-center gap-2 bg-[#2d211b] px-6 text-sm font-medium text-white transition hover:bg-[#40312a] sm:w-auto">
              Continue Shopping
              <ArrowRight size={15} />
            </Link>

            <Link
              to="/"
              className="flex h-11 w-full items-center justify-center px-6 text-sm font-medium text-[#6f6259] transition hover:text-[#9a7658] sm:w-auto">
              Back to Home
            </Link>
          </div>

          {/* Small Note */}
          <div className="mt-8 flex items-center justify-center gap-2 text-center text-[11px] text-[#a0948b]">
            <Coffee size={13} className="text-[#9a7658]" />

            <p>
              Thank you for choosing AURA Coffee. We hope you enjoy every cup.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
