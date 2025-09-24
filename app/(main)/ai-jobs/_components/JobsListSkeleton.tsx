/* eslint-disable react/no-array-index-key */
"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function JobsListSkeleton() {
  return (
    <div className="space-y-4 lg:col-span-3">
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-4 w-20" />
      </div>

      <div className="border-border divide-y overflow-hidden rounded-2xl border">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="space-y-3 p-6">
            <Skeleton className="h-5 w-1/3" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-10 w-full rounded-lg" />
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Skeleton className="h-10 w-40 rounded-lg" />
      </div>
    </div>
  );
}
