import { Suspense } from "react";

import { fetchPageContent } from "@/actions/content.actions";
import HeroSection from "./_components/HeroSection";
import ResearchesTab from "./_components/ResearchesTab";
import { allResearchArticles, savedArticles } from "./_date/researchArticles";

export interface ResearchArticle {
  id: number;
  author: string;
  title: string;
  description: string;
  date: string;
  image: string;
  tags: string[];
}
export async function generateMetadata() {
  const { content } = await fetchPageContent("researches");

  return {
    title: content.title,
    description: content?.description || "Discover the Future of Healthcare AI Research",
  };
}

export default async function ResearchesPage() {
  const { content } = await fetchPageContent("researches");

  return (
    <div className="flex flex-col gap-5">
      <HeroSection content={content} />
      <Suspense fallback={<div>Loading...</div>}>
        <ResearchesTab
          allResearchArticles={allResearchArticles}
          savedArticles={savedArticles}
          content={content}
        />
      </Suspense>
    </div>
  );
}
