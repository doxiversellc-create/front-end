"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { Pagination } from "../../components/Pagination";
import EditorsPickSection from "./_components/EditorsPickSection";
import HeroSection from "./_components/HeroSection";
import LastThreeArticles from "./_components/LastThreeArticles";
import LatestArticle from "./_components/LatestArticle";
import { RecentArticles } from "./_components/RecentArticles";

export interface Article {
  title: string;
  author: string;
  date: string;
  description: string;
  timeToRead: string;
  image: string;
  slug: string;
}

const latestArticle: Article = {
  title: "How Artificial Intelligence is Completely Transforming the Way We Detect Diseases Early",
  author: "Brooklyn Simmons",
  date: "Feb 21, 2025",
  description:
    "AI is transforming how diseases are detected, analyzing scans and tests to identify conditions earlier than ever. This allows physicians to act faster, improve outcomes, and prevent complications before they become severe.",
  timeToRead: "5 min",
  image: "/news-1.png",
  slug: "how-artificial-intelligence-is-completely-transforming-the-way-we-detect-diseases-early",
};

// Extended mock data for pagination (15 articles for 3 pages, 5 per page)
export const allBlogArticles: Article[] = [
  // Page 1 (5 articles)
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

  // Page 2 (5 articles)
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
  {
    title: "Machine Learning Revolutionizes Drug Discovery Process",
    slug: "machine-learning-revolutionizes-drug-discovery-process",
    description:
      "AI algorithms accelerate pharmaceutical research, identifying promising compounds faster than traditional methods.",
    author: "Dr. Sarah Chen",
    date: "Feb 2, 2025",
    timeToRead: "6 min Read",
    image: "/news-1.png",
  },

  // Page 3 (5 articles)
  {
    title: "Virtual Reality Therapy Transforms Mental Health Treatment",
    slug: "virtual-reality-therapy-transforms-mental-health-treatment",
    description:
      "VR-based therapeutic interventions provide immersive treatment experiences for anxiety and PTSD patients.",
    author: "Dr. Michael Torres",
    date: "Feb 1, 2025",
    timeToRead: "5 min Read",
    image: "/news-2.png",
  },
  {
    title: "AI Algorithms Predict Disease Outbreaks Before They Spread",
    slug: "ai-algorithms-predict-disease-outbreaks-before-they-spread",
    description:
      "Epidemiological AI models analyze patterns to forecast and prevent infectious disease outbreaks.",
    author: "Dr. Emily Watson",
    date: "Jan 31, 2025",
    timeToRead: "7 min Read",
    image: "/news-3.png",
  },
  {
    title: "Smart Contact Lenses Monitor Blood Sugar Levels Continuously",
    slug: "smart-contact-lenses-monitor-blood-sugar-levels-continuously",
    description:
      "Revolutionary contact lenses equipped with sensors provide real-time glucose monitoring for diabetics.",
    author: "Tech Health Today",
    date: "Jan 30, 2025",
    timeToRead: "4 min Read",
    image: "/news-4.png",
  },
  {
    title: "AI-Powered Prosthetics Learn User Movement Patterns",
    slug: "ai-powered-prosthetics-learn-user-movement-patterns",
    description:
      "Advanced prosthetic devices adapt to individual user behavior for more natural movement control.",
    author: "Robotics Weekly",
    date: "Jan 29, 2025",
    timeToRead: "5 min Read",
    image: "/news-9.png",
  },
  {
    title: "Telemedicine AI Assistants Enhance Remote Patient Care",
    slug: "telemedicine-ai-assistants-enhance-remote-patient-care",
    description:
      "AI-powered virtual assistants improve telehealth consultations with real-time diagnostic support.",
    author: "Digital Health Review",
    date: "Jan 28, 2025",
    timeToRead: "6 min Read",
    image: "/news-6.png",
  },
];

const ARTICLES_PER_PAGE = 5;

const BlogsPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const paginationRef = useRef<HTMLDivElement>(null);
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    if (paginationRef.current && currentPage > 1) {
      const yOffset = -40; // offset for sticky header
      const y = paginationRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [currentPage]);

  const totalPages = Math.ceil(allBlogArticles.length / ARTICLES_PER_PAGE);

  return (
    <div className="flex flex-col pb-20 mb-14">
      <HeroSection />

      {currentPage === 1 ? (
        // Page 1: Show full layout with all sections
        <>
          <LatestArticle article={latestArticle} />
          <RecentArticles allArticles={allBlogArticles} />
          <EditorsPickSection />
          <LastThreeArticles />
        </>
      ) : (
        // Pages 2+: Show only hero and paginated articles
        <RecentArticles allArticles={allBlogArticles} />
      )}

      {/* Pagination at the bottom of all content */}
      {totalPages > 1 && (
        <div ref={paginationRef} className="w-full max-w-[1200px] mx-auto px-4">
          <Pagination
            className="mt-16"
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
