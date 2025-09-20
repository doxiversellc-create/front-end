import { Suspense } from "react";

import MyToolsList from "@/app/(main)/vendors/my-tools/_components/MyToolsList";
import MyToolsListSkeleton from "@/app/(main)/vendors/my-tools/_components/MyToolsListSkeleton";

interface MyToolsPageProps {
  searchParams: Promise<{ page: string }>;
}

const MyToolsPage = async ({ searchParams }: MyToolsPageProps) => {
  const { page } = await searchParams;
  return (
    <div>
      <Suspense fallback={<MyToolsListSkeleton />}>
        <MyToolsList page={page} />
      </Suspense>
    </div>
  );
};

export default MyToolsPage;
