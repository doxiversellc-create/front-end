import Image from "next/image";

import { Article } from "../page";

interface LatestArticleProps {
  article: Article;
}

export default function LatestArticle({ article }: LatestArticleProps) {
  return (
    <div className=" w-full max-w-[1200px] px-4 lg:max-h-[384px] mx-auto border-0 fade-in-50 py-0 flex flex-col md:flex-row gap-2 md:gap-12">
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
        <div className="flex items-center  gap-2 text-sm md:text-base">
          <p className="text-sm ">
            By <span className="font-bold">{article.author}</span>
          </p>
          <span className="font-bold">•</span>
          <span className="text-primary font-bold">Latest</span>
        </div>

        <h2 className="text-xl lg:text-[24px] font-outfit font-semibold pr-4">{article.title}</h2>
        <p className="text-base lg:text-lg font-inter text-muted-foreground mt-4 lg:mt-9 md:leading-relaxed">
          {article.description}
        </p>

        <div className="flex gap-1 items-center text-sm text-muted-foreground/80">
          <span className="">{article.date}</span>
          <span className="">•</span>
          <span className="">{article.timeToRead}</span>
        </div>
      </div>
    </div>
  );
}
