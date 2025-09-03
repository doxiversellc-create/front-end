import { Input } from "@/components/ui/input";
import React from "react";

export default function NewsletterSubscriptionForm() {
  return (
    <div className="flex flex-col p-7 md:p-7 mt-7 md:mt-10 items-center justify-center border-[7px] border-primary/15 rounded-4xl max-w-[606px]">
      <p className="text-2xl font-medium font-outfit">Join Our Newsletter</p>
      <p className="text-base mt-3 font-inter">Subscribe now for early notification upon launch.</p>
      <div className="flex flex-col md:flex-row gap-4 md:gap-3 w-full mx-auto mt-10">
        <Input
          type="text"
          placeholder="Enter Your Email Address..."
          className="w-full md:w-[398px] px-8 py-4 h-14 text-base bg-background/90 shadow-lg shadow-border/20 border rounded-full focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <button className="bg-gradient-to-r from-[#2E90FA] to-[#2EBEFA] hover:from-[#2E90FA]/80 hover:to-[#2EBEFA]/80 transition-all duration-300 text-primary-foreground px-8 py-4 rounded-full">
          Subscribe!
        </button>
      </div>
    </div>
  );
}
