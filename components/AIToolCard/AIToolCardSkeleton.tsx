import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface AIToolCardSkeletonProps {
  className?: string;
}

export function AIToolCardSkeleton({ className = "max-w-[280px]" }: AIToolCardSkeletonProps) {
  return (
    <div
      className={cn(
        "w-70 flex-none rounded-3xl shadow-xs",
        className // dynamically pass max-w or other classes
      )}
    >
      {/* This mimics your gradient border wrapper */}
      <div className="to-border h-full rounded-3xl bg-gradient-to-b from-transparent p-0.5 pr-px">
        <div className="bg-background flex h-full flex-col items-center space-y-6 rounded-[23px] p-6">
          {/* Skeleton for the Tool Icon */}
          <Skeleton className="aspect-square size-28 shrink-0 rounded-full lg:size-36" />

          <div className="flex h-full w-full flex-col justify-between space-y-2">
            {/* Skeleton for Tool Name and Bookmark Button */}
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-38" />
              <Skeleton className="h-6 w-10" />
            </div>

            {/* Skeleton for the Tool Summary (matches min-h-[40px] and line-clamp-2) */}
            <div className="space-y-2 pt-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-4/5" />
            </div>

            {/* Skeleton for Rating and Premium Badge */}
            <div className="flex w-full items-center justify-between pt-2">
              <Skeleton className="h-5 w-18" />
              <Skeleton className="h-5 w-16" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
