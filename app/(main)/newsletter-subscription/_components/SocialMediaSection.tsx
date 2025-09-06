import { socialMediaData, SocialMediaIcon } from "@/components/Footer";

export default function SocialMediaSection() {
  return (
    <div className="my-8 flex flex-col items-center justify-center gap-3 md:my-12">
      <p className="font-outfit mt-3 text-base">Follow for more!</p>
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
