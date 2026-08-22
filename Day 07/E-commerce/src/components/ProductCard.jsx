import React, { useEffect, useState } from "react";
import Product from "./Product";
import products from "../utils/constant";
import { ArrowRight, SlidersHorizontal } from "lucide-react";
import Skelton from "./Skelton";

const ProductCard = () => {
  const [listProduct, setListProduct] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    filterProduct();
  }, [products]);

  const filterProduct = () => {
    setListProduct(
      products.filter((product) => product.rating >= 4.7).slice(0, 4),
    );
    setActiveFilter("top");
  };

  const showAllProducts = () => {
    setListProduct(products);
    setActiveFilter("all");
  };

  return listProduct.length === 0 ? (
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
            <button
              onClick={showAllProducts}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                activeFilter === "all"
                  ? "bg-[#2d211b] text-white shadow-sm"
                  : "border border-[#e5ddd4] bg-white text-[#6d625b] hover:border-[#2d211b] hover:text-[#2d211b]"
              }`}>
              All
            </button>

            <button
              onClick={filterProduct}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                activeFilter === "top"
                  ? "bg-[#2d211b] text-white shadow-sm"
                  : "border border-[#e5ddd4] bg-white text-[#6d625b] hover:border-[#2d211b] hover:text-[#2d211b]"
              }`}>
              <SlidersHorizontal size={15} />
              Top Rated
            </button>

            <button
              onClick={showAllProducts}
              className="ml-2 hidden items-center gap-2 text-sm font-medium text-[#5d4b3e] transition hover:text-[#9a7658] sm:flex">
              View all
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {listProduct.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile / Bottom View All */}
        <div className="mt-12 flex justify-center sm:hidden">
          <button
            onClick={showAllProducts}
            className="flex items-center gap-2 rounded-full border border-[#ded5cb] bg-white px-6 py-3 text-sm font-medium text-[#3b2a20]">
            View all products
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
