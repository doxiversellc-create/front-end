import SectionHeader from "../../../../components/SectionHeader";

export default function HeroSection() {
  return (
    <section className="to-primary/0 flex flex-col gap-5 bg-gradient-to-b from-[#9FCFEE] px-3 pt-16 pb-12 md:items-center md:justify-center lg:px-0 lg:pt-28">
      <SectionHeader className="w-fit">Blogs</SectionHeader>
      <p className="font-outfit max-w-[744px] text-4xl leading-[1.1] font-semibold md:text-center md:text-5xl lg:text-[64px]">
        Our Latest Articles
      </p>
      <p className="font-inter max-w-[709px] text-base md:text-center md:text-lg">
        Stay updated with the latest healthcare AI trends, expert insights, and practical guides to
        navigate the evolving world of health technology.
      </p>
    </section>
  );
}
