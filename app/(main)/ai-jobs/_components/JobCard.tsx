"use client";
import { useState } from "react";
import Link from "next/link";

import { Bookmark, CirclePoundSterling, ExternalLink, MapPin } from "lucide-react";

import { Card } from "@/components/ui/card";

interface JobCardProps {
  title: string;
  company: string;
  description: string;
  tags: string[];
  salary?: string;
  location: string;
  type: string;
  publishedDate: string;
  author: string;
}

const JobCard = ({
  title,
  description,
  tags,
  salary,
  location,
  type,
  publishedDate,
  author,
}: JobCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const maxChars = 150;

  const shouldTruncate = description.length > maxChars;
  const displayedText = expanded ? description : description.slice(0, maxChars);

  return (
    <Card className="rounded-none border-0 p-4 md:p-8 [&:not(:last-child)]:border-b">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="text-muted-foreground flex items-center text-sm">
            <span>
              By <span className="text-foreground font-semibold">{author}</span>
            </span>
            <span className="mx-2">•</span>
            <span className="text-sm">Published on {publishedDate}</span>
          </div>
          <h2 className="font-outfit mb-1 cursor-pointer text-lg font-medium transition-colors md:text-xl">
            {title}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            {displayedText}
            {!expanded && shouldTruncate && "..."}
          </p>
          {shouldTruncate && (
            <button
              className="text-primary text-sm font-medium underline"
              onClick={() => setExpanded(prev => !prev)}
            >
              {expanded ? "See less" : "See more"}
            </button>
          )}
        </div>
        <Bookmark className="h-5 w-5" />
      </div>

      <div className="flex flex-wrap gap-4">
        {tags.map(tag => (
          <span className="text-muted-foreground text-sm" key={tag}>
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex flex-col flex-wrap md:flex-row md:items-center md:justify-between">
        <div className="text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
          {salary && (
            <div className="flex items-center space-x-1">
              <CirclePoundSterling className="text-foreground h-5 w-5" />
              <span>{salary}</span>
            </div>
          )}
          <div className="flex items-center space-x-1">
            <span className="text-muted-foreground/50">•</span>
            <span className="mr-1 pl-1">{type}</span>
          </div>
          <div className="flex items-center space-x-1 border-l-2 pl-1">
            <MapPin className="text-foreground h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>

        <Link
          href="/"
          className="text-brand border-brand hover:bg-brand mt-3 flex cursor-pointer items-center gap-1 self-start underline md:mt-0 md:self-auto"
        >
          <span>Visit Site</span>
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
};

export default JobCard;
