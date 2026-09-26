import React from "react";
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
    <section className="bg-[#fdfbf7] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#b96447]" />

              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#1f2f2e]">
                Our coffee
              </p>
            </div>

            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[#1f2f2e] sm:text-5xl">
              Find your
              <span className="ml-2 font-normal italic">everyday cup.</span>
            </h2>
          </div>

          <Link
            to="/brews"
            className="group flex items-center gap-3 text-sm font-semibold text-[#1f2f2e]">
            <span className="border-b border-[#1f2f2e] pb-1">
              View all coffee
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1f2f2e] text-[#fdfbf7] transition-transform duration-300 group-hover:rotate-45">
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
            className="flex items-center gap-3 rounded-full bg-[#1f2f2e] px-6 py-3 text-sm font-semibold text-[#fdfbf7]">
            View all coffee
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
