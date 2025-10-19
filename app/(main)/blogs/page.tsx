import { getBlogArticles } from "@/actions/blogs.actions";
import BlogPagination from "./_components/BlogPagination";
import HeroSection from "./_components/HeroSection";
import LatestArticle from "./_components/LatestArticle";
import { RecentArticles } from "./_components/RecentArticles";

interface BlogsPageProps {
  searchParams: Promise<{ page?: string }>;
}

const ARTICLES_PER_PAGE = 20;

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const { page } = await searchParams;
  const currentPage = parseInt(page || "1", 10);

  const { articles, count } = await getBlogArticles({ page });

  const totalPages = Math.ceil((count || 0) / ARTICLES_PER_PAGE);

  const isLandingPage = !page;

  if (articles)
    return (
      <div className="mb-14 flex flex-col pb-20">
        <HeroSection />

        {isLandingPage ? (
          <>
            <LatestArticle article={articles[0]} />
            <RecentArticles articles={articles.slice(1)} currentPage={0} />
            {/* <EditorsPickSection />
          <LastThreeArticles /> */}

            <BlogPagination totalPages={totalPages} currentPage={0} />
          </>
        ) : (
          <>
            <RecentArticles articles={articles} currentPage={currentPage} />

            <BlogPagination totalPages={totalPages} currentPage={currentPage} />
          </>
        )}
      </div>
    );
}
