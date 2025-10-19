import { Skeleton } from "@/components/ui/skeleton";

export function RecentArticleCardSkeleton() {
  return (
    <div className="w-full">
      {/* Image skeleton */}
      <div className="relative mt-5 h-full max-h-[260px] w-full overflow-hidden rounded-t-[18px] rounded-b-[14px]">
        <Skeleton className="h-[260px] w-full rounded-[18px]" />
      </div>

      {/* Text skeletons */}
      <div className="font-inter mt-4 space-y-3">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-24" />
        </div>

        <Skeleton className="h-5 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />

        <div className="flex items-center gap-2 pt-2">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-3" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
    </div>
  );
}
