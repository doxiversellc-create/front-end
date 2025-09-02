import { socialMediaData, SocialMediaIcon } from "@/components/Footer";

export default function SocialMediaSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 my-8 md:my-12">
      <p className="text-base mt-3 font-outfit">Follow for more!</p>
      <div className="flex gap-4">
        {socialMediaData.map(item => (
          <SocialMediaIcon
            className="rounded-full border-2 size-11 p-2.5"
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
