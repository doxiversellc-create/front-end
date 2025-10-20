/* eslint-disable react/no-array-index-key */
import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight, BadgeCheck, StarIcon } from "lucide-react";

import { GradientSeparator } from "@/components/GradientSeparator";
import { serverFetchPublic } from "@/lib/api/server";
import { cn } from "@/lib/utils";
import BookmarkButton from "../_components/BookmarkButton";
import { Tool } from "../_components/ClientToolsPage";
import ReviewButton from "../_components/ReviewButton";
import Reviews from "../_components/Reviews";
import VideoPlayer from "../_components/VideoPlayer";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tool = await serverFetchPublic<SingleTool>(`/ai-tools/${id}`);

  return {
    title: tool?.name || "AI Tool Detail",
    description: tool?.description || "Discover Top AI Tools",
  };
}
interface Feature {
  id: number;
  feature_title: string;
  choice: string;
  custom_text: string;
}
interface RelatedTool {
  id: number;
  name: string;
  logo_url: string;
}
interface SingleTool extends Tool {
  video_link: string;
  features: Feature[];
  original_site_url: string;
  related_tools: RelatedTool[];
  is_bookmarked: boolean;
  bookmarks_count: number;
  bookmark_id: number | null;
}
export default async function AiDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const tool = await serverFetchPublic<SingleTool>(`/ai-tools/${id}`);
  const vendorUrl = encodeURI(`/vendors?tool_name=${tool?.name || ""}`);
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-20">
        <div className="w-full py-8">
          <div className="mx-auto flex flex-col items-center justify-between gap-10 md:flex-row">
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              {/* Logo + Title + Description */}
              <div className="flex items-center gap-3">
                <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl border-2">
                  <Image
                    src={tool?.logo_url ? `${tool?.logo_url}` : "/default-tool-logo.webp"}
                    alt={tool?.name || "logo"}
                    width={90}
                    height={90}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="font-outfit text-foreground flex items-center gap-2 text-3xl font-semibold">
                    <span>{tool?.name}</span>
                    {tool?.is_verified && (
                      <BadgeCheck className="h-6 w-6 fill-green-500 text-white" />
                    )}
                  </h1>
                </div>
              </div>
              <p className="text-muted-foreground max-w-xl text-sm leading-relaxed">
                {tool?.summary}
              </p>
              {/* Categories */}
              <div className="flex items-center">
                <span className="md:text-md text-foreground block pr-4 text-sm font-semibold">
                  Categories:
                </span>
                <div className="flex flex-wrap gap-2">
                  {tool?.categories.map(category => (
                    <div key={category.id} className="flex flex-wrap gap-2">
                      {/* Category */}
                      <span className="bg-secondary text-secondary-foreground/80 hover:bg-secondary/80 rounded-full px-3 py-1 text-xs font-medium transition-colors md:text-sm">
                        {category.name}
                      </span>

                      {/* Subcategories */}
                      {category.sub_categories?.map(sub => (
                        <span
                          key={sub.id}
                          className="bg-muted text-muted-foreground hover:bg-muted/80 rounded-full px-3 py-1 text-xs font-medium transition-colors md:text-sm"
                        >
                          {sub.name}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="hidden space-y-4 pt-6 md:block">
                <div className="flex items-center gap-4">
                  <Link
                    href={tool?.original_site_url || ""}
                    className="bg-primary flex items-center justify-center space-x-2 rounded-full p-2 pl-5 text-white md:p-3"
                  >
                    <span> Visit Site </span>
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href={vendorUrl}
                    className="outline-primary flex items-center justify-center space-x-2 rounded-full p-2 pl-5 outline-2 md:p-3"
                  >
                    <span> Claim tool </span>
                  </Link>

                  <BookmarkButton
                    toolId={tool?.id as number}
                    count={tool?.bookmarks_count || 0}
                    isBookmarked={tool?.is_bookmarked || false}
                  />
                </div>
              </div>
            </div>
            {/* Right Info Section */}
            <div className="w-full space-y-4 sm:w-auto">
              <div className="border-border/60 overflow-x-auto rounded-xl border">
                <table className="w-full text-sm md:w-96">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-foreground rounded-tl-lg px-4 py-3 text-left font-semibold">
                        Feature
                      </th>
                      <th className="text-foreground rounded-tr-lg px-4 py-3 text-left font-semibold">
                        Invoice
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {tool?.features.map((feature, index) => (
                      <tr key={feature.id} className="border-b">
                        <td
                          className={`text-foreground px-4 py-3 ${
                            index === tool?.features.length - 1 ? "rounded-bl-xl" : ""
                          }`}
                        >
                          {feature.feature_title}
                        </td>
                        <td
                          className={`text-foreground border-l px-4 py-3 ${
                            index === tool?.features.length - 1 ? "rounded-br-xl" : ""
                          }`}
                        >
                          {feature.choice === "custom" ? feature.custom_text : feature.choice}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="block space-y-4 pt-6 md:hidden">
            <div className="flex w-full flex-wrap items-center gap-4">
              <Link
                href={tool?.original_site_url || ""}
                className="bg-primary flex items-center justify-center space-x-2 rounded-full p-2 px-4 text-white max-md:text-sm md:p-3 md:px-3"
              >
                <span> Visit Site </span>
                <ArrowUpRight className="h-5 w-5" />
              </Link>
              <Link
                href={vendorUrl}
                className="outline-primary/70 flex items-center justify-center space-x-2 rounded-full p-2 px-4 outline-2 max-md:text-sm md:p-3 md:px-3"
              >
                <span> Claim tool </span>
              </Link>
              <BookmarkButton
                toolId={tool?.id as number}
                count={tool?.bookmarks_count || 0}
                isBookmarked={tool?.is_bookmarked || false}
              />
            </div>
          </div>
        </div>
        <div className="bg-secondary-foreground/10 mb-8 h-[2px] w-full" />
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Hero Section */}
            <div
              className="space-y-4"
              dangerouslySetInnerHTML={{ __html: tool?.description || "" }}
            />

            {/* Embedded Video */}
            {tool?.video_link && (
              <div className="space-y-4">
                <h3 className="font-outfit text-foreground text-lg font-semibold">
                  Embedded Video
                </h3>
                <VideoPlayer height="h-48 sm:h-96 " embedUrl={tool?.video_link} />
              </div>
            )}
            {/* Ratings and Reviews */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-outfit text-foreground text-lg font-semibold">
                  Ratings and Reviews
                </h3>
              </div>

              {tool?.reviews && tool.reviews.length > 0 ? (
                <>
                  {/* Rating + Submit Review Button */}
                  <div className="flex w-2/4 flex-col items-start justify-between gap-8 sm:w-full sm:flex-row sm:items-center sm:gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-foreground border-t-2 pt-4 text-3xl font-bold">
                        {tool?.average_rating}
                      </span>
                      <div className="flex flex-col items-start gap-4">
                        <p className="text-foreground font-outfit">Overall Rating</p>
                        <div className="flex items-center gap-1 border-l-2 pl-4">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <StarIcon
                              key={index}
                              className={cn(
                                "text-primary-foreground size-5",
                                index < (tool?.average_rating || 0) ? "fill-primary" : "fill-muted"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <ReviewButton toolId={id} />
                  </div>

                  <GradientSeparator
                    width="w-full"
                    height="h-[1px]"
                    color="via-secondary-foreground/10"
                    className="my-8 mt-20"
                  />

                  <Reviews reviews={tool?.reviews || []} />
                </>
              ) : (
                <div className="flex flex-col items-center justify-center gap-4 py-10 text-center">
                  <p className="text-foreground text-lg font-medium">No reviews yet</p>
                  <ReviewButton toolId={id} />
                </div>
              )}
            </div>
          </div>
          {/* Sidebar */}
          <div className="hidden space-y-6 lg:block">
            {/* Discover More */}
            {tool?.related_tools && tool?.related_tools.length > 0 && (
              <div className="container mx-auto px-2 md:px-4">
                <p className="font-outfit text-foreground mb-6 pl-6 text-xl font-semibold">
                  Discover More
                </p>
                <div className="flex flex-col gap-4 pl-6">
                  {tool?.related_tools.map((item, index) => (
                    <div key={item.id}>
                      <Link href={`/ai-tools/${item.id}`} key={item.id}>
                        <div className="mb-3 flex cursor-pointer items-center gap-4 text-center">
                          <div className="flex items-center justify-center">
                            <div className="relative h-4 w-4 md:h-12 md:w-12">
                              <Image
                                src={item.logo_url || "/default-tool-logo.webp"}
                                alt={item.name || "logo"}
                                width={56}
                                height={56}
                                className="h-full w-full rounded-xl object-cover"
                              />
                            </div>
                          </div>
                          <h3 className="text-md text-foreground font-semibold">{item.name}</h3>
                        </div>
                      </Link>
                      {index + 1 !== tool.related_tools.length && (
                        <GradientSeparator
                          width="w-full"
                          height="h-[1px]"
                          color="via-secondary-foreground/10"
                          className="mt-3"
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="space-y-4 pl-12">
              {tool?.tags && tool?.tags?.length > 0 && (
                <>
                  <h3 className="font-outfit text-foreground text-lg font-semibold">#Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {tool.tags.map(tag => (
                      <span
                        key={tag}
                        className="bg-secondary text-secondary-foreground inline-block rounded-full px-3 py-1 text-sm font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
