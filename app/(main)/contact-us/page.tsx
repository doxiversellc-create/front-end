import ContactHero from "./_components/ContactHero";
import ContactUsForm from "./_components/ContactUsForm";
import FAQSection from "./_components/FAQSection";

const ContactUsPage = () => {
  return (
    <div className="relative min-h-screen px-4 md:px-6 lg:px-8">
      <div className="from-primary/25 pointer-events-none absolute top-0 left-0 -z-10 h-[60vh] w-full bg-gradient-to-b to-transparent" />
      <ContactHero />
      <ContactUsForm />
      <FAQSection />
    </div>
  );
};

export default ContactUsPage;
