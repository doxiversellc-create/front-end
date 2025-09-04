import HeroSection from "./_components/HeroSection";
import LatestArticle from "./_components/LatestArticle";
import { RecentArticles } from "./_components/RecentArticles";
export interface Article {
  title: string;
  author: string;
  date: string;
  description: string;
  timeToRead: string;
  image: string;
  slug: string;
}

const latestArticle: Article = {
  title: "How Artificial Intelligence is Completely Transforming the Way We Detect Diseases Early",
  author: "Brooklyn Simmons",
  date: "Feb 21, 2025",
  description:
    "AI is transforming how diseases are detected, analyzing scans and tests to identify conditions earlier than ever. This allows physicians to act faster, improve outcomes, and prevent complications before they become severe.",
  timeToRead: "5 min",
  image: "/news-1.png",
  slug: "how-artificial-intelligence-is-completely-transforming-the-way-we-detect-diseases-early",
};
const BlogsPage = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <LatestArticle article={latestArticle} />
      <RecentArticles />
    </div>
  );
};

export default BlogsPage;
