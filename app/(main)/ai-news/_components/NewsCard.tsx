import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { CustomImage } from "@/components/CustomImage";
import { formatBlogDate } from "@/lib/utils";
import { News } from "@/types/news.types";

type NewsCardProps = {
  news: News;
};

export default function NewsCard({
  news: { featured_image_url, published_date, title, description_preview },
}: NewsCardProps) {
  return (
    <div className="relative mb-4 flex flex-col overflow-hidden rounded-lg">
      <div className="relative aspect-[16/9] w-full">
        <CustomImage
          src={featured_image_url}
          alt={title}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col gap-2 pt-4">
        <p className="text-muted-foreground text-xs">{formatBlogDate(published_date)}</p>
        <h3 className="font-outfit max-w-[500px] text-base font-semibold md:text-lg">{title}</h3>
        <p className="text-muted-foreground line-clamp-2 max-w-[500px] text-sm">
          {description_preview}
        </p>
        <Link href="#" className="mt-2 flex text-sm font-medium underline">
          <span> Read More</span> <ArrowUpRight />
        </Link>
      </div>
    </div>
  );
}
