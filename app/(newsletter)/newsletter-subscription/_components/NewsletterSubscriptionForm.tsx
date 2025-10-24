"use client";
import { FormEvent, useEffect, useState } from "react";

import { Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Input } from "@/components/ui/input";
import useNewsletterSubscribe from "@/hooks/useNewsletterSubscribe";
import { NewsletterContent } from "@/types/content.types";

export default function NewsletterSubscriptionForm({ content }: { content: NewsletterContent }) {
  const [email, setEmail] = useState("");
  const { error, isLoading, newsletterSubscribe, success } = useNewsletterSubscribe();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await newsletterSubscribe(email);
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
    <div className="border-primary/15 flex max-w-[606px] flex-col items-center justify-center rounded-4xl border-[7px] p-5">
      <p className="font-outfit text-2xl font-medium">{content.form_title}</p>
      <p className="font-inter mt-3 text-center text-base">{content.form_description}</p>
      <form
        className="mx-auto mt-5 flex w-full flex-col gap-4 md:flex-row md:gap-3"
        onSubmit={handleSubmit}
      >
        <Input
          type="email"
          placeholder="Enter Your Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          disabled={isLoading}
          className="bg-background/90 shadow-border/20 focus:ring-primary h-12 w-full rounded-full border px-8 py-4 text-base shadow-lg focus:border-transparent focus:ring-2 md:w-[398px]"
        />
        <button
          disabled={isLoading}
          className="text-primary-foreground flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#2E90FA] to-[#2EBEFA] transition-all duration-300 hover:from-[#2E90FA]/80 hover:to-[#2EBEFA]/80 max-md:h-14 md:w-36"
        >
          {isLoading ? <Loader2 className="animate-spin" /> : content.subscribe_button_text}
        </button>
      </form>
    </div>
  );
}
