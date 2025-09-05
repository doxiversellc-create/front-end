import Image from "next/image";
import SectionHeader from "../../../../components/SectionHeader";

export default function CoreValues() {
  return (
    <section className="w-full max-w-[1089px] my-5 mx-auto p-4 lg:p-0 flex flex-col items-center justify-center">
      <SectionHeader className="w-fit">Core Values</SectionHeader>
      <h2 className="text-3xl my-7 mb:10 lg:mb-14 md:text-4xl lg:text-[40px] font-medium font-outfit leading-tight">
        <span className="text-balance ">Doxiverse Core Values</span>
      </h2>
      <Image
        src="/shapes/core-values-lg.svg"
        alt="AI Tools"
        width={1049}
        height={1000}
        className="w-full h-auto md:block hidden"
      />
      <Image
        src="/shapes/core-values-sm.svg"
        alt="AI Tools"
        width={1049}
        height={1000}
        className="w-full h-auto md:hidden block"
      />
      <p className="max-w-[514px] my-10 md:my-0 text-center text-sm lg:text-base  font-inter ">
        At Doxiverse, our core value is <span className="font-bold opacity-100">T.R.U.S.T. </span>,
        so that healthcare professionals can confidently explore and adopt AI
      </p>
    </section>
  );
}
