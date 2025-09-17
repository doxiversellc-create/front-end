/* eslint-disable react/no-array-index-key */
"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import CategoryFilter from "@/app/(main)/ai-tools/_components/CategoryFilter";
import { Category, SubCategory } from "@/app/(main)/categories/page";
import { GradientSeparator } from "@/components/GradientSeparator";
import { Pagination } from "@/components/Pagination";
import { AIToolsContent } from "@/types/content.types";
import { AIToolCard } from "./AIToolCard";
import { AIToolCardSkeleton } from "./ToolsSkeleton";

interface ClientToolsPageProps {
  aiTools: Tool[];
  category: string;
  subCategory: string;
  page: number;
  content: AIToolsContent;
  categories: SubCategory[];
}

export interface Review {
  name: string;
  date: string;
  content: string;
  rating: number;
  avatar: string | null;
}
export interface Tool {
  id: number;
  name: string;
  summary: string;
  description: string;
  tags: string[];
  logo_url: string | null;
  is_verified: boolean;
  is_premium: boolean;
  is_draft: boolean;
  average_rating: number;
  reviews: Review[];
  categories: Category[];
}

export default function ClientToolsPage({
  content,
  aiTools,
  category,
  subCategory,
  page,
  categories,
}: ClientToolsPageProps) {
  // Reorder categories so the one matching the category query is first
  const reorderedCategories = category
    ? [
        ...categories.filter(cat => String(cat.id) === String(category)),
        ...categories.filter(cat => String(cat.id) !== String(category)),
      ]
    : categories;

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [tools, setTools] = useState<Tool[]>(aiTools);
  const [currentSubCategory, setCurrentSubCategory] = useState(subCategory);

  useEffect(() => {
    setTools(aiTools);
    setLoading(false);
    setCurrentSubCategory(subCategory);
  }, [aiTools, subCategory]);

  const handlePageChange = (page: number) => {
    setLoading(true);
    router.push(`?category=${category}&subCategory=${currentSubCategory}&page=${page}`, {
      scroll: false,
    });
  };

  const handleCategoryChange = (id: number | "all") => {
    setLoading(true);
    setCurrentSubCategory(String(id));
    router.push(`?category=${category}&subCategory=${id}&page=1`, { scroll: false });
  };

  return (
    <div className="bg-background mb-16 min-h-screen">
      {/* Hero Banner */}
      <section className="from-primary/10 via-background to-background -mt-15 flex flex-col items-center justify-center bg-gradient-to-b px-4 pt-20 pb-12 text-center md:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-outfit text-foreground mb-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {content.page_title.replace(
              "(category)",
              `“${categories.find((cat: SubCategory) => String(cat.id) === currentSubCategory)?.name}”`
            )}
          </h1>
          <p className="font-inter mx-auto max-w-[749px] text-sm leading-relaxed text-pretty md:text-base lg:text-lg">
            {content.page_subtitle.replace(
              "(category)",
              `“${categories.find((cat: SubCategory) => String(cat.id) === currentSubCategory)?.name}”`
            )}
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
          <div className="no-scrollbar flex items-center justify-center space-x-3 overflow-x-auto">
            <CategoryFilter
              categories={reorderedCategories}
              handleCategoryChange={handleCategoryChange}
              subCategory={currentSubCategory}
            />
          </div>
          <div className="from-background pointer-events-none absolute top-0 right-0 z-10 h-full w-10 bg-gradient-to-l to-transparent" />
        </div>
      </section>
      {/* Tool Grid */}
      <main className="container mx-auto px-4 md:px-6 lg:px-8">
        {loading ? (
          <div className="flex flex-wrap justify-center gap-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <div className="lg:col-auto" key={index}>
                <AIToolCardSkeleton key={index} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map(tool => (
              <div className="lg:col-auto" key={tool.id}>
                <AIToolCard tool={tool} />
              </div>
            ))}
          </div>
        )}
        {/* Pagination */}
        <Pagination totalPages={1} currentPage={page} onPageChange={handlePageChange} />
      </main>
    </div>
  );
}
