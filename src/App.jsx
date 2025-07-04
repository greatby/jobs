import FadeInWhenVisible from "./components/FadeEffects";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import PerksAndBenefits from "./components/PerksAndBenefits";
import ValuesSlider from "./components/ValueSlider";
import WhyJoinUs, {
  WhoWeAreLookingFor,
  YourRoleInTransformation,
} from "./components/WhyJoinUs";
import ZigzagSection from "./components/ZigzagSection";

function App() {
  return (
    <>
      <Navbar />
      <FadeInWhenVisible>
        <Hero />
      </FadeInWhenVisible>
      {/* <WhyJoinUs /> */}
      <FadeInWhenVisible>
        <YourRoleInTransformation />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <WhoWeAreLookingFor />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <PerksAndBenefits />
      </FadeInWhenVisible>
      <Footer />
    </>
  );
}
export default App;
