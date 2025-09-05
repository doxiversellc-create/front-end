import { Article } from "../_data/blog-articles";
import { ArticleCardTwo } from "./ArticleCard";

interface RecentArticlesProps {
  articles: Article[];
  currentPage: number;
}

export function RecentArticles({ articles, currentPage }: RecentArticlesProps) {
  return (
    <section className="w-full max-w-[1200px] px-4 mx-auto my-16 space-y-9">
      <h2 className="text-2xl font-semibold">Our Recent Articles</h2>

      <div
        key={currentPage}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 animate-in fade-in-50 slide-in-from-bottom-4 duration-500"
      >
        {articles.map(article => (
          <ArticleCardTwo key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
