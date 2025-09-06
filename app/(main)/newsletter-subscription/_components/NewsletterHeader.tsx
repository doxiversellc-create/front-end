import React from "react";

import Image from "next/image";

export default function NewsletterHeader() {
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
        <span className="text-balance">Subscribe to Get Notified About Our Latest AI News</span>
      </h2>
      <p className="font-inter my-3 max-w-[538px] py-5 text-center text-sm md:my-0 lg:text-base">
        Stay updated with AI breakthroughs, trends, and expert tips delivered straight to your
        inbox.
      </p>
    </>
  );
}
