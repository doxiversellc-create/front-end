"use client";

import { allBlogArticles } from "../_data/blog-articles";
import { ArticleCardTwo } from "./ArticleCard";

export default function LastThreeArticles() {
  const lastThreeArticles = allBlogArticles.slice(0, 3);

  return (
    <div className="grid grid-cols-1 space-6 md:grid-cols-2 lg:grid-cols-3 mt-7 space-x-6 space-y-10 justify-between w-full max-w-[1200px] mx-auto px-4">
      {lastThreeArticles.map(article => (
        <ArticleCardTwo key={article.slug} article={article} />
      ))}
    </div>
  );
}
