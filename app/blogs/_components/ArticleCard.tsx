import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Article } from "../page";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Card className="overflow-hidden animate-in border-0 fade-in-50 py-0 rounded-none slide-in-from-bottom-4 duration-500">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 ">
          {/* Image */}
          <Image
            src={article.image}
            alt="Research Cover image"
            className="h-[271px] md:h-[200px] object-cover w-full md:w-[303px] rounded-lg"
            width={303}
            height={200}
          />
          {/* Content */}
          <div className="flex-1 space-y-2 md:space-y-2.5 font inter">
            <div className="flex items-center justify-between gap-2 text-sm">
              <p className="text-sm ">
                By <span className="font-semibold">{article.author}</span>
              </p>
            </div>

            <Link
              href={`/blogs/${article.slug}`}
              className="text-xl lg:text-2xl font-outfit font-semibold hover:text-primary text-foreground font-outfit leading-tight group-hover:text-blue-600 transition-colors duration-200"
            >
              {article.title}
            </Link>

            <p className="text-base text-muted-foreground pt-1 md:leading-relaxed">
              {article.description}
            </p>

            <div className="text-muted-foreground flex items-center gap-2 w-full">
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
    <div key={article.slug} className="">
      <div className="relative w-full h-full max-h-[260px] overflow-hidden rounded-t-[18px] rounded-b-[14px]">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          width={260}
          height={260}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="space-y-3 mt-4 font-inter">
        <div className="flex items-center  gap-2 text-sm md:text-base">
          <p className="text-sm ">
            By <span className="font-bold">{article.author}</span>
          </p>
        </div>
        <Link
          href={`/blogs/${article.slug}`}
          className="text-lg font-semibold hover:text-primary text-foreground font-outfit leading-tight group-hover:text-blue-600 transition-colors duration-200"
        >
          {article.title}
        </Link>
        <p className="text-sm text-muted-foreground font-inter leading-relaxed">
          {article.description}
        </p>
        <div className="flex items-center gap-2 text-sm text-muted-foreground w-full">
          <span>{article.date}</span>
          <span>•</span>
          <span>{article.timeToRead}</span>
        </div>
      </div>
    </div>
  );
}
