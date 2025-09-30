"use client";

import { Skeleton } from "@/components/ui/skeleton";

const JobFiltersSkeleton = () => {
  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar Skeleton */}
      <div className="flex items-center gap-2">
        <div className="relative max-w-[400px] flex-1">
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        {/* Mobile Filter Button */}
        <div className="md:hidden">
          <Skeleton className="h-10 w-10 rounded-md" />
        </div>
      </div>

      {/* Desktop Filters Skeleton */}
      <div className="hidden w-full flex-wrap items-center gap-4 md:flex">
        <div className="flex min-w-[180px] items-center gap-2">
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
        <div className="flex min-w-[140px] items-center gap-2">
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
        <div className="flex min-w-[160px] items-center gap-2">
          <Skeleton className="h-10 w-full rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default JobFiltersSkeleton;
