const ContactHero = () => {
  return (
    <section className="container mx-auto  py-24 flex-col flex  text-center items-center max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
      <span className="bg-background border w-fit  z-10 text-foreground px-4 py-2 text-sm rounded-full font-medium">
        Contact us
      </span>
      <h1 className="mt-5 text-4xl md:text-6xl font-medium tracking-tight font-outfit">
        We&apos;re Here to Help with Your AI Journey
      </h1>
      <p className="mt-6 md:text-lg text-center  text-foreground  max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
        Reach out to us anytime — whether you have questions, need guidance with AI tools, or just
        want expert support, we&apos;re here to help.
      </p>
    </section>
  );
};

export default ContactHero;
