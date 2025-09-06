import FAQAccordion from "./FAQAccordion";

const FAQSection = () => {
  return (
    <section className="container mx-auto flex max-w-md flex-col items-center gap-16 py-16 text-center sm:max-w-xl md:max-w-2xl md:py-24 lg:max-w-3xl">
      <div>
        <span className="bg-background text-foreground z-10 w-fit rounded-full border px-4 py-2 text-sm font-medium">
          FAQs
        </span>
        <h1 className="font-outfit mt-5 text-4xl font-medium tracking-tight">
          Frequently Asked Questions
        </h1>
        <p className="text-foreground mx-auto mt-6 max-w-md justify-center text-center md:max-w-xl md:text-lg lg:max-w-2xl">
          Find quick answers to the most common questions about Doxiverse, our mission, and how we
          can help you navigate the world of healthcare AI.
        </p>
      </div>
      <div className="w-full max-w-2xl">
        <FAQAccordion />
      </div>
    </section>
  );
};

export default FAQSection;
