import { Suspense } from "react";

import { fetchPageContent } from "@/actions/content.actions";
import { SubCategory } from "@/app/(main)/categories/page";
import { fetcher } from "@/lib/fetcher";
import ClientToolsPage, { Tool } from "./_components/ClientToolsPage";
import { LoadingToolsPage } from "./_components/LoadingToolsPage";

interface ToolsPageProps {
  searchParams: Promise<{
    category: string;
    subCategory?: string;
    page: string;
  }>;
}

export async function generateMetadata() {
  const { content } = await fetchPageContent("ai-tools");

  return {
    title: content.title,
    description: content?.description || "Discover Top AI Tools",
  };
}

export default async function ToolsPage({ searchParams }: ToolsPageProps) {
  const resolvedSearchParams = await searchParams;
  const category = resolvedSearchParams.category;
  const subCategory = resolvedSearchParams.subCategory || "";
  const { content } = await fetchPageContent("ai-tools");
  const page = parseInt(resolvedSearchParams.page || "1", 10);
  const initialCategory = subCategory
    ? `by-subcategory/${category}/${subCategory}`
    : `by-category/${category}`;
  const { data: categories } = await fetcher<{ results: SubCategory[] }>(
    `/ai-tool-categories/${category}/subcategories/`
  );
  const { data: tools } = await fetcher<{
    results: Tool[];
    count: number;
    next: string | null;
    previous: string | null;
  }>(`/ai-tools/${initialCategory}?page=${page}`);

  return (
    <Suspense fallback={<LoadingToolsPage />} key={subCategory}>
      <ClientToolsPage
        content={content}
        aiTools={tools?.results || []}
        category={category}
        subCategory={subCategory}
        page={page}
        categories={categories?.results || []}
      />
    </Suspense>
  );
}
