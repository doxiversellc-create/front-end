import SectionHeader from "../../../components/SectionHeader";
import { Article } from "../page";
import ArticleCardTwo from "./ArticleCardTwo";

export default function EditorsPickSection() {
  const editorsPickArticles: Article[] = [
    {
      title: "How AI and Genomics Are Driving Personalized Treatment Forward",
      slug: "how-ai-and-genomics-are-driving-personalized-treatment-forward",
      description:
        "Fusion of genetic data with AI allows physicians to design treatment suited for each patient.",
      author: "Barkonal Accent",
      date: "Feb 5, 2025",
      timeToRead: "4 min Read",
      image: "/news-7.png",
    },
    {
      title: "AI Systems in Emergency Rooms Speed Up Patient Triage Process",
      slug: "ai-systems-in-emergency-rooms-speed-up-patient-triage-process",
      description:
        "Emergency departments use AI to analyze symptoms in fast prioritize patients with accuracy.",
      author: "Leslie Alexander",
      date: "Feb 4, 2025",
      timeToRead: "4 min Read",
      image: "/news-8.png",
    },
    {
      title: "AI-Powered Robotic Nurses Begin Their Work in Modern Hospitals",
      slug: "ai-powered-robotic-nurses-begin-their-work-in-modern-hospitals",
      description:
        "Hospitals introduce AI robots that assist staff with monitoring patients and handling routine care.",
      author: "Brooklyn Simmons",
      date: "Feb 3, 2025",
      timeToRead: "4 min Read",
      image: "/news-9.png",
    },
  ];
  return (
    <div>
      <div className="flex flex-col my-16 lg:flex-row gap-5 md:gap-0 justify-between w-full max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col gap-8 max-w-[352px]">
          <SectionHeader className="w-fit">Editor’s picks</SectionHeader>
          <p className="text-3xl lg:text-4xl font-semibold font-outfit">Insights You Can’t Miss</p>
          <p className="text-base md:text-lg md:mt-5 text-muted-foreground font-inter">
            Explore handpicked articles packed with expert insights, trending topics, and valuable
            tips. These recommended reads are carefully selected to keep you informed, inspired, and
            ahead in the world of healthcare AI.
          </p>
        </div>
        <div className="space-y-8 md:space-y-10 animate-in fade-in-50 slide-in-from-bottom-4 duration-500 max-w-[744px]">
          {editorsPickArticles.map(article => (
            <ArticleCardTwo key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
