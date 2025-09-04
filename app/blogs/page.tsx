import HeroSection from "./_components/HeroSection";
import LatestArticle from "./_components/LatestArticle";
export interface Article {
  title: string;
  author: string;
  date: string;
  content: string;
  description: string;
  timeToRead: string;
  image: string;
  slug: string;
}

const latestArticle: Article = {
  title: "How Artificial Intelligence is Completely Transforming the Way We Detect Diseases Early",
  author: "Brooklyn Simmons",
  date: "2025-01-01",
  description:
    "AI is transforming how diseases are detected, analyzing scans and tests to identify conditions earlier than ever. This allows physicians to act faster, improve outcomes, and prevent complications before they become severe.",
  content: "This is the content of the latest article",
  timeToRead: "5 min",
  image: "/news-1.png",
  slug: "how-artificial-intelligence-is-completely-transforming-the-way-we-detect-diseases-early",
};
const BlogsPage = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <LatestArticle article={latestArticle} />
    </div>
  );
};

export default BlogsPage;
