import React from "react";

import NewsletterHeader from "./_components/NewsletterHeader";
import NewsletterSubscriptionForm from "./_components/NewsletterSubscriptionForm";
import SocialMediaSection from "./_components/SocialMediaSection";

export default function page() {
  return (
    <div className="mx-auto my-10 flex w-full max-w-[1040px] flex-col items-center justify-center px-4 py-8 lg:px-0">
      <NewsletterHeader />
      <NewsletterSubscriptionForm />
      <SocialMediaSection />
    </div>
  );
}
