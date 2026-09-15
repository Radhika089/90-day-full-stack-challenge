import { Check, Package } from "lucide-react";
import hero from "../assets/hero/hero3.jpg";

const OrderSuccess1 = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf7] px-5 py-12 lg:px-10 sm:px-8">
      <div className="flex flex-col justify-center items-center">
        <div className="rounded-full p-3 border border-gray-300">
          <div className="rounded-full bg-[#2d211b] p-2 text-white">
            <Check size={20} />
          </div>
        </div>

        {/* order confirmed */}

        <div className="mt-7 text-center">
          <div className="mb-3 flex items-center gap-3 justify-center">
            <span className="h-px w-8 bg-[#9a7658]"></span>
            <p className="text-[11px] tracking-[0.25em] font-semibold uppercase text-[#9a7658]">
              Order Confirmed
            </p>
            <span className="h-px w-8 bg-[#9a7658]"></span>
          </div>

          <h1 className="text-[#2d211b] text-4xl tracking-tight sm:text-5xl font-semibold">
            Thank You
          </h1>

          <p className="text-[#8d8178] mt-3 mx-auto max-w-md text-sm leading-6">
            Your order has been placed successfully. We're getting your coffee
            ready.
          </p>
        </div>

        <div className="max-w-xl w-full mx-auto">
          <div className="border border-[#e7dfd7] bg-white mt-10 w-full">
            {/* header */}
            <div className="flex flex-col gap-2 border-b border-[#e8e0d8] sm:flex-row sm:items-center sm:justify-between sm:px-6 px-5 py-5">
              <div>
                <p className="text-[#9a7658] text-[10px] uppercase tracking-[0.18em] font-semibold">
                  Order Number
                </p>
                <p className="mt-1 text-sm font-semibold text-[#2d211b]">
                  #AURA-1042
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs text-[#8d8178]">
                <Package size={14} />
                <span>Estimated delivery: 3–5 days</span>
              </div>
            </div>

            {/* Product */}
            <div className="flex px-5 py-5 gap-4">
              <div className="h-20 w-20 overflow-hidden bg-[#f1ece5]">
                <img
                  src={hero}
                  alt="product"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <p className="text-[10px] font-semibold uppercase text-[#9a7658] tracking-[0.18em]">
                  Brews
                </p>
                <p className="text-sm font-semibold text-[#2d211b] mt-1">
                  Signature Coffee
                </p>
                <p className="text-xs mt-1 text-[#92857b]">
                  Medium Roast · 250g
                </p>
                <p className="text-xs mt-2 text-[#8d8178]">Quantity: 1</p>
              </div>

              <div className="text-right">
                <p className="text-sm font-semibold text-[#2d211b]">$20.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess1;
