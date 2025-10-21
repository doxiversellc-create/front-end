import { Skeleton } from "@/components/ui/skeleton";
import { generateDummyArray } from "@/lib/utils";
import { AIToolCardSkeleton } from "./ToolsSkeleton";

const AIToolsGridSkeleton = () => {
  return (
    <main className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center gap-6">
        {generateDummyArray(8).map(item => (
          <div className="lg:col-auto" key={item}>
            <AIToolCardSkeleton />
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

export default AIToolsGridSkeleton;
