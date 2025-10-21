import { GradientSeparator } from "@/components/GradientSeparator";
import AIToolsGridSkeleton from "./_components/AIToolsGridSkeleton";
import CategoryFilterContainerSkeleton from "./_components/CategoryFilterContainerSkeleton";

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
        <CategoryFilterContainerSkeleton />
      </section>
      {/* Tool Grid */}
      <AIToolsGridSkeleton />
    </div>
  );
}
