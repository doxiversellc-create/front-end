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
      <ServicesSection
        offers_section_subtitle={content.offers_section_subtitle}
        offers_section_title={content.offers_section_title}
        content={content}
      />
      <WhyChooseUs
        why_choose_us_cta_link={content.why_choose_us_cta_link}
        why_choose_us_cta_text={content.why_choose_us_cta_text}
        why_choose_us_subtitle={content.why_choose_us_subtitle}
        why_choose_us_title={content.why_choose_us_title}
        content={content}
      />
      <CoreValues
        core_title_section_description={content.core_title_section_description}
        core_title_section_subtitle={content.core_title_section_subtitle}
        core_title_section_title={content.core_title_section_title}
      />
      <SubscribeSection
        email_marketing_cta_text={content.email_marketing_cta_text}
        email_marketing_description={content.email_marketing_description}
        email_marketing_title={content.email_marketing_title}
      />
      <CallToAction
        cta_button_link={content.cta_button_link}
        cta_button_text={content.cta_button_text}
        cta_description={content.cta_description}
        cta_main_heading={content.cta_main_heading}
        cta_question={content.cta_question}
      />
    </section>
  );
};

export default LandingPage;
