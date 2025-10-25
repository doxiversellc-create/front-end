import { AIToolCardSkeleton } from "@/components/AIToolCard/AIToolCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { generateDummyArray } from "@/lib/utils";

const BookmarkedToolsSkeleton = () => {
  return (
    <main className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid-col-end-1 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {generateDummyArray(8).map(item => (
          <div className="flex w-full justify-center" key={item}>
            <AIToolCardSkeleton key={item} className="shrink-0" />
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <Skeleton className="h-10 w-40 rounded-lg" />
      </div>
    </main>
  );
};

export default BookmarkedToolsSkeleton;
