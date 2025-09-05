import ContactHero from "./_components/ContactHero";
import ContactUsForm from "./_components/ContactUsForm";
import FAQSection from "./_components/FAQSection";

const ContactUsPage = () => {
  return (
    <div className="relative min-h-screen px-4 md:px-6 lg:px-8">
      <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-primary/25 to-transparent pointer-events-none -z-10" />
      <ContactHero />
      <ContactUsForm />
      <FAQSection />
    </div>
  );
};

export default ContactUsPage;
