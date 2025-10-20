import Link from "next/link";

import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { LandingPageContent } from "@/types/content.types";
import SearchWrapper from "./../_components/SearchWrapper";

export default function HeroSection({ content }: { content: LandingPageContent }) {
  const { hero_title, hero_subtitle } = content;
  return (
    <div
      className="relative flex min-h-[calc(100vh-2rem)] min-w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat p-8 text-center md:min-h-[calc(100vh-3rem)] md:p-12 lg:min-h-[calc(100vh-4rem)] lg:p-16"
      style={{
        backgroundImage: `url(/shapes/hero-bg-new.svg)`,
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-3xl space-y-8">
        {/* AI Badge */}
        <div className="font-inter bg-background/50 border-background inline-flex items-center gap-2 rounded-full border-2 p-1.5 pr-3 text-xs font-medium shadow-sm backdrop-blur-sm lg:text-base">
          <span className="bg-primary text-primary-foreground inline-flex items-center justify-center rounded-full px-3 py-1.5 font-bold">
            AI
          </span>
          Over 25+ AI Tools Listed
          <ChevronRight className="h-4 w-4" />
        </div>

        {/* Main Heading */}
        <h1 className="t text-4xl leading-tight font-semibold md:text-5xl lg:text-6xl">
          <span className="font-space_grotesk font-medium text-balance">{hero_title}</span>
        </h1>

        {/* Descriptio */}
        <p className="font-inter mx-auto max-w-[749px] text-sm leading-relaxed text-pretty md:text-base lg:text-lg">
          {hero_subtitle}
        </p>

        {/* Search Bar */}
        <SearchWrapper />
        {/* Action Buttons */}
        <div className="flex items-center justify-center gap-2 sm:flex-row sm:gap-4">
          <Link href="/categories">
            <Button size="lg" className="px-4 hover:shadow-lg sm:px-8 sm:py-6">
              Browse Tools
            </Button>
          </Link>
          <Link href="/vendors">
            <Button variant="outline" size="lg" className="px-4 sm:px-8 sm:py-6">
              Submit Your Tool
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
