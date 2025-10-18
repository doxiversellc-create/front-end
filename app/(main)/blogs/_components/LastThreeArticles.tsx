"use client";

import { Article } from "@/types/blogs.types";
import { RecentArticleCard } from "./ArticleCard";

interface LastThreeArticlesProps {
  articles: Article[];
}
export default function LastThreeArticles({ articles }: LastThreeArticlesProps) {
  return (
    <div className="mx-auto mt-7 grid w-full max-w-[1200px] grid-cols-1 justify-between gap-6 gap-x-6 gap-y-10 px-4 md:grid-cols-2 lg:grid-cols-3">
      {articles.map(article => (
        <RecentArticleCard key={article.slug} article={article} />
      ))}
    </div>
  );
}
