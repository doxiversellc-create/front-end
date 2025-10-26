import { Metadata } from "next";
import Link from "next/link";

import { getBlogArticleDetails, getBlogArticleEngagement } from "@/actions/blogs.actions";
import BackButton from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { extractHeadingsAndContent } from "@/lib/server-utils";
import ArticleContent from "./_components/ArticleContent";
import ArticleDetailHero from "./_components/HeroSection";
import Interactions from "./_components/Interactions";
import ShareOnSocials from "./_components/ShareOnSocials";
import WriterInfo from "./_components/WriterInfo";

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const { articleDetail } = await getBlogArticleDetails({ id });

  if (!articleDetail) {
    return {
      title: "Article Not Found ",
      description: "The article you're looking for could not be found.",
    };
  }

  return {
    title: `${articleDetail.title} `,
    description: articleDetail.meta_description || articleDetail.excerpt,
    openGraph: {
      title: articleDetail.title,
      description: articleDetail.excerpt,
      images: [
        {
          url: articleDetail.featured_image || "/default-og.jpg",
          alt: articleDetail.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: articleDetail.title,
      description: articleDetail.excerpt,
      images: [articleDetail.featured_image || "/default-og.jpg"],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;

  const [articleRes, engagementRes] = await Promise.all([
    getBlogArticleDetails({ id }),
    getBlogArticleEngagement({ id }),
  ]);

  if (!articleRes.success || !articleRes.articleDetail) {
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
              <Link href="/blogs">Go to Blogs</Link>
            </Button>
          </div>
        </section>
      </section>
    );
  }

  const articleDetail = articleRes.articleDetail;
  const comments = engagementRes?.comments || [];
  const likes = engagementRes?.likes || 0;
  const { content, headings } = extractHeadingsAndContent(articleDetail.content);

  return (
    <div className="mx-auto w-full max-w-[1223px] scroll-smooth">
      <ArticleDetailHero
        title={articleDetail.title}
        excerpt={articleDetail.excerpt}
        featuredImage={articleDetail.featured_image}
      />

      <div className="mx-auto flex w-full gap-14 px-4 lg:px-0">
        <ShareOnSocials
          className="hidden md:block"
          blogId={articleDetail.id.toString()}
          blogTitle={articleDetail.title}
        />

        <div className="flex w-full flex-col">
          <div className="flex w-full flex-col justify-between gap-4 border-b pb-4 md:flex-row md:items-center lg:gap-0 lg:py-5">
            <WriterInfo
              author={articleDetail.author}
              publicationDate={articleDetail.publish_date}
            />
            <div className="flex w-full items-center justify-between md:w-fit">
              <Interactions
                articleId={articleDetail.id.toString()}
                comments={comments.length}
                likes={likes}
                isLikedByUser={articleDetail.is_liked_by_user}
              />
              <ShareOnSocials
                className="md:hidden"
                blogId={articleDetail.id.toString()}
                blogTitle={articleDetail.title}
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <ArticleContent
              headings={headings}
              processedContent={content}
              articleDetail={articleDetail}
              comments={comments}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
