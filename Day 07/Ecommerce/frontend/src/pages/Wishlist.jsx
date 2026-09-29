import React from "react";
import { ArrowLeft, Heart, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import products from "../utils/constant";

const Wishlist = () => {
  // Temporary wishlist data.
  // Replace this with your backend wishlist data later.
  const wishlistProducts = products.slice(0, 4);

  return (
    <main className="min-h-screen bg-[#fffaf4] font-sans text-[#2f211b]">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 md:px-10 lg:pt-10">
        {/* BREADCRUMB */}
        <div className="mb-8 flex items-center gap-2 text-[11px] text-[#8c7b70]">
          <Link to="/" className="transition-colors hover:text-[#8d4f2d]">
            Home
          </Link>

          <span className="text-[#c5b5a7]">›</span>

          <span className="font-medium text-[#3a1407]">Wishlist</span>
        </div>

        {/* HEADER */}
        <div className="mb-9 flex items-end justify-between gap-5 border-b border-[#e3d9ce] pb-6">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a05f38]">
              YOUR SAVED COFFEE
            </p>

            <h1 className="text-4xl font-medium tracking-[-0.04em] text-[#3a1407] sm:text-5xl">
              Your Wishlist
            </h1>

            <p className="mt-2 text-xs leading-5 text-[#817168] sm:text-sm">
              Keep your favorite coffee essentials close for later.
            </p>
          </div>

          <div className="hidden items-center gap-2 text-xs text-[#8c7b70] sm:flex">
            <Heart size={14} className="text-[#a05f38]" />
            {wishlistProducts.length} saved
          </div>
        </div>

        {/* WISHLIST */}
        {wishlistProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {wishlistProducts.map((product) => {
                const discount = product.discountPercentage || 0;
                const discountedPrice =
                  product.price - (product.price * discount) / 100;

                return (
                  <article key={product.id} className="group">
                    {/* IMAGE */}
                    <div className="relative overflow-hidden rounded-[16px] bg-[#f1e8dd]">
                      <Link to={`/products/${product.id}`}>
                        <div className="h-[280px] overflow-hidden sm:h-[290px]">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                        </div>
                      </Link>

                      {/* DISCOUNT */}
                      {discount > 0 && (
                        <span className="absolute left-3 top-3 rounded-full bg-[#3a1407] px-3 py-1.5 text-[8px] font-semibold uppercase tracking-[0.12em] text-white">
                          Save {discount}%
                        </span>
                      )}

                      {/* REMOVE */}
                      <button
                        type="button"
                        className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-[#dfd3c7] bg-[#fffaf4]/90 text-[#8b7769] shadow-sm backdrop-blur-sm transition-all duration-300 hover:bg-[#3a1407] hover:text-white"
                        aria-label={`Remove ${product.name} from wishlist`}>
                        <Heart
                          size={15}
                          fill="currentColor"
                          strokeWidth={1.6}
                        />
                      </button>

                      {/* ADD TO CART */}
                      <div className="absolute bottom-3 left-3 right-3 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <button
                          type="button"
                          className="flex h-10 w-full items-center justify-center gap-2 rounded-full bg-[#3a1407] text-[10px] font-semibold text-white shadow-lg shadow-[#3a1407]/15 transition-colors hover:bg-[#54200f]">
                          <ShoppingBag size={14} />
                          Add to Cart
                        </button>
                      </div>
                    </div>

                    {/* DETAILS */}
                    <Link to={`/products/${product.id}`}>
                      <div className="px-1 pt-4">
                        <div className="flex items-center justify-between gap-3">
                          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#a05f38]">
                            {product.category}
                          </p>

                          {product.rating && (
                            <span className="text-[10px] text-[#8d7d72]">
                              ★ {product.rating}
                            </span>
                          )}
                        </div>

                        <div className="mt-2 flex items-start justify-between gap-3">
                          <h2 className="text-[16px] font-semibold leading-5 tracking-tight text-[#3a1407] transition-colors group-hover:text-[#9a4f28]">
                            {product.name}
                          </h2>

                          <div className="shrink-0 text-right">
                            <p className="text-[15px] font-semibold text-[#3a1407]">
                              ₹{discountedPrice.toFixed(0)}
                            </p>

                            {discount > 0 && (
                              <p className="text-[10px] text-[#a89b91] line-through">
                                ₹{product.price.toFixed(0)}
                              </p>
                            )}
                          </div>
                        </div>

                        <p className="mt-1.5 line-clamp-1 text-[11px] leading-5 text-[#806f63]">
                          {product.description}
                        </p>
                      </div>
                    </Link>
                  </article>
                );
              })}
            </div>

            {/* CONTINUE SHOPPING */}
            <div className="mt-14 flex justify-center border-t border-[#e3d9ce] pt-7">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#3a1407] transition-colors hover:text-[#a05f38]">
                <ArrowLeft size={14} />
                Continue Shopping
              </Link>
            </div>
          </>
        ) : (
          /* EMPTY WISHLIST */
          <div className="flex min-h-[380px] flex-col items-center justify-center rounded-[18px] border border-[#e3d9ce] bg-[#fffdf9] px-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#f1e8dd] text-[#a05f38]">
              <Heart size={25} strokeWidth={1.5} />
            </div>

            <h2 className="mt-5 text-xl font-semibold text-[#3a1407]">
              Your wishlist is empty
            </h2>

            <p className="mt-2 max-w-sm text-xs leading-5 text-[#817168]">
              Save the coffees and brewing essentials you love and find them
              here whenever you're ready.
            </p>

            <Link
              to="/shop"
              className="mt-6 inline-flex h-10 items-center gap-2 rounded-full bg-[#3a1407] px-6 text-[10px] font-semibold text-white transition-colors hover:bg-[#54200f]">
              Explore Coffee
              <ArrowLeft size={13} className="rotate-180" />
            </Link>
          </div>
        )}
      </div>
    </main>
  );
};

export default Wishlist;
