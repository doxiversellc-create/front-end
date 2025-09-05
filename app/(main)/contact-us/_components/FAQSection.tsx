const FAQSection = () => {
  return (
    <section className="container mx-auto  py-24 flex-col flex  text-center items-center max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
      <div>
        <span className="bg-background border w-fit  z-10 text-foreground px-4 py-2 text-sm rounded-full font-medium">
          FAQs
        </span>
        <h1 className="mt-5 text-4xl  font-medium tracking-tight font-outfit">
          Frequesntly Asked Questions
        </h1>
        <p className="mt-6 md:text-lg text-center  text-foreground  max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
          Find quick answers to the most common questions about Doxiverse, our mission, and how we
          can help you navigate the world of healthcare AI.
        </p>
      </div>
    </section>
  );
};

export default FAQSection;
