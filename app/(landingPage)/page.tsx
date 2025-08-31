import CoreValues from "./_components/CoreValues";
import HeroSection from "./_components/HeroSection";
import ServicesSection from "./_components/ServicesSection";
import AIToolsSection from "./_components/TopAITools";
import TopAIToolsGraph from "./_components/TopAIToolsGraph";
import TopCategories from "./_components/TopCategories";
import WhyChooseUs from "./_components/WhyChooseUs";

const LandingPage = () => {
  return (
    <section className="flex flex-col items-center justify-center ">
      <HeroSection />
      <TopAIToolsGraph />
      <TopCategories />
      <AIToolsSection />
      <ServicesSection />
      <WhyChooseUs />
      <CoreValues />
    </section>
  );
};

export default LandingPage;
