import { Skeleton } from "@/components/ui/skeleton"; // Adjust path as needed

export default function loading() {
  return (
    // The main container provides the overall layout
    <div className="mx-auto w-full max-w-[1223px] scroll-smooth">
      {/* Featured Image Skeleton */}
      <div className="bg-background2 relative mt-7 w-full px-4 py-5 lg:px-0 lg:py-10">
        <div className="flex w-full flex-col items-center justify-center gap-3 lg:gap-5">
          {/* Large placeholder for the main featured image */}
          <Skeleton className="z-20 h-[1080] max-h-[664px] w-full rounded-xl object-cover lg:mt-3 lg:rounded-3xl" />
        </div>
      </div>

      {/* Content Area Skeleton */}
      <div className="mx-auto flex w-full gap-14 px-4 lg:px-0">
        {/* Share Button Placeholder (Desktop) */}
        <div className="hidden md:block">
          <Skeleton className="sticky top-24 h-80 w-16 rounded-full" />
        </div>

        {/* Article and Table of Contents Container */}
        <div className="flex w-full flex-col">
          {/* Title and Date Skeleton */}
          <div className="flex w-full flex-col justify-between gap-4 border-b pb-4 md:flex-row md:items-center lg:gap-0 lg:py-5">
            <div className="flex flex-col gap-2">
              {/* Title Placeholder */}
              <Skeleton className="h-8 w-64 md:w-96" />
              {/* Date Placeholder */}
              <Skeleton className="h-4 w-32" />
            </div>

            {/* Mobile Share Button Placeholder */}
            <div className="flex w-full items-center justify-between md:w-fit">
              <Skeleton className="h-9 w-9 rounded-full md:hidden" />
            </div>
          </div>

          {/* Article Content and ToC Skeleton */}
          <div className="flex gap-16">
            {/* Main Content Skeleton */}
            <div className="w-full space-y-5 py-8 lg:col-span-3">
              <div className="max-w-none space-y-5 pb-7">
                {/* Paragraph Placeholders */}
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-11/12" />
                <Skeleton className="h-5 w-full" />

                {/* Heading Placeholder */}
                <Skeleton className="mt-10 h-7 w-5/6" />

                {/* More Paragraph Placeholders */}
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-10/12" />
                <Skeleton className="h-5 w-full" />
                <Skeleton className="h-5 w-3/4" />
              </div>
            </div>

            {/* Sticky Table of Contents Skeleton (Desktop) */}
            <div className="hidden min-w-[280px] py-8 lg:col-span-1 lg:block">
              <div className="sticky top-24">
                <div className="flex flex-col gap-6">
                  {/* ToC Title Placeholder */}
                  <Skeleton className="h-6 w-40" />

                  {/* ToC Link Placeholders */}
                  <div className="relative ml-5 space-y-4">
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-5/6" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-3/4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
