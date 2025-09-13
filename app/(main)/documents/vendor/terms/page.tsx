import { fetchPageContent } from "@/actions/content.actions";
import DocumentLayout from "../../_components/DocumentLayout";
export async function generateMetadata() {
  const { content } = await fetchPageContent("legal/vendor-terms-and-conditions");

  return {
    title: content.title,
    description:
      content?.description ||
      "Read the Vendor Terms and Conditions for Doxiverse. This agreement outlines vendor obligations, service policies, and rules for fair business practices on our platform.",
  };
}

export default async function page() {
  const { content } = await fetchPageContent("legal/vendor-terms-and-conditions");

  return (
    <DocumentLayout title="Doxiverse Vendor Terms and Conditions">
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
