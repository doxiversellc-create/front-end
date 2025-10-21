import { getAiTools } from "@/actions/tools.actions";
import CategoryFilter from "@/app/(main)/ai-tools/_components/CategoryFilter";
import { GradientSeparator } from "@/components/GradientSeparator";
import { AIToolsContent } from "@/types/content.types";
import { SubCategory } from "@/types/tools.types";
import { AIToolCard } from "./AIToolCard";
import ToolsPagination from "./ToolsPagination";

interface ClientToolsPageProps {
  category: string;
  subCategory: string;
  page: string;
  content: AIToolsContent;
  categories: SubCategory[];
}

export default async function AiToolsGrid({
  content,
  category,
  subCategory,
  categories,
  page,
}: ClientToolsPageProps) {
  const { tools: aiTools } = await getAiTools({ category, subCategory, page });

  if (aiTools)
    return (
      <div className="bg-background mb-16 min-h-screen">
        {/* Hero Banner */}
        <section className="from-primary/10 via-background to-background -mt-15 flex flex-col items-center justify-center bg-gradient-to-b px-4 pt-20 pb-12 text-center md:pt-32">
          <div className="mx-auto max-w-3xl">
            <h1 className="font-outfit text-foreground mb-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {content.page_title.replace("(category)", `“${aiTools?.[0]?.categories?.[0]?.name}”`)}
            </h1>
            <p className="font-inter mx-auto max-w-[749px] text-sm leading-relaxed text-pretty md:text-base lg:text-lg">
              {content.page_subtitle.replace(
                "(category)",
                `“${aiTools?.[0]?.categories?.[0]?.name}”`
              )}
            </p>
          </div>
          <GradientSeparator
            width="w-full"
            height="h-[1px]"
            color="via-secondary-foreground/10"
            className="my-8 mt-20"
          />
          {/* Category Selector */}
          <div className="relative mx-auto mt-8 w-full max-w-4xl">
            <div className="from-background pointer-events-none absolute top-0 left-0 z-10 h-full w-10 bg-gradient-to-r to-transparent" />
            <div className="no-scrollbar flex items-center justify-center space-x-3 overflow-x-auto">
              <CategoryFilter
                categories={categories}
                category={category}
                subCategory={subCategory}
              />
            </div>
            <div className="from-background pointer-events-none absolute top-0 right-0 z-10 h-full w-10 bg-gradient-to-l to-transparent" />
          </div>
        </section>
        {/* Tool Grid */}
        <main className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-6">
            {aiTools.map(tool => (
              <div className="lg:col-auto" key={tool.id}>
                <AIToolCard tool={tool} />
              </div>
            ))}
          </div>

          <ToolsPagination />
        </main>
      </div>
    );
}
