import HeroSection from "@/app/(main)/blogs/_components/HeroSection";
import LatestArticleSkeleton from "@/app/(main)/blogs/_components/LatestArticleSkeleton";
import RecentArticlesSkeleton from "@/app/(main)/blogs/_components/RecentArticlesSkeleton";

const loading = () => {
  return (
    <div className="mb-14 flex flex-col pb-20">
      <HeroSection />

      <LatestArticleSkeleton />
      <RecentArticlesSkeleton />
    </div>
  );
};

export default loading;
