import Link from "next/link";

import { getBlogArticleDetails } from "@/actions/blogs.actions";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
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

  if (!articleDetail)
    return (
      <section className="relative px-4 md:px-6 lg:px-8">
        <div className="from-primary/25 pointer-events-none absolute top-0 left-0 -z-10 h-[60vh] w-full bg-gradient-to-b to-transparent" />
        <section className="container mx-auto flex max-w-md flex-col items-center py-24 text-center sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
          <h1 className="font-outfit mt-5 text-4xl font-medium tracking-tight md:text-6xl">
            Oops! Article Not Found
          </h1>
          <p className="text-muted-foreground mx-auto mt-6 max-w-md text-center md:max-w-xl md:text-lg lg:max-w-2xl">
            The article you&apos;re looking for might have been moved, deleted, or maybe the URL was
            mistyped.
          </p>
          <div className="mt-6 flex gap-4">
            <BackButton />
            <Button asChild>
              <Link href="/">Go Home</Link>
            </Button>
          </div>
        </section>
      </section>
    );
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
