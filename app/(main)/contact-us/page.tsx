import { fetchPageContent } from "@/actions/content.actions";
import ContactHero from "./_components/ContactHero";
import ContactUsForm from "./_components/ContactUsForm";
import FAQSection from "./_components/FAQSection";
export async function generateMetadata() {
  const { content } = await fetchPageContent("contactus");

  return {
    title: content.title,
    description: content?.description || "Contact Us For more info",
  };
}
const ContactUsPage = async () => {
  const { content } = await fetchPageContent("contactus");

  return (
    <div className="relative min-h-screen px-4 md:px-6 lg:px-8">
      <div className="hero-gradient pointer-events-none absolute top-0 left-0 -z-10 h-[60vh] w-full" />
      <ContactHero content={content} />
      <ContactUsForm content={content} />
      <FAQSection content={content} />
    </div>
  );
};

export default ContactUsPage;
