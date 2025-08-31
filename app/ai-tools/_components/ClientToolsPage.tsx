"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import { GradientSeparator } from "../../../components/GradientSeparator";
import { AIToolCard } from "./AIToolCard";

interface ClientToolsPageProps {
  aiTools: { [key: string]: AIToolCard[] };
  initialCategory: string;
  initialPage: number;
}

const getEllipsablePages = (current: number, total: number) => {
  const pagesToShow = 2;
  const range: (number | string)[] = [];
  if (total <= pagesToShow * 2 + 2) {
    for (let i = 1; i <= total; i++) range.push(i);
  } else {
    for (let i = 1; i <= pagesToShow; i++) range.push(i);
    if (current > pagesToShow + 1) range.push("...");
    if (current > pagesToShow && current <= total - pagesToShow) {
      range.push(current);
    }
    if (current < total - pagesToShow) range.push("...");
    for (let i = total - pagesToShow + 1; i <= total; i++) range.push(i);
  }
  return range;
};

export default function ClientToolsPage({
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
    <div className="min-h-screen bg-background mb-16">
      {/* Hero Banner */}
      <section className=" flex flex-col -mt-15 items-center justify-center text-center px-4 pt-20 md:pt-32 pb-12 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl mb-8 font-bold tracking-tight font-outfit text-foreground">
            Discover Top AI Tools in “{activeCategory}”
          </h1>
          <p className="text-sm text-pretty font-inter md:text-base lg:text-lg leading-relaxed max-w-[749px] mx-auto">
            Explore cutting-edge AI solutions tailored for healthcare workflows. Boost efficiency,
            simplify tasks, and stay ahead with innovative tools.
          </p>
        </div>
        <GradientSeparator
          width="w-full"
          height="h-[1px]"
          color="via-secondary-foreground/10"
          className="my-8 mt-20"
        />
        {/* Category Selector */}
        <div className="relative mt-8 w-full max-w-4xl mx-auto">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="flex items-center justify-start space-x-3 overflow-x-auto no-scrollbar">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-1.5 rounded-full font-medium whitespace-nowrap transition-all duration-200 border
                ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary shadow-md "
                    : "bg-secondary/40 text-foreground hover:bg-secondary/60 border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-background to-transparent z-10" />
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
        {totalPages > 1 && (
          <div className="mt-12 flex items-center justify-between gap-2">
            {/* Desktop Pagination */}
            <div className="hidden sm:flex items-center justify-between w-full gap-2">
              {/* Prev Button */}
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                className="gap-1 rounded-full pr-4"
              >
                <ArrowLeft className="px-0" />
                <span>Previous</span>
              </Button>

              {/* Page Numbers */}
              <div className="flex items-center gap-1">
                {getEllipsablePages(currentPage, totalPages).map(page =>
                  page === "..." ? (
                    <span key={`ellipsis-${page}`} className="px-2 text-muted-foreground">
                      ...
                    </span>
                  ) : (
                    <Button
                      key={page}
                      variant={currentPage === page ? "outline" : "ghost"}
                      size="sm"
                      onClick={() => handlePageChange(page as number)}
                      className="w-9 h-9 p-0 rounded-full"
                    >
                      {page}
                    </Button>
                  )
                )}
              </div>

              {/* Next Button */}
              <Button
                variant="outline"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                className="gap-1 rounded-full pl-3"
              >
                <span>Next</span>
                <ArrowRight className="px-0" />
              </Button>
            </div>

            {/* Mobile Pagination */}
            {/* Mobile Pagination */}
            <div className="flex flex-col sm:hidden items-center w-full gap-2">
              {/* Page numbers centered */}
              <div className="flex items-center gap-1">
                {getEllipsablePages(currentPage, totalPages).map(page =>
                  page === "..." ? (
                    <span key={`ellipsis-${page}`} className="px-2 text-muted-foreground">
                      ...
                    </span>
                  ) : (
                    <Button
                      key={page}
                      variant={currentPage === page ? "outline" : "ghost"}
                      size="sm"
                      onClick={() => handlePageChange(page as number)}
                      className="w-9 h-9 p-0 rounded-full"
                    >
                      {page}
                    </Button>
                  )
                )}
              </div>

              {/* Prev / Next buttons spaced apart */}
              <div className="flex justify-between w-full px-4">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === 1}
                  className="rounded-full pr-3"
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                >
                  <ArrowLeft className="px-0" />
                  <span>Previous</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  disabled={currentPage === totalPages}
                  className="rounded-full pl-3"
                  onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                >
                  <span>Next</span>
                  <ArrowRight className="px-0" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
