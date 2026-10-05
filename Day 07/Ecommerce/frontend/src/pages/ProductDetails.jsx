import { useContext, useEffect, useState } from "react";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Star,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getProducts, getSingleProduct } from "../api/productApi";
import { addToCart } from "../api/cartApi";
import { AuthContext } from "../context/AuthContext";
import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} from "../api/wishlistApi";
import Product from "../components/Product";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { user } = useContext(AuthContext);
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);

  const [quantity, setQuantity] = useState(1);
  const [isWishListed, setIsWishListed] = useState(false);
  const [selectedRoast, setSelectedRoast] = useState("Medium");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getSingleProduct(productId);
        setProduct(data.product);

        const allProducts = await getProducts();
        setProducts(allProducts.products);
      } catch (error) {
        console.log("Product error:", error);
        toast.error(error.response?.data?.message || "Failed to load product");
      }
    };

    const checkWishlist = async () => {
      if (!user) {
        setIsWishListed(false);
        return;
      }

      try {
        const data = await getWishlist();

        const exists = data.wishlist.products.some(
          (item) => item._id === productId,
        );

        setIsWishListed(exists);
      } catch (error) {
        console.log("Wishlist error:", error);
        toast.error("Failed to load wishlist");
      }
    };

    fetchProduct();
    checkWishlist();
  }, [user, productId]);

  const handleAddToCart = async () => {
    if (!user) {
      toast.error("Please login to add products to cart");
      return;
    }

    try {
      await addToCart(product._id, quantity);

      toast.success("Product added to cart");
    } catch (error) {
      console.error("Failed to add product to cart:", error);
      toast.error(
        error.response?.data?.message || "Failed to add product to cart",
      );
    }
  };

  const handleBuyNow = async () => {
    if (!user) {
      toast.error("Please login to buy this product");
      return;
    }

    try {
      await addToCart(product._id, quantity);
      navigate("/checkout");
    } catch (error) {
      console.error("Failed to buy product:", error);
      toast.error(
        error.response?.data?.message || "Failed to add product to cart",
      );
    }
  };

  const handleAddToWishlisList = async () => {
    if (!user) {
      toast.error("Please login to add products to wishlist");
      return;
    }

    try {
      if (isWishListed) {
        await removeFromWishlist(productId);
        setIsWishListed(false);
        toast.success("Removed from wishlist");
        return;
      }

      await addToWishlist(productId);
      setIsWishListed(true);
      toast.success("Added to wishlist");
    } catch (error) {
      console.log("Wishlist error:", error);
      toast.error(error.response?.data?.message || "Failed to update wishlist");
    }
  };

  const relatedProducts = product
    ? products
        .filter(
          (item) =>
            item.category === product.category && item._id !== product._id,
        )
        .slice(0, 4)
    : [];

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fff6e5] px-5 font-sans">
        <div className="text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a05f38]">
            Coffee not found
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-[#3a1407]">
            This coffee doesn't exist.
          </h1>
          <Link
            to="/brews"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#3a1407] px-6 py-3 text-sm font-medium text-white">
            <ArrowLeft size={16} />
            Back to coffee
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#fffaf2] font-sans text-[#3a1407]">
      {/* PRODUCT SECTION */}
      <section className="px-5 pb-16 pt-7 sm:px-8 md:px-10 md:pb-20 md:pt-9">
        <div className="mx-auto max-w-6xl">
          {/* Breadcrumb */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e2cfb8] bg-[#f3e5d3] px-4 py-2.5 text-xs text-[#76584a] shadow-sm">
            <Link to="/" className="transition hover:text-[#a9582d]">
              Home
            </Link>

            <span className="text-[#b79a82]">/</span>

            <Link to="/brews" className="transition hover:text-[#a9582d]">
              Coffee
            </Link>

            <span className="text-[#b79a82]">/</span>

            <span className="font-medium text-[#3a1407]">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            {/* LEFT - PRODUCT IMAGE */}
            <div>
              <div className="group relative overflow-hidden rounded-[10px] bg-[#eee2d0]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-110 sm:h-[500px] lg:h-[540px]"
                />

                <button
                  onClick={handleAddToWishlisList}
                  className={`absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm transition ${isWishListed ? "border-[#b87543] bg-[#fff6e5] text-[#9a4f28]" : "border-[#dfcdb8] bg-[#fffaf2]/90 text-[#76584a] hover:bg-white"}`}>
                  <Heart
                    size={17}
                    fill={isWishListed ? "currentColor" : "none"}
                  />
                </button>
              </div>

              {/* Thumbnail */}
              <div className="mt-3 flex gap-3">
                <div className="h-[72px] w-[72px] overflow-hidden rounded-[8px] border-2 border-[#3a1407] bg-[#eee2d0]">
                  <img
                    src={product.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT - PRODUCT INFORMATION */}
            <div className="flex flex-col justify-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#a05f38]">
                {product.category}
              </p>

              <h1 className="mt-3 text-4xl font-semibold leading-tight tracking-[-0.025em] text-[#3a1407] sm:text-5xl">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="mt-4 flex items-center gap-2.5">
                <div className="flex items-center gap-1">
                  <Star
                    size={14}
                    fill="currentColor"
                    className="text-[#b87543]"
                  />
                  <span className="text-sm font-semibold text-[#4b2c1e]">
                    {product.rating}
                  </span>
                </div>

                <span className="h-1 w-1 rounded-full bg-[#cbb39d]" />

                <span className="text-xs text-[#806858]">
                  {product.reviewCount} reviews
                </span>
              </div>

              {/* Description */}
              <p className="mt-5 max-w-lg text-[13px] leading-6 text-[#76584a] sm:text-sm">
                {product.description}
              </p>

              {/* Price */}
              <div className="mt-5 flex items-center gap-3">
                <span className="text-2xl font-semibold text-[#3a1407]">
                  ₹{product.price.toFixed(0)}
                </span>
                <span className="text-xs text-[#947765]">250g</span>
              </div>

              <div className="my-6 h-px bg-[#e5d7c7]" />

              {/* Roast */}
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5c3929]">
                    Roast
                  </p>
                  <span className="text-xs text-[#8a6d5b]">
                    {selectedRoast}
                  </span>
                </div>

                <div className="mt-3 flex gap-2">
                  {["Light", "Medium", "Dark"].map((roast) => (
                    <button
                      key={roast}
                      onClick={() => setSelectedRoast(roast)}
                      className={`rounded-full border px-5 py-2 text-xs font-medium transition ${selectedRoast === roast ? "border-[#3a1407] bg-[#3a1407] text-white" : "border-[#ddcbb7] bg-[#fffaf2] text-[#6d5141] hover:border-[#a98263]"}`}>
                      {roast}
                    </button>
                  ))}
                </div>
              </div>

              {/* Origin */}
              <div className="mt-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5c3929]">
                  Origin
                </p>
                <p className="mt-2 text-sm text-[#76584a]">{product.origin}</p>
              </div>

              {/* Quantity */}
              <div className="mt-6">
                <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5c3929]">
                  Quantity
                </p>

                <div className="flex h-10 w-fit items-center rounded-full border border-[#d9c5af] bg-[#fffaf2]">
                  <button
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-[#5d3d2c] transition hover:bg-[#f1e3d2]">
                    <Minus size={13} />
                  </button>

                  <span className="w-8 text-center text-xs font-semibold">
                    {quantity}
                  </span>

                  <button
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-[#5d3d2c] transition hover:bg-[#f1e3d2]">
                    <Plus size={13} />
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-7 grid grid-cols-2 gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex h-12 items-center justify-center gap-2 rounded-[6px] border border-[#3a1407] bg-transparent text-sm font-semibold text-[#3a1407] transition hover:bg-[#f3e5d3]">
                  <ShoppingBag size={16} />
                  Add to cart
                </button>

                <button
                  className="h-12 rounded-[6px] bg-[#3a1407] text-sm font-semibold text-white transition hover:bg-[#54200f]"
                  onClick={handleBuyNow}>
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YOU MAY ALSO LIKE */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-[#e7dacb] bg-[#f7efe3] px-5 py-16 sm:px-8 md:px-10 md:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-9 flex items-end justify-between">
              <div>
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.25em] text-[#a05f38]">
                  YOU MAY ALSO LIKE
                </p>

                <h2 className="text-3xl font-semibold tracking-tight text-[#3a1407] sm:text-4xl">
                  More for your coffee ritual.
                </h2>
              </div>

              <div className="hidden items-center gap-2 sm:flex">
                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9c5af] bg-[#fffaf2] text-[#5d3d2c] transition hover:bg-white">
                  <ChevronLeft size={16} />
                </button>

                <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9c5af] bg-[#fffaf2] text-[#5d3d2c] transition hover:bg-white">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {relatedProducts.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetails;
