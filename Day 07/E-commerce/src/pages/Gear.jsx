import products from "../utils/constant";
import Product from "../components/Product";

const Gear = () => {
  const filteredProduct = products.filter(
    (product) => product.category === "Gear",
  );

  return (
    <div className="px-5 py-10 sm:px-8 lg:px-10 bg-[#fdfbf7]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16">
          {filteredProduct.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gear;
