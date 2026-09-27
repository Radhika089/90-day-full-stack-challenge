import { Heart, ShoppingBag, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const discount = product.discountPercentage || 0;

  const discountedPrice = product.price - (product.price * discount) / 100;

  return (
    <div className="group">
      {/* Product Image */}
      <div className="relative overflow-hidden rounded-[28px] bg-[#f3e9da] shadow-sm transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-[#5b2b18]/10">
        {/* Discount */}
        {discount > 0 && (
          <div className="absolute left-4 top-4 z-20 rounded-full bg-[#6b4226] px-3 py-1.5 text-[10px] font-semibold tracking-wide text-white">
            SAVE {discount}%
          </div>
        )}

        {/* Wishlist */}
        <button
          type="button"
          onClick={(e) => e.preventDefault()}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-[#fffaf2]/90 text-[#3b2a20] shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-[#3b2a20] hover:text-white">
          <Heart size={17} strokeWidth={1.7} />
        </button>

        {/* Product Link */}
        <Link to={`/products/${product.id}`}>
          <div className="flex h-[280px] items-center justify-center overflow-hidden sm:h-[290px]">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </Link>

        {/* Add to Cart */}
        <div className="absolute bottom-4 left-4 right-4 z-20 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            onClick={(e) => e.stopPropagation()}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#3a1407] py-3.5 text-sm font-medium text-white shadow-lg shadow-[#3a1407]/20 transition-all duration-300 hover:bg-[#54200f]">
            <ShoppingBag size={17} />
            Add to cart
          </button>
        </div>
      </div>

      {/* Product Information */}
      <Link to={`/products/${product.id}`}>
        <div className="px-1 pt-4">
          {/* Category + Rating */}
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a0836b]">
              {product.category}
            </p>

            <div className="flex items-center gap-1">
              <Star size={13} fill="currentColor" className="text-[#c7924b]" />

              <span className="text-xs font-medium text-[#6d625b]">
                {product.rating}
              </span>
            </div>
          </div>

          {/* Name */}
          <h3 className="mt-2 text-[17px] font-semibold tracking-tight text-[#2d211b] transition-colors duration-300 group-hover:text-[#8b5e3c]">
            {product.name}
          </h3>

          {/* Description */}
          <p className="mt-1 line-clamp-1 text-xs leading-relaxed text-[#92857b]">
            {product.description}
          </p>

          {/* Price */}
          <div className="mt-3 flex items-center gap-2">
            <span className="text-lg font-bold text-[#2d211b]">
              ₹{discountedPrice.toFixed(0)}
            </span>

            {discount > 0 && (
              <span className="text-sm text-[#a89b91] line-through">
                ₹{product.price.toFixed(0)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
