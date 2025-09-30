/* eslint-disable react/no-array-index-key */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-20">
        <div className="w-full py-8">
          <div className="mx-auto flex flex-col items-start justify-between gap-10 md:flex-row">
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              {/* Company Logo + Job Title */}
              <div className="flex items-start gap-4">
                <Skeleton className="h-16 w-16 rounded-xl" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-4 w-32" />
                </div>
              </div>

              {/* Job Details */}
              <div className="flex flex-wrap items-center gap-4">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-20" />
              </div>

              {/* Badges */}
              <div className="flex gap-3">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-24 rounded-full" />
              </div>

              {/* Apply Section */}
              <div className="hidden space-y-4 pt-6 md:block">
                <Skeleton className="h-10 w-48" />
              </div>
            </div>

            {/* Right Info Card */}
            <div className="w-full sm:w-auto">
              <Card className="w-full md:w-96">
                <CardHeader>
                  <CardTitle className="text-lg">
                    <Skeleton className="h-6 w-32" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div className="flex justify-between" key={i}>
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-4 w-28" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="bg-border my-8 h-[1px] w-full" />

          {/* Job Description */}
          <div className="space-y-4">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-3/4" />
          </div>

          <div className="my-4 space-y-4">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/2" />
          </div>
          <div className="my-4 space-y-4">
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
}
