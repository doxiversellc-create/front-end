import { Card } from "@/components/ui/card";

const Sidebar = () => {
  const topTags = ["#Dentist", "#Anesthesia", "#Nursing", "#Psychiatrist", "#Radiology"];

  return (
    <aside className="space-y-2">
      <Card className="p-2 shadow-none border-none">
        <h3 className="font-semibold font-outfit">Top Tagged Jobs</h3>
        <div className="flex flex-wrap gap-2">
          {topTags.map(tag => (
            <span
              key={tag}
              className="px-3 py-1 bg-secondary text-secondary-foreground/80 rounded-full text-xs md:text-sm font-medium transition-colors hover:bg-secondary/80"
            >
              {tag}
            </span>
          ))}
        </div>
      </Card>

      <Card className="p-4 shadow-none border-none">
        <h3 className="font-semibold font-outfit">About our Job Sources</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          At Doxiverse, we aggregate healthcare-related AI and healthcare job listings from trusted
          industry sources, carefully selected for their reliability and expertise. Our goal is to
          connect you with opportunities that reflect the latest advancements in patient care and
          medical technology, ensuring each role has impactful and credible.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We update listings daily to deliver fresh opportunities, connecting talent with
          cutting-edge healthcare solutions and empowering you to thrive in this evolving field.
        </p>
        <div className="">
          <div className="flex space-x-4 text-xs text-muted-foreground">
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
