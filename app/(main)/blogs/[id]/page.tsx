import { getBlogArticleDetails } from "@/actions/blogs.actions";
import ArticleContent from "./_components/ArticleContent";
import ArticleDetailHero from "./_components/HeroSection";
import Interactions from "./_components/Interactions";
import ShareOnSocials from "./_components/ShareOnSocials";
import WriterInfo from "./_components/WriterInfo";

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}
export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const { articleDetail } = await getBlogArticleDetails({ id });

  if (articleDetail)
    return (
      <div className="mx-auto w-full max-w-[1223px]">
        <ArticleDetailHero
          title={articleDetail.title}
          excerpt={articleDetail.excerpt}
          featuredImage={articleDetail.featured_image}
        />
        <div className="mx-auto flex w-full gap-14 px-4 lg:px-0">
          <ShareOnSocials className="hidden md:block" />
          <div className="flex w-full flex-col">
            <div className="flex w-full flex-col justify-between gap-4 border-b pb-4 md:flex-row md:items-center lg:gap-0 lg:py-5">
              <WriterInfo
                author={articleDetail.author}
                publicationDate={articleDetail.publish_date}
              />
              <div className="flex w-full items-center justify-between md:w-fit">
                <Interactions
                  comments={articleDetail.comments_count}
                  likes={articleDetail.likes_count}
                />
                <ShareOnSocials className="md:hidden" />
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <ArticleContent articleDetail={articleDetail} />
            </div>
          </div>
        </div>
      </div>
    );
}
