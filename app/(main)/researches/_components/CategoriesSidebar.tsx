import Link from "next/link";

import { Badge } from "@/components/ui/badge";

interface CategoriesSidebarProps {
  categories: string[];
}

export default function CategoriesSidebar({ categories }: CategoriesSidebarProps) {
  return (
    <div className="w-80 space-y-6">
      {/* Top Categories */}
      <h3 className="font-outfit hidden text-lg font-semibold md:text-xl lg:block">
        Top Categories
      </h3>
      <div className="hidden flex-wrap gap-3 lg:flex">
        {categories.map(category => (
          <Badge
            key={category}
            variant="secondary"
            className="bg-muted hover:bg-muted/80 text-muted-foreground text-sm font-normal"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* About Research Sources */}
      <div className="mt-12 flex flex-col gap-3 lg:mt-7 lg:gap-5">
        <h3 className="font-outfit text-xl font-semibold">About our Research Sources</h3>

        <div className="font-inter space-y-3 text-base lg:space-y-4">
          <p>
            At Doxiverse, we curate health-focused AI research from trusted journals, institutions,
            and expert contributors, carefully chosen for their credibility and relevance. Our aim
            is to provide you with access to the latest findings shaping patient care, medical
            innovation, and AI-driven healthcare solutions.
          </p>

          <p>
            We update our research library regularly to ensure you&apos;re always exploring fresh
            insights, empowering you to stay ahead in this fast-evolving field and make informed
            decisions backed by evidence and innovation.
          </p>
        </div>
        <div className="mt-4 flex items-center gap-4 text-sm">
          <Link
            href="/documents/terms-of-use"
            className="opacity-90 transition-colors hover:opacity-100"
          >
            Terms of Use
          </Link>
          <span className="text-muted-foreground/70">•</span>
          <Link
            href="/documents/privacy-policy"
            className="opacity-90 transition-colors hover:opacity-100"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
