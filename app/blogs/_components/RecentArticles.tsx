import Image from "next/image";

import Link from "next/link";
import { Article } from "../page";

const articles: Article[] = [
  {
    title: "Chatbots for Patient Care: The Next Nurse?",
    slug: "chatbots-for-patient-care-the-next-nurse",
    description:
      "Virtual AI assistants handle scheduling, reminders, and advice, freeing up nurses for critical care.",
    author: "Leslie Alexander",
    date: "Feb 12, 2025",
    timeToRead: "4 min Read",
    image: "/news-1.png",
  },
  {
    title: "Bias in AI Healthcare Systems: The Hidden Risk to Patient Safety",
    slug: "bias-in-ai-healthcare-systems-the-hidden-risk-to-patient-safety",
    description:
      "As hospitals adopt AI, experts warn of risks from biased data that could affect patient outcomes.",
    author: "Brooklyn Simmons",
    date: "Feb 10, 2025",
    timeToRead: "4 min Read",
    image: "/news-2.png",
  },
  {
    title: "AI Tools Detect Early Mental Health Struggles Hidden in Human Voices",
    slug: "ai-tools-detect-early-mental-health-struggles-hidden-in-human-voices",
    description:
      "Machine learning analyzes tone and speech patterns to flag early signs of depression & anxiety.",
    author: "Barkonal Accent",
    date: "Feb 9, 2025",
    timeToRead: "4 min Read",
    image: "/news-3.png",
  },
  {
    title: "How AI-Powered Documentation is Cutting Doctors' Paperwork in Half",
    slug: "how-ai-powered-documentation-is-cutting-doctors-paperwork-in-half",
    description:
      "Hospitals use AI scribes to generate notes, reducing admin time & restoring focus on patients.",
    author: "Brooklyn Simmons",
    date: "Feb 8, 2025",
    timeToRead: "4 min Read",
    image: "/news-4.png",
  },
  {
    title: "AI-Powered Wearables That Monitor Heart Attacks in Real Time",
    slug: "ai-powered-wearables-that-monitor-heart-attacks-in-real-time",
    description:
      "Smart watches with AI track vitals and send alerts to doctors before emergencies occur.",
    author: "Barkonal Accent",
    date: "Feb 7, 2025",
    timeToRead: "4 min Read",
    image: "/news-9.png",
  },
  {
    title: "AI-Assisted Surgical Planning is Making Complex Operations Safer",
    slug: "ai-assisted-surgical-planning-is-making-complex-operations-safer",
    description:
      "Surgeons rely on AI simulations that map steps, lowering risks during delicate operations.",
    author: "Leslie Alexander",
    date: "Feb 6, 2025",
    timeToRead: "4 min Read",
    image: "/news-6.png",
  },
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

export function RecentArticles() {
  return (
    <section className="w-full max-w-[1200px] px-4 mx-auto my-16 space-y-9">
      <h2 className="text-2xl font-semibold">Our Recent Articles</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
        {articles.map(article => (
          <div key={article.slug} className="">
            <div className="relative w-full h-full max-h-[260px] overflow-hidden rounded-t-[18px] rounded-b-[14px]">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                width={260}
                height={260}
                className="object-cover w-full h-full"
              />
            </div>

            <div className="space-y-3 mt-4 font-inter">
              <div className="flex items-center  gap-2 text-sm md:text-base">
                <p className="text-sm ">
                  By <span className="font-bold">{article.author}</span>
                </p>
              </div>
              <Link
                href={`/blogs/${article.slug}`}
                className="text-lg font-semibold hover:text-primary text-foreground font-outfit leading-tight group-hover:text-blue-600 transition-colors duration-200"
              >
                {article.title}
              </Link>
              <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                {article.description}
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.timeToRead}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
