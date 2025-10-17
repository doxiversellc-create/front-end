import HeroSection from "../_components/HeroSection";
import ArticleContent from "./_components/ArticleContent";
import Interactions from "./_components/Interactions";
import ShareOnSocials from "./_components/ShareOnSocials";
import WriterInfo from "./_components/WriterInfo";

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}
export default async function BlogDetailPage({}: BlogDetailPageProps) {
  return (
    <div className="mx-auto w-full max-w-[1223px]">
      <HeroSection />
      <div className="mx-auto flex w-full gap-14 px-4 lg:px-0">
        <ShareOnSocials className="hidden md:block" />
        <div className="flex w-full flex-col">
          <div className="flex w-full flex-col justify-between gap-4 border-b pb-4 md:flex-row md:items-center lg:gap-0 lg:py-5">
            <WriterInfo />
            <div className="flex w-full items-center justify-between md:w-fit">
              <Interactions />
              <ShareOnSocials className="md:hidden" />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <ArticleContent />
          </div>
        </div>
      </div>
    </div>
  );
}
