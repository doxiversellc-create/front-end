"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { AlertTriangle, Inbox, User } from "lucide-react";

import MyToolsListSkeleton from "@/app/(main)/vendors/my-tools/_components/MyToolsListSkeleton";
import MyToolsPagination from "@/app/(main)/vendors/my-tools/_components/MyToolsPagination";
import VendorToolsCard from "@/app/(main)/vendors/my-tools/_components/VendorToolsCard";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import useFetchMyTools from "@/hooks/useFetchMyTools";

const EmptyState = () => (
  <div className="border-border flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 text-center">
    <Inbox className="text-muted-foreground mx-auto h-12 w-12" />

    <h3 className="mt-2 text-xl font-semibold">No tools found</h3>
    <p className="text-muted-foreground mt-1 text-sm">Your created tools will appear here.</p>
  </div>
);

export const NoAuthState = () => {
  const pathname = usePathname();
  const loginHref = `/login?next=${pathname}`;

  return (
    <div className="border-border flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 text-center">
      <User className="text-muted-foreground mx-auto h-12 w-12" />

      <h3 className="mt-4 text-xl font-semibold">Authentication Required</h3>
      <p className="text-muted-foreground mt-2 text-sm">
        Please log in or create an account to continue.
      </p>

      <div className="mt-6 flex items-center gap-3">
        <Button variant="outline" asChild size="sm">
          <Link href={loginHref}>Login</Link>
        </Button>
        <Button asChild size="sm">
          <Link href={`/signup`}>Sign up</Link>
        </Button>
      </div>
    </div>
  );
};

const ErrorState = () => (
  <div className="flex w-full flex-col items-center justify-center rounded-lg bg-red-50 p-12 text-center">
    <AlertTriangle className="mx-auto h-12 w-12 text-red-400" />
    <h3 className="mt-2 text-xl font-semibold text-red-800">Something went wrong</h3>
    <p className="mt-1 text-sm text-red-600">
      We couldn&apos;t load your tools. Please try refreshing the page.
    </p>
  </div>
);

interface MyToolsListProps {
  page?: string;
}
const MyToolsList = ({ page }: MyToolsListProps) => {
  const pageNumber = page ? parseInt(page) : undefined;

  const { user, isLoading: isLoadingUser } = useAuth();
  const { data: tools, isLoading, error } = useFetchMyTools(user !== null);

  if (isLoading || isLoadingUser) {
    return <MyToolsListSkeleton />;
  }

  if (!user) {
    return <NoAuthState />;
  }
  if (error) {
    console.error("Failed to fetch vendor tools:", error);
    return <ErrorState />;
  }

  if (!tools || tools.length === 0) {
    return <EmptyState />;
  }

  return (
    <div>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tools.map(tool => (
          <VendorToolsCard key={tool.tool_id} tool={tool} />
        ))}
      </div>
      <div className="mt-8">
        <MyToolsPagination currentPage={pageNumber || 1} totalPages={1} />
      </div>
    </div>
  );
};

export default MyToolsList;
