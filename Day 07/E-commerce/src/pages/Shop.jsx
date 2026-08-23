import React from "react";
import products from "../utils/constant";
import Product from "../components/Product";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
const Shop = () => {
  return (
    <div className="bg-[#fdfbf7] px-5 py-16 sm:px-8 lg:px-10">
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
              All Products
            </h2>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#8d8178]">
              Discover carefully selected coffees, roasted to bring out their
              unique character and flavor.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Shop;
