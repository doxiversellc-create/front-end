import { socialMediaData, SocialMediaIcon } from "@/components/Footer";
import React from "react";

export default function SocialMediaSection() {
  return (
    <div className="flex flex-col justify-center items-center gap-2 my-8 md:my-12">
      <p className="text-base mt-3 font-inter">Follow for more!</p>
      <div className="flex gap-4">
        {socialMediaData.map(item => (
          <SocialMediaIcon key={item.name} icon={item.icon} name={item.name} href={item.href} />
        ))}
      </div>
    </div>
  );
}
