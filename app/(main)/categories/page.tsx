import Link from "next/link";

import { AlertTriangle, ChevronRight, Folder } from "lucide-react";

import { Button } from "@/components/ui/button";
import { fetcher } from "@/lib/fetcher";
import { Category } from "@/types/tools.types";
import CategoryCard from "./_components/CategoryCard";

export const metadata = {
  title: "AI Tool Categories",
  description: "Explore AI tool categories tailored for healthcare professionals.",
};

export default async function CategoriesPage() {
  const { data: categories } = await fetcher<{
    results: Category[];
  }>("/ai-tool-categories");

  const renderCategories = () => {
    if (categories && categories.results) {
      if (categories.results.length == 0) {
        return (
          <div className="border-border flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed bg-gray-50 p-12 text-center">
            <Folder className="text-muted-foreground mx-auto h-12 w-12" />
            <h3 className="mt-2 text-xl font-semibold text-gray-700">No categories available</h3>
            <p className="mt-1 text-sm text-gray-500">
              It looks like there are no categories at the moment. Please check back later.
            </p>
          </div>
        );
      }
      return (
        <div className="grid gap-1 md:grid-cols-2 lg:grid-cols-3">
          {categories?.results?.map((category: Category, index) => (
            <CategoryCard category={category} key={category.id} order={index + 1} />
          ))}
        </div>
      );
    } else {
      return (
        <div className="border-bg-red-300 bg-secondary flex w-full flex-col items-center justify-center rounded-xl border p-8 text-center">
          <AlertTriangle className="mx-auto h-14 w-14 text-red-500" />
          <h3 className="mt-4 text-2xl font-bold text-red-800">Oops! Something went wrong</h3>
          <p className="mt-2 text-sm text-red-700">
            We couldn&apos;t fetch your categories at the moment. Don&apos;t worry, it&apos;s not
            you — try refreshing the page or come back later.
          </p>
        </div>
      );
    }
  };

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
        {renderCategories()}

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
