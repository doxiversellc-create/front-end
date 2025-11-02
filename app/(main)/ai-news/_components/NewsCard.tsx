import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { CustomImage } from "@/components/CustomImage";
import { cn, formatBlogDate } from "@/lib/utils";
import { News } from "@/types/news.types";

type NewsCardProps = {
  news: News;
};

export default function NewsCard({
  news: { id, featured_image_url, published_date, title, description_preview },
}: NewsCardProps) {
  const hasImage = !!featured_image_url;

  return (
    <div className={cn("relative mb-4 flex flex-col overflow-hidden")}>
      {hasImage && (
        <div className="relative aspect-[16/9] w-full">
          <CustomImage
            src={featured_image_url}
            alt={title}
            fill
            className="rounded-lg object-cover"
          />
        </div>
      )}

      <div className={cn("flex flex-col gap-2 pt-4", !hasImage && "gap-3 pt-0")}>
        <p className="text-muted-foreground text-xs">{formatBlogDate(published_date)}</p>

        <h3
          className={cn(
            "font-outfit max-w-[500px] font-semibold",
            hasImage ? "text-base md:text-lg" : "text-xl leading-snug md:text-2xl"
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "text-muted-foreground max-w-[600px] text-sm leading-relaxed",
            hasImage ? "line-clamp-2" : "line-clamp-none"
          )}
        >
          {description_preview}
        </p>

        <Link
          href={`/ai-news/${id}`}
          className="hover:text-primary mt-2 flex text-sm font-medium underline"
        >
          <span>Read More</span>
          <ArrowUpRight className="ml-1 size-4" />
        </Link>
      </div>
    </div>
  );
}
