"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "../../../../lib/utils";
import { faqData } from "../data";

const FAQSection = () => {
  const [value, setValue] = useState(faqData[0]?.number || "");
  return (
    <section className="container mx-auto py-16  md:py-24 flex-col flex gap-16 text-center items-center max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
      <div>
        <span className="bg-background border w-fit  z-10 text-foreground px-4 py-2 text-sm rounded-full font-medium">
          FAQs
        </span>
        <h1 className="mt-5 text-4xl  font-medium tracking-tight font-outfit">
          Frequently Asked Questions
        </h1>
        <p className="mt-6 md:text-lg text-center justify-center  text-foreground  max-w-md md:max-w-xl lg:max-w-2xl mx-auto">
          Find quick answers to the most common questions about Doxiverse, our mission, and how we
          can help you navigate the world of healthcare AI.
        </p>
      </div>
      <div className="max-w-2xl w-full">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          value={value}
          onValueChange={setValue}
        >
          {faqData.map(faq => {
            const isOpen = value === faq.number;
            return (
              <AccordionItem value={faq.number} key={faq.number} className="border-0 w-full">
                <div
                  className={cn(
                    isOpen &&
                      "bg-gradient-to-r from-primary/40 via-primary/5 w-full mx-auto h-full to-background p-2 rounded-4xl"
                  )}
                >
                  <div
                    className={cn(
                      "bg-background  rounded-3xl  h-full p-4 flex flex-col gap-5",
                      isOpen && "border"
                    )}
                  >
                    <AccordionTrigger
                      hasIcon={false}
                      className="flex justify-between items-center  w-full p-0   hover:no-underline"
                    >
                      <div className=" gap-4 flex items-center font-outfit text-lg ">
                        <div
                          className={cn(
                            "flex items-center justify-center size-9.5 font-bold   rounded-full flex-shrink-0",
                            isOpen && "border"
                          )}
                        >
                          {faq.number}
                        </div>
                        <p className="font-medium  hover:underline ">{faq.title}</p>
                      </div>
                      <div
                        className={cn(
                          "flex items-center justify-center size-9 border rounded-full flex-shrink-0",
                          isOpen && "border-0"
                        )}
                      >
                        {isOpen ? <Minus /> : <Plus />}
                      </div>
                    </AccordionTrigger>

                    <AccordionContent className="flex flex-col ps-13">
                      <p className="text-start ">{faq.answer}</p>
                    </AccordionContent>
                  </div>
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
