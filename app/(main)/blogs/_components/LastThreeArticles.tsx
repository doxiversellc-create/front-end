"use client";

import { allBlogArticles } from "../_data/blog-articles";
import { ArticleCardTwo } from "./ArticleCard";

export default function LastThreeArticles() {
  const lastThreeArticles = allBlogArticles.slice(0, 3);

  return (
    <div className="mx-auto mt-7 grid w-full max-w-[1200px] grid-cols-1 justify-between gap-6 gap-x-6 gap-y-10 px-4 md:grid-cols-2 lg:grid-cols-3">
      {lastThreeArticles.map(article => (
        <ArticleCardTwo key={article.slug} article={article} />
      ))}
    </div>
  );
}
