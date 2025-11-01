/* eslint-disable react/no-array-index-key */
"use client";

import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-20">
        {/* Header Section */}
        <div className="w-full py-8">
          <div className="mx-auto flex flex-col items-center justify-between gap-10 md:flex-row">
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              {/* Logo + Title */}
              <div className="flex items-center gap-3">
                <Skeleton className="h-24 w-24 rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-8 w-64" />
                  <Skeleton className="h-4 w-40" />
                </div>
              </div>

              {/* Summary */}
              <Skeleton className="h-16 w-full max-w-xl" />

              {/* Categories */}
              <div className="flex flex-wrap items-center gap-2">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Skeleton key={i} className="h-6 w-20 rounded-full" />
                ))}
              </div>

              {/* Buttons */}
              <div className="hidden space-y-4 pt-6 md:block">
                <div className="flex items-center gap-4">
                  <Skeleton className="h-12 w-40 rounded-full" />
                  <Skeleton className="h-12 w-24 rounded-full" />
                </div>
              </div>
            </div>

            {/* Right Info Section (Features Table) */}
            <div className="w-full space-y-4 sm:w-auto">
              <div className="border-border/60 overflow-hidden rounded-xl border">
                <table className="w-full text-sm md:w-96">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-4 py-3 text-left">
                        <Skeleton className="h-4 w-24" />
                      </th>
                      <th className="px-4 py-3 text-left">
                        <Skeleton className="h-4 w-24" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.from({ length: 4 }).map((_, i) => (
                      <tr key={i} className="border-b">
                        <td className="px-4 py-3">
                          <Skeleton className="h-4 w-32" />
                        </td>
                        <td className="px-4 py-3">
                          <Skeleton className="h-4 w-20" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Mobile Buttons */}
          <div className="block space-y-4 pt-6 md:hidden">
            <div className="flex items-center gap-4">
              <Skeleton className="h-12 w-40 rounded-full" />
              <Skeleton className="h-12 w-24 rounded-full" />
            </div>
          </div>
        </div>

        <div className="bg-secondary-foreground/10 mb-8 h-[2px] w-full" />

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Hero Section */}
            <Skeleton className="h-40 w-full" />

            {/* Embedded Video */}
            <div className="space-y-4">
              <Skeleton className="h-6 w-48" />
              <Skeleton className="h-48 w-full rounded-xl sm:h-96" />
            </div>

            {/* Ratings and Reviews */}
            <div className="space-y-4">
              <Skeleton className="h-6 w-48" />

              <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-center">
                <Skeleton className="h-12 w-24" />
                <Skeleton className="h-10 w-40" />
              </div>

              <div className="space-y-4">
                {Array.from({ length: 3 }).map((_, i) => (
                  <Skeleton key={i} className="h-16 w-full rounded-md" />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden space-y-6 lg:block">
            {/* Discover More */}
            <div>
              <Skeleton className="mb-6 h-6 w-40" />
              <div className="flex flex-col gap-4">
                {Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Skeleton className="h-12 w-12 rounded-xl" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="space-y-4">
              <Skeleton className="h-6 w-20" />
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} className="h-6 w-16 rounded-full" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
