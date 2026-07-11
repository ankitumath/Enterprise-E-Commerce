import Hero from "../../components/home/Hero";
import SearchBar from "../../components/home/SearchBar";
import Categories from "../../components/home/Categories";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import PromotionBanner from "../../components/home/PromotionBanner";
import TrendingProducts from "../../components/home/TrendingProducts";
import WhyChooseUs from "../../components/home/WhyChooseUs";
import Newsletter from "../../components/home/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />

      <SearchBar />

      <Categories />

      <FeaturedProducts />

      <PromotionBanner />

      <TrendingProducts />

      <WhyChooseUs />

      <Newsletter />
    </>
  );
};

export default Home;