import { Suspense } from "react";

import { fetchPageContent } from "@/actions/content.actions";
import { fetcher } from "@/lib/fetcher";
import { SubCategory } from "@/types/tools.types";
import ClientToolsPage from "./_components/ClientToolsPage";
import { LoadingToolsPage } from "./_components/LoadingToolsPage";

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
  }>;
}
export default async function ToolsPage({ searchParams }: ToolsPageProps) {
  const { category, subCategory, page } = await searchParams;

  const { content } = await fetchPageContent("ai-tools");

  const { data: categories } = await fetcher<{ results: SubCategory[] }>(
    `/ai-tool-categories/${category}/subcategories/`
  );

  return (
    <Suspense fallback={<LoadingToolsPage />} key={subCategory}>
      <ClientToolsPage
        content={content}
        category={category}
        subCategory={subCategory || ""}
        page={page || "1"}
        categories={categories?.results || []}
      />
    </Suspense>
  );
}
