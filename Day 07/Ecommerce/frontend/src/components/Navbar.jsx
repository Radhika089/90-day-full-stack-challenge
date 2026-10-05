import { useContext, useEffect, useState } from "react";
import {
  Search,
  ShoppingBag,
  User,
  Heart,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getCart, updateCart, removeFromCart } from "../api/cartApi";
import { AuthContext } from "../context/AuthContext";
import { getWishlist } from "../api/wishlistApi";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, loading, logout, cartUpdated, wishlistUpdated } =
    useContext(AuthContext);

  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState(null);
  const [wishlist, setWishlist] = useState(null);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 300);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    if (loading) return;

    if (!user) {
      setCart(null);
      return;
    }

    const fetchCart = async () => {
      try {
        const data = await getCart();
        console.log("NAVBAR CART:", data.cart);

        setCart(data.cart);
      } catch (error) {
        console.error("Failed to fetch cart:", error);

        toast.error(
          error.response?.data?.message || "Failed to load your cart",
        );
      }
    };

    fetchCart();
  }, [user, loading, cartUpdated]);

  useEffect(() => {
    const fetchWishlist = async () => {
      if (!user) {
        setWishlist(null);
        return;
      }

      try {
        const data = await getWishlist();
        setWishlist(data.wishlist);
      } catch (error) {
        console.log("Failed to fetch wishlist:", error);
        setWishlist(null);

        toast.error(
          error.response?.data?.message || "Failed to load your wishlist",
        );
      }
    };

    fetchWishlist();
  }, [user, wishlistUpdated]);

  const handleUpdateQuantity = async (productId, newQuantity) => {
    try {
      const data = await updateCart(productId, newQuantity);
      setCart(data.cart);
    } catch (error) {
      console.error("Failed to update cart:", error);

      toast.error(error.response?.data?.message || "Failed to update cart");
    }
  };

  const handleRemoveItem = async (productId) => {
    try {
      const data = await removeFromCart(productId);
      setCart(data.cart);
    } catch (error) {
      console.error("Failed to remove item from cart:", error);

      toast.error(
        error.response?.data?.message || "Failed to remove item from cart",
      );
    }
  };

  const handleLogout = async () => {
    try {
      await logout();

      setProfileOpen(false);
      navigate("/");

      toast.success("Logged out successfully");
    } catch (error) {
      console.error("Logout error:", error);

      toast.error("Logout failed");
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setIsSearching(true);
  };

  useEffect(() => {
    if (!isSearching) return;

    if (debouncedSearch.trim()) {
      navigate(`/shop?search=${encodeURIComponent(debouncedSearch.trim())}`);
    } else {
      navigate("/shop");
    }
  }, [debouncedSearch, navigate, isSearching]);

  const subtotal =
    cart?.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    ) || 0;

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
      <nav className="sticky top-0 z-40 border-b border-[#eadfd3] bg-[#fffaf2]">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-semibold tracking-wide text-[#3a1407]">
            AURA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm transition-colors ${
                    isActive
                      ? "font-medium text-[#9a4f28]"
                      : "text-[#5c3929] hover:text-[#9a4f28]"
                  }`
                }>
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-2 sm:flex">
            {/* Search */}
            <div className="relative flex items-center">
              {searchOpen && (
                <input
                  type="text"
                  autoFocus
                  value={search}
                  onChange={handleSearch}
                  placeholder="Search coffee..."
                  className="mr-2 w-40 rounded-full border border-[#e5d7c7] bg-white px-4 py-2 text-sm outline-none focus:border-[#b96447]"
                />
              )}

              <button
                type="button"
                onClick={() => setSearchOpen((prev) => !prev)}
                className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-[#f3e5d3]"
                aria-label="Search">
                <Search size={20} strokeWidth={1.8} />
              </button>
            </div>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-[#f3e5d3]"
              aria-label="Wishlist">
              <Heart size={20} strokeWidth={1.8} />{" "}
              {wishlist?.products?.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#b96447] px-1 text-[10px] text-white">
                  {wishlist.products.length}
                </span>
              )}
            </Link>

            {/* Account */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setProfileOpen((prev) => !prev)}
                className="flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-[#f3e5d3]"
                aria-label="Account">
                <User size={20} strokeWidth={1.8} />
              </button>

              {profileOpen && (
                <div className="absolute right-0 top-12 z-50 w-56 rounded-xl border border-[#e5d7c7] bg-[#fffaf2] p-3 shadow-lg">
                  {loading ? (
                    <div className="px-3 py-2 text-sm text-[#806858]">
                      Loading...
                    </div>
                  ) : user ? (
                    <>
                      <div className="border-b border-[#e5d7c7] px-3 pb-3">
                        <p className="text-sm font-semibold text-[#3a1407]">
                          {user.name}
                        </p>

                        <p className="mt-1 text-xs text-[#806858]">
                          {user.email}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => {
                          setProfileOpen(false);
                          navigate("/profile");
                        }}
                        className="mt-2 w-full rounded-lg px-3 py-2 text-left text-sm text-[#5c3929] transition hover:bg-[#f3e5d3]">
                        Your Profile
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setProfileOpen(false);
                          navigate("/orders");
                        }}
                        className="w-full rounded-lg px-3 py-2 text-left text-sm text-[#5c3929] transition hover:bg-[#f3e5d3]">
                        My Orders
                      </button>

                      <button
                        type="button"
                        onClick={handleLogout}
                        className="w-full rounded-lg px-3 py-2 text-left text-sm text-[#9a4f28] transition hover:bg-[#f3e5d3]">
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <p className="px-3 pb-2 text-xs text-[#806858]">
                        Welcome to AURA
                      </p>

                      <Link
                        to="/login"
                        onClick={() => setProfileOpen(false)}
                        className="block w-full rounded-lg px-3 py-2 text-sm text-[#5c3929] transition hover:bg-[#f3e5d3]">
                        Login
                      </Link>

                      <Link
                        to="/register"
                        onClick={() => setProfileOpen(false)}
                        className="block w-full rounded-lg px-3 py-2 text-sm text-[#5c3929] transition hover:bg-[#f3e5d3]">
                        Register
                      </Link>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Cart */}
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="relative flex h-9 w-9 items-center justify-center rounded-full transition-colors hover:bg-[#f3e5d3]"
              aria-label="Cart">
              <ShoppingBag size={20} strokeWidth={1.8} />

              {cart?.items?.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#b96447] px-1 text-[10px] text-white">
                  {cart.items.length}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              type="button"
              onClick={() => setCartOpen(true)}
              className="relative flex h-9 w-9 items-center justify-center rounded-full hover:bg-[#f3e5d3]"
              aria-label="Cart">
              <ShoppingBag size={20} strokeWidth={1.8} />

              {cart?.items?.length > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#b96447] px-1 text-[10px] text-white">
                  {cart.items.length}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-[#f3e5d3]"
              aria-label="Menu">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="border-t border-[#eadfd3] bg-[#fffaf2] px-6 py-5 sm:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className="rounded-lg px-3 py-3 text-sm text-[#5c3929] hover:bg-[#f3e5d3]">
                  {item.name}
                </NavLink>
              ))}

              <Link
                to="/wishlist"
                onClick={closeMobileMenu}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-[#5c3929] hover:bg-[#f3e5d3]">
                <Heart size={18} />
                Wishlist
              </Link>

              {user ? (
                <button
                  type="button"
                  onClick={() => {
                    closeMobileMenu();
                    navigate("/profile");
                  }}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-left text-sm text-[#5c3929] hover:bg-[#f3e5d3]">
                  <User size={18} />
                  Account
                </button>
              ) : (
                <Link
                  to="/login"
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-[#5c3929] hover:bg-[#f3e5d3]">
                  <User size={18} />
                  Account
                </Link>
              )}

              {user && (
                <button
                  type="button"
                  onClick={() => {
                    closeMobileMenu();
                    navigate("/orders");
                  }}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-left text-sm text-[#5c3929] hover:bg-[#f3e5d3]">
                  <ShoppingBag size={18} />
                  My Orders
                </button>
              )}

              {user && (
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center gap-3 rounded-lg px-3 py-3 text-left text-sm text-[#9a4f28] hover:bg-[#f3e5d3]">
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setCartOpen(false)}
          />

          <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-[#fffaf2] shadow-xl">
            <div className="flex items-center justify-between border-b border-[#eadfd3] px-6 py-5">
              <h2 className="text-lg font-semibold text-[#3a1407]">
                Your Cart
              </h2>

              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-[#f3e5d3]">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5">
              {!cart?.items?.length ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingBag
                    size={42}
                    strokeWidth={1.4}
                    className="text-[#9a7658]"
                  />

                  <p className="mt-4 text-sm text-[#806858]">
                    Your cart is empty.
                  </p>

                  <Link
                    to="/shop"
                    onClick={() => setCartOpen(false)}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#3a1407] px-5 py-3 text-sm text-white">
                    Shop Coffee
                    <ArrowRight size={16} />
                  </Link>
                </div>
              ) : (
                <div className="space-y-5">
                  {cart.items.map((item) => (
                    <div
                      key={item.product._id}
                      className="flex gap-4 border-b border-[#eadfd3] pb-5">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-20 w-20 rounded-lg object-cover"
                      />

                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-sm font-medium text-[#3a1407]">
                          {item.product.name}
                        </h3>

                        <p className="mt-1 text-sm text-[#806858]">
                          ₹{item.product.price}
                        </p>

                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center rounded-lg border border-[#e5d7c7]">
                            <button
                              type="button"
                              onClick={() =>
                                handleUpdateQuantity(
                                  item.product._id,
                                  Math.max(1, item.quantity - 1),
                                )
                              }
                              className="px-3 py-1 text-sm">
                              -
                            </button>

                            <span className="px-2 text-sm">
                              {item.quantity}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                handleUpdateQuantity(
                                  item.product._id,
                                  item.quantity + 1,
                                )
                              }
                              className="px-3 py-1 text-sm">
                              +
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => handleRemoveItem(item.product._id)}
                            className="text-xs text-[#9a4f28]">
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart?.items?.length > 0 && (
              <div className="border-t border-[#eadfd3] px-6 py-5">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-sm text-[#806858]">Subtotal</span>
                  <span className="font-semibold text-[#3a1407]">
                    ₹{subtotal}
                  </span>
                </div>

                <Link
                  to="/cart"
                  onClick={() => setCartOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[#3a1407] px-5 py-3 text-sm text-white transition hover:bg-[#5c2410]">
                  View Cart
                  <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
