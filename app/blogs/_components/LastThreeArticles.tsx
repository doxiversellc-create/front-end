"use client";

import { Article } from "../page";
import { ArticleCardTwo } from "./ArticleCard";

export default function LastThreeArticles() {
  const lastThreeArticles: Article[] = [
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
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-7 gap-x-6 gap-y-10 justify-between w-full max-w-[1200px] mx-auto px-4">
      {lastThreeArticles.map(article => (
        <ArticleCardTwo key={article.slug} article={article} />
      ))}
    </div>
  );
}
