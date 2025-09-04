import Image from "next/image";
import Link from "next/link";

import { ExternalLink } from "lucide-react";

import { Article } from "../page";

interface LatestArticleProps {
  article: Article;
}

export default function LatestArticle({ article }: LatestArticleProps) {
  return (
    <div className=" w-full max-w-[1212px] lg:max-h-[384px] mx-auto border-0 fade-in-50 py-0 flex flex-col md:flex-row gap-4 md:gap-12">
      {/* Content */}
      {/* Image */}
      <div className="flex w-full md:w-1/2">
        <Image
          src={article.image}
          alt="Research Cover image"
          className="h-full w-full rounded-lg"
          width={255}
          height={166}
        />
      </div>
      <div className="flex-1 space-y-2 md:space-y-4 py-6 h-full inter w-full md:w-1/2">
        <div className="flex items-center  gap-2 text-sm">
          <p className="text-sm ">
            By <span className="font-semibold">{article.author}</span>
          </p>
          <span className="font-bold">•</span>
          <span className="text-primary font-bold">Latest</span>
        </div>

        <h2 className="text-xl lg:text-2xl font-outfit font-semibold ">{article.title}</h2>

        <p className="text-base text-muted-foreground pt-1 md:leading-relaxed">
          {article.description}
        </p>

        <div className="hidden md:flex items-center text-sm justify-between">
          <span className="text-muted-foreground">{article.date}</span>
          <Link href={"/"} className="flex underline items-center hover:text-foreground">
            Visit Site
            <ExternalLink className="size-3.5 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
