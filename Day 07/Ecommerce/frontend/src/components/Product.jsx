import { Heart, Plus, ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const discount = product.discountPercentage || 0;

  const discountedPrice = product.price - (product.price * discount) / 100;

  return (
    <div className="group">
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-[18px] bg-[#f1e5d5]">
        {/* Discount */}
        {discount > 0 && (
          <div className="absolute left-4 top-4 z-20 rounded-full bg-[#3a1407] px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white">
            Save {discount}%
          </div>
        )}

        {/* Wishlist */}
        <button
          type="button"
          onClick={(e) => e.preventDefault()}
          className="absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-[#e2d0ba] bg-[#fffaf2]/90 text-[#5c3929] shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-[#3a1407] hover:text-white">
          <Heart size={15} strokeWidth={1.7} />
        </button>

        {/* Product Image */}
        <Link to={`/products/${product.id}`}>
          <div className="flex h-[250px] items-center justify-center overflow-hidden sm:h-[265px]">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Add to Cart */}
        <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={(e) => e.stopPropagation()}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#fffaf2]/95 py-3 text-xs font-semibold text-[#3a1407] shadow-lg backdrop-blur-sm transition hover:bg-[#3a1407] hover:text-white">
            <ShoppingBag size={14} />
            Add to cart
          </button>
        </div>
      </div>

      {/* Product Information */}
      <Link to={`/products/${product.id}`}>
        <div className="px-1 pt-4">
          {/* Category + Rating */}
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#a05f38]">
              {product.category}
            </p>

            <div className="flex items-center gap-1">
              <Star size={11} fill="currentColor" className="text-[#b87543]" />

              <span className="text-[11px] font-medium text-[#76584a]">
                {product.rating}
              </span>
            </div>
          </div>

          {/* Name + Price */}
          <div className="mt-2 flex items-start justify-between gap-3">
            <h3 className="text-[16px] font-semibold leading-5 tracking-tight text-[#3a1407] transition-colors duration-300 group-hover:text-[#9a4f28]">
              {product.name}
            </h3>

            <div className="shrink-0 text-right">
              <span className="text-[15px] font-semibold text-[#3a1407]">
                ₹{discountedPrice.toFixed(0)}
              </span>

              {discount > 0 && (
                <span className="ml-1 text-[10px] text-[#a89b91] line-through">
                  ₹{product.price.toFixed(0)}
                </span>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="mt-1.5 line-clamp-1 text-[11px] leading-5 text-[#806858]">
            {product.description}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
