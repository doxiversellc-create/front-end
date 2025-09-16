/* eslint-disable react/no-array-index-key */
import Image from "next/image";

import { ArrowUpRight, BadgeCheck, Bookmark, ChevronDown, StarIcon } from "lucide-react";

import { GradientSeparator } from "@/components/GradientSeparator";
import { Button } from "@/components/ui/button";
import { fetcher } from "@/lib/fetcher";
import { cn } from "@/lib/utils";
import { Tool } from "../_components/ClientToolsPage";
import Reviews from "../_components/Reviews";
import VideoPlayer from "../_components/VideoPlayer";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const { data: tool } = await fetcher<SingleTool>(`/ai-tools/${id}`);

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
interface SingleTool extends Tool {
  video_link: string;
  features: Feature[];
}
export default async function AiDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const { data: tool } = await fetcher<SingleTool>(`/ai-tools/${id}`);

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-20">
        <div className="w-full py-8">
          <div className="mx-auto flex flex-col items-center justify-between gap-10 md:flex-row">
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              {/* Logo + Title + Description */}
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl">
                  {tool?.logo_url ? (
                    <Image
                      src={tool?.logo_url || "/default-tool-logo.webp"}
                      alt={tool?.name}
                      width={90}
                      height={90}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="bg-primary text-secondary-foreground flex h-10 w-10 items-center justify-center rounded-full text-sm font-medium">
                      {tool?.name?.charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>
                <div>
                  <h1 className="font-outfit text-foreground flex items-center gap-2 text-2xl font-semibold">
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
              {/* <div dangerouslySetInnerHTML={{ __html: tool?.description || "" }} /> */}
              {/* {} */}
              {/* Categories */}
              <div className="flex items-center">
                <span className="md:text-md text-foreground block pr-4 text-sm font-semibold">
                  Categories:
                </span>
                <div className="flex flex-wrap gap-2">
                  {tool?.categories.map(category => (
                    <span
                      key={category.id}
                      className="bg-secondary text-secondary-foreground/80 hover:bg-secondary/80 rounded-full px-3 py-1 text-xs font-medium transition-colors md:text-sm"
                    >
                      {category.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="hidden space-y-4 pt-6 md:block">
                <div className="flex items-center gap-4">
                  <Button className="bg-primary rounded-full px-3 py-5 pl-5">
                    <span> Visit Site </span>
                    <ArrowUpRight />
                  </Button>
                  <Button variant="outline" className="rounded-full px-3 py-5">
                    <Bookmark className="h-4 w-5" />
                  </Button>
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
            <div className="flex items-center gap-4">
              <Button className="bg-primary rounded-full px-3 py-4 pl-6">
                <span> Visit Site </span>
                <ArrowUpRight />
              </Button>
              <Button variant="outline" className="rounded-full px-3 py-5">
                <Bookmark className="h-4 w-5" />
              </Button>
            </div>
          </div>
        </div>
        {/* <GradientSeparator
          width="w-full"
          height="h-[1px]"
          color="via-secondary-foreground/10"
          className="my-8"
        /> */}
        <div className="bg-secondary-foreground/10 mb-8 h-[2px] w-full" />
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-8 lg:col-span-2">
            {/* Hero Section */}
            <div
              className="space-y-4"
              dangerouslySetInnerHTML={{ __html: tool?.description || "" }}
            />
            {/* <div className="space-y-4">
            <Description content={tool?.description} /> 
           </div> */}
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
                <Button className="w-full cursor-pointer rounded-full p-5 text-sm sm:w-auto">
                  Submit Review
                </Button>
              </div>
              <GradientSeparator
                width="w-full"
                height="h-[1px]"
                color="via-secondary-foreground/10"
                className="my-8 mt-20"
              />
              <Reviews reviews={tool?.reviews || []} />
              <div className="flex justify-center">
                <Button variant="outline" className="flex cursor-pointer rounded-full text-sm">
                  <span>Load More</span> <ChevronDown />
                </Button>
              </div>
            </div>
          </div>
          {/* Sidebar */}
          <div className="hidden space-y-6 lg:block">
            {/* Discover More */}
            <div className="container mx-auto px-2 md:px-4">
              <p className="font-outfit text-foreground mb-6 pl-6 text-xl font-semibold">
                Discover More
              </p>
              {/* <div className="flex flex-col gap-4 pl-6">
              //TODO: ADD A DISCOVER MORE SECTION
                {data.discoverMore.map((item, index) => (
                  <div key={item.link}>
                    <Link href={item.link} key={item.link}>
                      <div className="mb-3 flex cursor-pointer items-center gap-4 text-center">
                        <div className="flex items-center justify-center">
                          <div className="relative h-4 w-4 md:h-12 md:w-12">
                            <Image
                              src={item.icon}
                              alt={item.title}
                              width={56}
                              height={56}
                              className="h-full w-full rounded-xl object-cover"
                            />
                          </div>
                        </div>
                        <h3 className="text-md text-foreground font-semibold">{item.title}</h3>
                      </div>
                    </Link>
                    {index + 1 !== data.discoverMore.length && (
                      <GradientSeparator
                        width="w-full"
                        height="h-[1px]"
                        color="via-secondary-foreground/10"
                        className="mt-3"
                      />
                    )}
                  </div>
                ))}
              </div> */}
            </div>

            {/* Tags */}
            <div className="space-y-4 pl-12">
              <h3 className="font-outfit text-foreground text-lg font-semibold">#Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tool?.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-secondary text-secondary-foreground inline-block rounded-full px-3 py-1 text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
