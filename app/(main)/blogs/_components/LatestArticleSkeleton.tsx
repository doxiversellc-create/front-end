import { Skeleton } from "@/components/ui/skeleton";

export default function LatestArticleSkeleton() {
  return (
    <div className="fade-in-50 mx-auto flex w-full max-w-[1200px] flex-col gap-2 border-0 px-4 py-0 md:flex-row md:gap-12 lg:max-h-[384px]">
      {/* Image skeleton */}
      <div className="flex w-full md:w-1/2">
        <Skeleton className="h-[250px] w-full rounded-lg md:h-[384px]" />
      </div>

      {/* Text skeletons */}
      <div className="inter h-full w-full flex-1 space-y-2 py-6 md:w-1/2 md:space-y-4">
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-6" />
          <Skeleton className="h-4 w-16" />
        </div>

        <Skeleton className="h-7 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-2/3" />

        <div className="flex items-center gap-2 pt-4">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-3 w-3" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
    </div>
  );
}
