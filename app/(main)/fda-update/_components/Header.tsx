import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function Hero() {
  return (
    <section className="py-16 pb-0 text-left md:text-center space-y-6">
      <span className="text-sm px-3 py-2 font-semibold rounded-full bg-background">
        FDA AI Updates
      </span>
      <h1 className="mt-4 text-4xl md:text-7xl font-semibold tracking-tight font-outfit">
        FDA AI Insights & Approvals
      </h1>
      <p className="text-base md:text-lg max-w-2xl mx-auto">
        Stay ahead in healthcare innovation with the latest FDA-approved AI tools and updates.
        Explore expert insights, regulatory trends, and practical resources to navigate the evolving
        landscape of medical technology.
      </p>

      <div className="relative max-w-md mx-auto py-6 ">
        <Input
          type="text"
          placeholder="Search device, company..."
          className="w-full pl-8 pr-12 text-base py-6 bg-muted-foreground/10  backdrop-blur-sm border rounded-full shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <button className="absolute rounded-full bg-primary right-2 top-1/2 -translate-y-1/2 p-1.5 text-white">
          <Search className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
