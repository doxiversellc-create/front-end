"use client";

import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useIsMobile } from "@/hooks/useMobile";
import { generateDummyArray } from "@/lib/utils";

export const FDATableContainerSkeleton = () => {
  const isMobile = useIsMobile();
  const dummyRows = generateDummyArray(6);

  // --- Mobile Skeleton ---
  if (isMobile) {
    return (
      <section className="pt-0">
        <div className="container mx-auto">
          <Card className="shadow-card overflow-hidden border-none">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b">
                  <tr>
                    <th className="px-2 pb-3 text-left">
                      <Skeleton className="h-4 w-28" />
                    </th>
                    <th className="px-2 pb-3 text-left">
                      <Skeleton className="h-4 w-24" />
                    </th>
                    <th className="px-2 pb-3 text-left">
                      <Skeleton className="h-4 w-20" />
                    </th>
                    <th className="w-8" />
                  </tr>
                </thead>
                <tbody>
                  {dummyRows.map(item => (
                    <tr key={item} className="border-b">
                      <td className="px-2 py-3">
                        <Skeleton className="h-4 w-24" />
                      </td>
                      <td className="px-2 py-3">
                        <Skeleton className="h-4 w-20" />
                      </td>
                      <td className="px-2 py-3">
                        <Skeleton className="h-4 w-full min-w-[100px]" />
                      </td>
                      <td className="px-2 py-3 text-center">
                        <Skeleton className="h-8 w-8 rounded-full" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Pagination Skeleton */}
            <div className="flex items-center justify-between gap-4 border-t p-4">
              <Skeleton className="h-9 w-20" />
              <div className="flex items-center space-x-1">
                <Skeleton className="h-8 w-8" />
                <Skeleton className="h-8 w-8" />
                <Skeleton className="hidden h-8 w-8 sm:block" />
              </div>
              <Skeleton className="h-9 w-20" />
            </div>
          </Card>
        </div>
      </section>
    );
  }

  // --- Desktop Skeleton ---
  return (
    <section className="py-4">
      <div className="container mx-auto">
        <Card className="shadow-card overflow-hidden border-none">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b">
                <tr>
                  {generateDummyArray(6).map(item => (
                    <th key={item} className="px-4 pb-4 text-left">
                      <Skeleton className="h-5 w-36" />
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {dummyRows.map(item => (
                  <tr key={item} className="border-b">
                    {generateDummyArray(6).map(col => (
                      <td key={col} className="px-4 py-4">
                        <Skeleton className="h-5 w-full" />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default FDATableContainerSkeleton;
