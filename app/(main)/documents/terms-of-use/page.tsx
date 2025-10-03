import { fetchPageContent } from "@/actions/content.actions";
export async function generateMetadata() {
  const { content } = await fetchPageContent("legal/terms-of-use");

  return {
    title: content.title,
    description:
      content?.description ||
      "Review the Terms of Use for Doxiverse. These terms govern your access, responsibilities, and the proper use of our platform, services, and content.",
  };
}

export default async function TermsOfUsePage() {
  const { content } = await fetchPageContent("legal/terms-of-use");

  return (
    <article className="prose prose-lg max-w-none space-y-6 lg:space-y-10">
      <h1 className="font-outfit text-2xl font-semibold md:text-4xl">{content.title}</h1>

      <div className="space-y-5">
        {" "}
        <section className="space-y-5">
          <div
            className="prose font-inter max-w-none space-y-3 text-sm leading-relaxed tracking-wide md:text-base"
            dangerouslySetInnerHTML={{
              __html: content.content || "",
            }}
          />
        </section>
      </div>
    </article>
  );
}
