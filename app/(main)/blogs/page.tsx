import { Suspense } from "react";
import BlogPagination from "./_components/BlogPagination";
import EditorsPickSection from "./_components/EditorsPickSection";
import HeroSection from "./_components/HeroSection";
import LastThreeArticles from "./_components/LastThreeArticles";
import LatestArticle from "./_components/LatestArticle";
import { RecentArticles } from "./_components/RecentArticles";
import { allBlogArticles, ARTICLES_PER_PAGE, latestArticle } from "./_data/blog-articles";

interface BlogsPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || "1", 10);
  const totalPages = Math.ceil(allBlogArticles.length / ARTICLES_PER_PAGE);

  // Calculate articles to display based on current page
  const getCurrentArticles = () => {
    if (currentPage === 1) {
      // Page 1: Show all available articles
      return allBlogArticles;
    } else {
      // Pages 2+: Show only that page's specific articles
      const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
      const endIndex = startIndex + ARTICLES_PER_PAGE;
      return allBlogArticles.slice(startIndex, endIndex);
    }
  };

  const currentArticles = getCurrentArticles();

  return (
    <div className="flex flex-col pb-20 mb-14">
      <HeroSection />

      {currentPage === 1 ? (
        // Page 1: Show full layout with all sections
        <>
          <LatestArticle article={latestArticle} />
          <RecentArticles articles={currentArticles} currentPage={currentPage} />
          <EditorsPickSection />
          <LastThreeArticles />
        </>
      ) : (
        // Pages 2+: Show only hero and paginated articles
        <RecentArticles articles={currentArticles} currentPage={currentPage} />
      )}

      {/* Client-side pagination component at the bottom */}
      <Suspense fallback={<div>Loading pagination...</div>}>
        <BlogPagination totalPages={totalPages} currentPage={currentPage} />
      </Suspense>
    </div>
  );
}
