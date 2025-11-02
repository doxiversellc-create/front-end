"use client";

import { useEffect, useRef, useState } from "react";

interface NewsContentProps {
  processedContent: string;
  headings: { id: string; text: string }[];
}
export default function NewsContent({ headings, processedContent }: NewsContentProps) {
  const [activeSection, setActiveSection] = useState("");
  const tocRef = useRef<HTMLDivElement>(null);
  const tocRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});

  useEffect(() => {
    const SCROLL_OFFSET = 150;

    const handleScroll = () => {
      let currentSectionId = "";

      for (let i = headings.length - 1; i >= 0; i--) {
        const section = headings[i];
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= SCROLL_OFFSET) {
            currentSectionId = section.id;
            break;
          }
        }
      }
      setActiveSection(currentSectionId);
    }; // Use passive scroll event listener for performance

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  const handleLinkClick = (id: string) => {
    const FIXED_HEADER_HEIGHT = 80;
    const element = document.getElementById(id);

    if (element) {
      const elementPosition = element.getBoundingClientRect().top;

      const offsetPosition = elementPosition + window.scrollY - FIXED_HEADER_HEIGHT;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="">
      <div className="w-full py-8 lg:px-0">
        <div className="flex gap-16">
          {/* Main Content */}
          <div className="w-full space-y-5 lg:col-span-3">
            <article
              className="prose prose-lg font-inter text-muted-foreground max-w-none space-y-5 pb-7"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
          </div>

          {/* Sticky Table of Contents */}
          <div className="hidden min-w-[280px] lg:col-span-1 lg:block">
            <div className="sticky top-24">
              {/* Table of Contents */}
              {headings.length > 0 && (
                <div className="flex flex-col gap-6" ref={tocRef}>
                  <h3 className="font-inter text-xl font-bold">Table of Contents</h3>
                  <div className="relative">
                    {/* Vertical line */}
                    <div className="bg-secondary absolute top-0 bottom-0 left-0 w-[3px]" />

                    <ul className="relative ml-5 space-y-4">
                      {headings.map(section => (
                        <li
                          key={section.id}
                          ref={el => {
                            tocRefs.current[section.id] = el;
                          }}
                          className="relative"
                        >
                          <button
                            onClick={() => handleLinkClick(section.id)}
                            className={`font-inter text-md text-description relative block text-left transition-all duration-300 ease-in-out ${
                              activeSection === section.id
                                ? "font-bold text-black"
                                : "text-description hover:cursor-pointer hover:text-black"
                            }`}
                          >
                            {/* Blue indicator for active section */}
                            {activeSection === section.id && (
                              <div className="bg-primary absolute top-0 bottom-0 left-0 -ml-5 w-[3px] rounded-lg transition-all duration-300 ease-in-out" />
                            )}
                            {section.text}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
