import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function HeroSection() {
  return (
    <section className="to-primary/0 flex flex-col items-center justify-center gap-5 bg-gradient-to-b from-[#9FCFEE] via-[#9fceee1e] px-3 pt-28 pb-12 lg:px-0">
      <p className="font-outfit max-w-[744px] text-center text-4xl leading-[1.1] font-semibold md:text-5xl lg:text-[64px]">
        Discover the Future of Healthcare AI Research
      </p>
      <p className="font-inter max-w-[536px] text-center text-base md:text-lg">
        Stay ahead with groundbreaking studies and insights driving innovation in medicine and
        patient care.
      </p>
      <div className="relative mx-auto mt-6 w-full max-w-[554px]">
        <Input
          type="text"
          variant={"rounded"}
          inputSize={"lg"}
          placeholder="What type of Research topics are you interested in?"
          className="bg-muted w-full border-0 py-2 pr-2 pl-5 md:pl-7"
        />
        <button className="bg-primary text-primary-foreground absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-2">
          <Search />
        </button>
      </div>
    </section>
  );
}
