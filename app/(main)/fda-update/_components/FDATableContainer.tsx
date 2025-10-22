import { AlertTriangle, FileSearch } from "lucide-react";

import { getFDAApprovals } from "@/actions/fda.actions";
import FDATable from "@/app/(main)/fda-update/_components/FDATable";

interface FDATableContainerProps {
  page?: string;
  search?: string;
}
export const EmptyStateFDATAble = ({ searchTerm }: { searchTerm?: string }) => (
  <div className="flex h-fit w-full flex-col items-center justify-center rounded-lg p-12 text-center">
    <FileSearch className="text-muted-foreground mx-auto h-12 w-12" />

    <h3 className="mt-2 text-xl font-semibold">
      No results found {searchTerm ? `for "${searchTerm}"` : ""}
    </h3>
    <p className="text-muted-foreground mt-1 text-sm">
      It looks like there are no results matching your search. Try adjusting your search keywords.
    </p>
  </div>
);

export const ErrorStateResearch = () => (
  <div className="bg-secondary flex h-fit w-full flex-col items-center justify-center rounded-lg border p-12 text-center">
    <AlertTriangle className="mx-auto h-12 w-12 text-red-400" />
    <h3 className="mt-2 text-xl font-semibold text-red-700">Failed to load FDA resources</h3>
    <p className="mt-1 text-sm text-red-600">
      We encountered an error while fetching. Please try refreshing the page or come back later.
    </p>
  </div>
);

const FDATableContainer = async ({ page, search }: FDATableContainerProps) => {
  const { error, fdaApprovals, count } = await getFDAApprovals({ page, search });
  const totalPages = Math.ceil((count || 0) / 20);
  if (error) {
    console.error(error);
    return <ErrorStateResearch />;
  }

  if (fdaApprovals) {
    if (fdaApprovals.length == 0) return <EmptyStateFDATAble searchTerm={search} />;

    return <FDATable fdaApprovals={fdaApprovals} totalPages={totalPages} />;
  }
};

export default FDATableContainer;
