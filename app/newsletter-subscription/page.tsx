import React from "react";
import NewsletterHeader from "./_components/NewsletterHeader";
import NewsletterSubscriptionForm from "./_components/NewsletterSubscriptionForm";
import SocialMediaSection from "./_components/SocialMediaSection";

export default function page() {
  return (
    <div className="w-full mx-auto flex flex-col items-center justify-center px-4 lg:px-0 py-8 max-w-[1040px] my-10">
      <NewsletterHeader />
      <NewsletterSubscriptionForm />
      <SocialMediaSection />
    </div>
  );
}
