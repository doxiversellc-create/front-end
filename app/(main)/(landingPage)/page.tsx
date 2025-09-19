import { fetchPageContent } from "@/actions/content.actions";
import { Category } from "@/app/(main)/categories/page";
import { fetcher } from "@/lib/fetcher";
import CallToAction from "./_components/CallToAction";
// import CoreValues from "./_components/CoreValues";
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
    description: content?.description || "Revolutionizing Healthcare with AI-Powered Solutions",
  };
}

const LandingPage = async () => {
  const { content } = await fetchPageContent("landingpage");
  const { data: categories } = await fetcher<{
    results: Category[];
  }>("/ai-tool-categories");

  return (
    <section className="flex flex-col items-center justify-center">
      <HeroSection content={content} />
      <TopAIToolsGraph />
      <TopCategories categories={categories?.results || []} content={content} />
      <AIToolsSection categories={categories?.results || []} content={content} />
      <ServicesSection content={content} />
      <WhyChooseUs content={content} />
      {/* <CoreValues content={content} /> */}
      <SubscribeSection content={content} />
      <CallToAction content={content} />
    </section>
  );
};

export default LandingPage;
