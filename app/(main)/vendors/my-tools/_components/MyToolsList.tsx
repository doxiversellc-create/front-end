import { AlertTriangle, Inbox } from "lucide-react";

import { getVendorToolsAction } from "@/actions/vendor.action";
import MyToolsPagination from "@/app/(main)/vendors/my-tools/_components/MyToolsPagination";
import VendorToolsCard from "@/app/(main)/vendors/my-tools/_components/VendorToolsCard";

const EmptyState = () => (
  <div className="border-border flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 text-center">
    <Inbox className="text-muted-foreground mx-auto h-12 w-12" />

    <h3 className="mt-2 text-xl font-semibold">No tools found</h3>
    <p className="text-muted-foreground mt-1 text-sm">Your created tools will appear here.</p>
  </div>
);

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
const MyToolsList = async ({ page }: MyToolsListProps) => {
  const pageNumber = page ? parseInt(page) : undefined;
  const { tools, error } = await getVendorToolsAction(pageNumber);

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
