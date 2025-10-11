"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <article className="prose prose-lg max-w-none space-y-6 lg:space-y-10">
      <Skeleton className="h-10 w-96" />

      <div className="space-y-5">
        {" "}
        <section className="space-y-5">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
        </section>
      </div>
    </article>
  );
}
