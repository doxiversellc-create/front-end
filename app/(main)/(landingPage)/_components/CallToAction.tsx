import Image from "next/image";
import Link from "next/link";

import { LandingPageContent } from "@/types/content.types";

// Define the TopCategories component
export default function CallToAction({ content }: { content: LandingPageContent }) {
  const { cta_question, cta_main_heading, cta_description, cta_button_link, cta_button_text } =
    content;
  return (
    <section className="w-full">
      <div className="relative min-w-full rounded-3xl pb-2">
        <div className="bg-background relative min-w-full overflow-hidden rounded-3xl px-8 pb-8 md:px-12 md:pb-12 lg:px-16 lg:pb-16">
          {/* Dot Pattern Background */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `radial-gradient(circle, #2d2e2eee 1px, transparent 1px)`,
              backgroundSize: "15px 15px",
              backgroundPosition: "0 0, 10px 10px",
            }}
          />
          <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2">
            <Image
              src="/shapes/top-category.svg"
              className="rotate-180 brightness-0 invert"
              alt="top-category"
              width={200}
              height={100}
            />
          </div>
          <div className="from-background/30 absolute inset-0 bg-gradient-to-b via-[#A9D5F0]/20 to-[#A9D5F0]" />

          <div className="relative z-10 mt-5 space-y-5 pb-7 text-center md:pb-3">
            <p className="font-inter text-base lg:text-lg">{cta_question}</p>
            <h2 className="font-outfit mx-auto mt-6 max-w-[546px] text-3xl leading-tight font-semibold md:text-4xl lg:mt-12 lg:text-5xl">
              <span className="text-balance">
                {cta_main_heading}
                {/* Where <span className="font-serif font-[100] italic">Healthcare</span> Meets the
                    Best in AI */}
              </span>
            </h2>
            <p className="font-inter mx-auto max-w-[569px] text-lg opacity-80 lg:text-xl">
              {cta_description}
            </p>
            <div className="mx-auto mt-8 flex justify-center">
              <Link
                href={cta_button_link}
                className="bg-primary hover:bg-primary/70 text-primary-foreground rounded-full px-8 py-4 transition-all duration-300"
              >
                {cta_button_text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
