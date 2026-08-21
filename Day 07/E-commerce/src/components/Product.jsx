import React from "react";
import { Heart, ShoppingBag, Star } from "lucide-react";

const Product = ({ product }) => {
  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;

  return (
    <div className="group w-72 overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
      <div className="relative h-80 overflow-hidden bg-gray-50">
        {/* Discount */}
        <span className="absolute top-4 left-4 z-10 rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
          -{Math.round(product.discountPercentage)}%
        </span>

        {/* Wishlist */}
        <button className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm hover:bg-black hover:text-white transition">
          <Heart size={17} strokeWidth={1.8} />
        </button>

        <img
          src={product?.images?.[0]}
          alt={product?.title}
          className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-5">
        <p className="mb-1 text-xs uppercase tracking-wider text-gray-400">
          {product.category}
        </p>

        <h2 className="line-clamp-1 text-base font-semibold text-gray-900">
          {product.title}
        </h2>

        <div className="mt-2 flex items-center gap-1">
          <Star size={15} fill="currentColor" className="text-yellow-400" />

          <span className="text-sm text-gray-500">{product.rating}</span>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">
            ${discountedPrice.toFixed(2)}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ${product.price}
          </span>
        </div>

        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-black py-3 text-sm font-medium text-white hover:bg-gray-800 transition">
          <ShoppingBag size={17} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
