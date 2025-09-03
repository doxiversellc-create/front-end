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

export default function NotableHealthContent({ content }: ContentProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="relative max-w-4xl mx-auto space-y-8">
      {/* Main Content */}
      <div
        className={`space-y-6 transition-all duration-500 ${
          expanded ? "max-h-none" : "max-h-[500px] overflow-hidden relative"
        }`}
      >
        {/* Faded overlay when not expanded */}
        {!expanded && (
          <div className="absolute -bottom-10 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        )}
        {content.sections.map(section => (
          <div key={section.title} className="space-y-4 ">
            <h2
              className={`text-${section.titleSize} font-${section.titleWeight} font-outfit text-foreground`}
            >
              {section.title}
            </h2>
            {section.paragraphs && (
              <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                {section.paragraphs.map(paragraph => (
                  <p key={paragraph.slice(1, 7)}>{paragraph}</p>
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
      <div className="flex justify-center bg-gradient-to-b from-transparent to-background">
        <Button
          variant="secondary"
          onClick={() => setExpanded(!expanded)}
          className="rounded-full cursor-pointer"
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
