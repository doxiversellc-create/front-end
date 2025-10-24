import { Suspense } from "react";

import BookmarkedTools from "./_components/BookmarkedTools";
import BookmarkedToolsSkeleton from "./_components/BookmarkedToolsSkeletons";

interface BookmarksPageProps {
  searchParams: Promise<{ page?: string }>;
}
const BookmarksPage = async ({ searchParams }: BookmarksPageProps) => {
  const { page } = await searchParams;
  return (
    <main>
      <div className="flex w-full flex-col gap-8 py-10">
        <div>
          <p className="font-outfit text-2xl font-semibold">Update your profile</p>
        </div>

        <Suspense fallback={<BookmarkedToolsSkeleton />}>
          <BookmarkedTools page={page || "1"} />
        </Suspense>
      </div>
    </main>
  );
};

export default BookmarksPage;
