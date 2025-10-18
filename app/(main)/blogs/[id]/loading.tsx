import { Skeleton } from "@/components/ui/skeleton";
import { generateDummyArray } from "@/lib/utils";
import { CommentsListSkeleton } from "./_components/CommentsListSkeleton";

export default function Loading() {
  const firstDummyArray = generateDummyArray(4);
  const secondDummyArray = generateDummyArray(5);
  return (
    <div className="mx-auto w-full max-w-[1223px] animate-pulse">
      {/* Hero Section */}
      <div className="bg-background2 relative mt-7 w-full px-4 py-5 lg:px-0 lg:py-10">
        <div className="flex w-full flex-col items-center justify-center gap-3 lg:gap-5">
          <Skeleton className="h-12 w-3/4 md:h-16" />
          <Skeleton className="h-6 w-1/2" />
          <Skeleton className="z-20 h-[664px] w-full rounded-xl lg:mt-3 lg:rounded-3xl" />
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full gap-14 px-4 lg:px-0">
        {/* Left Sidebar (hidden on mobile) */}
        <div className="hidden flex-col gap-3 md:flex">
          <Skeleton className="h-24 w-16 rounded-full" />
        </div>

        {/* Main Content */}
        <div className="flex w-full flex-col">
          {/* Writer + Interactions */}
          <div className="flex w-full flex-col justify-between gap-4 border-b pb-4 md:flex-row md:items-center lg:gap-0 lg:py-5">
            {/* Writer Info */}
            <div className="flex items-center gap-3">
              <Skeleton className="size-14 rounded-full" />
              <div className="flex flex-col gap-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-24" />
              </div>
            </div>

            {/* Interactions */}
            <div className="flex items-center gap-4">
              <Skeleton className="h-8 w-20 rounded-md" />
              <Skeleton className="h-8 w-20 rounded-md" />
              <Skeleton className="h-8 w-8 rounded-md" />
            </div>
          </div>

          {/* Article Content */}
          <div className="flex w-full gap-16">
            <div className="flex w-full flex-col">
              <div className="mt-10 flex flex-col gap-6">
                {firstDummyArray.map(item => (
                  <div key={item} className="space-y-3">
                    <Skeleton className="h-7 w-2/3" />
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-5/6" />
                    {item % 2 === 0 && <Skeleton className="h-[300px] w-full rounded-xl" />}
                  </div>
                ))}
              </div>
              <CommentsListSkeleton />
            </div>
            <div className="hidden min-w-[280px] lg:block">
              <div className="sticky top-24 space-y-8">
                <Skeleton className="h-6 w-40" />
                <div className="space-y-3">
                  {secondDummyArray.map(item => (
                    <Skeleton key={item} className="h-8 w-3/4" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar (Table of contents & related posts) */}
      </div>
    </div>
  );
}
