"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { generateDummyArray } from "@/lib/utils";

export default function NewsGridContainerSkeleton() {
  return (
    <div>
      {/* Section header */}
      <div className="mb-8 flex w-full items-center justify-start gap-4 border-b py-4">
        <Skeleton className="h-5 w-32" />
      </div>

      {/* Latest News Skeleton */}
      <div className="mb-8 hidden gap-16 md:grid md:grid-cols-2 lg:grid-cols-2">
        {generateDummyArray(2).map(item => (
          <NewsCardSkeleton key={item} />
        ))}
      </div>

      {/* Paginated News Skeleton */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {generateDummyArray(6).map(item => (
          <NewsCardSkeleton key={item} />
        ))}
      </div>

      {/* Pagination placeholder */}
      <div className="mt-8 flex justify-center">
        <Skeleton className="h-10 w-48" />
      </div>
    </div>
  );
}

function NewsCardSkeleton() {
  return (
    <div className="relative mb-4 flex flex-col overflow-hidden rounded-lg">
      <Skeleton className="aspect-[16/9] w-full rounded-lg" />
      <div className="flex flex-col gap-2 pt-4">
        <Skeleton className="h-3 w-24" />
        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="mt-2 h-4 w-20" />
      </div>
    </div>
  );
}
