"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

import { GradientSeparator } from "@/components/GradientSeparator";
import { Pagination } from "@/components/Pagination";
import { AIToolsContent } from "@/types/content.types";
import { AIToolCard } from "./AIToolCard";

interface ClientToolsPageProps {
  aiTools: { [key: string]: AIToolCard[] };
  initialCategory: string;
  initialPage: number;
  content: AIToolsContent;
}

export default function ClientToolsPage({
  content,
  aiTools,
  initialCategory,
  initialPage,
}: ClientToolsPageProps) {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const router = useRouter();
  const toolsPerPage = 4;
  const categories = Object.keys(aiTools);
  const currentTools = aiTools[activeCategory as keyof typeof aiTools] || [];
  const totalPages = Math.ceil(currentTools.length / toolsPerPage);
  const startIndex = (currentPage - 1) * toolsPerPage;
  const displayedTools = currentTools.slice(startIndex, startIndex + toolsPerPage);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(1);
    // Update URL without full page reload
    router.push(`?category=${encodeURIComponent(category)}&page=1`, { scroll: false });
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Update URL without full page reload
    router.push(`?category=${encodeURIComponent(activeCategory)}&page=${page}`, { scroll: false });
  };

  return (
    <div className="bg-background mb-16 min-h-screen">
      {/* Hero Banner */}
      <section className="from-primary/10 via-background to-background -mt-15 flex flex-col items-center justify-center bg-gradient-to-b px-4 pt-20 pb-12 text-center md:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-outfit text-foreground mb-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {content.page_title.replace("(category)", `“${activeCategory}”`)}
          </h1>
          <p className="font-inter mx-auto max-w-[749px] text-sm leading-relaxed text-pretty md:text-base lg:text-lg">
            {content.page_subtitle.replace("(category)", `“${activeCategory}”`)}
          </p>
        </div>
        <GradientSeparator
          width="w-full"
          height="h-[1px]"
          color="via-secondary-foreground/10"
          className="my-8 mt-20"
        />
        {/* Category Selector */}
        <div className="relative mx-auto mt-8 w-full max-w-4xl">
          <div className="from-background pointer-events-none absolute top-0 left-0 z-10 h-full w-10 bg-gradient-to-r to-transparent" />
          <div className="no-scrollbar flex items-center justify-start space-x-3 overflow-x-auto">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`rounded-full border px-4 py-1.5 font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary shadow-md"
                    : "bg-secondary/40 text-foreground hover:bg-secondary/60 border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="from-background pointer-events-none absolute top-0 right-0 z-10 h-full w-10 bg-gradient-to-l to-transparent" />
        </div>
      </section>
      {/* Tool Grid */}
      <main className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center"> */}
        <div className="flex flex-wrap justify-center gap-6">
          {displayedTools.map(tool => (
            <div className="lg:col-auto" key={tool.id}>
              <AIToolCard tool={tool} />
            </div>
          ))}
        </div>
        {/* Pagination */}
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </main>
    </div>
  );
}
