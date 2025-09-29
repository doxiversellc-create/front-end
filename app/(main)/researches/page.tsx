import { Suspense } from "react";

import { fetchPageContent } from "@/actions/content.actions";
import CategoriesSidebar from "@/app/(main)/researches/_components/CategoriesSidebar";
import ResearchTabContentContainer from "@/app/(main)/researches/_components/ResearchTabContentContainer";
import ResearchTabContentSkeleton from "@/app/(main)/researches/_components/ResearchTabContentSkeleton";
import HeroSection from "./_components/HeroSection";

export async function generateMetadata() {
  const { content } = await fetchPageContent("researches");

  return {
    title: content.title,
    description: content?.description || "Discover the Future of Healthcare AI Research",
  };
}

interface ResearchesPageProps {
  searchParams: Promise<{ page: string; tab: string; search: string }>;
}

const categories = [
  "#Diagnostics",
  "#Anesthesia",
  "#Medical Imaging",
  "#Radiology",
  "#Predictive Models",
];

export default async function ResearchesPage({ searchParams }: ResearchesPageProps) {
  const { content } = await fetchPageContent("researches");
  const { tab, page, search } = await searchParams;
  const activeTab = tab && tab === "saved" ? tab : "recent";
  const suspenseKey = `${activeTab}-${page || 1}-${search || ""}`;
  return (
    <div className="flex flex-col gap-5">
      <HeroSection content={content} />
      {/* <TabNavigation activeTab={activeTab} /> */}
      <div className="mx-auto flex w-full max-w-[1140px] flex-col justify-center gap-4 border-t px-4 pt-6 md:px-6 lg:flex-row lg:justify-between lg:gap-8 lg:px-8">
        <Suspense key={suspenseKey} fallback={<ResearchTabContentSkeleton />}>
          <ResearchTabContentContainer activeTab={activeTab} currentPage={page} search={search} />
        </Suspense>
        <CategoriesSidebar categories={categories} content={content} />
      </div>
    </div>
  );
}
