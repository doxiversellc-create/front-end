import Image from "next/image";

import { NewsletterContent } from "@/types/content.types";

export default function NewsletterHeader({ content }: { content: NewsletterContent }) {
  return (
    <>
      <div className="relative mx-auto flex aspect-square w-40 items-center justify-center">
        <Image
          src="/shapes/Envelopes.svg"
          alt="Newsletter Subscription Envelopes"
          width={240}
          height={240}
          className="object-contain"
        />
      </div>
      <h2 className="font-outfit mx-auto text-center text-2xl leading-tight font-semibold md:text-3xl lg:text-4xl">
        <span className="text-balance">{content.main_heading}</span>
      </h2>
      <p className="font-inter max-w-[538px] pt-3 pb-6 text-center text-sm lg:text-base">
        {content.description}
      </p>
    </>
  );
}
