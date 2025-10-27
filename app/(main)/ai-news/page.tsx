import { Suspense } from "react";

import Image from "next/image";

import { fetchPageContent } from "@/actions/content.actions";
import Hero from "./_components/Hero";
import NewsGridContainer from "./_components/NewsGridContainer";
import NewsGridContainerSkeleton from "./_components/NewsGridContainerSkeleton";
import SubscribeInput from "./_components/SubscribeInput";
export async function generateMetadata() {
  const { content } = await fetchPageContent("ainews");

  return {
    title: content.title,
    description: content?.description || "AI Related Newsroom",
  };
}

interface NewsroomPageProps {
  searchParams: Promise<{ page: string }>;
}
export default async function NewsroomPage({ searchParams }: NewsroomPageProps) {
  const { page } = await searchParams;
  const { content } = await fetchPageContent("ainews");
  return (
    <div className="flex min-h-screen flex-col">
      <div className="from-primary/25 pointer-events-none absolute top-0 left-0 -z-10 h-[50vh] w-full bg-gradient-to-b to-transparent" />
      <main className="flex-1">
        <Hero content={content} />
        <section className="mx-auto max-w-7xl px-6 py-12 md:px-12 lg:px-20">
          <Suspense fallback={<NewsGridContainerSkeleton />}>
            <NewsGridContainer page={page} />
          </Suspense>
        </section>

        <section className="w-full lg:pb-10">
          <div className="relative min-w-full rounded-3xl pb-2">
            <div className="bg-background relative min-w-full overflow-hidden rounded-3xl px-4 pb-8 md:px-12 md:pb-12 lg:px-16 lg:pb-16">
              <div className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2">
                <Image
                  src="/shapes/top-category.svg"
                  className="rotate-180 brightness-0 invert"
                  alt="top-category"
                  width={200}
                  height={100}
                />
              </div>
              <div className="from-background/30 absolute inset-0 bg-gradient-to-b via-[#A9D5F0]/20 to-[#A9D5F0]" />

              <div className="relative z-10 mt-5 space-y-5 pb-7 text-center md:pb-3">
                <h2 className="font-outfit mx-auto mt-6 max-w-[546px] text-3xl leading-tight font-semibold md:text-4xl lg:mt-12 lg:text-5xl">
                  {content.email_marketing_title}
                </h2>
                <p className="font-inter mx-auto max-w-[569px] text-lg opacity-80 lg:text-xl">
                  {content.email_marketing_description}
                </p>
                <div className="mx-auto mt-8 flex justify-center">
                  <SubscribeInput content={content} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
