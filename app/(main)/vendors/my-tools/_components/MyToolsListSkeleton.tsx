import { Skeleton } from "@/components/ui/skeleton";
import { generateDummyArray } from "@/lib/utils";

const VendorToolsCardSkeleton = () => {
  return (
    <div className="w-full max-w-[280px] flex-none rounded-2xl shadow-xs">
      <div className="to-border h-full rounded-2xl bg-gradient-to-b from-black/0 p-[1px]">
        <div className="bg-background flex h-full flex-col items-center space-y-6 rounded-2xl p-6">
          {/* Tool Icon Skeleton */}
          <Skeleton className="aspect-square size-28 rounded-full lg:size-36" />

          <div className="flex h-full w-full flex-col justify-between space-y-4">
            {/* Tool Name Skeleton */}
            <Skeleton className="h-6 w-4/5" />

            <div className="flex w-full items-center justify-between">
              {/* Rating Skeleton */}
              <Skeleton className="h-5 w-1/2" />
              {/* "See Details" Link Skeleton */}
              <Skeleton className="h-5 w-1/4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MyToolsListSkeleton = () => {
  const skeletonArray = generateDummyArray(8);
  return (
    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {skeletonArray.map(value => (
        <VendorToolsCardSkeleton key={value} />
      ))}
    </div>
  );
};

export default MyToolsListSkeleton;
