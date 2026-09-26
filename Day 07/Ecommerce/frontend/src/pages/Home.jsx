import About from "../components/About";
import ProductCard from "../components/ProductCard";
import AuraHero from "../components/Hero";
import AuraWay from "../components/AuraWay";
import ShopCategory from "../components/ShopCategory";

const Home = () => {
  return (
    <div>
      <AuraHero />
      <ProductCard />
      <AuraWay />
      <ShopCategory />
      <About />
    </div>
  );
};

export default Home;
