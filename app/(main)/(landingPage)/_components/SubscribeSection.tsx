"use client";
import { useEffect, useState } from "react";

import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import useNewsletterSubscribe from "@/hooks/useNewsletterSubscribe";
import { LandingPageContent } from "@/types/content.types";

export default function SubscribeSection({ content }: { content: LandingPageContent }) {
  const {
    email_marketing_title,
    email_marketing_description,
    email_marketing_cta_text,
    email_marketing_pdf_title,
  } = content;

  const [email, setEmail] = useState("");
  const { error, isLoading, newsletterSubscribe, success } = useNewsletterSubscribe();

  const pdfURL = `${process.env.NEXT_PUBLIC_API_BASE_URL}/content/landingpage/download-pdf/`;

  const handleClick = async () => {
    // First, subscribe the user to the newsletter
    if (!email) {
      return toast.error("Please enter a valid email address.");
    }
    await newsletterSubscribe(email);

    // Tech check: if the pdf is accessible

    const response = await fetch(pdfURL, { method: "HEAD" });
    if (response.status !== 200) {
      return toast.success("Thanks for subscribing! However, we will email you the PDF shortly.");
    }

    window.open(pdfURL, "_blank");
  };

  useEffect(() => {
    if (error) {
      toast.error("Failed to subscribe to newsletter", { description: error });
    }
    if (success) {
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail("");
    }
  }, [error, success]);

  return (
    <section className="w-full min-w-full rounded-3xl pb-2">
      <div className="relative">
        <div className="bg-background rounded-3xl pb-1.5">
          <div className="bg-background relative min-w-full overflow-hidden rounded-3xl px-2 py-5 md:p-12 lg:px-16 lg:pt-16 lg:pb-10">
            <div className="from-background to-background absolute inset-0 bg-gradient-to-b via-[#dcf2ff]" />

            <div className="relative z-10 mt-5 space-y-5 py-5 pb-7 text-center md:pb-3">
              <h2 className="font-outfit mx-auto max-w-[603px] text-3xl leading-tight font-semibold md:text-4xl lg:text-5xl">
                <span className="text-balance">{email_marketing_title}</span>
              </h2>
              <div className="flex flex-col gap-1.5 pt-5">
                <p className="font-inter text-lg opacity-80 lg:text-xl">
                  {email_marketing_description}
                </p>
                <p className="font-inter text-lg font-bold md:text-xl lg:text-2xl">
                  “{email_marketing_pdf_title}”
                </p>
              </div>
              {/* Email Submit Sub-Section */}
              <div className="relative mx-auto mt-14 w-full max-w-[569px]">
                <Input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  disabled={isLoading}
                  placeholder="Enter Your Email"
                  className="bg-background/90 shadow-border/20 focus:ring-primary w-full rounded-full border py-6 pr-2 pl-4 text-base shadow-lg focus:border-transparent focus:ring-2 sm:py-7 md:pl-8"
                />
                {isLoading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <button
                    onClick={handleClick}
                    disabled={isLoading}
                    className="text-primary-foreground absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-gradient-to-r from-sky-500 to-[#1b7fe9] p-2 px-4 max-sm:text-xs md:px-8"
                  >
                    {email_marketing_cta_text}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
