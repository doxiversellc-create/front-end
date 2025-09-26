"use client";

import Link from "next/link";

import { CirclePoundSterling, ExternalLink, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

type JobType = "full_time" | "part_time" | "contract" | "internship" | "freelance";

interface JobCardProps {
  id: string;
  title: string;
  company_name: string;
  location: string;
  description_preview: string;
  salary_range?: string;
  job_type: JobType;
  category: {
    id: string;
    name: string;
  };
  posted_at_formatted: string;
  is_featured: boolean;
}
const typeMap: Record<JobType, string> = {
  full_time: "Full-time",
  part_time: "Part-time",
  contract: "Contract",
  internship: "Internship",
  freelance: "Freelance",
};
const JobCard = ({
  id,
  title,
  description_preview,
  salary_range,
  location,
  job_type,
  posted_at_formatted,
  company_name,
  category,
  is_featured,
}: JobCardProps) => {
  return (
    <Card className="rounded-none border-0 p-4 md:p-8 [&:not(:last-child)]:border-b">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="text-muted-foreground flex items-center text-sm">
            <span className="hidden md:block">{company_name}</span>
            <span className="mx-2 hidden md:block">•</span>
            {/* <span className="mx-2">•</span> */}
            <span className="text-sm">Published on {posted_at_formatted}</span>
          </div>
          <h2 className="font-outfit mb-1 cursor-pointer text-lg font-medium transition-colors md:text-xl">
            <Link href={`/ai-jobs/${id}`}>{title}</Link>
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
            {description_preview}
          </p>
        </div>
        {/* <Bookmark className="h-5 w-5" /> */}
        <Badge
          className="bg-primary/10 border-primary/20 hidden border py-1 text-xs md:block"
          variant="outline"
        >
          {category.name}
        </Badge>
        {is_featured && (
          <Badge
            className="ml-2 hidden border-amber-200 bg-amber-100 py-1 text-sm text-amber-800 md:block"
            variant="outline"
          >
            Featured
          </Badge>
        )}
      </div>

      <div className="flex flex-col flex-wrap md:flex-row md:items-center md:justify-between">
        <div className="text-muted-foreground flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
          {salary_range && (
            <div className="flex items-center space-x-1">
              <CirclePoundSterling className="text-foreground h-5 w-5" />
              <span>{salary_range}</span>
            </div>
          )}
          <div className="flex items-center space-x-1">
            <span className="text-muted-foreground/50">•</span>
            <span className="mr-1 pl-1">{typeMap[job_type]}</span>
          </div>
          <div className="flex items-center space-x-1 border-l-2 pl-1">
            <MapPin className="text-foreground h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>

        <Link
          href={`/ai-jobs/${id}`}
          className="text-brand border-brand hover:bg-brand mt-3 flex cursor-pointer items-center gap-1 self-start underline md:mt-0 md:self-auto"
        >
          <span>View Detail</span>
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
};

export default JobCard;
