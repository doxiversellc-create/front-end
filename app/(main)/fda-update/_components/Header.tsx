import FDASearch from "@/app/(main)/fda-update/_components/FDASearch";
import { FDAUpdatesContent } from "@/types/content.types";

export default function Hero({ content }: { content: FDAUpdatesContent }) {
  return (
    <section className="space-y-6 py-16 pb-0 text-left md:text-center">
      <span className="bg-background rounded-full px-3 py-2 text-sm font-semibold">
        {content.page_title}
      </span>
      <h1 className="font-outfit mt-4 text-4xl font-semibold tracking-tight md:text-7xl">
        {content.subtitle}
      </h1>
      <p className="mx-auto max-w-2xl text-base md:text-lg">{content.description}</p>

      <FDASearch />
    </section>
  );
}
