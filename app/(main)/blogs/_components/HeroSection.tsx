import SectionHeader from "../../../../components/SectionHeader";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b px-3 lg:px-0 from-[#9FCFEE] to-primary/0 pt-28 pb-12 flex flex-col md:items-center md:justify-center gap-5">
      <SectionHeader className="w-fit">Blogs</SectionHeader>
      <p className="text-4xl md:text-5xl lg:text-[64px] font-semibold font-outfit md:text-center leading-[1.1] max-w-[744px]">
        Our Latest Articles
      </p>
      <p className="max-w-[709px] md:text-center text-base md:text-lg font-inter">
        Stay updated with the latest healthcare AI trends, expert insights, and practical guides to
        navigate the evolving world of health technology.
      </p>
    </section>
  );
}
