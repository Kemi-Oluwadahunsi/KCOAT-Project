import FeedbackCorner from "./FeedbackCorner/FeedbackCorner"
import Hero from "./Hero"
import MostPopularProducts from "./MostPopularProductSections/MostPopularProducts"
// import SecondSection from "/SecondSection"
import ThirdSection from "./ThirdSection"


const LandingPage = () => {
  return (
    <div>
        <Hero />
        {/* <SecondSection /> */}
        <ThirdSection />
        <MostPopularProducts/>
        <FeedbackCorner/>
    </div>
  )
}

export default LandingPage