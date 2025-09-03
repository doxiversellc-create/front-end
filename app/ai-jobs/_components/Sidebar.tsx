import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Sidebar = () => {
  const topTags = ["#Dentist", "#Anesthesia", "#Nursing", "#Psychiatrist", "#Radiology"];

  return (
    <aside className="space-y-6">
      <Card className="p-6">
        <h3 className="font-semibold mb-4">Top Tagged Jobs</h3>
        <div className="flex flex-wrap gap-2">
          {topTags.map((tag, index) => (
            <Button
              key={index}
              variant="secondary"
              className="bg-tag-bg text-tag-text hover:bg-tag-bg/80 cursor-pointer transition-colors"
            >
              {tag}
            </Button>
          ))}
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="font-semibold mb-4">About our Job Sources</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          At Doxiverse, we aggregate healthcare-related AI and healthcare job listings from trusted
          industry sources, carefully selected for their reliability and expertise. Our goal is to
          connect you with opportunities that reflect the latest advancements in patient care and
          medical technology, ensuring each role has impactful and credible.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          We update listings daily to deliver fresh opportunities, connecting talent with
          cutting-edge healthcare solutions and empowering you to thrive in this evolving field.
        </p>
        <div className="mt-4 pt-4 border-t border-border">
          <div className="flex space-x-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Use
            </a>
            <span>•</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </Card>
    </aside>
  );
};

export default Sidebar;
