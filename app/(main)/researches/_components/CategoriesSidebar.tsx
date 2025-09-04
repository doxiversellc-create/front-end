import Link from "next/link";

import { Badge } from "@/components/ui/badge";

interface CategoriesSidebarProps {
  categories: string[];
}

export default function CategoriesSidebar({ categories }: CategoriesSidebarProps) {
  return (
    <div className="w-80 space-y-6">
      {/* Top Categories */}
      <h3 className="text-lg font-semibold font-outfit md:text-xl hidden lg:block">
        Top Categories
      </h3>
      <div className="hidden lg:flex flex-wrap gap-3">
        {categories.map(category => (
          <Badge
            key={category}
            variant="secondary"
            className="text-sm font-normal bg-muted hover:bg-muted/80 text-muted-foreground"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* About Research Sources */}
      <div className="flex flex-col mt-12 lg:mt-7 gap-3 lg:gap-5 ">
        <h3 className="text-xl font-semibold font-outfit">About our Research Sources</h3>

        <div className="space-y-3 lg:space-y-4 text-base font-inter">
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
        <div className="flex items-center gap-4 text-sm mt-4">
          <Link
            href="/documents/terms-of-use"
            className="opacity-90 hover:opacity-100 transition-colors"
          >
            Terms of Use
          </Link>
          <span className="text-muted-foreground/70">•</span>
          <Link
            href="/documents/privacy-policy"
            className="opacity-90 hover:opacity-100 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
