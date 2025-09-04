import { Search } from "lucide-react";

import { Input } from "../../../components/ui/input";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b px-3 lg:px-0 from-[#9FCFEE] via-[#9fceee1e] to-primary/0 pt-28 pb-12 flex flex-col items-center justify-center gap-5">
      <p className="text-4xl md:text-5xl lg:text-[64px] font-semibold font-outfit text-center leading-[1.1] max-w-[744px]">
        Discover the Future of Healthcare AI Research
      </p>
      <p className="max-w-[536px] text-center text-base md:text-lg font-inter">
        Stay ahead with groundbreaking studies and insights driving innovation in medicine and
        patient care.
      </p>
      <div className="relative w-full max-w-[554px] mx-auto mt-6">
        <Input
          type="text"
          variant={"rounded"}
          inputSize={"lg"}
          placeholder="What type of Research topics are you interested in?"
          className="w-full pl-5 md:pl-7 pr-2 py-2 bg-muted border-0"
        />
        <button className="absolute bg-primary text-primary-foreground rounded-full right-2 top-1/2 -translate-y-1/2 p-2 ">
          <Search />
        </button>
      </div>
    </section>
  );
}
