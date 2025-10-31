import { getAiToolsByCategory, getAiToolsByTags } from "@/actions/tools.actions";
import ParamPagination from "@/components/ParamPagination";
import { AIToolCard } from "../../../../components/AIToolCard";

interface ClientToolsPageProps {
  category?: string;
  subCategory?: string;
  page: string;
  tag?: string;
}

export default async function AiToolsGrid({
  category,
  subCategory,
  page,
  tag,
}: ClientToolsPageProps) {
  const { tools: aiTools, count } = tag
    ? await getAiToolsByTags({ page, tag })
    : await getAiToolsByCategory({ category, subCategory, page });

  const totalPages = Math.ceil((count || 0) / 20);

  if (!aiTools || aiTools.length === 0) {
    return (
      <main className="container mx-auto px-4 md:px-6 lg:px-8">
        <p className="text-muted-foreground text-center">No tools found.</p>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 md:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center gap-6">
        {aiTools.map(tool => (
          <div className="lg:col-auto" key={tool.id}>
            <AIToolCard tool={tool} />
          </div>
        ))}
      </div>
      {totalPages > 1 && <ParamPagination totalPages={totalPages} />}
    </main>
  );
}
