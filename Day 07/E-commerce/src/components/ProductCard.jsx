import React, { useState } from "react";
import Product from "./Product";
import ProductList from "../utils/constant";

const ProductCard = () => {
  const [listProduct, setListProduct] = useState(ProductList);

  const filterProduct = () => {
    setListProduct(ProductList.filter((product) => product.rating >= 4));
  };

  return (
    <section className="bg-[#fafafa] px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
              Our Collection
            </p>

            <h2 className="text-3xl font-semibold tracking-tight text-gray-900">
              Featured Products
            </h2>
          </div>

          <div className="flex gap-4">
            <button
              className="py-2 px-4 rounded-xl bg-black text-white"
              onClick={filterProduct}>
              Top Rated
            </button>

            <button className="hidden text-sm font-medium text-gray-600 hover:text-black sm:block">
              View all →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          {listProduct.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
