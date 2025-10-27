import Script from "next/script";

interface StructuredDataProps {
  data: object | object[];
}

/**
 * Component to add structured data (JSON-LD) to pages for SEO
 * @param data - The structured data object or array of objects
 * @example
 * ```tsx
 * <StructuredData data={generateArticleSchema({...})} />
 * ```
 */
export function StructuredData({ data }: StructuredDataProps) {
  const jsonLd = Array.isArray(data) ? data : [data];

  return (
    <>
      {jsonLd.map((item, index) => (
        <Script
          key={index}
          id={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
