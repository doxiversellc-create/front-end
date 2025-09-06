import Image from "next/image";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import { Article } from "../_data/blog-articles";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="animate-in fade-in-50 slide-in-from-bottom-4 overflow-hidden rounded-none border-0 py-0 duration-500">
      <CardContent className="p-0">
        <div className="flex flex-col gap-4 md:flex-row md:gap-6">
          {/* Image */}
          <Image
            src={article.image}
            alt="Research Cover image"
            className="h-[271px] w-full rounded-lg object-cover md:h-[200px] md:w-[303px]"
            width={303}
            height={200}
          />
          {/* Content */}
          <div className="font-inter flex-1 space-y-2 md:space-y-2.5">
            <div className="flex items-center justify-between gap-2 text-sm">
              <p className="text-sm">
                By <span className="font-semibold">{article.author}</span>
              </p>
            </div>

            <Link
              href={`/blogs/${article.slug}`}
              className="font-outfit hover:text-primary text-foreground font-outfit text-xl leading-tight font-semibold transition-colors duration-200 group-hover:text-blue-600 lg:text-2xl"
            >
              {article.title}
            </Link>

            <p className="text-muted-foreground pt-1 text-base md:leading-relaxed">
              {article.description}
            </p>

            <div className="text-muted-foreground flex w-full items-center gap-2">
              <span className="">{article.date}</span>
              <span>•</span>
              <span className="">{article.timeToRead}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ArticleCardTwo({ article }: ArticleCardProps) {
  return (
    <div key={article.slug} className="w-full">
      <div className="relative mt-5 h-full max-h-[260px] w-full overflow-hidden rounded-t-[18px] rounded-b-[14px]">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          width={260}
          height={260}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="font-inter mt-4 space-y-3">
        <div className="flex items-center gap-2 text-sm md:text-base">
          <p className="text-sm">
            By <span className="font-bold">{article.author}</span>
          </p>
        </div>
        <Link
          href={`/blogs/${article.slug}`}
          className="hover:text-primary text-foreground font-outfit text-lg leading-tight font-semibold transition-colors duration-200 group-hover:text-blue-600"
        >
          {article.title}
        </Link>
        <p className="text-muted-foreground font-inter text-sm leading-relaxed">
          {article.description}
        </p>
        <div className="text-muted-foreground flex w-full items-center gap-2 text-sm">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.timeToRead}</span>
        </div>
      </div>
    </div>
  );
}
