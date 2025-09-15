import Image from "next/image";

import { NewsletterContent } from "@/types/content.types";

export default function NewsletterHeader({ content }: { content: NewsletterContent }) {
  return (
    <>
      <Image
        src="/shapes/Envelopes.svg"
        alt="Newsletter Subscription Envelopes"
        width={240}
        height={240}
        className="h-full w-60"
      />
      <h2 className="font-outfit mx-auto max-w-[670px] text-center text-4xl leading-tight font-semibold lg:text-[40px]">
        <span className="text-balance">{content.main_heading}</span>
      </h2>
      <p className="font-inter my-3 max-w-[538px] py-5 text-center text-sm md:my-0 lg:text-base">
        {content.description}
      </p>
    </>
  );
}
