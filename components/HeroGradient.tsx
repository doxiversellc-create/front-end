import { cn } from "@/lib/utils";

const HeroGradient = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "hero-gradient pointer-events-none absolute left-0 -z-10 h-[80vh] w-full md:top-14 lg:top-18",
        className
      )}
    />
  );
};

export default HeroGradient;
