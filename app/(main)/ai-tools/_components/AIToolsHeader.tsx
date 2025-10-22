import { fetchPageContent } from "@/actions/content.actions";

interface AIToolsHeaderProps {
  categoryName?: string;
}
const AIToolsHeader = async ({ categoryName }: AIToolsHeaderProps) => {
  const { content }: { content: { page_title: string; page_subtitle: string } } =
    await fetchPageContent("ai-tools");

  const titleEndIndex = content.page_title.indexOf("(");
  const subtitleStartIndex = content.page_subtitle.indexOf("(");
  const subtitleEndIndex = content.page_subtitle.indexOf(")");

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-outfit text-foreground mb-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        {content.page_title.slice(0, titleEndIndex || 0)}{" "}
        {categoryName ? (
          `“${categoryName}”`
        ) : (
          <span className="bg-accent inline-block h-4 w-40 animate-pulse rounded-md align-middle" />
        )}
      </h1>
      <p className="font-inter mx-auto max-w-[749px] text-sm leading-relaxed text-pretty md:text-base lg:text-lg">
        {subtitleStartIndex !== -1 && subtitleEndIndex !== -1 && (
          <>
            {content.page_subtitle.slice(0, subtitleStartIndex)}
            {categoryName ? (
              <span className="font-semibold"> “{categoryName}”</span>
            ) : (
              <span className="bg-accent inline-block h-4 w-40 animate-pulse rounded-md align-middle" />
            )}
            {content.page_subtitle.slice(subtitleEndIndex + 1)}
          </>
        )}
      </p>
    </div>
  );
};

export default AIToolsHeader;
