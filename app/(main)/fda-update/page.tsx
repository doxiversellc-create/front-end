import { Suspense } from "react";

import { fetchPageContent } from "@/actions/content.actions";
import FDATableContainer from "@/app/(main)/fda-update/_components/FDATableContainer";
import FDATableContainerSkeleton from "@/app/(main)/fda-update/_components/FDATableContainerSkeleton";
import Hero from "./_components/Header";
export async function generateMetadata() {
  const { content } = await fetchPageContent("fdaupdates");

  return {
    title: content.title,
    description: content?.description || "FDA AI Insights & Approvals",
  };
}

interface FDAPageProps {
  searchParams: Promise<{ search: string; page: string }>;
}
const FDAPage = async ({ searchParams }: FDAPageProps) => {
  const { search, page } = await searchParams;
  const { content } = await fetchPageContent("fdaupdates");
  const FDATableKey = JSON.stringify({ search, page });
  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-20">
      <div className="hero-gradient pointer-events-none absolute top-0 left-0 -z-10 h-[50vh] w-full" />
      <Hero content={content} />
      <Suspense key={FDATableKey} fallback={<FDATableContainerSkeleton />}>
        <FDATableContainer search={search} page={page} />
      </Suspense>
    </div>
  );
};

export default FDAPage;
