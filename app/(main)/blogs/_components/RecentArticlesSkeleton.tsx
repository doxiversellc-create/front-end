import { RecentArticleCardSkeleton } from "@/app/(main)/blogs/_components/RecentArticleCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { generateDummyArray } from "@/lib/utils";

const RecentArticlesSkeleton = () => {
  const array = generateDummyArray(6);
  return (
    <section className="mx-auto my-16 w-full max-w-[1200px] space-y-9 px-4">
      <Skeleton className="h-12 w-1/3" />

      <div className="animate-in fade-in-50 slide-in-from-bottom-4 grid grid-cols-1 gap-x-6 gap-y-16 duration-500 md:grid-cols-2 lg:grid-cols-3">
        {array.map(item => (
          <RecentArticleCardSkeleton key={item} />
        ))}
      </div>
    </section>
  );
};

export default RecentArticlesSkeleton;
