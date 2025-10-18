import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { generateDummyArray } from "@/lib/utils";

export function CommentsListSkeleton() {
  return (
    <div className="grid grid-cols-1 space-y-2 rounded-2xl border p-3 md:p-5">
      {generateDummyArray(3).map(item => (
        <div key={item}>
          <Card className="border-0 p-3 md:p-5">
            <div className="flex gap-3">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div className="flex-1 space-y-2">
                <div className="flex justify-between">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-4 w-24" /> {/* Author */}
                    <Skeleton className="h-3 w-3 rounded-full" /> {/* Dot */}
                    <Skeleton className="h-4 w-16" /> {/* Date */}
                  </div>
                </div>
                <Skeleton className="h-4 w-3/4" /> {/* Comment line 1 */}
                <Skeleton className="h-4 w-1/2" /> {/* Comment line 2 */}
              </div>
            </div>
          </Card>
          {item < 2 && <div className="bg-border h-px w-full" />}
        </div>
      ))}
    </div>
  );
}
