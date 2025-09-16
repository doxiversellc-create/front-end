import { fetchPageContent } from "@/actions/content.actions";
import { SubCategory } from "@/app/(main)/categories/page";
import { fetcher } from "@/lib/fetcher";
import ClientToolsPage, { Tool } from "./_components/ClientToolsPage";

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
  const initialCategory = subCategory ? `${category}/${subCategory}` : category;
  const page = parseInt(resolvedSearchParams.page || "1", 10);
  const { content } = await fetchPageContent("ai-tools");
  const { data: categories } = await fetcher<{ results: SubCategory[] }>(
    `/ai-tool-categories/${category}/subcategories/`
  );
  const { data: tools } = await fetcher<{
    results: Tool[];
    count: number;
    next: string | null;
    previous: string | null;
  }>(`/ai-tools/by-subcategory/${initialCategory}?page=${page}`);
  return (
    <ClientToolsPage
      content={content}
      aiTools={tools?.results || []}
      category={category}
      subCategory={subCategory}
      page={page}
      categories={categories?.results || []}
    />
  );
}
