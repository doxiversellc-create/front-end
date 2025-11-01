"use client";

import { useEffect, useRef } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { Pagination } from "@/components/Pagination";
import { News } from "@/types/news.types";
import NewsCard from "./NewsCard";

interface NewsGridProps {
  newsList: News[];
  currentPage: number;
  totalPages: number;
}
export default function NewsGrid({ newsList, currentPage, totalPages }: NewsGridProps) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const newsSectionRef = useRef<HTMLDivElement>(null);
  const latestNews = newsList.length >= 2 ? newsList.slice(0, 2) : newsList;
  const mainNewsList = currentPage > 1 ? newsList : newsList.slice(2);
  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    if (currentPage == 1) return;
    if (newsSectionRef.current) {
      const yOffset = -120; // offset for sticky header
      const y = newsSectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "instant" });
    }
  }, [currentPage]);
  return (
    <div>
      <div className="mb-8 flex w-full items-center justify-start gap-4 border-b py-4">
        <p className="text-foreground font-semibold">Latest News</p>
      </div>

      {/* Latest News */}
      {currentPage == 1 && (
        <div className="mb-8 grid gap-16 space-y-2 md:grid-cols-2 lg:grid-cols-2">
          {latestNews.map(news => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      )}

      {/* Paginated News */}
      <div
        ref={newsSectionRef}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3"
      >
        {mainNewsList.map(news => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
