"use client";

import { useEffect, useRef, useState } from "react";

import CommentsSection from "@/app/(main)/blogs/[id]/_components/CommentsSection";
import { Skeleton } from "@/components/ui/skeleton";
import { extractHeadingAndContentClient, generateDummyArray } from "@/lib/utils";
import { ArticleComment, ArticleDetail } from "@/types/blogs.types";

interface ArticleContentProps {
  articleDetail: ArticleDetail;
  comments: ArticleComment[] | undefined;
}
export default function ArticleContent({ articleDetail, comments }: ArticleContentProps) {
  const [activeSection, setActiveSection] = useState("");
  const tocRef = useRef<HTMLDivElement>(null);
  const tocRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
  const [blogHeaders, setBlogHeaders] = useState<{ id: string; text: string }[]>([]);
  const [content, setContent] = useState("");
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    setContentLoaded(false);
    const { content, headings } = extractHeadingAndContentClient(articleDetail.content);
    setBlogHeaders(headings);
    setContent(content);
    setContentLoaded(true);
  }, [articleDetail.content]);

  useEffect(() => {
    const SCROLL_OFFSET = 150;

    const handleScroll = () => {
      let currentSectionId = "";

      for (let i = blogHeaders.length - 1; i >= 0; i--) {
        const section = blogHeaders[i];
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
  }, [blogHeaders]);

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
            {contentLoaded ? (
              <article
                className="prose prose-lg font-inter text-muted-foreground max-w-none space-y-5 pb-7"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            ) : (
              <div className="mt-10 flex w-full flex-col gap-6">
                {generateDummyArray(6).map(item => (
                  <div key={item} className="space-y-3">
                    <Skeleton className="h-7 w-2/3" />
                    <Skeleton className="h-5 w-full" />
                    <Skeleton className="h-5 w-5/6" />
                    {item % 2 === 0 && <Skeleton className="h-[300px] w-full rounded-xl" />}
                  </div>
                ))}
              </div>
            )}

            {articleDetail.tags.length > 0 && (
              <div className="my-10 flex flex-wrap gap-3 border-t pt-7">
                {articleDetail.tags.map(tag => (
                  <div key={tag.id} className="bg-muted rounded-full px-4 py-2 text-base">
                    {tag.name}
                  </div>
                ))}
              </div>
            )}
            <CommentsSection articleId={articleDetail.id.toString()} comments={comments} />
          </div>

          {/* Sticky Table of Contents */}
          <div className="hidden min-w-[280px] lg:col-span-1 lg:block">
            <div className="sticky top-24">
              {/* Table of Contents */}
              <div className="flex flex-col gap-6" ref={tocRef}>
                <h3 className="font-inter text-xl font-bold">Table of Contents</h3>
                <div className="relative">
                  {/* Vertical line */}
                  <div className="bg-secondary absolute top-0 bottom-0 left-0 w-[3px]" />

                  <ul className="relative ml-5 space-y-4">
                    {blogHeaders.map(section => (
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
