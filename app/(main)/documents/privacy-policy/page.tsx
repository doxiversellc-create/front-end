import { fetchPageContent } from "@/actions/content.actions";
import DocumentLayout from "../_components/DocumentLayout";
export async function generateMetadata() {
  const { content } = await fetchPageContent("legal/privacy-policy");

  return {
    title: content.title,
    description:
      content?.description ||
      "Learn how Doxiverse collects, uses, and safeguards your personal data. Our Privacy Policy explains your rights, our practices, and how we ensure your information stays protected.",
  };
}
export default async function page() {
  const { content } = await fetchPageContent("legal/privacy-policy");

  return (
    <DocumentLayout title={content.title}>
      <section className="space-y-5">
        <div
          className="prose font-inter max-w-none text-sm leading-relaxed tracking-wide md:text-base"
          dangerouslySetInnerHTML={{
            __html: content.content || "",
          }}
        />
      </section>
    </DocumentLayout>
  );
}
