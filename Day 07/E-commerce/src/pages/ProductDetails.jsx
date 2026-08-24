import React from "react";
import { ArrowLeft, Heart, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ProductDetails = () => {
  return (
    <div className="bg-[#fdfbf7] px-5 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/shop"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-[#6f6259] transition hover:text-[#9a7658]">
          <ArrowLeft size={16} />
          Back to shop
        </Link>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="overflow-hidden bg-[#f1ece5]">
            <img
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=1200&q=80"
              alt="Ethiopian Yirgacheffe"
              className="h-[500px] w-full object-cover sm:h-[600px]"
            />
          </div>

          <div className="flex flex-col justify-center">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9a7658]">
              Whole Bean
            </p>

            <h1 className="max-w-xl text-4xl font-semibold tracking-tight text-[#2d211b] sm:text-5xl">
              Ethiopian Yirgacheffe
            </h1>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Star
                  size={15}
                  fill="currentColor"
                  className="text-[#9a7658]"
                />
                <span className="text-sm font-medium text-[#4c4038]">4.8</span>
              </div>

              <span className="text-sm text-[#9d9289]">124 reviews</span>
            </div>

            <p className="mt-6 text-2xl font-medium text-[#2d211b]">$18.00</p>

            <p className="mt-6 max-w-lg text-[15px] leading-7 text-[#81766e]">
              A bright and floral coffee with delicate citrus and honey
              sweetness. Carefully selected and roasted to bring out its
              naturally vibrant character.
            </p>

            <div className="my-8 h-px bg-[#e8e0d8]" />

            <div>
              <p className="mb-3 text-sm font-medium text-[#40352f]">
                Quantity
              </p>

              <div className="flex w-fit items-center border border-[#dcd2c9] bg-white">
                <button className="flex h-11 w-11 items-center justify-center text-[#5d4b3e] transition hover:bg-[#f5f0eb]">
                  <Minus size={15} />
                </button>

                <span className="flex h-11 w-12 items-center justify-center border-x border-[#dcd2c9] text-sm font-medium text-[#2d211b]">
                  1
                </span>

                <button className="flex h-11 w-11 items-center justify-center text-[#5d4b3e] transition hover:bg-[#f5f0eb]">
                  <Plus size={15} />
                </button>
              </div>
            </div>

            <div className="mt-7 flex gap-3">
              <button className="flex h-12 flex-1 items-center justify-center gap-2 bg-[#2d211b] px-6 text-sm font-medium text-white transition hover:bg-[#40312a]">
                <ShoppingBag size={17} />
                Add to cart
              </button>

              <button className="flex h-12 w-12 items-center justify-center border border-[#dcd2c9] bg-white text-[#5d4b3e] transition hover:bg-[#f5f0eb]">
                <Heart size={18} />
              </button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-[#e8e0d8] pt-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-[#9d9289]">
                  Roast
                </p>
                <p className="mt-1 text-sm font-medium text-[#40352f]">
                  Medium
                </p>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-[#9d9289]">
                  Origin
                </p>
                <p className="mt-1 text-sm font-medium text-[#40352f]">
                  Ethiopia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
