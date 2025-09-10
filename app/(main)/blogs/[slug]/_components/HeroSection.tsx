// import SectionShow, { SectionShowWithOutIcon } from "@/components/section-show";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="bg-background2 relative mt-7 w-full px-4 py-5 lg:px-0 lg:py-10">
      <div className="flex w-full flex-col items-center justify-center gap-3 lg:gap-5">
        <p className="font-outfit text-center text-4xl font-semibold tracking-[1px] md:text-5xl md:text-[56px] lg:leading-[1.05]">
          AI Tools Detect Early Mental Health Struggles Hidden in Human Voices
        </p>
        <p className="text-md font-inter text-center md:text-lg">
          Machine learning analyzes tone and speech patterns to flag early signs of depression and
          anxiety.
        </p>
        <Image
          className="z-20 h-full max-h-[664px] w-full rounded-xl lg:mt-3 lg:rounded-3xl"
          src="/news-1.png"
          alt="Software Carer, Which One Does Your Business Need?"
          width={1223}
          height={1080}
        />
      </div>
    </div>
  );
}
