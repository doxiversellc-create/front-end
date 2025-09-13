import { AINewsContent } from "@/types/content.types";

export default function Hero({ content }: { content: AINewsContent }) {
  return (
    <section className="py-24 text-left md:text-center">
      <span className="bg-background rounded-full px-3 py-2 text-sm font-semibold">
        {content.page_title}
      </span>
      <h1 className="font-outfit mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
        {content.subtitle}
      </h1>
      <p className="mx-auto mt-3 max-w-2xl text-base">{content.page_description}</p>
    </section>
  );
}
