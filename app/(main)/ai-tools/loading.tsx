import { GradientSeparator } from "@/components/GradientSeparator";
import AIToolsGridSkeleton from "./_components/AIToolsGridSkeleton";
import CategoryFilterContainerSkeleton from "./_components/CategoryFilterContainerSkeleton";

export default function loading() {
  return (
    <div className="bg-background relative mb-16 min-h-screen">
      {/* Hero Banner */}

      <section className="hero-gradient flex flex-col items-center justify-center px-4 pt-6 pb-12 text-center md:pt-18">
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
          className="mt-20"
        />
        {/* Category Selector */}
        <CategoryFilterContainerSkeleton />
      </section>
      {/* Tool Grid */}
      <AIToolsGridSkeleton />
    </div>
  );
}
