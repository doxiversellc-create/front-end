import Image from "next/image";
import Link from "next/link";

import { ExternalLink, Heart } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { ResearchArticle } from "../page";

interface ResearchCardProps {
  article: ResearchArticle;
  index: number;
  isSaved: boolean;
  onToggleSave?: (_id: number) => void;
}

export default function ResearchCard({ article, index, isSaved, onToggleSave }: ResearchCardProps) {
  return (
    <Card
      className="overflow-hidden animate-in border-0 fade-in-50 py-0 rounded-none slide-in-from-bottom-4 duration-500"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
          {/* Content */}
          <div className="flex-1 space-y-2 md:space-y-2.5 font inter">
            <div className="flex items-center justify-between gap-2 text-sm">
              <p className="text-sm ">
                By <span className="font-semibold">{article.author}</span>
              </p>
              <button
                className="text-sm hover:text-foreground p-1 hover:bg-muted rounded-full hover:outline"
                onClick={() => onToggleSave?.(article.id)}
              >
                {isSaved ? (
                  <Heart fill="#2E90FA" stroke="#2E90FA" size={16} />
                ) : (
                  <Heart size={16} />
                )}
              </button>
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

          {/* Image */}
          <Image
            src={article.image}
            alt="Research Cover image"
            className="h-full h-[271px] md:max-h-40 object-cover w-full md:w-[255px] md:h-full object-contain rounded-lg"
            width={255}
            height={166}
          />
          <div className="flex md:hidden w-full items-center text-sm justify-between">
            <span className="text-muted-foreground">{article.date}</span>
            <Link href={"/"} className="flex underline items-center hover:text-foreground">
              Visit Site
              <ExternalLink className="size-3.5 ml-1" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
