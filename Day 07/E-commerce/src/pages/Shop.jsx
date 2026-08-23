import React from "react";
import products from "../utils/constant";
import Product from "../components/Product";
const Shop = () => {
  return (
    <div className="bg-[#fdfbf7] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
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
