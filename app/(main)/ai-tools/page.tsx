import { Suspense } from "react";

import { fetchPageContent } from "@/actions/content.actions";
import { GradientSeparator } from "@/components/GradientSeparator";
import AiToolsGrid from "./_components/AIToolsGrid";
import AIToolsGridSkeleton from "./_components/AIToolsGridSkeleton";
import AIToolsHeader from "./_components/AIToolsHeader";
import CategoryFilterContainer from "./_components/CategoryFilterContainer";
import CategoryFilterContainerSkeleton from "./_components/CategoryFilterContainerSkeleton";

export async function generateMetadata() {
  const { content } = await fetchPageContent("ai-tools");

  return {
    title: content.title,
    description: content?.description || "Discover Top AI Tools",
  };
}

interface ToolsPageProps {
  searchParams: Promise<{
    category: string;
    subCategory: string;
    page?: string;
    categoryName?: string;
  }>;
}
export default async function ToolsPage({ searchParams }: ToolsPageProps) {
  const { category, subCategory, page, categoryName } = await searchParams;
  const AiToolGridKey = JSON.stringify({ category, subCategory, page });
  const categoryFilterKey = JSON.stringify({ category, subCategory });

  return (
    <div className="bg-background mb-16 min-h-screen">
      {/* Hero Banner */}
      <section className="from-primary/10 via-background to-background -mt-15 flex flex-col items-center justify-center bg-gradient-to-b px-4 pt-20 pb-12 text-center md:pt-32">
        <AIToolsHeader categoryName={categoryName} />
        <GradientSeparator
          width="w-full"
          height="h-[1px]"
          color="via-secondary-foreground/10"
          className="mt-20"
        />
        <div className="relative mx-auto mt-8 w-full max-w-4xl">
          <div className="from-background pointer-events-none absolute top-0 left-0 z-10 h-full w-10 bg-gradient-to-r to-transparent" />
          <div className="no-scrollbar flex items-center justify-center space-x-3 overflow-x-auto">
            <Suspense key={categoryFilterKey} fallback={<CategoryFilterContainerSkeleton />}>
              <CategoryFilterContainer category={category} subCategory={subCategory} />
            </Suspense>
          </div>
          <div className="from-background pointer-events-none absolute top-0 right-0 z-10 h-full w-10 bg-gradient-to-l to-transparent" />
        </div>
      </section>
      {/* Tool Grid */}
      <Suspense key={AiToolGridKey} fallback={<AIToolsGridSkeleton />}>
        <AiToolsGrid category={category} subCategory={subCategory} page={page || "1"} />
      </Suspense>
    </div>
  );
}
