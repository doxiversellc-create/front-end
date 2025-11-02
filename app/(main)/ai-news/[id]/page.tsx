import { Metadata } from "next";
import Link from "next/link";

import { getNewsDetailAction } from "@/actions/news.actions";
import BackButton from "@/components/BackButton";
import { CustomImage } from "@/components/CustomImage";
import { Button } from "@/components/ui/button";
import { extractHeadingsAndContent } from "@/lib/server-utils";
import { formatBlogDate } from "@/lib/utils";
import NewsContent from "./_components/NewsContent";
import ShareNews from "./_components/ShareNews";

interface NewsDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const result = await getNewsDetailAction({ id });

  if (!result.success || !result.newsDetail) {
    return {
      title: "Article Not Found ",
      description:
        "The article you are looking for might have been moved, deleted, or does not exist.",
    };
  }

  const news = result.newsDetail;

  return {
    title: `${news.title}`,
    description: news.description.slice(0, 160),
    openGraph: {
      title: news.title,
      description: news.description.slice(0, 200),
      images: [
        {
          url: news.featured_image_url,
          width: 1200,
          height: 630,
          alt: `${news.title} banner image`,
        },
      ],
      type: "article",
      publishedTime: news.published_date,
    },
    twitter: {
      card: "summary_large_image",
      title: news.title,
      description: news.description.slice(0, 200),
      images: [news.featured_image_url],
    },
  };
}
const NewsDetailPage = async ({ params }: NewsDetailPageProps) => {
  const { id } = await params;

  const newsResult = await getNewsDetailAction({ id });

  if (!newsResult.success || !newsResult.newsDetail) {
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

  const newsDetail = newsResult.newsDetail;

  const { content, headings } = extractHeadingsAndContent(newsDetail.description);
  const hasImage = newsDetail.featured_image_url && newsDetail.featured_image_url != "";

  return (
    <div className="mx-auto w-full max-w-[1223px] scroll-smooth">
      {hasImage && (
        <div className="bg-background2 relative mt-7 w-full px-4 py-5 lg:px-0 lg:py-10">
          <div className="flex w-full flex-col items-center justify-center gap-3 lg:gap-5">
            <CustomImage
              className="z-20 h-full max-h-[664px] w-full rounded-xl object-cover lg:mt-3 lg:rounded-3xl"
              src={newsDetail.featured_image_url}
              alt={`${newsDetail.title} banner image`}
              width={1223}
              height={1080}
            />
          </div>
        </div>
      )}
      <div className="mx-auto flex w-full gap-14 px-4 lg:px-0">
        <ShareNews
          className="hidden md:block"
          newsId={newsDetail.id.toString()}
          newsTitle={newsDetail.title}
        />

        <div className="flex w-full flex-col">
          <div className="flex w-full flex-col justify-between gap-4 border-b pb-4 md:flex-row md:items-center lg:gap-0 lg:py-5">
            <div className="flex items-center gap-3">
              <div className="flex flex-col gap-1">
                <h1 className="font-outfit text-2xl font-semibold md:text-3xl">
                  {newsDetail.title}
                </h1>

                <p className="font-inter text-muted-foreground text-sm">
                  {formatBlogDate(newsDetail.published_date)}
                </p>
              </div>
            </div>

            <div className="flex w-full items-center justify-between md:w-fit">
              <ShareNews
                className="md:hidden"
                newsId={newsDetail.id.toString()}
                newsTitle={newsDetail.title}
              />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <NewsContent headings={headings} processedContent={content} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
