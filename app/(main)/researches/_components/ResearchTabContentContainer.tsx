import { getResearchArticles } from "@/actions/research.action";
import ResearchTabContent from "@/app/(main)/researches/_components/ResearchTabContent";
import { ResearchTabValue } from "@/types/research.types";

interface ResearchTabContentContainerProps {
  activeTab: ResearchTabValue;
  currentPage?: string;
  search?: string;
}

const ResearchTabContentContainer = async ({
  activeTab,
  currentPage,
  search,
}: ResearchTabContentContainerProps) => {
  const { error, articles, count } = await getResearchArticles({ page: currentPage, search });
  const totalPages = Math.ceil((count || 0) / 20);

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (articles)
    return (
      <div>
        <ResearchTabContent
          activeTab={activeTab}
          currentPage={currentPage}
          articles={articles}
          totalPages={totalPages}
        />
      </div>
    );
};

export default ResearchTabContentContainer;
