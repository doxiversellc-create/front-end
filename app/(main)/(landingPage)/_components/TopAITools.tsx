/* eslint-disable react/no-array-index-key */
"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { AIToolCard } from "@/app/(main)/ai-tools/_components/AIToolCard";
import { AIToolCardSkeleton } from "@/app/(main)/ai-tools/_components/AIToolCardSkeleton";
import SectionHeader from "@/components/SectionHeader";
import { fetcher } from "@/lib/fetcher";
import { LandingPageContent } from "@/types/content.types";
import { Category, Tool } from "@/types/tools.types";

export default function AIToolsSection({
  content,
  categories,
}: {
  content: LandingPageContent;
  categories: Category[];
}) {
  const { ai_tools_title, ai_tools_subtitle } = content;
  const [activeCategory, setActiveCategory] = useState(String(categories[0]?.id) || "");
  const [tools, setTools] = useState<Tool[]>([]);
  const [loading, setLoading] = useState(false);

  // Config
  const toolsToDisplay = 3;

  useEffect(() => {
    const fetchTools = async () => {
      setLoading(true);
      try {
        const { data } = await fetcher<{ results: Tool[] }>(
          `/ai-tools/by-category/${activeCategory}`,
          {}
        );
        setTools(data?.results || []);
      } catch {
        setTools([]);
      }
      setLoading(false);
    };
    fetchTools();
  }, [activeCategory]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <div className="mx-auto my-10 w-full max-w-[1141px] space-y-6 px-4 md:space-y-8 md:px-8 lg:space-y-10 lg:px-4 xl:px-0">
      {/* Section Header */}
      <div className="flex flex-col gap-3 lg:gap-5">
        <SectionHeader className="w-fit">{ai_tools_title}</SectionHeader>
        <div className="flex flex-wrap items-center justify-between space-y-4">
          <h2 className="font-outfit max-w-[680px] text-3xl leading-tight font-medium md:text-4xl lg:text-[40px]">
            <span className="text-balance">{ai_tools_subtitle}</span>
          </h2>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-between">
        {/* Mobile */}
        <div className="relative w-full md:hidden">
          <div className="overflow-x-auto">
            <div className="flex min-w-max gap-2 pb-2">
              {categories.slice(0, 3).map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(String(category.id))}
                  className={`flex-shrink-0 rounded-full px-4 py-2 font-medium whitespace-nowrap transition-all duration-200 ${
                    String(activeCategory) === String(category.id)
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
                Others
                <ArrowUpRight className="ml-1 size-4" />
              </Link>
            </div>
          </div>
          <div className="pointer-events-none absolute top-0 right-0 h-full w-8 bg-gradient-to-l from-white to-transparent" />
        </div>

        {/* Tablet */}
        <div className="hidden flex-wrap gap-2 md:flex md:justify-center md:gap-4 lg:hidden">
          {categories.slice(0, 3).map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(String(category.id))}
              className={`rounded-full px-4 py-2 font-medium transition-all duration-200 ${
                String(activeCategory) === String(category.id)
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
            Others
            <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </div>

        {/* Desktop */}
        <div className="hidden w-full flex-wrap items-center gap-2 lg:flex lg:justify-center lg:gap-4">
          {categories.slice(0, 3).map(category => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(String(category.id))}
              className={`font-inter rounded-full border-2 px-6 py-3 font-medium transition-all duration-200 hover:cursor-pointer ${
                String(activeCategory) === String(category.id)
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-foreground hover:bg-muted/60"
              }`}
            >
              {category.name}
            </button>
          ))}
          <Link
            href={"/categories"}
            className="hover:bg-button/10 flex items-center rounded-full px-4 py-3 font-normal transition-all duration-200"
          >
            Others
            <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </div>
      </div>

      {/* Tools */}
      <div className="relative">
        {loading ? (
          <div className="flex flex-wrap justify-center gap-8">
            {Array.from({ length: toolsToDisplay }).map((_, index) => (
              <div className="lg:col-auto" key={index}>
                <AIToolCardSkeleton key={index} className="w-[355px]" />
              </div>
            ))}
          </div>
        ) : tools.length === 0 ? (
          <div className="flex items-center justify-center py-10">
            <span className="text-muted-foreground">No tools found in this category.</span>
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-8">
            {tools.slice(0, toolsToDisplay).map(tool => (
              <AIToolCard key={tool.id} tool={tool} className="max-w-[355px]" />
            ))}
          </div>
        )}
      </div>

      {/* See All */}
      {!loading && tools.length > toolsToDisplay && (
        <div className="flex justify-center pt-8">
          <Link
            href={`/ai-tools?category=${activeCategory}&subCategory=${categories?.find(c => String(c.id) === activeCategory)?.sub_categories?.[0]?.id || ""}`}
            className="bg-primary hover:bg-primary/90 text-primary-foreground flex items-center rounded-full px-6 py-3 font-medium shadow-lg transition-all duration-200 hover:shadow-lg"
          >
            See All
            <ArrowUpRight className="ml-2 size-5" />
          </Link>
        </div>
      )}
    </div>
  );
}
