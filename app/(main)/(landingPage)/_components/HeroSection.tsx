import { ChevronRight, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LandingPageContent } from "@/types/content.types";

export default function HeroSection({ content }: { content: LandingPageContent }) {
  const { hero_title, hero_subtitle } = content;
  return (
    <div className="min-h-screen w-full px-4 py-2 md:px-6 md:py-4 lg:px-8 lg:py-5">
      {/* <div className="min-w-full"> */}
      <div className="from-foreground/15 to-foreground/0 rounded-3xl bg-gradient-to-b p-[1px]">
        <div className="bg-background min-w-full rounded-3xl p-1.5">
          <div
            className="relative flex min-h-[calc(100vh-2rem)] min-w-full flex-col items-center justify-center rounded-3xl bg-cover bg-center bg-no-repeat p-8 text-center md:min-h-[calc(100vh-3rem)] md:p-12 lg:min-h-[calc(100vh-4rem)] lg:p-16"
            style={{
              backgroundImage: `url(/shapes/hero-bg.svg)`,
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
              <h1 className="font-outfit text-4xl leading-tight font-semibold md:text-5xl lg:text-6xl">
                <span className="text-balance">{hero_title}</span>
              </h1>

              {/* Description */}
              <p className="font-inter mx-auto max-w-[749px] text-sm leading-relaxed text-pretty md:text-base lg:text-lg">
                {hero_subtitle}
              </p>

              {/* Search Bar */}
              <div className="relative mx-auto max-w-md">
                <Input
                  type="text"
                  placeholder="Search AI, Categories..."
                  className="bg-background/90 focus:ring-primary w-full rounded-full border py-5 pr-12 pl-8 text-base shadow-sm drop-shadow-sm backdrop-blur-sm focus:border-transparent focus:ring-2"
                />
                <button className="text-muted-foreground/70 hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2 p-1.5 transition-colors">
                  <Search className="h-5 w-5" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center gap-2 sm:flex-row sm:gap-4">
                <Button size="lg" className="px-4 hover:shadow-lg sm:px-8 sm:py-6">
                  Browse Tools
                </Button>
                <Button variant="outline" size="lg" className="px-4 sm:px-8 sm:py-6">
                  Submit Your Tool
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
