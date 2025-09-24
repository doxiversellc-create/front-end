import ResearchSearch from "@/app/(main)/researches/_components/ResearchSearch";
import { ResearchesContent } from "@/types/content.types";

export default function HeroSection({ content }: { content: ResearchesContent }) {
  return (
    <section className="to-primary/0 flex flex-col items-center justify-center gap-5 bg-gradient-to-b from-[#9FCFEE] via-[#9fceee1e] px-3 pt-28 pb-12 lg:px-0">
      <p className="font-outfit max-w-[744px] text-center text-4xl leading-[1.1] font-semibold md:text-5xl lg:text-[64px]">
        {content.subtitle}
      </p>
      <p className="font-inter max-w-[536px] text-center text-base md:text-lg">
        {content.description}
      </p>
      <ResearchSearch />
    </section>
  );
}
