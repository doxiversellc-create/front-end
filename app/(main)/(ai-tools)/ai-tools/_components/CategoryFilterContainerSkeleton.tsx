import { Skeleton } from "@/components/ui/skeleton";
import { generateDummyArray } from "@/lib/utils";

const CategoryFilterContainerSkeleton = () => {
  return (
    <div className="relative mx-auto mt-8 w-full max-w-4xl">
      <div className="from-background pointer-events-none absolute top-0 left-0 z-10 h-full w-10 bg-gradient-to-r to-transparent" />
      <div className="no-scrollbar flex items-center justify-center space-x-3 overflow-x-auto">
        <div className="flex flex-wrap gap-2">
          {generateDummyArray(3).map(item => (
            <Skeleton key={item} className="bg-muted/70 h-10 w-40 rounded-full" />
          ))}
        </div>
      </div>
      <div className="from-background pointer-events-none absolute top-0 right-0 z-10 h-full w-10 bg-gradient-to-l to-transparent" />
    </div>
  );
};

export default CategoryFilterContainerSkeleton;
