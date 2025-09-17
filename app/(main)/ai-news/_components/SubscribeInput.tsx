import { Input } from "@/components/ui/input";
import { AINewsContent } from "@/types/content.types";

export default function SubscribeInput({ content }: { content: AINewsContent }) {
  const { email_cta_button_text } = content;
  return (
    <div className="flex w-full justify-center">
      <div className="relative mx-auto mt-8 w-full max-w-[569px]">
        <Input
          type="text"
          placeholder="Enter Your Email"
          className="bg-background/90 shadow-border/20 focus:ring-primary w-full rounded-full border py-6 pr-2 pl-4 text-base shadow-lg focus:border-transparent focus:ring-2 sm:py-8 md:pl-8"
        />
        <button className="text-primary-foreground absolute top-1/2 right-2 -translate-y-1/2 rounded-full bg-gradient-to-r from-sky-500 to-[#1b7fe9] p-2 px-4 max-sm:text-xs sm:py-3 md:px-8">
          {email_cta_button_text}
        </button>
      </div>
    </div>
  );
}
