"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bookmark, CirclePoundSterling, ExternalLink, MapPin } from "lucide-react";
import { useState } from "react";

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
    <Card className="p-8 border-0 rounded-none">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <span>
              By <span className="font-medium text-foreground">{author}</span>
            </span>
            <span className="mx-2">•</span>
            <span>Published on {publishedDate}</span>
          </div>
          <h2 className="text-xl font-outfit font-medium mb-2 cursor-pointer transition-colors">
            {title}
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-2">
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
        <Button variant="ghost" size="icon" className="ml-4 shrink-0">
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex flex-wrap gap-4 mb-4">
        {tags.map(tag => (
          <span className="text-muted-foreground" key={tag}>
            #{tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          {salary && (
            <div className="flex items-center space-x-1">
              <CirclePoundSterling className="h-5 w-5 text-foreground" />
              <span>{salary}</span>
            </div>
          )}
          <div className="flex items-center space-x-1">
            <span className="text-muted-foreground/50">•</span>
            <span className="pl-2">{type}</span>
          </div>
          <div className="flex items-center space-x-1 border-l-2 pl-2">
            <MapPin className="h-4 w-4 text-foreground" />
            <span>{location}</span>
          </div>
        </div>
        <span className="text-brand border-brand hover:bg-brand underline flex items-center gap-1 cursor-pointer">
          <span>Visit Site</span>
          <ExternalLink className="w-4 h-4" />
        </span>
      </div>
    </Card>
  );
};

export default JobCard;
