import { socialMediaData, SocialMediaIcon } from "@/components/Footer";
import { NewsletterContent } from "@/types/content.types";

export default function SocialMediaSection({ content }: { content: NewsletterContent }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <p className="font-outfit mt-5 text-base">{content.follow_text}</p>
      <div className="flex gap-4">
        {socialMediaData.map(item => (
          <SocialMediaIcon
            className="size-11 rounded-full border-2 p-2.5"
            key={item.name}
            icon={item.icon}
            name={item.name}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
}
