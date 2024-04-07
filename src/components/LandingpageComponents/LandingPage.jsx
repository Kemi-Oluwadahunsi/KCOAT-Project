import CategoryCard from "./CategoryCard"
import FeedbackCorner from "./FeedbackCorner/FeedbackCorner"
import Hero from "./Hero"
import MostPopularProducts from "./MostPopularProductSections/MostPopularProducts"
import ThirdSection from "./ThirdSection"


const LandingPage = () => {
  return (
    <div>
      <Hero />
      <CategoryCard />
      <ThirdSection />
      <MostPopularProducts />
      <FeedbackCorner />
    </div>
  );
}

export default LandingPage