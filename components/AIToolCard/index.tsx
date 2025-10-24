import Image from "next/image";
import Link from "next/link";

import { BadgeCheck, Star } from "lucide-react";

import BookmarkButton from "@/components/AIToolCard/BookmarkButton";
import { cn } from "@/lib/utils"; // Make sure you have cn() function imported
import { Tool } from "@/types/tools.types";

interface AIToolCardProps {
  tool: Tool;
  className?: string; // Accept extra className
}

export function AIToolCard({ tool, className = "max-w-[280px]" }: AIToolCardProps) {
  return (
    <div
      key={tool.id}
      className={cn(
        "flex-none rounded-3xl shadow-xs transition-all duration-300 ease-in-out hover:shadow-md",
        className // dynamically pass max-w or other classes
      )}
    >
      {/* Tool Icon */}
      <div className="to-border h-full rounded-3xl bg-gradient-to-b from-transparent p-0.5 pr-px">
        <div className="bg-background flex h-full flex-col items-center space-y-6 rounded-[23px] p-6">
          <div className="rounded-full border-2 p-1">
            <Image
              src={tool.logo_url || "/default-tool-logo.webp"}
              alt={tool.name}
              width={100}
              height={100}
              className="size-28 rounded-full object-cover object-center lg:size-36"
            />
          </div>

          {/* Tool Info */}
          <div className="flex h-full flex-col justify-between space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex max-w-[180px] items-center justify-start space-x-1">
                <Link
                  href={`/ai-tools/${tool.id}`}
                  className="hover:text-primary font-outfit flex-1 overflow-hidden text-base font-semibold text-ellipsis whitespace-nowrap md:text-lg lg:text-xl"
                  scroll
                >
                  {tool.name}
                </Link>
                {tool.is_verified && (
                  <BadgeCheck className="h-5 w-5 flex-shrink-0 fill-green-500 text-white" />
                )}
              </div>
              <BookmarkButton
                count={tool.bookmarks_count}
                isBookmarked={tool.is_bookmarked}
                toolId={tool.id}
                isCard={true}
              />
            </div>
            <p className="font-inter md:text-md mt-4 line-clamp-2 min-h-[40px] text-sm opacity-90">
              {tool.summary}
            </p>

            <div className="flex w-full items-center justify-between">
              {/* Rating section with star and text */}
              <div className="flex items-center space-x-1">
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold">
                  {tool.average_rating?.toFixed(1) || 0}
                </span>
                <span className="text-sm text-gray-500">({tool.reviews?.length ?? 0})</span>
              </div>

              {/* 'Premium' badge */}
              {tool.is_premium && (
                <span className="text-sm font-semibold text-yellow-500">Premium</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
