import { Suspense } from "react";

import { fetchPageContent } from "@/actions/content.actions";
import FDATable from "./_components/FDATable";
import Hero from "./_components/Header";
export async function generateMetadata() {
  const { content } = await fetchPageContent("fdaupdates");

  return {
    title: content.title,
    description: content?.description || "FDA AI Insights & Approvals",
  };
}
const FDAPage = async () => {
  const { content } = await fetchPageContent("fdaupdates");

  return (
    <div className="min-h-screen px-6 md:px-12 lg:px-20">
      <div className="from-primary/25 pointer-events-none absolute top-0 left-0 -z-10 h-[50vh] w-full bg-gradient-to-b to-transparent" />
      <Hero content={content} />
      <Suspense fallback={<div>Loading...</div>}>
        <FDATable />
      </Suspense>
    </div>
  );
};

export default FDAPage;
