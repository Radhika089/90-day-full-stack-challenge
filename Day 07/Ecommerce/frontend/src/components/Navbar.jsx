import { useState } from "react";
import {
  Search,
  ShoppingBag,
  User,
  Heart,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const navItems = [
    { name: "Shop", path: "/shop" },
    { name: "Brews", path: "/brews" },
    { name: "Gear", path: "/gear" },
    { name: "About", path: "/about" },
    { name: "Subscribe", path: "/subscribe" },
  ];

  const closeMobileMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-[#e8e0d7] bg-[#fdfbf7] text-[#1f2f2e]">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link
            to="/"
            className="leading-none transition-opacity hover:opacity-70">
            <h2 className="text-2xl font-black tracking-[0.2em]">AURA</h2>

            <span className="block text-[10px] tracking-[0.18em] text-[#1f2f2e]/60">
              COFFEE CO.
            </span>
          </Link>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#1f2f2e]"
                      : "text-[#1f2f2e]/60 hover:text-[#1f2f2e]"
                  }`
                }>
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* ================= RIGHT ACTIONS ================= */}
          <div className="flex items-center gap-5">
            {/* Search */}
            <div
              className={`flex items-center border-b border-[#1f2f2e]/30 transition-all duration-300 ${
                searchOpen ? "w-48" : "w-5"
              }`}>
              <button
                type="button"
                onClick={() => setSearchOpen(!searchOpen)}
                className="shrink-0 transition-colors hover:text-[#9a7658]"
                aria-label="Search">
                {searchOpen ? (
                  <X size={20} strokeWidth={1.8} />
                ) : (
                  <Search size={20} strokeWidth={1.8} />
                )}
              </button>

              {searchOpen && (
                <input
                  type="text"
                  autoFocus
                  placeholder="Search..."
                  className="ml-3 w-full bg-transparent pb-1 text-sm text-[#1f2f2e] outline-none placeholder:text-[#1f2f2e]/40"
                />
              )}
            </div>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="hidden transition-colors hover:text-[#9a7658] sm:block"
              aria-label="Wishlist">
              <Heart size={20} strokeWidth={1.8} />
            </Link>

            {/* Cart */}
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="relative transition-colors hover:text-[#9a7658]"
              aria-label="Shopping cart">
              <ShoppingBag size={20} strokeWidth={1.8} />

              {/* Temporary cart count */}
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#b96447] text-[9px] font-semibold text-white">
                2
              </span>
            </button>

            {/* Account */}
            <Link
              to="/login"
              className="hidden transition-colors hover:text-[#9a7658] sm:block"
              aria-label="Account">
              <User size={20} strokeWidth={1.8} />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="transition-colors hover:text-[#9a7658] md:hidden"
              aria-label="Menu">
              {menuOpen ? (
                <X size={22} strokeWidth={1.8} />
              ) : (
                <Menu size={22} strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {menuOpen && (
          <div className="border-t border-[#e8e0d7] bg-[#fdfbf7] md:hidden">
            <div className="px-6 py-6">
              {/* Main Links */}
              <div className="flex flex-col">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    onClick={closeMobileMenu}
                    className={({ isActive }) =>
                      `border-b border-[#e8e0d7] py-4 text-sm font-medium transition-colors ${
                        isActive
                          ? "text-[#1f2f2e]"
                          : "text-[#1f2f2e]/60 hover:text-[#1f2f2e]"
                      }`
                    }>
                    {item.name}
                  </NavLink>
                ))}
              </div>

              {/* Mobile Extra Links */}
              <div className="mt-5 flex items-center gap-6">
                <Link
                  to="/wishlist"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-2 text-xs text-[#1f2f2e]/60 transition hover:text-[#1f2f2e]">
                  <Heart size={16} strokeWidth={1.8} />
                  Wishlist
                </Link>

                <Link
                  to="/login"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-2 text-xs text-[#1f2f2e]/60 transition hover:text-[#1f2f2e]">
                  <User size={16} strokeWidth={1.8} />
                  Account
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* ================= CART DRAWER ================= */}
      {cartOpen && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setCartOpen(false)}
            className="fixed inset-0 z-[60] bg-[#1f2f2e]/30"
          />

          {/* Drawer */}
          <aside className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-sm flex-col bg-[#fdfbf7] text-[#2d211b] shadow-2xl">
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-[#e6ddd5] px-6 py-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9a7658]">
                  Your Selection
                </p>

                <h2 className="mt-1 text-xl font-semibold">Your Cart</h2>
              </div>

              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="text-[#6f6259] transition hover:text-[#2d211b]"
                aria-label="Close cart">
                <X size={20} strokeWidth={1.8} />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {/* Product 1 */}
              <div className="flex gap-4 border-b border-[#e6ddd5] pb-5">
                <div className="h-20 w-20 shrink-0 bg-[#e9dfd5]" />

                <div className="flex-1">
                  <div className="flex justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-medium">House Blend</h3>

                      <p className="mt-1 text-xs text-[#8d8178]">
                        Medium Roast
                      </p>
                    </div>

                    <p className="text-sm font-medium">$18</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    {/* Quantity */}
                    <div className="flex items-center border border-[#d8cfc7]">
                      <button className="px-3 py-1 text-sm transition hover:bg-[#eee7df]">
                        −
                      </button>

                      <span className="border-x border-[#d8cfc7] px-3 py-1 text-xs">
                        1
                      </span>

                      <button className="px-3 py-1 text-sm transition hover:bg-[#eee7df]">
                        +
                      </button>
                    </div>

                    <button className="text-[10px] text-[#9a7658] transition hover:text-[#2d211b]">
                      Remove
                    </button>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="flex gap-4 py-5">
                <div className="h-20 w-20 shrink-0 bg-[#e9dfd5]" />

                <div className="flex-1">
                  <div className="flex justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-medium">Ceramic Mug</h3>

                      <p className="mt-1 text-xs text-[#8d8178]">Sand</p>
                    </div>

                    <p className="text-sm font-medium">$24</p>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    {/* Quantity */}
                    <div className="flex items-center border border-[#d8cfc7]">
                      <button className="px-3 py-1 text-sm transition hover:bg-[#eee7df]">
                        −
                      </button>

                      <span className="border-x border-[#d8cfc7] px-3 py-1 text-xs">
                        1
                      </span>

                      <button className="px-3 py-1 text-sm transition hover:bg-[#eee7df]">
                        +
                      </button>
                    </div>

                    <button className="text-[10px] text-[#9a7658] transition hover:text-[#2d211b]">
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="border-t border-[#e6ddd5] px-6 py-6">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6f6259]">Subtotal</span>

                <span className="text-lg font-semibold">$42</span>
              </div>

              <p className="mt-2 text-[10px] leading-5 text-[#a0948b]">
                Shipping and taxes calculated at checkout.
              </p>

              <Link
                to="/cart"
                onClick={() => setCartOpen(false)}
                className="mt-5 flex h-12 items-center justify-center gap-2 rounded-full border border-[#2d211b]/25 text-sm font-medium transition hover:border-[#2d211b] hover:bg-[#f1ebe4]">
                View Cart
                <ArrowRight size={15} />
              </Link>

              <Link
                to="/checkout"
                onClick={() => setCartOpen(false)}
                className="mt-3 flex h-12 items-center justify-center rounded-full bg-[#2d211b] text-sm font-medium text-white transition hover:bg-[#40312a]">
                Checkout
              </Link>
            </div>
          </aside>
        </>
      )}
    </>
  );
};

export default Navbar;
