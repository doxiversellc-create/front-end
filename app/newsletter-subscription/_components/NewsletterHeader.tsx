import Image from "next/image";
import React from "react";

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
      <h2 className="max-w-[670px] text-4xl font-semibold font-outfit text-center lg:text-[40px] leading-tight mx-auto">
        <span className="text-balance">Subscribe to Get Notified About Our Latest AI News</span>
      </h2>
      <p className="max-w-[538px] my-3 md:my-0 py-5 text-center text-sm lg:text-base font-inter">
        Stay updated with AI breakthroughs, trends, and expert tips delivered straight to your
        inbox.
      </p>
    </>
  );
}
