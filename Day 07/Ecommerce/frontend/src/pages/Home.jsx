import ProductCard from "../components/ProductCard";
import AuraHero from "../components/Hero";
import FeaturedCoffee from "../components/FeaturedCoffee";
import WhyChooseUs from "../components/WhyChooseUs";
import ExploreCollection from "../components/ExploreCollection";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <div>
      <AuraHero />
      <FeaturedCoffee />
      <ProductCard />
      <WhyChooseUs />
      <ExploreCollection />
      <CTA />
    </div>
  );
};

export default Home;
