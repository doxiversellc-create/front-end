import { Input } from "@/components/ui/input";
import { NewsletterContent } from "@/types/content.types";

export default function NewsletterSubscriptionForm({ content }: { content: NewsletterContent }) {
  return (
    <div className="border-primary/15 mt-7 flex max-w-[606px] flex-col items-center justify-center rounded-4xl border-[7px] p-7 md:mt-10 md:p-7">
      <p className="font-outfit text-2xl font-medium">{content.form_title}</p>
      <p className="font-inter mt-3 text-base">{content.form_description}</p>
      <div className="mx-auto mt-10 flex w-full flex-col gap-4 md:flex-row md:gap-3">
        <Input
          type="text"
          placeholder="Enter Your Email Address..."
          className="bg-background/90 shadow-border/20 focus:ring-primary h-14 w-full rounded-full border px-8 py-4 text-base shadow-lg focus:border-transparent focus:ring-2 md:w-[398px]"
        />
        <button className="text-primary-foreground rounded-full bg-gradient-to-r from-[#2E90FA] to-[#2EBEFA] px-8 py-4 transition-all duration-300 hover:from-[#2E90FA]/80 hover:to-[#2EBEFA]/80">
          {content.subscribe_button_text}
        </button>
      </div>
    </div>
  );
}
