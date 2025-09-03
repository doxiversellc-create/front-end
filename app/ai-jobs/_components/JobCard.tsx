"use client";
import { useState } from "react";

import { Bookmark, CirclePoundSterling, ExternalLink, MapPin } from "lucide-react";

import { Card } from "@/components/ui/card";
import Link from "next/link";

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
    <Card className="p-4 md:p-8 border-0 rounded-none not-last:border-b">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center text-sm text-muted-foreground ">
            <span>
              By <span className="font-semibold text-foreground">{author}</span>
            </span>
            <span className="mx-2">•</span>
            <span className="text-sm">Published on {publishedDate}</span>
          </div>
          <h2 className="md:text-xl text-lg font-outfit font-medium mb-1 cursor-pointer transition-colors">
            {title}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            {displayedText}
            {!expanded && shouldTruncate && "..."}
          </p>
          {shouldTruncate && (
            <button
              className="text-primary text-sm font-medium underline "
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

      <div className="flex flex-col md:flex-row md:items-center md:justify-between flex-wrap">
        <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-sm text-muted-foreground">
          {salary && (
            <div className="flex items-center space-x-1">
              <CirclePoundSterling className="h-5 w-5 text-foreground" />
              <span>{salary}</span>
            </div>
          )}
          <div className="flex items-center space-x-1">
            <span className="text-muted-foreground/50">•</span>
            <span className="mr-1 pl-1">{type}</span>
          </div>
          <div className="flex items-center space-x-1 border-l-2 pl-1">
            <MapPin className="h-4 w-4 text-foreground" />
            <span>{location}</span>
          </div>
        </div>

        <Link
          href="/"
          className="mt-3 md:mt-0 text-brand border-brand hover:bg-brand underline flex items-center gap-1 cursor-pointer self-start md:self-auto"
        >
          <span>Visit Site</span>
          <ExternalLink className="w-4 h-4" />
        </Link>
      </div>
    </Card>
  );
};

export default JobCard;
