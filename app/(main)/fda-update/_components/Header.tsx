import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function Hero() {
  return (
    <section className="space-y-6 py-16 pb-0 text-left md:text-center">
      <span className="bg-background rounded-full px-3 py-2 text-sm font-semibold">
        FDA AI Updates
      </span>
      <h1 className="font-outfit mt-4 text-4xl font-semibold tracking-tight md:text-7xl">
        FDA AI Insights & Approvals
      </h1>
      <p className="mx-auto max-w-2xl text-base md:text-lg">
        Stay ahead in healthcare innovation with the latest FDA-approved AI tools and updates.
        Explore expert insights, regulatory trends, and practical resources to navigate the evolving
        landscape of medical technology.
      </p>

      <div className="relative mx-auto max-w-md py-6">
        <Input
          type="text"
          placeholder="Search device, company..."
          className="bg-muted-foreground/10 focus:ring-primary w-full rounded-full border py-6 pr-12 pl-8 text-base shadow-sm backdrop-blur-sm focus:border-transparent focus:ring-2"
        />
        <button className="bg-primary absolute top-1/2 right-2 -translate-y-1/2 rounded-full p-1.5 text-white">
          <Search className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
