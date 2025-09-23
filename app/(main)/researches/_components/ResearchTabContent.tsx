"use client";
import { useRef, useTransition } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import ResearchCard from "@/app/(main)/researches/_components/ResearchCard";
import ResearchTabContentSkeleton from "@/app/(main)/researches/_components/ResearchTabContentSkeleton";
import { Pagination } from "@/components/Pagination";
import { ResearchArticle, ResearchTabValue } from "@/types/research.types";

interface ResearchTabContentProps {
  activeTab: ResearchTabValue;
  currentPage?: string;
  articles: ResearchArticle[];
  totalPages: number;
}
const ResearchTabContent = ({
  activeTab,
  currentPage,
  articles,
  totalPages,
}: ResearchTabContentProps) => {
  const searchParams = useSearchParams();
  const researchSectionRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    if (page == 1) {
      params.delete("page");
    } else {
      params.set("page", page.toString());
    }

    startTransition(() => {
      router.push(`/researches?${params.toString()}`, { scroll: false });
      if (researchSectionRef.current) {
        const yOffset = -100;
        const y = researchSectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    });
  };
  if (isPending) return <ResearchTabContentSkeleton />;
  return (
    <div
      key={`${activeTab}-${currentPage}`}
      className="w-full max-w-[744px] space-y-10 md:space-y-12"
      ref={researchSectionRef}
    >
      {articles.map((article, index) => (
        <ResearchCard key={article.id} article={article} index={index} isSaved={false} />
      ))}

      {totalPages && (
        <Pagination
          className="mt-16"
          totalPages={totalPages}
          currentPage={parseInt(currentPage || "1", 10)}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default ResearchTabContent;
