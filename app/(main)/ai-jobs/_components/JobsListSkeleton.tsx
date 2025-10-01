/* eslint-disable react/no-array-index-key */
"use client";

import { CirclePoundSterling, ExternalLink, MapPin } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";

export default function JobsListSkeleton() {
  return (
    <div className="space-y-4 lg:col-span-3">
      {/* 1. Header/Filter Section */}
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-40" />
      </div>

      {/* 2. List of 5 Job Card Skeletons */}
      <div className="border-border divide-y overflow-hidden rounded-2xl border">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="space-y-4 p-4 md:p-8">
            {/* Top Section: Company, Date, Title, Description, Badges */}
            <div className="flex items-start justify-between">
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-4 w-24 md:w-32" /> {/* Company Name */}
                  <Skeleton className="hidden h-4 w-1 md:block" /> {/* Separator */}
                  <Skeleton className="h-4 w-32" /> {/* Published Date */}
                </div>
                <Skeleton className="h-6 w-3/4 md:h-7 md:w-1/2" /> {/* Title */}
                <Skeleton className="h-4 w-full md:h-5" /> {/* Description */}
                <Skeleton className="h-4 w-3/4 md:h-5" /> {/* Description */}
              </div>
              <div className="flex items-center gap-2">
                <Skeleton className="hidden h-6 w-20 md:block" /> {/* Category Badge */}
                <Skeleton className="hidden h-6 w-20 md:block" /> {/* Featured Badge */}
              </div>
            </div>

            {/* Bottom Section: Metadata and View Detail Link */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                <div className="flex items-center gap-1">
                  <CirclePoundSterling className="text-muted h-5 w-5" /> {/* Real Icon */}
                  <Skeleton className="h-4 w-24" /> {/* Salary Range */}
                </div>
                <Skeleton className="h-4 w-1" /> {/* Separator */}
                <Skeleton className="h-4 w-16" /> {/* Job Type */}
                <Skeleton className="h-4 w-1" /> {/* Separator */}
                <div className="flex items-center gap-1">
                  <MapPin className="text-muted h-4 w-4" /> {/* Real Icon */}
                  <Skeleton className="h-4 w-20" /> {/* Location */}
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1 md:mt-0">
                <Skeleton className="h-5 w-20" /> {/* View Detail Text */}
                <ExternalLink className="text-muted h-4 w-4" /> {/* Real Icon */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Pagination/Load More Button */}
      <div className="mt-8 flex justify-center">
        <Skeleton className="h-10 w-40 rounded-lg" />
      </div>
    </div>
  );
}
