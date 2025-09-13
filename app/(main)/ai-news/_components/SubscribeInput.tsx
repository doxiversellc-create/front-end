import { Input } from "@/components/ui/input";
import { AINewsContent } from "@/types/content.types";

export default function SubscribeInput({ content }: { content: AINewsContent }) {
  const { email_cta_button_text } = content;
  return (
    <div className="flex w-full justify-center px-4">
      <div className="relative mx-auto mt-8 w-full max-w-[569px]">
        <Input
          type="text"
          placeholder="Enter Your Email"
          className="bg-background/90 shadow-border/20 focus:ring-primary w-full rounded-full border py-6 pr-2 pl-6 text-base shadow-lg focus:border-transparent focus:ring-2 md:py-8 md:pl-8"
        />
        <button className="from-primary/70 to-primary/60 text-primary-foreground absolute top-1/2 right-1 -translate-y-1/2 rounded-full bg-gradient-to-r p-2 px-5 py-2 md:right-2 md:px-8 md:py-3">
          {email_cta_button_text}
        </button>
      </div>
    </div>
  );
}
