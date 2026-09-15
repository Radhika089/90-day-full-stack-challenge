import React from "react";
import Product from "./Product";
import products from "../utils/constant";
import { ArrowRight } from "lucide-react";
import Skelton from "./Skelton";
import { Link } from "react-router-dom";

const ProductCard = () => {
  const featuredProducts = products.slice(0, 4);

  return featuredProducts.length === 0 ? (
    <Skelton />
  ) : (
    <section className="bg-[#fdfbf7] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          {/* Heading */}
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-[#9a7658]" />

              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#9a7658]">
                Our Collection
              </p>
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-[#2d211b] sm:text-4xl">
              Featured Products
            </h2>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#8d8178]">
              Discover carefully selected coffees, roasted to bring out their
              unique character and flavor.
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2">
            <Link
              to={"/brews"}
              className="ml-2 hidden items-center gap-2 text-sm font-medium text-[#5d4b3e] transition hover:text-[#9a7658] sm:flex">
              View all
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile / Bottom View All */}
        <div className="mt-12 flex justify-center sm:hidden">
          <Link
            to={"/brews"}
            className="flex items-center gap-2 rounded-full border border-[#ded5cb] bg-white px-6 py-3 text-sm font-medium text-[#3b2a20]">
            View all products
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
