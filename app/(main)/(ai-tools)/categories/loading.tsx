import Link from "next/link";

import { ChevronRight } from "lucide-react";

import CategoryCardSkeleton from "@/app/(main)/(ai-tools)/categories/_components/CategoryCardSkeleton";
import { Button } from "@/components/ui/button";

export default function loading() {
  return (
    <div className="bg-background min-h-screen">
      <main className="hero-gradient container mx-auto py-12 md:px-6 lg:px-8">
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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((category: number) => (
            <CategoryCardSkeleton key={category} />
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
