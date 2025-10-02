/* eslint-disable react/no-array-index-key */
import Image from "next/image";
import Link from "next/link";

import { CheckCircle, Crown, Folder, Wrench } from "lucide-react";

import { Badge } from "@/components/ui/badge";
export interface Tool {
  id: number;
  name: string;
  summary: string;
  logo_url: string | null;
  categories: string[];
  sub_categories: string[];
  tags: string[];
  is_verified: boolean;
  is_premium: boolean;
  result_type: "ai_tool";
  created_at: string;
}

export interface SubCategory {
  id: number;
  name: string;
  short_description: string;
  category_name: string;
  category_id: number;
  sub_category_id: number;
  tool_count: number;
  result_type: "sub_category";
  is_top_category: boolean;
  first_sub_category_id: number;
}

export interface SearchResult {
  results: (Tool | SubCategory)[];
  total_count: number;
  tools_count: number;
  categories_count: number;
  sub_categories_count: number;
  search_query: string;
  search_time_ms: number;
}

interface SearchResultsProps {
  results: (Tool | SubCategory)[];
  isLoading: boolean;
  searchQuery: string;
}
export function SearchResults({ results, isLoading, searchQuery }: SearchResultsProps) {
  if (isLoading) {
    return (
      <div className="space-y-3 p-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="bg-card flex animate-pulse items-center gap-3 rounded-xl border p-4 shadow-sm"
          >
            <div className="bg-muted h-10 w-10 rounded-lg" />
            <div className="flex-1 space-y-2">
              <div className="bg-muted h-3 w-1/3 rounded" />
              <div className="bg-muted h-3 w-2/3 rounded" />
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (searchQuery.length < 2) {
    return (
      <div className="text-muted-foreground p-6 text-center text-sm">
        Please enter at least 2 characters to see results.
      </div>
    );
  }
  if (results.length === 0) {
    return (
      <div className="text-muted-foreground p-6 text-center text-sm">
        No results for <span className="font-medium">&quot;{searchQuery}&quot;</span>
      </div>
    );
  }

  return (
    <ul className="space-y-3 p-3">
      {results.map(result => (
        <li key={`${result.result_type}-${result.id || result.name}`}>
          {result.result_type === "ai_tool" ? (
            <ToolCard tool={result as Tool} />
          ) : (
            <SubCategoryCard subCategory={result as SubCategory} />
          )}
        </li>
      ))}
    </ul>
  );
}

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={`/ai-tools/${tool.id}`}
      className="flex items-center gap-3 rounded-xl border p-3 shadow-sm transition hover:shadow-md sm:gap-4 sm:p-4"
    >
      <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-lg sm:h-12 sm:w-12">
        {tool.logo_url ? (
          <Image
            src={tool.logo_url || "/placeholder.svg"}
            alt={tool.name}
            width={32}
            height={32}
            className="h-7 w-7 rounded sm:h-8 sm:w-8"
          />
        ) : (
          <Wrench className="text-primary h-5 w-5 sm:h-6 sm:w-6" />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center gap-1 sm:gap-2">
          <h3 className="text-foreground truncate text-sm font-semibold sm:text-base">
            {tool.name}
          </h3>
          {tool.is_verified && <CheckCircle className="h-3 w-3 text-green-500 sm:h-4 sm:w-4" />}
          {tool.is_premium && <Crown className="h-3 w-3 text-yellow-500 sm:h-4 sm:w-4" />}
        </div>
        <p className="text-muted-foreground mb-1 line-clamp-2 text-start text-xs sm:mb-2 sm:text-sm">
          {tool.summary}
        </p>
      </div>

      <div className="hidden text-right sm:block">
        <Badge variant="outline" className="py-0.5 text-[10px] sm:py-1 sm:text-xs">
          AI Tool
        </Badge>
      </div>
    </Link>
  );
}

export function SubCategoryCard({ subCategory }: { subCategory: SubCategory }) {
  return (
    <Link
      href={`/ai-tools?category=${subCategory.category_id}&subCategory=${subCategory.sub_category_id || subCategory.first_sub_category_id}`}
      className="flex items-center gap-3 rounded-xl border p-3 shadow-sm transition hover:shadow-md sm:gap-4 sm:p-4"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 sm:h-12 sm:w-12">
        <Folder className="h-4 w-4 text-green-600 sm:h-6 sm:w-6" />
      </div>

      <div className="min-w-0 flex-1">
        <div className="mb-1 flex items-center gap-1 sm:gap-2">
          <h3 className="text-foreground truncate text-sm font-semibold sm:text-base">
            {subCategory.name}
          </h3>
          {subCategory?.is_top_category && (
            <span className="inline-block rounded-full border border-yellow-400 bg-yellow-100 px-1.5 py-0.5 text-[10px] font-medium text-yellow-800 sm:px-2 sm:text-xs">
              Top
            </span>
          )}
        </div>
        <p className="text-muted-foreground mb-1 line-clamp-2 text-start text-xs sm:mb-2 sm:text-sm">
          {subCategory.short_description}
        </p>
      </div>

      <div className="hidden items-center gap-x-1 text-right sm:flex sm:gap-x-2">
        <div className="text-foreground text-xs font-medium sm:text-sm">
          {subCategory.tool_count}
        </div>
        <div className="text-muted-foreground text-[10px] sm:text-xs">Tools</div>
        <Badge variant="outline" className="mt-0.5 py-0.5 text-[10px] sm:mt-1 sm:py-1 sm:text-xs">
          Sub Category
        </Badge>
      </div>
    </Link>
  );
}
