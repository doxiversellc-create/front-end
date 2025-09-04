import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { Article } from "../page";

interface ArticleCardTwoProps {
  article: Article;
}

export default function ArticleCardTwo({ article }: ArticleCardTwoProps) {
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

            <h2 className="text-xl lg:text-2xl font-outfit font-semibold ">{article.title}</h2>

            <p className="text-base text-muted-foreground pt-1 md:leading-relaxed">
              {article.description}
            </p>

            <div className="text-muted-foreground flex items-center gap-2">
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
