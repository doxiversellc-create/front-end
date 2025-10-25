/* eslint-disable react/no-array-index-key */
// _components/LoadingToolsPage.tsx
import { GradientSeparator } from "@/components/GradientSeparator";
import { Skeleton } from "@/components/ui/skeleton";
import { AIToolCardSkeleton } from "../../../../components/AIToolCard/AIToolCardSkeleton";

export function LoadingToolsPage() {
  return (
    <div className="bg-background mb-16 min-h-screen">
      <section className="from-primary/10 via-background to-background -mt-15 flex flex-col items-center justify-center bg-gradient-to-b px-4 pt-20 pb-12 text-center md:pt-32">
        <div className="mx-auto max-w-3xl">
          <Skeleton className="mx-auto mb-8 h-12 w-96" />
          <Skeleton className="mx-auto h-6 w-full max-w-[749px] text-sm leading-relaxed" />
        </div>
        <GradientSeparator
          width="w-full"
          height="h-[1px]"
          color="via-secondary-foreground/10"
          className="my-8 mt-20"
        />
        <div className="relative mx-auto mt-8 w-full max-w-4xl">
          <Skeleton className="h-10 w-full" />
        </div>
      </section>
      <main className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <AIToolCardSkeleton key={index} />
          ))}
        </div>
      </main>
    </div>
  );
}
