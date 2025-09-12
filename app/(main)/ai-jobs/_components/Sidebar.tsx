import { Card } from "@/components/ui/card";
import { AIJobsContent } from "@/types/content.types";

const Sidebar = ({ content }: { content: AIJobsContent }) => {
  const topTags = ["Dentist", "Anesthesia", "Nursing", "Psychiatrist", "Radiology"];

  return (
    <aside className="space-y-2">
      <Card className="border-none shadow-none">
        <h3 className="font-outfit text-lg font-semibold">Top Tagged Jobs</h3>
        <div className="flex flex-wrap gap-2">
          {topTags.map(tag => (
            <span key={tag} className="bg-secondary rounded-full px-3 py-1 text-sm">
              #{tag}
            </span>
          ))}
        </div>
      </Card>

      <Card className="border-none shadow-none">
        <h3 className="font-outfit text-lg font-semibold">{content.jobs_source_title}</h3>
        {content.jobs_sources_description.split(".").map(p => {
          return (
            <p
              className="text-muted-foreground text-sm leading-relaxed md:text-base"
              key={p.slice(1, 10)}
            >
              {p}.
            </p>
          );
        })}

        <div className="">
          <div className="text-muted-foreground flex space-x-4 text-sm">
            <a href="/terms" className="hover:text-foreground transition-colors">
              Terms of Use
            </a>
            <span>•</span>
            <a href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </Card>
    </aside>
  );
};

export default Sidebar;
