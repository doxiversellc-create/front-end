import { AlertTriangle, FileSearch } from "lucide-react";

import { getResearchArticles } from "@/actions/research.action";
import ResearchTabContent from "@/app/(main)/researches/_components/ResearchTabContent";
import { ResearchTabValue } from "@/types/research.types";

interface ResearchTabContentContainerProps {
  activeTab: ResearchTabValue;
  currentPage?: string;
  search?: string;
}
export const EmptyStateResearch = ({ searchTerm }: { searchTerm?: string }) => (
  <div className="flex h-fit w-full flex-col items-center justify-center rounded-lg p-12 text-center">
    <FileSearch className="text-muted-foreground mx-auto h-12 w-12" />

    <h3 className="mt-2 text-xl font-semibold">
      No results found {searchTerm ? `for "${searchTerm}"` : ""}
    </h3>
    <p className="text-muted-foreground mt-1 text-sm">
      It looks like there are no researches matching your search. Try adjusting your search
      keywords.
    </p>
  </div>
);

export const ErrorStateResearch = () => (
  <div className="bg-secondary flex h-fit w-full flex-col items-center justify-center rounded-lg border p-12 text-center">
    <AlertTriangle className="mx-auto h-12 w-12 text-red-400" />
    <h3 className="mt-2 text-xl font-semibold text-red-700">Failed to load researches</h3>
    <p className="mt-1 text-sm text-red-600">
      We encountered an error while fetching researches. Please try refreshing the page or come back
      later.
    </p>
  </div>
);

const ResearchTabContentContainer = async ({
  activeTab,
  currentPage,
  search,
}: ResearchTabContentContainerProps) => {
  const { error, articles, count } = await getResearchArticles({ page: currentPage, search });
  const totalPages = Math.ceil((count || 0) / 20);

  if (error) {
    return <ErrorStateResearch />;
  }

  if (articles) {
    if (articles.length == 0) return <EmptyStateResearch searchTerm={search} />;

    return (
      <ResearchTabContent
        activeTab={activeTab}
        currentPage={currentPage}
        articles={articles}
        totalPages={totalPages}
      />
    );
  }
};

export default ResearchTabContentContainer;
