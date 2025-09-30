/* eslint-disable react/no-array-index-key */
"use client";

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryCardSkeleton() {
  return (
    <Card className="group gap-1 border-none pt-1 shadow-none">
      {/* Header */}
      <CardHeader className="gap-2">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            {/* Icon */}
            <Skeleton className="bg-muted-foreground/10 h-13 w-13 rounded-full" />
            {/* Title + Description */}
            <div className="space-y-2">
              <Skeleton className="bg-muted-foreground/10 h-6 w-32" />
              <Skeleton className="bg-muted-foreground/10 h-3 w-48" />
            </div>
          </div>
        </div>
      </CardHeader>

      {/* Subcategories */}
      <CardContent className="pl-22">
        <div className="mb-4 space-y-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <Skeleton className="bg-muted-foreground/10 h-2 w-2 rounded-full" />
              <Skeleton className="bg-muted-foreground/10 h-3 w-32" />
            </div>
          ))}
        </div>
      </CardContent>

      {/* Footer */}
      <CardFooter>
        <Skeleton className="bg-muted-foreground/10 mx-auto h-4 w-32" />
      </CardFooter>
    </Card>
  );
}
