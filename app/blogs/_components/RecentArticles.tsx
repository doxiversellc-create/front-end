"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { Article } from "../page";
import { ArticleCardTwo } from "./ArticleCard";

const ARTICLES_PER_PAGE = 5;

interface RecentArticlesProps {
  allArticles?: Article[];
}

export function RecentArticles({ allArticles }: RecentArticlesProps) {
  const searchParams = useSearchParams();
  const articlesSectionRef = useRef<HTMLDivElement>(null);

  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    if (articlesSectionRef.current && currentPage > 1) {
      const yOffset = -40; // offset for sticky header
      const y = articlesSectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [currentPage]);

  // Default articles for when no allArticles prop is provided (backward compatibility)
  const defaultArticles: Article[] = [
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
      title: "AI-Assisted Surgical PlSanning is Making Complex Operations Safer",
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

  const articles = allArticles || defaultArticles;

  // Page 1: Show all articles (no pagination)
  // Pages 2+: Show only that page's articles
  const getCurrentArticles = () => {
    if (currentPage === 1) {
      // Page 1: Show all available articles (no pagination)
      return articles;
    } else {
      // Pages 2+: Show only that page's specific articles
      const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
      const endIndex = startIndex + ARTICLES_PER_PAGE;
      return articles.slice(startIndex, endIndex);
    }
  };

  const currentArticles = getCurrentArticles();

  return (
    <section
      className="w-full max-w-[1200px] px-4 mx-auto my-16 space-y-9"
      ref={articlesSectionRef}
    >
      <h2 className="text-2xl font-semibold">Our Recent Articles</h2>

      <div
        key={currentPage}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16 animate-in fade-in-50 slide-in-from-bottom-4 duration-500"
      >
        {currentArticles.map(article => (
          <ArticleCardTwo key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
