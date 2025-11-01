import { Suspense } from "react";

import { GradientSeparator } from "@/components/GradientSeparator";
import AiToolsGrid from "../_components/AIToolsGrid";
import AIToolsGridSkeleton from "../_components/AIToolsGridSkeleton";
import AIToolsHeader from "../ai-tools/_components/AIToolsHeader";

interface ExploreToolsPageProps {
  searchParams: Promise<{
    tag?: string;
    page?: string;
  }>;
}
const ExploreToolsPage = async ({ searchParams }: ExploreToolsPageProps) => {
  const { tag, page } = await searchParams;
  const AiToolGridKey = JSON.stringify({ tag, page });
  return (
    <div className="mb-16 min-h-screen">
      {/* Hero Banner */}
      <section className="hero-gradient flex flex-col items-center justify-center px-4 pt-6 pb-12 text-center md:pt-18">
        <AIToolsHeader tag={tag} />
        <GradientSeparator
          width="w-full"
          height="h-[1px]"
          color="via-secondary-foreground/10"
          className="mt-20"
        />
      </section>
      {/* Tool Grid */}
      <Suspense key={AiToolGridKey} fallback={<AIToolsGridSkeleton />}>
        <AiToolsGrid tag={tag} page={page || "1"} />
      </Suspense>
    </div>
  );
};

export default ExploreToolsPage;
