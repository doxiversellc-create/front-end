import ArticleContent from "@/app/(main)/blogs/[slug]/_components/ArticleContent";
import HeroSection from "@/app/(main)/blogs/[slug]/_components/HeroSection";
import Interactions from "@/app/(main)/blogs/[slug]/_components/Interactions";
import ShareOnSocials from "@/app/(main)/blogs/[slug]/_components/ShareOnSocials";
import WriterInfo from "@/app/(main)/blogs/[slug]/_components/WriterInfo";

// Team, here we need to use the following official way to get the slug and get the blog content from the database based on the slug
// export default async function page({ params }: { params: { slug: string } }) {
export default async function page() {
  // // // const { slug } = await params;
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
