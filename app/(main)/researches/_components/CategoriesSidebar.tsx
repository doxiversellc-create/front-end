/* eslint-disable react/no-array-index-key */
import Link from "next/link";

import { ResearchesContent } from "@/types/content.types";

interface CategoriesSidebarProps {
  categories: string[];
  content: ResearchesContent;
}

export default function CategoriesSidebar({ content }: CategoriesSidebarProps) {
  return (
    <div className="w-80">
      {/* <h3 className="font-outfit hidden text-lg font-semibold md:text-xl lg:block">
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
      </div> */}

      {/* About Research Sources */}
      <div className="flex flex-col gap-3 lg:gap-5">
        <h3 className="font-outfit text-xl font-semibold">{content.research_source_title}</h3>

        <div className="font-inter space-y-3 text-base lg:space-y-4">
          {content.research_sources_description
            .slice(0, -1) // remove last character
            .split(".")
            .map((p, i) => (
              <p key={i}>{p}.</p>
            ))}
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
