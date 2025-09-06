import Image from "next/image";
import Link from "next/link";

import { ExternalLink, Heart } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { ResearchArticle } from "../page";

interface ResearchCardProps {
  article: ResearchArticle;
  index: number;
  isSaved: boolean;
  // onToggleSave?: (_id: number) => void;
}

export default function ResearchCard({ article, index, isSaved }: ResearchCardProps) {
  return (
    <Card
      className="animate-in fade-in-50 slide-in-from-bottom-4 overflow-hidden rounded-none border-0 py-0 duration-500"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <CardContent className="p-0">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          {/* Content */}
          <div className="font inter flex-1 space-y-2 md:space-y-2.5">
            <div className="flex items-center justify-between gap-2 text-sm">
              <p className="text-sm">
                By <span className="font-semibold">{article.author}</span>
              </p>
              <button
                className="hover:text-foreground hover:bg-muted rounded-full p-1 text-sm hover:outline"
                onClick={() => {}}
              >
                {isSaved ? (
                  <Heart fill="#2E90FA" stroke="#2E90FA" size={16} />
                ) : (
                  <Heart size={16} />
                )}
              </button>
            </div>

            <h2 className="font-outfit text-xl font-semibold lg:text-2xl">{article.title}</h2>

            <p className="text-muted-foreground pt-1 text-base md:leading-relaxed">
              {article.description}
            </p>

            <div className="hidden items-center justify-between text-sm md:flex">
              <span className="text-muted-foreground">{article.date}</span>
              <Link href={"/"} className="hover:text-foreground flex items-center underline">
                Visit Site
                <ExternalLink className="ml-1 size-3.5" />
              </Link>
            </div>
          </div>

          {/* Image */}
          <Image
            src={article.image}
            alt="Research Cover image"
            className="h-[271px] w-full rounded-lg object-cover md:h-full md:max-h-40 md:w-[255px]"
            width={255}
            height={166}
          />
          <div className="flex w-full items-center justify-between text-sm md:hidden">
            <span className="text-muted-foreground">{article.date}</span>
            <Link href={"/"} className="hover:text-foreground flex items-center underline">
              Visit Site
              <ExternalLink className="ml-1 size-3.5" />
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
