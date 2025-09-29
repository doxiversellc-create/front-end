import { Skeleton } from "@/components/ui/skeleton";
import { generateDummyArray } from "@/lib/utils";

const VendorToolsCardSkeleton = () => {
  const skeletonArray = generateDummyArray(4);
  return (
    <div className="w-full max-w-[380px] flex-none rounded-2xl shadow-none">
      <div className="to-border h-full rounded-2xl bg-gradient-to-b from-black/0 p-[1px]">
        <div className="bg-background flex h-full flex-col items-center space-y-6 rounded-2xl p-6">
          {/* Logo */}
          <div className="mb-2 flex justify-center">
            <Skeleton className="size-28 rounded-full lg:size-36" />
          </div>

          {/* Title */}
          <div className="mb-2 w-full text-center">
            <Skeleton className="mx-auto h-6 w-2/3 rounded-md" />
          </div>

          {/* Link */}
          <div className="mb-4 flex justify-center">
            <Skeleton className="h-5 w-24 rounded-md" />
          </div>

          {/* Stats grid */}
          <div className="grid w-full grid-cols-2 gap-6">
            {skeletonArray.map(value => (
              <div key={value} className="bg-muted/40 flex items-center gap-2 rounded-lg p-2">
                <Skeleton className="size-4 rounded" />
                <div className="flex w-full flex-col gap-1">
                  <Skeleton className="h-3 w-16 rounded" />
                  <Skeleton className="h-4 w-10 rounded" />
                </div>
              </div>
            ))}
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
