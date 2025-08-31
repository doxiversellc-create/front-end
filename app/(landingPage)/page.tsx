import React from "react";

import HeroSection from "./_components/HeroSection";
import AIToolsSection from "./_components/TopAITools";
import TopAIToolsGraph from "./_components/TopAIToolsGraph";
import TopCategories from "./_components/TopCategories";
import ServicesSection from "./_components/ServicesSection";
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
    </section>
  );
};

export default LandingPage;
