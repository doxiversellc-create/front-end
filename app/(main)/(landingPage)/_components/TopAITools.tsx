"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Tool } from "@/app/(main)/ai-tools/_components/ClientToolsPage";
import { Category } from "@/app/(main)/categories/page";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { fetcher } from "@/lib/fetcher";
import { LandingPageContent } from "@/types/content.types";

export default function AIToolsSection({
  content,
  categories,
}: {
  content: LandingPageContent;
  categories: Category[];
}) {
  const { ai_tools_title, ai_tools_subtitle } = content;
  const [activeCategory, setActiveCategory] = useState(categories[0]?.id || "");
  const [carouselPosition, setCarouselPosition] = useState(0);
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(false);

  const toolsPerPage = 3;

  useEffect(() => {
    // Fetch tools for the selected category
    const fetchTools = async () => {
      setLoading(true);
      try {
        console.log("====================================");
        console.log(`/ai-tools/by-category/${activeCategory}`);
        console.log("====================================");
        const { data } = await fetcher<{ results: Tool[] }>(
          `/ai-tools/by-category/${activeCategory}`
        );

        setTools(data?.results || []);
      } catch {
        setTools([]);
      }
      setLoading(false);
    };
    fetchTools();
    setCarouselPosition(0);
  }, [activeCategory]);

  const nextSlide = () => {
    const maxPosition = Math.max(0, tools.length - toolsPerPage);
    setCarouselPosition(prev => Math.min(prev + 1, maxPosition));
  };

  const prevSlide = () => {
    setCarouselPosition(prev => Math.max(prev - 1, 0));
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // carouselPosition reset is handled in useEffect
  };

  return (
    <div className="mx-auto my-10 w-full max-w-[1141px] space-y-6 px-4 md:space-y-8 md:px-8 lg:space-y-10 lg:px-4 xl:px-0">
      <div className="flex flex-col gap-3 lg:gap-5">
        <SectionHeader className="w-fit">{ai_tools_title}</SectionHeader>
        <div className="flex flex-wrap items-center justify-between space-y-4">
          <h2 className="font-outfit max-w-[680px] text-3xl leading-tight font-medium md:text-4xl lg:text-[40px]">
            <span className="text-balance">{ai_tools_subtitle}</span>
          </h2>

          {/* See All Button - Desktop */}
          {/* <Link
            href={"/"}
            className="bg-primary hover:bg-primary/90 text-primary-foreground hidden items-center rounded-full py-3 pr-6 pl-6 font-medium transition-all duration-200 hover:shadow-lg md:flex"
          >
            See All
            <ArrowUpRight className="ml-2 size-5" />
          </Link> */}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-between">
        {/* Mobile: Horizontally scrollable categories */}
        <div className="relative w-full md:hidden">
          <div className="overflow-x-auto">
            <div className="flex min-w-max gap-2 pb-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(String(category.id))}
                  className={`flex-shrink-0 rounded-full px-4 py-2 font-medium whitespace-nowrap transition-all duration-200 ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "text-foreground hover:bg-muted border-2"
                  }`}
                >
                  {category.name}
                </button>
              ))}
              <Link
                href={"/categories"}
                className="hover:bg-button/10 flex flex-shrink-0 items-center rounded-full px-4 py-2 font-normal whitespace-nowrap transition-all duration-200"
              >
                Other
                <ArrowUpRight className="ml-1 size-4" />
              </Link>
            </div>
          </div>
          {/* Gradient fade overlay */}
          <div className="pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white to-transparent" />
        </div>

        {/* Tablet: Show first 3 categories */}
        <div className="hidden flex-wrap gap-2 md:flex md:gap-4 lg:hidden">
          {categories.slice(0, 3).map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(String(category.id))}
              className={`rounded-full px-4 py-2 font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-foreground hover:bg-muted"
              }`}
            >
              {category.name}
            </button>
          ))}
          <Link
            href={"/categories"}
            className="hover:bg-button/10 flex items-center rounded-full px-4 py-3 font-normal transition-all duration-200"
          >
            Other
            <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </div>

        {/* Desktop: Show all categories */}
        <div className="hidden flex-wrap gap-2 lg:flex lg:gap-4">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(String(category.id))}
              className={`font-inter rounded-full border-2 px-6 py-3 font-medium transition-all duration-200 hover:cursor-pointer ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-foreground hover:bg-muted/60"
              }`}
            >
              {category.name}
              {category.id === "Other" && <ChevronRight className="ml-2 h-4 w-4" />}
            </button>
          ))}
          <Link
            href={"/categories"}
            className="hover:bg-button/10 flex items-center rounded-full px-4 py-3 font-normal transition-all duration-200"
          >
            Other
            <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </div>
      </div>

      {/* Tools Display */}
      <div className="relative">
        {loading ? (
          <div className="flex items-center justify-center py-10">
            <span className="text-lg font-medium">Loading tools...</span>
          </div>
        ) : (
          <>
            {/* Desktop: Carousel */}
            <div className="hidden md:block">
              <div className="overflow-hidden py-5">
                <div
                  className="flex justify-start gap-5 transition-transform duration-300 ease-in-out md:gap-6 lg:gap-7"
                  style={{
                    transform: `translateX(-${carouselPosition * (100 / toolsPerPage)}%)`,
                  }}
                >
                  {tools.map(tool => (
                    <div
                      key={tool.id}
                      className="max-w-[358px] flex-none rounded-2xl transition-all duration-300 ease-in-out hover:shadow-lg"
                    >
                      {/* Tool Icon */}
                      <div className="to-border h-full rounded-2xl bg-gradient-to-b from-black/0 p-[1px]">
                        <div className="bg-background flex h-full flex-col items-center space-y-6 rounded-2xl p-6">
                          <Image
                            src={tool.logo_url || "/default-tool-logo.webp"}
                            alt={tool.name}
                            width={100}
                            height={100}
                            className="size-28 rounded-full lg:size-36"
                          />

                          {/* Tool Info */}
                          <div className="flex h-full flex-col justify-between space-y-2">
                            <div className="flex items-center justify-between">
                              <div>
                                <Link
                                  href={"/"}
                                  className="hover:text-primary font-outfit text-lg font-semibold md:text-xl lg:text-2xl"
                                >
                                  {tool.name}
                                </Link>
                              </div>
                              <Link href={"/"} className="hover:bg-primary/10 rounded-full p-3">
                                <ArrowUpRight className="size-5" />
                              </Link>
                            </div>
                            <p className="font-inter text- md:text-md mt-8 text-sm opacity-90">
                              {tool.summary}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Carousel Navigation */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <Button
                  onClick={prevSlide}
                  disabled={carouselPosition === 0 || tools.length <= toolsPerPage}
                  variant="outline"
                  className="aspect-square size-14 min-h-14 rounded-full border-2 text-sm disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="size-7" />
                </Button>
                <Button
                  onClick={nextSlide}
                  disabled={
                    carouselPosition >= tools.length - toolsPerPage || tools.length <= toolsPerPage
                  }
                  className="aspect-square size-14 min-h-14 rounded-full border-2 text-sm disabled:cursor-not-allowed"
                  variant="outline"
                >
                  <ChevronRight className="size-7" />
                </Button>
              </div>
            </div>

            {/* Mobile: Show only 2 tools */}
            <div className="flex flex-col items-center justify-center space-y-5 md:hidden">
              {tools.slice(0, 2).map(tool => (
                <div
                  key={tool.id}
                  className="w-full max-w-[358px] flex-none rounded-2xl transition-all duration-300 ease-in-out hover:shadow-lg"
                >
                  {/* Tool Icon */}
                  <div className="to-border h-full rounded-2xl bg-gradient-to-b from-black/0 p-[1px]">
                    <div className="bg-background flex h-full flex-col items-center space-y-6 rounded-2xl p-6">
                      <Image
                        src={tool.logo_url || "/default-tool-logo.webp"}
                        alt={tool.name}
                        width={100}
                        height={100}
                        className="size-28 rounded-full lg:size-36"
                      />

                      {/* Tool Info */}
                      <div className="flex h-full flex-col justify-between space-y-2">
                        <div className="flex items-center justify-between">
                          <div>
                            <Link
                              href={"/"}
                              className="hover:text-primary font-outfit text-lg font-semibold md:text-xl lg:text-2xl"
                            >
                              {tool.name}
                            </Link>
                          </div>
                          <Link href={"/"} className="hover:bg-primary/10 rounded-full p-3">
                            <ArrowUpRight className="size-5" />
                          </Link>
                        </div>
                        <p className="font-inter text- md:text-md mt-8 text-sm opacity-90">
                          {tool.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* See All Button - Mobile */}
              <div className="flex justify-center pt-4">
                <Link
                  href={"/"}
                  className="bg-primary not-only:zoom-out-100 hover:bg-primary/90 text-primary-foreground flex items-center rounded-full py-3 pr-6 pl-8 font-medium shadow-lg transition-all duration-200 hover:shadow-lg"
                >
                  See All
                  <ArrowUpRight className="ml-2 size-5" />
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
