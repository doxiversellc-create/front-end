import { ContactUsContent } from "@/types/content.types";

const ContactHero = ({ content }: { content: ContactUsContent }) => {
  return (
    <section className="container mx-auto flex max-w-md flex-col items-center py-24 text-center sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
      <span className="bg-background text-foreground z-10 w-fit rounded-full border px-4 py-2 text-sm font-medium">
        {content.page_title}
      </span>
      <h1 className="font-outfit mt-5 text-4xl font-medium tracking-tight md:text-6xl">
        {content.page_subtitle}
      </h1>
      <p className="text-foreground mx-auto mt-6 max-w-md text-center md:max-w-xl md:text-lg lg:max-w-2xl">
        {content.description}
      </p>
    </section>
  );
};

export default ContactHero;
