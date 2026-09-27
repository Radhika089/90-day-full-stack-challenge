import Product from "./Product";
import products from "../utils/constant";
import { ArrowUpRight } from "lucide-react";
import Skelton from "./Skelton";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const featuredProducts = products.slice(0, 4);

  return featuredProducts.length === 0 ? (
    <Skelton />
  ) : (
    <section className="relative overflow-hidden bg-[#fff6e5] px-5 py-20 sm:px-8 lg:px-10">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-[#e9b06d] opacity-[0.10] blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-[400px] w-[400px] rounded-full bg-[#c8753c] opacity-[0.08] blur-[120px]" />

      {/* Decorative beans */}
      <img
        src="/beans.png"
        alt=""
        className="pointer-events-none absolute -left-8 top-[35%] z-0 w-32 rotate-[-20deg] opacity-[0.08] sm:w-40"
      />

      <img
        src="/heartbeans.png"
        alt=""
        className="pointer-events-none absolute -right-8 bottom-[15%] z-0 w-36 rotate-[15deg] opacity-[0.08] sm:w-44"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#b96447]" />

              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#76584a]">
                MOST LOVED
              </p>
            </div>

            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[#3a1407] sm:text-5xl">
              The coffees everyone
              <span className="ml-2 font-normal italic text-[#8a573b]">
                keeps coming back to.
              </span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-6 text-[#76584a]">
              Explore the blends our coffee lovers reach for again and again.
            </p>
          </div>

          <Link
            to="/brews"
            className="group flex items-center gap-3 text-sm font-semibold text-[#3a1407]">
            <span className="border-b border-[#3a1407] pb-1">
              View all coffee
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3a1407] text-[#fdfbf7] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={17} />
            </span>
          </Link>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile */}
        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            to="/brews"
            className="flex items-center gap-3 rounded-full bg-[#3a1407] px-6 py-3 text-sm font-semibold text-[#fdfbf7]">
            View all coffee
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
