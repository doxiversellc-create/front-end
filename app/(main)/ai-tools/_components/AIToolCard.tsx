import Image from "next/image";
import Link from "next/link";

import { BadgeCheck, Bookmark, Star } from "lucide-react";

import { Tool } from "./../_components/ClientToolsPage";

interface AIToolCardProps {
  tool: Tool;
}

export function AIToolCard({ tool }: AIToolCardProps) {
  return (
    <div
      key={tool.id}
      className="max-w-[280px] flex-none rounded-2xl shadow transition-all duration-300 ease-in-out hover:shadow-lg"
    >
      {/* Tool Icon */}
      <div className="to-border h-full rounded-2xl bg-gradient-to-b from-black/0 p-[1px]">
        <div className="bg-background flex h-full flex-col items-center space-y-6 rounded-2xl p-6">
          <Image
            src={tool.logo_url || "/default-tool-logo.webp"}
            alt={tool.name}
            width={100}
            height={100}
            className="size-28 rounded-full lg:size-36"
          />

          {/* Tool Info */}
          <div className="flex h-full flex-col justify-between space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center justify-start space-x-1">
                {/* Wrap the Link and the BadgeCheck in a new div with no-wrap */}
                <div className="flex items-center whitespace-nowrap">
                  <Link
                    href={`/ai-tools/${tool.id}`}
                    className="hover:text-primary font-outfit text-base font-semibold md:text-lg lg:text-xl"
                  >
                    {tool.name}
                  </Link>
                  {tool.is_verified && <BadgeCheck className="h-5 w-5 fill-green-500 text-white" />}
                </div>
              </div>
              <Bookmark className="size-5 cursor-pointer" />
            </div>
            <p className="font-inter md:text-md mt-4 line-clamp-2 min-h-[40px] text-sm opacity-90">
              {tool.summary}
            </p>

            <div className="flex w-full items-center justify-between">
              {/* Rating section with star and text */}
              <div className="flex items-center space-x-1">
                <Star className="size-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-semibold">{tool.average_rating}</span>
                <span className="text-sm text-gray-500">(5k+)</span>
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
