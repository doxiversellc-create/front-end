import { Skeleton } from "@/components/ui/skeleton";

const UserInfoSkeleton = () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-10">
      {/* Title Skeleton */}
      <Skeleton className="h-8 w-64 rounded-md" />

      {/* Avatar and Upload Link Skeleton */}
      <div className="flex flex-col gap-4">
        <Skeleton className="h-24 w-24 rounded-full" />
        <Skeleton className="h-5 w-40 rounded-md" />
      </div>

      {/* Form Skeleton */}
      <div className="flex flex-col gap-6">
        {/* Creates 4 pairs of label/input skeletons */}
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-2">
            <Skeleton className="h-4 w-24 rounded-md" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        ))}
      </div>

      {/* Buttons Skeleton */}
      <div className="flex items-center gap-2">
        <Skeleton className="h-10 w-24 rounded-md" />
        <Skeleton className="h-10 w-24 rounded-md" />
      </div>
    </div>
  );
};

export default UserInfoSkeleton;
