"use client";

import { useState } from "react";
import { Pagination } from "../../../components/Pagination";
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

export default function ResearchesTab({
  mostRecentArticles,
  savedArticles,
}: {
  mostRecentArticles: ResearchArticle[];
  savedArticles: ResearchArticle[];
}) {
  const [activeTab, setActiveTab] = useState<"recent" | "saved">("recent");

  const currentArticles = activeTab === "recent" ? mostRecentArticles : savedArticles;

  // TODO: Implement save/unsave functionality

  return (
    <div className="space-y-10 mb-24">
      <div className=" mx-auto px-4 lg:px-0 max-w-[1140px]">
        <div className="min-w-full flex flex-col justify-between lg:flex-row gap-10 mb-2">
          {/* Main Content */}
          <div className="w-full">
            {/* Tab Navigation */}
            <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Mobile Categories Filter */}
            <CategoriesFilter categories={categories} />

            {/* Articles */}
            <div className="flex flex-col lg:flex-row justify-between w-full">
              <div
                key={activeTab}
                className="space-y-10 md:space-y-12 animate-in fade-in-50 slide-in-from-bottom-4 duration-500 max-w-[744px]"
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
                <Pagination
                  className="mt-16"
                  totalPages={10}
                  currentPage={1}
                  onPageChange={() => {}}
                />
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
