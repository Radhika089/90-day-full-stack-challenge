import {
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Tag,
  Trash2,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { useEffect } from "react";
import { clearCart, getCart, removeFromCart, updateCart } from "../api/cartApi";
import { AuthContext } from "../context/AuthContext";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      console.log("Please login to continue");
      return;
    }

    const fetchCart = async () => {
      try {
        const data = await getCart();
        setCart(data.cart);
      } catch (error) {
        console.error("Failed to fetch cart:", error);
      }
    };
    fetchCart();
  }, [user]);

  const handleUpdateQuantity = async (productId, newQuantity) => {
    try {
      const data = await updateCart(productId, newQuantity);
      setCart(data.cart);
    } catch (error) {
      console.error("Failed to update cart:", error);
    }
  };

  const handleRemoveItem = async (productId) => {
    try {
      const data = await removeFromCart(productId);
      setCart(data.cart);
    } catch (error) {
      console.error("Failed to remove item from the cart:", error);
    }
  };

  const handleClearCart = async () => {
    try {
      const data = await clearCart();
      setCart(data.cart);
    } catch (error) {
      console.error("Failed to clear cart:", error);
    }
  };

  const subtotal =
    cart?.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    ) || 0;

  const shipping = subtotal >= 50 ? 0 : 5;
  const discount = 0;
  const total = subtotal + shipping - discount;

  return (
    <main className="min-h-screen bg-[#fffaf4] font-sans text-[#2f211b]">
      {/* PAGE */}
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 md:px-10 lg:pt-10">
        {/* BREADCRUMB */}
        <div className="mb-8 flex items-center gap-2 text-[11px] text-[#8c7b70]">
          <Link to="/" className="transition-colors hover:text-[#8d4f2d]">
            Home
          </Link>

          <span className="text-[#c5b5a7]">›</span>

          <span className="font-medium text-[#3a1407]">Cart</span>
        </div>

        {/* HEADING */}
        <div className="mb-8 flex items-end justify-between gap-5">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a05f38]">
              YOUR COFFEE SELECTION
            </p>

            <h1 className="text-4xl font-medium tracking-[-0.04em] text-[#3a1407] sm:text-5xl">
              Your Cart
            </h1>
          </div>

          <p className="pb-1 text-xs text-[#8c7b70]">
            {cart?.items.length} {cart?.items.length === 1 ? "item" : "items"}
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_350px] lg:items-start">
          {/* CART */}
          <section className="rounded-[18px] border border-[#e3d9ce] bg-[#fffdf9] p-4 sm:p-5 md:p-6">
            {/* CART HEADER */}
            <div className="mb-3 hidden grid-cols-[minmax(0,1fr)_110px_90px_30px] items-center gap-4 px-3 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#968579] sm:grid">
              <span>Product</span>
              <span className="text-center">Quantity</span>
              <span className="text-right">Price</span>
              <span />
            </div>

            {/* PRODUCTS */}
            <div className="divide-y divide-[#ebe2d8]">
              {cart?.items.map(({ product, quantity }) => {
                const itemTotal = product.price * quantity;

                return (
                  <article
                    key={product._id}
                    className="group relative grid grid-cols-1 gap-4 py-4 sm:grid-cols-[minmax(0,1fr)_110px_90px_30px] sm:items-center sm:gap-4 sm:px-3">
                    {/* PRODUCT */}
                    <div className="flex min-w-0 items-center gap-4">
                      <Link
                        to={`/products/${product._id}`}
                        className="group/image h-20 w-20 shrink-0 overflow-hidden rounded-[10px] bg-[#f1e8dd] sm:h-[86px] sm:w-[86px]">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover/image:scale-105"
                        />
                      </Link>

                      <div className="min-w-0">
                        <p className="mb-1 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#a05f38]">
                          {product.category}
                        </p>

                        <Link to={`/products/${product._id}`}>
                          <h2 className="truncate text-sm font-semibold text-[#3a1407] transition-colors hover:text-[#99502b] sm:text-[15px]">
                            {product.name}
                          </h2>
                        </Link>

                        <p className="mt-1 text-[10px] text-[#8d7d72]">
                          {product.roast
                            ? `${product.roast} Roast`
                            : product.description}
                        </p>

                        <p className="mt-1 text-[10px] text-[#a29286] sm:hidden">
                          ₹{itemTotal.toFixed(0)}
                        </p>
                      </div>
                    </div>

                    {/* QUANTITY */}
                    <div className="flex items-center justify-between sm:justify-center">
                      <span className="text-[9px] uppercase tracking-[0.12em] text-[#9b8c81] sm:hidden">
                        Quantity
                      </span>

                      <div className="flex h-8 items-center rounded-full border border-[#ded2c5] bg-[#fffaf4]">
                        <button
                          type="button"
                          className="flex h-full w-8 items-center justify-center rounded-l-full text-[#625247] transition hover:bg-[#f2e9de]"
                          aria-label="Decrease quantity">
                          <Minus
                            size={11}
                            onClick={() =>
                              handleUpdateQuantity(
                                product._id,
                                Math.max(1, quantity - 1),
                              )
                            }
                          />
                        </button>

                        <span className="flex h-full w-8 items-center justify-center border-x border-[#ded2c5] text-[11px] font-medium text-[#3a1407]">
                          {quantity}
                        </span>

                        <button
                          type="button"
                          className="flex h-full w-8 items-center justify-center rounded-r-full text-[#625247] transition hover:bg-[#f2e9de]"
                          aria-label="Increase quantity">
                          <Plus
                            size={11}
                            onClick={() =>
                              handleUpdateQuantity(
                                product._id,
                                Math.max(1, quantity + 1),
                              )
                            }
                          />
                        </button>
                      </div>
                    </div>

                    {/* PRICE */}
                    <div className="hidden text-right sm:block">
                      <span className="text-sm font-semibold text-[#3a1407]">
                        ₹{itemTotal.toFixed(0)}
                      </span>
                    </div>

                    {/* REMOVE */}
                    <button
                      type="button"
                      className="absolute right-0 top-4 flex h-7 w-7 items-center justify-center rounded-full text-[#a29286] transition hover:bg-[#f5e8dc] hover:text-[#a64f32] sm:static"
                      aria-label={`Remove ${product.name}`}>
                      <X
                        size={14}
                        onClick={() => handleRemoveItem(product._id)}
                      />
                    </button>
                  </article>
                );
              })}
            </div>

            {/* CART FOOTER */}
            <div className="mt-4 flex flex-col gap-4 border-t border-[#ebe2d8] px-3 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 text-xs font-medium text-[#6f5d51] transition-colors hover:text-[#9a4f28]">
                ← Continue Shopping
              </Link>

              <button
                type="button"
                className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[#98877a] transition-colors hover:text-[#a64f32]"
                onClick={handleClearCart}>
                <Trash2 size={13} />
                Remove All Items
              </button>
            </div>
          </section>

          {/* RIGHT SIDE */}
          <aside className="space-y-5">
            {/* COUPON */}
            <div className="rounded-[18px] border border-[#e3d9ce] bg-[#fffdf9] p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <Tag size={15} className="text-[#a05f38]" />

                <h2 className="text-base font-semibold text-[#3a1407]">
                  Coupon Code
                </h2>
              </div>

              <div className="mt-4 flex h-10">
                <input
                  type="text"
                  placeholder="Enter your coupon code"
                  className="min-w-0 flex-1 rounded-l-[8px] border border-r-0 border-[#ded2c5] bg-[#faf6f0] px-3 text-[10px] text-[#3a1407] outline-none placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                />

                <button
                  type="button"
                  className="rounded-r-[8px] bg-[#3a1407] px-5 text-[10px] font-semibold text-white transition-colors hover:bg-[#54200f]">
                  Apply
                </button>
              </div>
            </div>

            {/* ORDER SUMMARY */}
            <div className="rounded-[18px] border border-[#e3d9ce] bg-[#fffdf9] p-5 sm:p-6">
              <div className="flex items-center gap-2">
                <ShoppingBag size={16} className="text-[#a05f38]" />

                <h2 className="text-base font-semibold text-[#3a1407]">
                  Order Summary
                </h2>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#817168]">Subtotal</span>

                  <span className="font-medium text-[#3a1407]">
                    ₹{subtotal.toFixed(0)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#817168]">Shipping</span>

                  <span className="font-medium text-[#3a1407]">
                    {shipping === 0 ? "Free" : `₹${shipping.toFixed(0)}`}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#817168]">Discount</span>

                  <span className="font-medium text-[#a05f38]">
                    -₹{discount.toFixed(0)}
                  </span>
                </div>
              </div>

              <div className="my-5 h-px bg-[#e7ddd3]" />

              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#3a1407]">
                  Total
                </span>

                <span className="text-xl font-semibold tracking-tight text-[#3a1407]">
                  ₹{total.toFixed(0)}
                </span>
              </div>

              <Link
                to="/checkout"
                className="mt-5 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#3a1407] text-[11px] font-semibold text-white transition-all duration-300 hover:bg-[#54200f]">
                Go to Checkout
                <ArrowRight size={14} />
              </Link>

              <p className="mt-3 text-center text-[9px] leading-4 text-[#a29387]">
                Taxes and shipping are calculated at checkout.
              </p>
            </div>
          </aside>
        </div>

        {/* NEWSLETTER */}
        <section className="relative mt-16 overflow-hidden rounded-[18px] bg-[#431b0d] px-6 py-7 sm:px-10 sm:py-9">
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#d88d48] opacity-20 blur-[80px]" />

          <div className="pointer-events-none absolute -bottom-24 left-20 h-40 w-40 rounded-full bg-[#a05f38] opacity-20 blur-[70px]" />

          <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#d8a87d]">
                STAY IN THE LOOP
              </p>

              <h2 className="max-w-md text-2xl font-medium leading-tight tracking-[-0.03em] text-[#fffaf2] sm:text-3xl">
                Stay connected with our latest coffee drops.
              </h2>
            </div>

            <div className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="h-11 min-w-0 flex-1 rounded-full border border-white/10 bg-[#fffaf2] px-5 text-xs text-[#3a1407] outline-none placeholder:text-[#9b8a7d]"
              />

              <button
                type="button"
                className="h-11 rounded-full bg-[#d88d48] px-6 text-[10px] font-semibold text-[#3a1407] transition-colors hover:bg-[#e3a365]">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Cart;
