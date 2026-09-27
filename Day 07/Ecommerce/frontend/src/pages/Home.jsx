import About from "../components/About";
import ProductCard from "../components/ProductCard";
import AuraHero from "../components/Hero";
import AuraWay from "../components/AuraWay";
import ShopCategory from "../components/ShopCategory";
import FeaturedCoffee from "../components/FeaturedCoffee";

const Home = () => {
  return (
    <div>
      <AuraHero />
      <FeaturedCoffee />
      <ProductCard />
      <About />
    </div>
  );
};

export default Home;
