/* eslint-disable react/no-array-index-key */
import { AIToolCardSkeleton } from "@/app/(main)/ai-tools/_components/ToolsSkeleton";
import { GradientSeparator } from "@/components/GradientSeparator";
import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="bg-background mb-16 min-h-screen">
      {/* Hero Banner */}
      <section className="from-primary/10 via-background to-background -mt-15 flex flex-col items-center justify-center bg-gradient-to-b px-4 pt-20 pb-12 text-center md:pt-32">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-outfit text-foreground mb-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Discover Top AI Tools in “
            <span className="bg-accent inline-block h-8 w-48 animate-pulse rounded-md align-middle" />
            ”
          </h1>
          <p className="font-inter mx-auto max-w-[749px] text-sm leading-relaxed text-pretty md:text-base lg:text-lg">
            Discover cutting-edge AI tools designed to transform “
            <span className="bg-accent inline-block h-4 w-40 animate-pulse rounded-md align-middle" />
            ” workflows. Boost efficiency, simplify tasks, and stay ahead with smart, innovative
            solutions.
          </p>
        </div>

        <GradientSeparator
          width="w-full"
          height="h-[1px]"
          color="via-secondary-foreground/10"
          className="my-8 mt-20"
        />
        {/* Category Selector */}
        <div className="relative mx-auto mt-8 w-full max-w-4xl">
          <div className="from-background pointer-events-none absolute top-0 left-0 z-10 h-full w-10 bg-gradient-to-r to-transparent" />
          <div className="no-scrollbar flex items-center justify-center space-x-3 overflow-x-auto">
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="bg-muted/70 h-10 w-40 rounded-full" />
              ))}
            </div>
          </div>
          <div className="from-background pointer-events-none absolute top-0 right-0 z-10 h-full w-10 bg-gradient-to-l to-transparent" />
        </div>
      </section>
      {/* Tool Grid */}
      <main className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div className="lg:col-auto" key={index}>
              <AIToolCardSkeleton key={index} />
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="mt-8 flex justify-center">
          <Skeleton className="h-10 w-40 rounded-lg" />
        </div>{" "}
      </main>
    </div>
  );
}
