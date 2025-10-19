import Link from "next/link";

import { CustomImage } from "@/components/CustomImage";
import { formatBlogDate } from "@/lib/utils";
import { Article } from "@/types/blogs.types";

interface LatestArticleProps {
  article: Article;
}

export default function LatestArticle({ article }: LatestArticleProps) {
  return (
    <div className="fade-in-50 mx-auto flex w-full max-w-[1200px] flex-col gap-2 border-0 px-4 py-0 md:flex-row md:gap-12 lg:max-h-[384px]">
      <div className="flex w-full md:w-1/2">
        <CustomImage
          src={article.featured_image}
          alt="Research Cover image"
          className="h-full w-full rounded-lg object-cover"
          width={255}
          height={166}
        />
      </div>
      <div className="inter h-full w-full flex-1 space-y-2 py-6 md:w-1/2 md:space-y-4">
        <div className="flex items-center gap-2 text-sm md:text-base">
          {article.author && (
            <p className="text-sm">
              By{" "}
              <span className="font-semibold">
                {article.author.first_name} {article.author.last_name}
              </span>
            </p>
          )}
          <span className="font-bold">•</span>
          <span className="text-primary font-bold">Latest</span>
        </div>

        <Link
          href={`/blogs/${article.id}`}
          className="font-outfit pr-4 text-xl font-semibold lg:text-[24px]"
        >
          {article.title}
        </Link>
        <p className="font-inter text-muted-foreground mt-4 line-clamp-4 text-base md:leading-relaxed lg:mt-9 lg:text-lg">
          {article.excerpt}
        </p>

        <div className="text-muted-foreground/80 flex items-center gap-1 text-sm">
          <span>{formatBlogDate(article.publish_date)}</span>

          {/* <span className="">•</span>
          <span className="">{article.timeToRead}</span> */}
        </div>
      </div>
    </div>
  );
}
