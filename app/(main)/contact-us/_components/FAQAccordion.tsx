"use client";
import { useState } from "react";

import { Minus, Plus } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { faqData } from "../data";

const FAQAccordion = () => {
  const [value, setValue] = useState(faqData[0]?.number || "");

  return (
    <Accordion type="single" className="w-full" value={value} onValueChange={setValue}>
      {faqData.map(faq => {
        const isOpen = value === faq.number;
        return (
          <AccordionItem
            value={faq.number}
            key={faq.number}
            className="w-full border-0 transition-all"
          >
            <div
              className={cn(
                "mx-auto h-full w-full rounded-4xl p-0 duration-300 ease-in-out",
                isOpen && "from-primary/40 via-primary/5 to-background bg-gradient-to-r p-2"
              )}
            >
              <div
                className={cn(
                  "bg-background border-background flex h-full flex-col rounded-3xl border p-4",
                  isOpen && "border-border p-2"
                )}
              >
                <AccordionTrigger
                  hasIcon={false}
                  className="flex w-full items-center justify-between p-0 hover:no-underline"
                >
                  <div className="font-outfit flex items-start gap-4">
                    <div
                      className={cn(
                        "border-background flex size-9.5 flex-shrink-0 items-center justify-center rounded-full border text-lg font-bold",
                        isOpen && "border-border"
                      )}
                    >
                      {faq.number}
                    </div>
                    <p className={cn("mt-1 text-xl hover:underline", isOpen && "font-medium")}>
                      {faq.title}
                    </p>
                  </div>
                  <div
                    className={cn(
                      "flex size-9 flex-shrink-0 items-center justify-center rounded-full border",
                      isOpen && "border-background"
                    )}
                  >
                    {isOpen ? <Minus /> : <Plus />}
                  </div>
                </AccordionTrigger>

                <AccordionContent className="flex flex-col ps-13 pe-2 pt-5">
                  <p className="text-start">{faq.answer}</p>
                </AccordionContent>
              </div>
            </div>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

export default FAQAccordion;
