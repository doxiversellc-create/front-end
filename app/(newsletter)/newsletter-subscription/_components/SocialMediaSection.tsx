import { CMSResponse, socialIcons, SocialMediaIcon } from "@/components/Footer";
import { fetcher } from "@/lib/fetcher";
import { NewsletterContent } from "@/types/content.types";

export default async function SocialMediaSection({ content }: { content: NewsletterContent }) {
  const { data }: { data: CMSResponse | null } = await fetcher<CMSResponse>(
    "/content/navigation/footer"
  );

  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {data?.social_media_links?.some(item => item.is_active) && (
        <p className="font-outfit mt-5 text-base">{content.follow_text}</p>
      )}
      <div className="flex gap-4">
        {data?.social_media_links
          ?.filter(item => item.is_active)
          .sort((a, b) => a.order - b.order)
          .map(item => (
            <SocialMediaIcon
              className="size-11 rounded-full border-2 p-2.5"
              key={item.id}
              icon={socialIcons[item.platform] || "/social-media-icons/default.svg"}
              name={item.platform}
              href={item.url}
            />
          ))}
      </div>
    </div>
  );
}
