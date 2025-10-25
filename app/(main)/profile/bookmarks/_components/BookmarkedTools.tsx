import { AlertTriangle, Bookmark } from "lucide-react";

import { getBookmarkedAiTools } from "@/actions/tools.actions";
import { AIToolCard } from "@/components/AIToolCard";
import ParamPagination from "@/components/ParamPagination";

interface BookmarkedToolsProps {
  page: string;
}

const EmptyState = () => (
  <div className="border-border flex w-full flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 text-center">
    <Bookmark className="text-muted-foreground mx-auto h-12 w-12" />

    <h3 className="mt-2 text-xl font-semibold">No bookmarks found</h3>
    <p className="text-muted-foreground mt-1 text-sm">Your bookmarked tools will appear here.</p>
  </div>
);
const ErrorState = () => (
  <div className="flex w-full flex-col items-center justify-center rounded-lg bg-red-50 p-12 text-center">
    <AlertTriangle className="mx-auto h-12 w-12 text-red-400" />
    <h3 className="mt-2 text-xl font-semibold text-red-800">Something went wrong</h3>
    <p className="mt-1 text-sm text-red-600">
      We couldn&apos;t load your bookmarks. Please try refreshing the page.
    </p>
  </div>
);

export default async function BookmarkedTools({ page }: BookmarkedToolsProps) {
  const { error, tools: aiTools, count } = await getBookmarkedAiTools({ page });
  const totalPages = Math.ceil((count || 0) / 20);

  if (error) return <ErrorState />;

  if (!aiTools || aiTools.length === 0) {
    return <EmptyState />;
  }
  return (
    <main className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid-col-end-1 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {aiTools.map(tool => (
          <div className="flex w-full justify-center" key={tool.id}>
            {tool.ai_tool ? (
              <AIToolCard tool={{ ...tool, id: tool.ai_tool, is_bookmarked: true }} />
            ) : (
              <AIToolCard tool={{ ...tool, is_bookmarked: true }} />
            )}
          </div>
        ))}
      </div>
      {totalPages > 1 && <ParamPagination totalPages={totalPages} />}
    </main>
  );
}
