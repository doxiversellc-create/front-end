import { Card } from "@/components/ui/card";

const Sidebar = () => {
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
        <h3 className="font-outfit text-lg font-semibold">About our Job Sources</h3>
        <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
          At Doxiverse, we aggregate healthcare-related AI and healthcare job listings from trusted
          industry sources, carefully selected for their reliability and expertise. Our goal is to
          connect you with opportunities that reflect the latest advancements in patient care and
          medical technology, ensuring each role is impactful and credible.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed md:text-base">
          We update listings daily to deliver fresh opportunities, connecting talent with
          cutting-edge healthcare solutions and empowering you to thrive in this evolving field.
        </p>
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
