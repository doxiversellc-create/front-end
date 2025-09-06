"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Pagination } from "../../../../components/Pagination";
import { ResearchArticle } from "../page";

import CategoriesFilter from "./CategoriesFilter";
import CategoriesSidebar from "./CategoriesSidebar";
import ResearchCard from "./ResearchCard";
import TabNavigation from "./TabNavigation";

const categories = [
  "#Diagnostics",
  "#Anesthesia",
  "#Medical Imaging",
  "#Radiology",
  "#Predictive Models",
];

const ARTICLES_PER_PAGE = 10;

export default function ResearchesTab({
  allResearchArticles,
  savedArticles,
}: {
  allResearchArticles: ResearchArticle[];
  savedArticles: ResearchArticle[];
}) {
  const [activeTab, setActiveTab] = useState<"recent" | "saved">("recent");
  const searchParams = useSearchParams();
  const router = useRouter();
  const researchSectionRef = useRef<HTMLDivElement>(null);

  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    if (researchSectionRef.current) {
      const yOffset = -40; // offset for sticky header
      const y = researchSectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [currentPage]);

  // Calculate pagination for current tab
  const getCurrentArticles = () => {
    if (activeTab === "saved") {
      return savedArticles; // Don't paginate saved articles for now
    }

    const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
    const endIndex = startIndex + ARTICLES_PER_PAGE;

    return allResearchArticles.slice(startIndex, endIndex);
  };

  const getTotalPages = () => {
    if (activeTab === "saved") {
      return 1; // No pagination for saved articles
    }
    return Math.ceil(allResearchArticles.length / ARTICLES_PER_PAGE);
  };

  const currentArticles = getCurrentArticles();
  const totalPages = getTotalPages();

  // Reset to page 1 when switching tabs
  useEffect(() => {
    if (activeTab === "saved" || currentPage > totalPages) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", "1");
      router.push(`?${params.toString()}`, { scroll: false });
    }
  }, [activeTab, currentPage, totalPages, searchParams, router]);

  // TODO: Implement save/unsave functionality

  return (
    <div className="mb-24 space-y-10" ref={researchSectionRef}>
      <div className="mx-auto max-w-[1140px] px-4 lg:px-0">
        <div className="mb-2 flex min-w-full flex-col justify-between gap-10 lg:flex-row">
          {/* Main Content */}
          <div className="w-full">
            {/* Tab Navigation */}
            <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Mobile Categories Filter */}
            <CategoriesFilter categories={categories} />

            {/* Articles */}
            <div className="flex w-full flex-col justify-between lg:flex-row">
              <div
                key={`${activeTab}-${currentPage}`}
                className="animate-in fade-in-50 slide-in-from-bottom-4 max-w-[744px] space-y-10 duration-500 md:space-y-12"
              >
                {currentArticles.map((article, index) => (
                  <ResearchCard
                    key={article.id}
                    article={article}
                    index={index}
                    isSaved={activeTab === "saved"}
                    // onToggleSave={handleToggleSave}
                  />
                ))}

                {/* Only show pagination for recent articles tab */}
                {activeTab === "recent" && totalPages > 1 && (
                  <Pagination
                    className="mt-16"
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                  />
                )}
              </div>

              {/* Research Right Sidebar - Desktop Only */}
              <CategoriesSidebar categories={categories} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
