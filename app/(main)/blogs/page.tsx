import { Suspense } from "react";

import BlogPagination from "./_components/BlogPagination";
import HeroSection from "./_components/HeroSection";
import LatestArticle from "./_components/LatestArticle";
import { RecentArticles } from "./_components/RecentArticles";
import { allBlogArticles, ARTICLES_PER_PAGE, latestArticle } from "./_data/blog-articles";

interface BlogsPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const { page } = await searchParams;
  const currentPage = parseInt(page || "1", 10);

  const totalPages = Math.ceil(allBlogArticles.length / ARTICLES_PER_PAGE);

  const isLandingPage = !page;

  // Calculate articles to display for paginated pages
  const getCurrentArticles = () => {
    const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
    const endIndex = startIndex + ARTICLES_PER_PAGE;
    return allBlogArticles.slice(startIndex, endIndex);
  };

  const currentArticles = getCurrentArticles();

  return (
    <div className="mb-14 flex flex-col pb-20">
      <HeroSection />

      {isLandingPage ? (
        // Landing page (/blogs): Show full layout with all sections
        <>
          <LatestArticle article={latestArticle} />
          <RecentArticles articles={allBlogArticles} currentPage={0} />
          {/* <EditorsPickSection />
          <LastThreeArticles /> */}

          {/* Pagination to navigate to page 1, 2, 3 */}
          <Suspense fallback={<div>Loading pagination...</div>}>
            <BlogPagination totalPages={totalPages} currentPage={0} />
          </Suspense>
        </>
      ) : (
        // Paginated pages (/blogs?page=1, /blogs?page=2, etc.): Show simplified layout
        <>
          <RecentArticles articles={currentArticles} currentPage={currentPage} />

          {/* Pagination for navigating between pages */}
          <Suspense fallback={<div>Loading pagination...</div>}>
            <BlogPagination totalPages={totalPages} currentPage={currentPage} />
          </Suspense>
        </>
      )}
    </div>
  );
}
