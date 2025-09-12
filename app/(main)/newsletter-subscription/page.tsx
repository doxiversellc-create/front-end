import { fetchPageContent } from "@/actions/content.actions";
import NewsletterHeader from "./_components/NewsletterHeader";
import NewsletterSubscriptionForm from "./_components/NewsletterSubscriptionForm";
import SocialMediaSection from "./_components/SocialMediaSection";
export async function generateMetadata() {
  const { content } = await fetchPageContent("newsletter");

  return {
    title: content.title,
    description: content?.description || "Discover the Future of Healthcare AI News",
  };
}

export default async function page() {
  const { content } = await fetchPageContent("newsletter");

  return (
    <div className="mx-auto my-10 flex w-full max-w-[1040px] flex-col items-center justify-center px-4 py-8 lg:px-0">
      <NewsletterHeader content={content} />
      <NewsletterSubscriptionForm content={content} />
      <SocialMediaSection content={content} />
    </div>
  );
}
