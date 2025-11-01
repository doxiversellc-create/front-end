import { fetchPageContent } from "@/actions/content.actions";

interface AIToolsHeaderProps {
  categoryName?: string;
  tag?: string;
}
const AIToolsHeader = async ({ categoryName, tag }: AIToolsHeaderProps) => {
  const { content }: { content: { page_title: string; page_subtitle: string } } =
    await fetchPageContent("ai-tools");

  const titleEndIndex = content.page_title.indexOf("(");
  const subtitleStartIndex = content.page_subtitle.indexOf("(");
  const subtitleEndIndex = content.page_subtitle.indexOf(")");

  const topic = tag || categoryName;

  return (
    <div className="mx-auto max-w-3xl">
      <h1 className="font-outfit text-foreground mb-8 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        <span>
          {content.page_title.slice(0, titleEndIndex || 0)}{" "}
          {topic ? (
            `“${topic}”`
          ) : (
            <span>
              “
              <span className="bg-accent inline-block h-9 w-40 animate-pulse rounded-md align-middle" />
              ”
            </span>
          )}
        </span>
      </h1>
      {!tag && (
        <p className="font-inter mx-auto max-w-[749px] text-sm leading-relaxed text-pretty md:text-base lg:text-lg">
          {subtitleStartIndex !== -1 && subtitleEndIndex !== -1 && (
            <>
              {content.page_subtitle.slice(0, subtitleStartIndex)}
              {topic ? (
                <span className="font-semibold"> “{topic}”</span>
              ) : (
                <span className="bg-accent inline-block h-4 w-40 animate-pulse rounded-md align-middle" />
              )}
              {content.page_subtitle.slice(subtitleEndIndex + 1)}
            </>
          )}
        </p>
      )}
    </div>
  );
};

export default AIToolsHeader;
