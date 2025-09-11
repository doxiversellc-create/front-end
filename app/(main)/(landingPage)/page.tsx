import { fetchPageContent } from "@/actions/content.actions";
import CallToAction from "./_components/CallToAction";
import CoreValues from "./_components/CoreValues";
import HeroSection from "./_components/HeroSection";
import ServicesSection from "./_components/ServicesSection";
import SubscribeSection from "./_components/SubscribeSection";
import AIToolsSection from "./_components/TopAITools";
import TopAIToolsGraph from "./_components/TopAIToolsGraph";
import TopCategories from "./_components/TopCategories";
import WhyChooseUs from "./_components/WhyChooseUs";

export async function generateMetadata() {
  const { content } = await fetchPageContent("landingpage");

  return {
    title: content.title,
    description: content.description || "Revolutionizing Healthcare with AI-Powered Solutions",
  };
}

const LandingPage = async () => {
  const { content } = await fetchPageContent("landingpage");

  return (
    <section className="flex flex-col items-center justify-center">
      <HeroSection hero_subtitle={content.hero_subtitle} hero_title={content.hero_title} />
      <TopAIToolsGraph />
      <TopCategories
        categories_subtitle={content.categories_subtitle}
        categories_title={content.categories_title}
      />
      <AIToolsSection
        ai_tools_subtitle={content.ai_tools_subtitle}
        ai_tools_title={content.ai_tools_title}
      />
      <ServicesSection />
      <WhyChooseUs />
      <CoreValues />
      <SubscribeSection />
      <CallToAction />
    </section>
  );
};

export default LandingPage;
