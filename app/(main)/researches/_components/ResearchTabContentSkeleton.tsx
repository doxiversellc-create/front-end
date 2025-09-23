import { GradientSeparator } from "@/components/GradientSeparator";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { generateDummyArray } from "@/lib/utils";

interface ResearchCardSkeletonProps {
  index: number;
}

export function ResearchCardSkeleton({ index }: ResearchCardSkeletonProps) {
  return (
    <Card
      className="w-full overflow-hidden rounded-none border-0 py-0 duration-500"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          {/* Content */}
          <div className="font inter flex-1 space-y-2 md:space-y-2.5">
            <div className="flex items-center justify-between gap-2 text-sm">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-6 w-6 rounded-full" />
            </div>
            <Skeleton className="h-6 w-3/4" /> {/* title */}
            <Skeleton className="h-4 w-full" /> {/* abstract preview */}
            <Skeleton className="h-4 w-full" /> {/* abstract preview */}
            <Skeleton className="h-4 w-5/6" />
            {/* Desktop footer */}
            <div className="hidden items-center justify-between text-sm md:flex">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-4 w-20" />
            </div>
          </div>

          {/* Mobile footer */}
          <div className="flex w-full items-center justify-between text-sm md:hidden">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      </CardContent>
      <GradientSeparator />
    </Card>
  );
}

export default function ResearchTabContentSkeleton() {
  const skeletonArray = generateDummyArray(10);
  return (
    <div className="w-full max-w-[744px] space-y-10 duration-500 md:space-y-12">
      {skeletonArray.map((value, index) => (
        <ResearchCardSkeleton key={value} index={index} />
      ))}
    </div>
  );
}
