import { RecentArticleCard } from "@/app/(main)/blogs/_components/ArticleCard";
import { Article } from "@/types/blogs.types";

interface RecentArticlesProps {
  articles: Article[];
  currentPage: number;
}

export function RecentArticles({ articles, currentPage }: RecentArticlesProps) {
  return (
    <section className="mx-auto my-16 w-full max-w-[1200px] space-y-9 px-4">
      <h2 className="text-2xl font-semibold">Our Recent Articles</h2>

      <div
        key={currentPage}
        className="animate-in fade-in-50 slide-in-from-bottom-4 grid grid-cols-1 gap-x-6 gap-y-16 duration-500 md:grid-cols-2 lg:grid-cols-3"
      >
        {articles.map(article => (
          <RecentArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
