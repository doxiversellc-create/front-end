import Image from "next/image";

import SectionHeader from "@/components/SectionHeader";

export default function CoreValues() {
  return (
    <section className="mx-auto my-5 flex w-full max-w-[1089px] flex-col items-center justify-center p-4 lg:p-0">
      <SectionHeader className="w-fit">Core Values</SectionHeader>
      <h2 className="mb:10 font-outfit my-7 text-3xl leading-tight font-medium md:text-4xl lg:mb-14 lg:text-[40px]">
        <span className="text-balance">Doxiverse Core Values</span>
      </h2>
      <Image
        src="/shapes/core-values-lg.svg"
        alt="AI Tools"
        width={1049}
        height={1000}
        className="hidden h-auto w-full md:block"
      />
      <Image
        src="/shapes/core-values-sm.svg"
        alt="AI Tools"
        width={1049}
        height={1000}
        className="block h-auto w-full md:hidden"
      />
      <p className="font-inter my-10 max-w-[514px] text-center text-sm md:my-0 lg:text-base">
        At Doxiverse, our core value is <span className="font-bold opacity-100">T.R.U.S.T. </span>,
        so that healthcare professionals can confidently explore and adopt AI
      </p>
    </section>
  );
}
