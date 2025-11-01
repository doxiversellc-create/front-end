/* eslint-disable react/no-array-index-key */
"use client";

import { useState } from "react";

import { ChevronDown, ChevronUp } from "lucide-react";

import { Button } from "@/components/ui/button";

// Type definitions for the content prop
interface Section {
  title: string;
  titleSize: string;
  titleWeight: string;
  paragraphs?: string[];
  listItems?: string[];
  listType?: "disc" | "bullet" | string;
  listTextSize?: string;
}

export interface Content {
  sections: Section[];
}

interface ContentProps {
  content: Content;
}

export function Description({ content }: ContentProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative mx-auto max-w-4xl space-y-8">
      {/* Main Content */}
      <div
        className={`space-y-6 transition-all duration-500 ${
          expanded ? "max-h-none" : "relative max-h-[500px] overflow-hidden"
        }`}
      >
        {/* Faded overlay when not expanded */}
        {!expanded && (
          <div className="from-background pointer-events-none absolute -bottom-10 left-0 h-32 w-full bg-gradient-to-t to-transparent" />
        )}
        {content.sections.map(section => (
          <div key={section.title} className="space-y-4">
            <h2
              className={`text-${section.titleSize} font-${section.titleWeight} font-outfit text-foreground`}
            >
              {section.title}
            </h2>
            {section.paragraphs && (
              <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
                {section.paragraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            )}
            {section.listItems && (
              <ul
                className={`${section.listType === "disc" ? "list-disc pl-6" : "space-y-2"} text-${section.listTextSize || "base"} text-muted-foreground`}
              >
                {section.listItems.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      {/* Read More Button */}
      <div className="to-background flex justify-center bg-gradient-to-b from-transparent">
        <Button
          variant="secondary"
          onClick={() => setExpanded(!expanded)}
          className="cursor-pointer rounded-full"
        >
          {expanded ? (
            <>
              <span>Read Less</span>
              <ChevronUp />
            </>
          ) : (
            <>
              <span>Read More</span>
              <ChevronDown />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
