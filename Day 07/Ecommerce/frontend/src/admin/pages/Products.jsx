import ProductFilters from "../components/Products/ProductFilters";
import ProductHeader from "../components/Products/ProductHeader";
import ProductTable from "../components/Products/ProductTable";

const Products = () => {
  return (
    <div>
      <ProductHeader />
      <ProductFilters />
      <ProductTable />
    </div>
  );
};

export default Products;
