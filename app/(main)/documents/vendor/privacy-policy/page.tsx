import { fetchPageContent } from "@/actions/content.actions";
import DocumentLayout from "../../_components/DocumentLayout";
export async function generateMetadata() {
  const { content } = await fetchPageContent("legal/vendor-privacy-policy");

  return {
    title: content.title,
    description:
      content?.description ||
      "Doxiverse Vendor Privacy Policy explains how we collect, store, and protect vendor data. Learn about vendor rights, data usage, and our commitment to transparency.",
  };
}

export default async function page() {
  const { content } = await fetchPageContent("legal/vendor-privacy-policy");

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
