import Link from "next/link";

import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { fetcher } from "@/lib/fetcher";
import CategoryCard from "./_components/CategoryCard";

export const metadata = {
  title: "AI Tool Categories",
  description: "Explore AI tool categories tailored for healthcare professionals.",
};
export interface SubCategory {
  id: number;
  name: string;
  short_description: string;
  description: string;
}
export interface Category {
  id: number;
  name: string;
  short_description: string;
  description: string;
  isTopCategory: boolean;
  tool_count: number;
  sub_categories: SubCategory[];
}
export default async function CategoriesPage() {
  const { data: categories } = await fetcher<{
    results: Category[];
  }>("/ai-tool-categories");
  return (
    <div className="bg-background min-h-screen">
      <div className="from-primary/25 pointer-events-none absolute top-0 left-0 h-[50vh] w-full bg-gradient-to-b to-transparent" />
      <main className="container mx-auto py-12 md:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8 flex flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="font-outfit text-foreground mb-2 text-center text-2xl font-bold sm:text-left">
              All AI Tool Categories
            </h1>
          </div>
          {/* Button for desktop only */}
        </div>

        {/* Categories Grid */}
        <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3">
          {categories?.results?.map((category: Category) => (
            <CategoryCard category={category} key={category.id} />
          ))}
        </div>

        {/* Button for mobile only */}
        <div className="bg-primary text-primary-foreground mx-auto mt-8 flex w-1/2 items-center justify-center rounded-full sm:hidden">
          <Button asChild className="w-1/2 rounded-full">
            <Link href="/ai-tools" className="flex items-center justify-center">
              See All AI Tools
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
