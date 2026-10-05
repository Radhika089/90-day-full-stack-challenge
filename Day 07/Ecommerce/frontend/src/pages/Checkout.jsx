import { useMemo, useState, useEffect, useContext } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Lock,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { getCart, removeFromCart, updateCart } from "../api/cartApi";
import { AuthContext } from "../context/AuthContext";
import {
  createOrder,
  createRazorpayOrder,
  verifyPayment,
} from "../api/orderApi";
import toast from "react-hot-toast";

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [paymentMethod, setPaymentMethod] = useState("razorpay");
  const [country, setCountry] = useState("India");

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleContinue = async () => {
    const requiredFields = [
      "email",
      "phone",
      "firstName",
      "lastName",
      "address",
      "city",
      "state",
      "zip",
    ];

    const missingField = requiredFields.find(
      (field) => !formData[field].trim(),
    );

    if (missingField) {
      toast.error("Please fill in all required fields");
      return;
    }

    const shippingAddress = {
      name: `${formData.firstName} ${formData.lastName}`,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      pincode: formData.zip,
    };

    try {
      const data = await createOrder(shippingAddress, paymentMethod);

      if (paymentMethod === "cod") {
        toast.success("Order placed successfully!");

        navigate("/order-success", {
          state: { order: data.order },
        });

        return;
      }

      const razorpayData = await createRazorpayOrder(data.order._id);

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: razorpayData.razorpayOrder.amount,
        currency: razorpayData.razorpayOrder.currency,
        name: "AURA Coffee Co.",
        description: "AURA Coffee Order",
        order_id: razorpayData.razorpayOrder.id,

        prefill: {
          name: shippingAddress.name,
          email: shippingAddress.email,
          contact: shippingAddress.phone,
        },

        handler: async (response) => {
          try {
            const verificationData = await verifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });

            if (verificationData.success) {
              toast.success("Payment successful!");

              navigate("/order-success", {
                state: { order: verificationData.order },
              });
            } else {
              toast.error(
                verificationData.message || "Payment verification failed",
              );
            }
          } catch (error) {
            console.error("Payment verification failed:", error);

            toast.error(
              error.response?.data?.message ||
                "Payment verification failed. Please contact support.",
            );
          }
        },

        modal: {
          ondismiss: () => {
            toast.error("Payment cancelled");
          },
        },
      };

      const razorpay = new window.Razorpay(options);

      razorpay.open();
    } catch (error) {
      console.error("Checkout error:", error);

      toast.error(
        error.response?.data?.message || "Unable to place your order",
      );
    }
  };

  useEffect(() => {
    if (!user) {
      toast.error("Please login to continue");
      setLoading(false);
      return;
    }

    const fetchCart = async () => {
      try {
        const data = await getCart();

        setCartItems(data.cart.items);
      } catch (error) {
        console.error("Failed to fetch cart:", error);
        toast.error(
          error.response?.data?.message || "Failed to load your cart",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [user]);

  const handleUpdateQuantity = async (productId, newQuantity) => {
    try {
      const data = await updateCart(productId, newQuantity);
      setCartItems(data.cart.items);
    } catch (error) {
      console.error("Failed to update quantity:", error);
      toast.error(error.response?.data?.message || "Failed to update quantity");
    }
  };

  const handleRemoveItem = async (productId) => {
    try {
      const data = await removeFromCart(productId);
      setCartItems(data.cart.items);
    } catch (error) {
      console.error("Failed to remove item from the cart:", error);
      toast.error(
        error.response?.data?.message || "Failed to remove item from the cart",
      );
    }
  };

  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
  }, [cartItems]);

  const shipping = subtotal >= 500 || subtotal === 0 ? 0 : 49;
  const discount = 0;
  const total = subtotal + shipping - discount;

  if (loading) {
    return (
      <main className="min-h-screen bg-[#fffaf4] font-sans text-[#2f211b]">
        <div className="flex min-h-screen items-center justify-center">
          <p className="text-xs text-[#8d8178]">Loading your cart...</p>
        </div>
      </main>
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-[#fffaf4] font-sans text-[#2f211b]">
        <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-5">
          <div className="w-full rounded-[22px] border border-[#e3d9ce] bg-[#fffdf9] px-6 py-14 text-center sm:px-10">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f1e8dd]">
              <ShoppingBag size={22} className="text-[#a05f38]" />
            </div>

            <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#a05f38]">
              Your cart is empty
            </p>

            <h1 className="mt-2 text-3xl font-medium tracking-[-0.04em] text-[#3a1407]">
              Nothing to checkout yet.
            </h1>

            <p className="mx-auto mt-3 max-w-md text-xs leading-5 text-[#817168]">
              Add something from the AURA collection and come back when you're
              ready to place your order.
            </p>

            <Link
              to="/shop"
              className="mx-auto mt-7 flex h-11 w-fit items-center gap-2 rounded-full bg-[#3a1407] px-6 text-[10px] font-semibold text-white transition-colors hover:bg-[#54200f]">
              Continue Shopping
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffaf4] font-sans text-[#2f211b]">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 md:px-10 lg:pt-10">
        {/* BREADCRUMB */}
        <div className="mb-8 flex items-center gap-2 text-[11px] text-[#8c7b70]">
          <Link to="/" className="transition-colors hover:text-[#8d4f2d]">
            Home
          </Link>

          <span className="text-[#c5b5a7]">›</span>

          <Link to="/cart" className="transition-colors hover:text-[#8d4f2d]">
            Cart
          </Link>

          <span className="text-[#c5b5a7]">›</span>

          <span className="font-medium text-[#3a1407]">Checkout</span>
        </div>

        {/* HEADER */}
        <div className="mb-9 flex items-end justify-between gap-5 border-b border-[#e3d9ce] pb-6">
          <div>
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a05f38]">
              SECURE CHECKOUT
            </p>

            <h1 className="text-4xl font-medium tracking-[-0.04em] text-[#3a1407] sm:text-5xl">
              Checkout
            </h1>

            <p className="mt-2 text-xs leading-5 text-[#817168] sm:text-sm">
              Confirm your order and delivery details.
            </p>
          </div>

          <div className="hidden items-center gap-2 text-[10px] text-[#8c7b70] sm:flex">
            <Lock size={13} className="text-[#a05f38]" />
            Secure checkout
          </div>
        </div>

        {/* MAIN */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_350px] lg:items-start">
          {/* LEFT */}
          <div className="space-y-6">
            {/* CONTACT + DELIVERY */}
            <section className="rounded-[18px] border border-[#e3d9ce] bg-[#fffdf9] p-5 sm:p-6">
              {/* SECTION HEADER */}
              <div className="mb-7 flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1e8dd] text-[10px] font-semibold text-[#a05f38]">
                  01
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-[#3a1407]">
                    Contact & Delivery
                  </h2>

                  <p className="mt-1 text-xs text-[#817168]">
                    Where should we send your order?
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="h-11 w-full rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 text-xs text-[#3a1407] outline-none transition-colors placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                />
              </div>

              {/* PHONE */}
              <div className="mt-5">
                <label
                  htmlFor="phone"
                  className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  onChange={handleChange}
                  value={formData.phone}
                  placeholder="+91 98765 43210"
                  className="h-11 w-full rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 text-xs text-[#3a1407] outline-none transition-colors placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                />
              </div>

              {/* DIVIDER */}
              <div className="my-7 border-t border-[#e8e0d8]" />

              {/* NAME */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                    First Name
                  </label>

                  <input
                    id="firstName"
                    type="text"
                    onChange={handleChange}
                    value={formData.firstName}
                    placeholder="First name"
                    className="h-11 w-full rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 text-xs text-[#3a1407] outline-none transition-colors placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    className="h-11 w-full rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 text-xs text-[#3a1407] outline-none transition-colors placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                  />
                </div>
              </div>

              {/* ADDRESS */}
              <div className="mt-5">
                <label
                  htmlFor="address"
                  className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                  Street Address
                </label>

                <input
                  id="address"
                  type="text"
                  onChange={handleChange}
                  value={formData.address}
                  placeholder="House number and street name"
                  className="h-11 w-full rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 text-xs text-[#3a1407] outline-none transition-colors placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                />
              </div>

              {/* APARTMENT */}
              <div className="mt-5">
                <label
                  htmlFor="apartment"
                  className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                  Apartment, Suite{" "}
                  <span className="font-normal text-[#a0948b]">(optional)</span>
                </label>

                <input
                  id="apartment"
                  type="text"
                  onChange={handleChange}
                  value={formData.apartment}
                  placeholder="Apartment, suite, etc."
                  className="h-11 w-full rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 text-xs text-[#3a1407] outline-none transition-colors placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                />
              </div>

              {/* CITY STATE PINCODE */}
              <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div>
                  <label
                    htmlFor="city"
                    className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                    City
                  </label>

                  <input
                    id="city"
                    type="text"
                    onChange={handleChange}
                    value={formData.city}
                    placeholder="City"
                    className="h-11 w-full rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 text-xs text-[#3a1407] outline-none transition-colors placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="state"
                    className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                    State
                  </label>

                  <input
                    id="state"
                    type="text"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="State"
                    className="h-11 w-full rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 text-xs text-[#3a1407] outline-none transition-colors placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="zip"
                    className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                    PIN Code
                  </label>

                  <input
                    id="zip"
                    type="text"
                    value={formData.zip}
                    onChange={handleChange}
                    placeholder="Postal code"
                    className="h-11 w-full rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 text-xs text-[#3a1407] outline-none transition-colors placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                  />
                </div>
              </div>

              {/* COUNTRY */}
              <div className="mt-5">
                <label
                  htmlFor="country"
                  className="mb-2 block text-[11px] font-medium text-[#5d4b3e]">
                  Country
                </label>

                <div className="relative">
                  <select
                    id="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="h-11 w-full appearance-none rounded-[8px] border border-[#ded2c5] bg-[#faf6f0] px-3 pr-10 text-xs text-[#3a1407] outline-none transition-colors focus:border-[#a05f38]">
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>

                  <ChevronDown
                    size={14}
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#a0948b]"
                  />
                </div>
              </div>
            </section>

            {/* PAYMENT */}
            <section className="rounded-[18px] border border-[#e3d9ce] bg-[#fffdf9] p-5 sm:p-6">
              {/* SECTION HEADER */}
              <div className="mb-7 flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f1e8dd] text-[10px] font-semibold text-[#a05f38]">
                  02
                </div>

                <div>
                  <h2 className="text-lg font-semibold text-[#3a1407]">
                    Payment
                  </h2>

                  <p className="mt-1 text-xs text-[#817168]">
                    Choose how you'd like to pay.
                  </p>
                </div>
              </div>

              {/* RAZORPAY */}
              <button
                type="button"
                onClick={() => setPaymentMethod("razorpay")}
                className={`flex w-full items-center gap-4 rounded-[10px] border p-4 text-left transition-colors ${
                  paymentMethod === "razorpay"
                    ? "border-[#a05f38] bg-[#fff8ef]"
                    : "border-[#ded2c5] bg-[#faf6f0] hover:border-[#c8b8aa]"
                }`}>
                <div
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                    paymentMethod === "razorpay"
                      ? "border-[#a05f38]"
                      : "border-[#b9aca2]"
                  }`}>
                  {paymentMethod === "razorpay" && (
                    <div className="h-2.5 w-2.5 rounded-full bg-[#a05f38]" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold text-[#3a1407]">
                      Razorpay
                    </p>

                    <span className="rounded-full bg-[#f1e8dd] px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#a05f38]">
                      Secure
                    </span>
                  </div>

                  <p className="mt-1 text-[10px] leading-4 text-[#8d8178]">
                    UPI, cards, net banking and wallets
                  </p>
                </div>
              </button>

              {/* CASH ON DELIVERY */}
              <button
                type="button"
                onClick={() => setPaymentMethod("cod")}
                className={`mt-3 flex w-full items-center gap-4 rounded-[10px] border p-4 text-left transition-colors ${
                  paymentMethod === "cod"
                    ? "border-[#a05f38] bg-[#fff8ef]"
                    : "border-[#ded2c5] bg-[#faf6f0] hover:border-[#c8b8aa]"
                }`}>
                <div
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                    paymentMethod === "cod"
                      ? "border-[#a05f38]"
                      : "border-[#b9aca2]"
                  }`}>
                  {paymentMethod === "cod" && (
                    <div className="h-2.5 w-2.5 rounded-full bg-[#a05f38]" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs font-semibold text-[#3a1407]">
                      Cash on Delivery
                    </p>

                    <span className="rounded-full bg-[#f1e8dd] px-2 py-1 text-[8px] font-semibold uppercase tracking-[0.12em] text-[#8d8178]">
                      COD
                    </span>
                  </div>

                  <p className="mt-1 text-[10px] leading-4 text-[#8d8178]">
                    Pay when your order arrives
                  </p>
                </div>
              </button>

              {/* PAYMENT NOTE */}
              <div className="mt-5 flex items-start gap-2 border-t border-[#e8e0d8] pt-5">
                <Lock size={13} className="mt-0.5 shrink-0 text-[#a05f38]" />

                <p className="text-[10px] leading-5 text-[#a0948b]">
                  {paymentMethod === "razorpay"
                    ? "You'll be securely redirected to Razorpay to complete your payment. AURA never stores your card details."
                    : "Pay in cash when your AURA order is delivered to your address."}
                </p>
              </div>
            </section>
          </div>

          {/* RIGHT — ORDER SUMMARY */}
          <aside className="lg:sticky lg:top-24">
            <div className="rounded-[18px] border border-[#e3d9ce] bg-[#fffdf9] p-5 sm:p-6">
              {/* SUMMARY HEADER */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <ShoppingBag size={16} className="text-[#a05f38]" />

                  <h2 className="text-base font-semibold text-[#3a1407]">
                    Order Summary
                  </h2>
                </div>

                <Link
                  to="/cart"
                  className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#a05f38] transition-colors hover:text-[#3a1407]">
                  Edit Cart
                </Link>
              </div>

              {/* ITEMS */}
              <div className="mt-6 space-y-5 border-b border-[#e8e0d8] pb-5">
                {cartItems.map(({ product, quantity }) => (
                  <div key={product._id} className="flex gap-3">
                    {/* IMAGE */}
                    <div className="relative h-[68px] w-[68px] shrink-0 overflow-hidden rounded-[9px] bg-[#f1e8dd]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* INFO */}
                    <div className="min-w-0 flex-1">
                      <p className="text-[8px] font-semibold uppercase tracking-[0.16em] text-[#a05f38]">
                        {product.category}
                      </p>

                      <h3 className="mt-1 truncate text-xs font-semibold text-[#3a1407]">
                        {product.name}
                      </h3>

                      <p className="mt-1 text-[9px] text-[#8d7d72]">
                        {product.roast
                          ? `${product.roast} Roast`
                          : "Coffee Essential"}
                      </p>

                      {/* QUANTITY CONTROLS */}
                      <div className="mt-2 flex items-center justify-between gap-2">
                        <div className="flex h-7 items-center overflow-hidden rounded-full border border-[#ded2c5] bg-[#faf6f0]">
                          <button
                            type="button"
                            onClick={() =>
                              handleUpdateQuantity(
                                product._id,
                                Math.max(1, quantity - 1),
                              )
                            }
                            className="flex h-7 w-7 items-center justify-center text-[#8d8178] transition-colors hover:text-[#3a1407]"
                            aria-label={`Decrease ${product.name} quantity`}>
                            <Minus size={11} />
                          </button>

                          <span className="w-5 text-center text-[9px] font-semibold text-[#3a1407]">
                            {quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              handleUpdateQuantity(
                                product._id,
                                Math.max(1, quantity + 1),
                              )
                            }
                            className="flex h-7 w-7 items-center justify-center text-[#8d8178] transition-colors hover:text-[#3a1407]"
                            aria-label={`Increase ${product.name} quantity`}>
                            <Plus size={11} />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleRemoveItem(product._id)}
                          className="flex items-center gap-1 text-[9px] text-[#a0948b] transition-colors hover:text-[#a05f38]">
                          <Trash2 size={11} />
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* PRICE */}
                    <span className="shrink-0 text-xs font-semibold text-[#3a1407]">
                      ₹{(product.price * quantity).toFixed(0)}
                    </span>
                  </div>
                ))}
              </div>

              {/* PROMO */}
              <div className="mt-5">
                <label
                  htmlFor="promo"
                  className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#8d8178]">
                  Promo Code
                </label>

                <div className="mt-2 flex h-10">
                  <input
                    id="promo"
                    type="text"
                    placeholder="Enter code"
                    className="min-w-0 flex-1 rounded-l-[8px] border border-r-0 border-[#ded2c5] bg-[#faf6f0] px-3 text-[10px] text-[#3a1407] outline-none placeholder:text-[#b2a69d] focus:border-[#a05f38]"
                  />

                  <button
                    type="button"
                    className="rounded-r-[8px] bg-[#3a1407] px-4 text-[9px] font-semibold text-white transition-colors hover:bg-[#54200f]">
                    Apply
                  </button>
                </div>
              </div>

              {/* TOTALS */}
              <div className="mt-6 space-y-3 border-t border-[#e8e0d8] pt-5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#8d8178]">Subtotal</span>

                  <span className="font-medium text-[#40352f]">
                    ₹{subtotal.toFixed(0)}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#8d8178]">Shipping</span>

                  <span className="font-medium text-[#40352f]">
                    {shipping === 0 ? "Free" : `₹${shipping.toFixed(0)}`}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#8d8178]">Discount</span>

                  <span className="font-medium text-[#a05f38]">
                    -₹{discount.toFixed(0)}
                  </span>
                </div>
              </div>

              {/* TOTAL */}
              <div className="mt-5 flex items-center justify-between border-t border-[#e8e0d8] pt-5">
                <span className="text-sm font-semibold text-[#3a1407]">
                  Total
                </span>

                <span className="text-2xl font-semibold tracking-tight text-[#3a1407]">
                  ₹{total.toFixed(0)}
                </span>
              </div>

              {/* PLACE ORDER */}
              <button
                type="button"
                onClick={handleContinue}
                className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#3a1407] text-[10px] font-semibold text-white transition-all duration-300 hover:bg-[#54200f]">
                {paymentMethod === "cod"
                  ? "Place Order"
                  : "Continue to Payment"}
                <ArrowRight size={14} />
              </button>

              {/* BACK TO CART */}
              <Link
                to="/cart"
                className="mt-3 flex items-center justify-center gap-1 text-[9px] text-[#8d8178] transition-colors hover:text-[#3a1407]">
                <ArrowLeft size={11} />
                Back to cart
              </Link>

              {/* TERMS */}
              <p className="mt-4 text-center text-[9px] leading-4 text-[#a0948b]">
                By continuing, you agree to our terms and conditions.
              </p>

              {/* SECURE NOTE */}
              <div className="mt-5 flex items-center justify-center gap-2 border-t border-[#e8e0d8] pt-5">
                <Check size={12} className="text-[#a05f38]" />

                <span className="text-[9px] text-[#8d8178]">
                  Secure checkout · Your information is protected
                </span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Checkout;
