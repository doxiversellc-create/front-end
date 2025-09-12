import { fetchPageContent } from "@/actions/content.actions";
import DocumentLayout from "../_components/DocumentLayout";
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
    <DocumentLayout title={content.title}>
      <section className="space-y-5">
        <div
          className="prose font-inter max-w-none space-y-3 text-sm leading-relaxed tracking-wide md:text-base"
          dangerouslySetInnerHTML={{
            __html: content.content || "",
          }}
        />
      </section>
    </DocumentLayout>
  );
}
