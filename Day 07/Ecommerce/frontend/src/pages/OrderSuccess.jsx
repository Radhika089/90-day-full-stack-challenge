import React from "react";
import { ArrowRight, Check, Coffee, Package, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import products from "../utils/constant";

const OrderSuccess = () => {
  const orderItems = [
    {
      product: products[0],
      quantity: 1,
    },
    {
      product: products[1],
      quantity: 1,
    },
  ];

  const subtotal = orderItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  const shipping = subtotal >= 50 ? 0 : 5;
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-[#fffaf4] font-sans text-[#3a1407]">
      {/* TOP CONFIRMATION */}
      <section className="relative overflow-hidden bg-[#431b0d] px-5 pb-16 pt-10 sm:px-8 sm:pb-20 md:px-10 md:pt-12">
        {/* Soft background glow */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-[360px] w-[360px] rounded-full bg-[#d88d48] opacity-[0.16] blur-[110px]" />

        <div className="pointer-events-none absolute -bottom-40 right-[-60px] h-[400px] w-[400px] rounded-full bg-[#a05f38] opacity-[0.12] blur-[120px]" />

        {/* Decorative beans */}
        <img
          src="/beans.png"
          alt=""
          className="pointer-events-none absolute -left-8 bottom-2 z-0 w-28 rotate-[-18deg] opacity-10 sm:left-8 sm:w-36"
        />

        <img
          src="/coffeeCup.png"
          alt=""
          className="pointer-events-none absolute -right-5 bottom-[-20px] z-0 w-32 rotate-[12deg] opacity-10 sm:right-8 sm:w-40"
        />

        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Breadcrumb */}
          <div className="mb-12 flex items-center gap-2 text-[10px] text-[#d5b9a2]">
            <Link to="/" className="transition-colors hover:text-white">
              Home
            </Link>

            <span className="text-[#9b7159]">›</span>

            <span className="text-[#f2dfcf]">Order Confirmation</span>
          </div>

          <div className="grid items-center gap-10 md:grid-cols-[1fr_auto]">
            {/* MESSAGE */}
            <div>
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d88d48] text-[#431b0d]">
                  <Check size={21} strokeWidth={2.4} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#dca875]">
                    ORDER CONFIRMED
                  </p>

                  <p className="mt-1 text-[10px] text-[#c8a993]">
                    Order #AURA-1042
                  </p>
                </div>
              </div>

              <h1 className="max-w-xl text-4xl font-medium leading-[1.05] tracking-[-0.04em] text-[#fffaf2] sm:text-5xl md:text-6xl">
                Your coffee
                <span className="block italic text-[#dca875]">
                  is on its way.
                </span>
              </h1>

              <p className="mt-5 max-w-lg text-sm leading-6 text-[#d7c1af]">
                Thank you for choosing Aura Coffee. Your order has been
                confirmed and we're preparing it for delivery.
              </p>
            </div>

            {/* DELIVERY CARD */}
            <div className="w-full max-w-[250px] rounded-[18px] border border-white/10 bg-white/[0.07] p-5 backdrop-blur-sm md:justify-self-end">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fffaf2] text-[#431b0d]">
                  <Truck size={17} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#dca875]">
                    ESTIMATED DELIVERY
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#fffaf2]">
                    3–5 Business Days
                  </p>
                </div>
              </div>

              <div className="mt-5 border-t border-white/10 pt-4">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-[#bfa594]">Order status</span>

                  <span className="font-medium text-[#dca875]">Confirmed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ORDER CONTENT */}
      <section className="px-5 py-10 sm:px-8 md:px-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
            {/* ORDER DETAILS */}
            <div className="overflow-hidden rounded-[18px] border border-[#e3d9ce] bg-[#fffdf9]">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[#e8e0d8] px-5 py-5 sm:px-6">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a05f38]">
                    YOUR ORDER
                  </p>

                  <h2 className="mt-1 text-lg font-semibold text-[#3a1407]">
                    Order Details
                  </h2>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f1e8dd] text-[#a05f38]">
                  <Package size={16} />
                </div>
              </div>

              {/* Items */}
              <div className="divide-y divide-[#e8e0d8]">
                {orderItems.map(({ product, quantity }) => (
                  <div
                    key={product.id}
                    className="flex gap-4 px-5 py-5 sm:px-6">
                    <Link
                      to={`/products/${product.id}`}
                      className="h-20 w-20 shrink-0 overflow-hidden rounded-[10px] bg-[#f1e8dd]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </Link>

                    <div className="min-w-0 flex-1">
                      <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#a05f38]">
                        {product.category}
                      </p>

                      <h3 className="mt-1 text-sm font-semibold text-[#3a1407]">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-[10px] text-[#8d7d72]">
                        {product.roast
                          ? `${product.roast} Roast`
                          : "Coffee Essential"}
                      </p>

                      <p className="mt-2 text-[10px] text-[#9a8c82]">
                        Quantity: {quantity}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-semibold text-[#3a1407]">
                        ₹{(product.price * quantity).toFixed(0)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SUMMARY */}
            <aside className="h-fit rounded-[18px] border border-[#e3d9ce] bg-[#f5eee2] p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <Coffee size={16} className="text-[#a05f38]" />

                <h2 className="text-base font-semibold text-[#3a1407]">
                  Payment Summary
                </h2>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#817168]">Subtotal</span>

                  <span className="font-medium text-[#40352f]">
                    ₹{subtotal.toFixed(0)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#817168]">Shipping</span>

                  <span className="font-medium text-[#40352f]">
                    {shipping === 0 ? "Free" : `₹${shipping.toFixed(0)}`}
                  </span>
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-[#dfd0c0] pt-5">
                <span className="text-sm font-semibold text-[#3a1407]">
                  Total
                </span>

                <span className="text-2xl font-semibold tracking-tight text-[#3a1407]">
                  ₹{total.toFixed(0)}
                </span>
              </div>

              <div className="mt-6 rounded-[12px] bg-[#fffaf2] px-4 py-3">
                <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#a05f38]">
                  PAYMENT
                </p>

                <p className="mt-1 text-[10px] text-[#817168]">
                  Payment received securely
                </p>
              </div>
            </aside>
          </div>

          {/* NEXT STEPS */}
          <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-[18px] border border-[#e3d9ce] bg-[#e3d9ce] sm:grid-cols-3">
            <div className="bg-[#fffdf9] px-5 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f1e8dd] text-[#a05f38]">
                  <Check size={14} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#a05f38]">
                    STEP 01
                  </p>

                  <p className="mt-0.5 text-xs font-semibold text-[#3a1407]">
                    Order confirmed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#fffdf9] px-5 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f1e8dd] text-[#a05f38]">
                  <Coffee size={14} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#a05f38]">
                    STEP 02
                  </p>

                  <p className="mt-0.5 text-xs font-semibold text-[#3a1407]">
                    Coffee is prepared
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#fffdf9] px-5 py-5">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f1e8dd] text-[#a05f38]">
                  <Truck size={14} />
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#a05f38]">
                    STEP 03
                  </p>

                  <p className="mt-0.5 text-xs font-semibold text-[#3a1407]">
                    Delivered to you
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ACTIONS */}
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              to="/shop"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#3a1407] px-7 text-[10px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#54200f] sm:w-auto">
              Continue Shopping
              <ArrowRight size={14} />
            </Link>

            <Link
              to="/"
              className="flex h-11 w-full items-center justify-center rounded-full border border-[#d9cbbd] bg-[#fffdf9] px-7 text-[10px] font-semibold text-[#5f5046] transition-colors hover:border-[#a05f38] hover:text-[#a05f38] sm:w-auto">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OrderSuccess;
