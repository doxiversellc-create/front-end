import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bookmark, Clock, DollarSign, ExternalLink, MapPin } from "lucide-react";

interface JobCardProps {
  title: string;
  company: string;
  description: string;
  tags: string[];
  salary?: string;
  location: string;
  type: string;
  publishedDate: string;
}

const JobCard = ({
  title,
  //   company,
  description,
  tags,
  salary,
  location,
  type,
  publishedDate,
}: JobCardProps) => {
  return (
    <Card className="p-6 border-b hover:shadow-[var(--job-card-hover-shadow)] transition-all duration-200 bg-card rounded-none">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <span>By AI Job Finder</span>
            <span className="mx-2">•</span>
            <span>Published on {publishedDate}</span>
          </div>
          <h3 className="text-lg font-semibold mb-2 hover:text-brand cursor-pointer transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
        </div>
        <Button variant="ghost" size="icon" className="ml-4 shrink-0">
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <Button
            key={index}
            variant="secondary"
            className="bg-tag-bg text-tag-text hover:bg-tag-bg/80 text-xs font-medium"
          >
            #{tag}
          </Button>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          {salary && (
            <div className="flex items-center space-x-1">
              <DollarSign className="h-4 w-4" />
              <span>{salary}</span>
            </div>
          )}
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{type}</span>
          </div>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
        </div>
        <span className="text-brand border-brand hover:bg-brand hover:text-white">
          <span>Visit Site</span>
          <ExternalLink className="w-4 h-4" />
        </span>
      </div>
    </Card>
  );
};

export default JobCard;
