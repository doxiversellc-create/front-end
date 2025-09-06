"use client";

import { useEffect, useMemo, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Pagination } from "@/components/Pagination";
import { Sort } from "@/components/Sort";

import NewsCard from "./NewsCard";

const newsData = [
  {
    id: 1,
    category: "ai",
    image: "/news-1.png",
    date: "Feb 18, 2025",
    title: "AI designs antibiotics for gonorrhoea and MRSA superbugs",
    description:
      "Two new potential drugs have been designed by AI to kill drug-resistant bacteria...",
  },
  {
    id: 2,
    category: "mental",
    image: "/news-2.png",
    date: "Feb 20, 2025",
    title: "AI chatbot helps reduce mental health wait times in Southern Canada",
    description:
      "The app handled over 5,000 sessions, freeing up 1,500 therapists hours in three months...",
  },
  {
    id: 3,
    category: "mental",
    image: "/news-3.png",
    date: "Feb 18, 2025",
    title: "AI designs antibiotics for gonorrhoea and MRSA superbugs",
    description:
      "Two new potential drugs have been designed by AI to kill drug-resistant bacteria...",
  },
  {
    id: 4,
    category: "ai",
    image: "/news-4.png",
    date: "Feb 20, 2025",
    title: "AI chatbot helps reduce mental health wait times in Southern Canada",
    description:
      "The app handled over 5,000 sessions, freeing up 1,500 therapists hours in three months...",
  },
  {
    id: 5,
    category: "mental",
    image: "/news-5.png",
    date: "Feb 18, 2025",
    title: "AI designs antibiotics for gonorrhoea and MRSA superbugs",
    description:
      "Two new potential drugs have been designed by AI to kill drug-resistant bacteria...",
  },
  {
    id: 6,
    category: "ai",
    image: "/news-6.png",
    date: "Feb 20, 2025",
    title: "AI chatbot helps reduce mental health wait times in Southern Canada",
    description:
      "The app handled over 5,000 sessions, freeing up 1,500 therapists hours in three months...",
  },
  {
    id: 7,
    category: "mental",
    image: "/news-7.png",
    date: "Feb 18, 2025",
    title: "AI designs antibiotics for gonorrhoea and MRSA superbugs",
    description:
      "Two new potential drugs have been designed by AI to kill drug-resistant bacteria...",
  },
  {
    id: 8,
    category: "ai",
    image: "/news-8.png",
    date: "Feb 20, 2025",
    title: "AI chatbot helps reduce mental health wait times in Southern Canada",
    description:
      "The app handled over 5,000 sessions, freeing up 1,500 therapists hours in three months...",
  },
  {
    id: 9,
    category: "mental",
    image: "/news-9.png",
    date: "Feb 18, 2025",
    title: "AI designs antibiotics for gonorrhoea and MRSA superbugs",
    description:
      "Two new potential drugs have been designed by AI to kill drug-resistant bacteria...",
  },

  {
    id: 10,
    category: "ai",
    image: "/news-6.png",
    date: "Feb 20, 2025",
    title: "AI chatbot helps reduce mental health wait times in Southern Canada",
    description:
      "The app handled over 5,000 sessions, freeing up 1,500 therapists hours in three months...",
  },
  {
    id: 11,
    category: "mental",
    image: "/news-7.png",
    date: "Feb 18, 2025",
    title: "AI designs antibiotics for gonorrhoea and MRSA superbugs",
    description:
      "Two new potential drugs have been designed by AI to kill drug-resistant bacteria...",
  },
  {
    id: 12,
    category: "ai",
    image: "/news-8.png",
    date: "Feb 20, 2025",
    title: "AI chatbot helps reduce mental health wait times in Southern Canada",
    description:
      "The app handled over 5,000 sessions, freeing up 1,500 therapists hours in three months...",
  },
  {
    id: 13,
    category: "mental",
    image: "/news-9.png",
    date: "Feb 18, 2025",
    title: "AI designs antibiotics for gonorrhoea and MRSA superbugs",
    description:
      "Two new potential drugs have been designed by AI to kill drug-resistant bacteria...",
  },
];

const latastNews = [
  {
    id: 1,
    category: "ai",
    image: "/latest-1.png",
    date: "Feb 20, 2025",
    title: "AI chatbot helps reduce mental health wait times in Southern Canada",
    description:
      "The app handled over 5,000 sessions, freeing up 1,500 therapists hours in three months...",
  },
  {
    id: 2,
    category: "mental",
    image: "/latest-2.png",
    date: "Feb 18, 2025",
    title: "AI designs antibiotics for gonorrhoea and MRSA superbugs",
    description:
      "Two new potential drugs have been designed by AI to kill drug-resistant bacteria...",
  },
];

const sortOptions = [
  { label: "Latest", value: "date-desc" },
  { label: "Oldest", value: "date-asc" },
  { label: "Title A-Z", value: "title-asc" },
  { label: "Title Z-A", value: "title-desc" },
];

export default function NewsGrid() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const newsSectionRef = useRef<HTMLDivElement>(null);

  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const sort = searchParams.get("sort") || "date-asc";
  const PAGE_SIZE = 9;
  // Sort Data
  const sortedData = useMemo(() => {
    const data = [...newsData];
    switch (sort) {
      case "date-asc":
        data.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        break;
      case "date-desc":
        data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        break;
      case "title-asc":
        data.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        data.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }
    return data;
  }, [sort]);

  const totalPages = Math.ceil(sortedData.length / PAGE_SIZE);
  const paginatedData = sortedData.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  // Handle Page Change
  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());

    // Navigate without scroll (we'll handle scroll manually)
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Scroll when page changes
  useEffect(() => {
    if (newsSectionRef.current) {
      const yOffset = -120; // offset for sticky header
      const y = newsSectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "instant" });
    }
  }, [currentPage]); // only when page changes

  return (
    <div>
      <div className="mb-8 flex w-full items-center justify-between gap-4 border-b py-4">
        <p className="text-foreground font-semibold">Latest News</p>
        <div className="flex items-center gap-1">
          <div className="bg-muted-foreground/15 h-1 w-12 rounded-2xl" />
          <Sort name="sort" options={sortOptions} />
        </div>
      </div>

      {/* Latest News */}
      <div className="mb-8 hidden gap-16 space-y-2 md:grid md:grid-cols-2 lg:grid-cols-2">
        {latastNews.map(news => (
          <NewsCard key={news.id} {...news} />
        ))}
      </div>

      {/* Paginated News */}
      <div
        ref={newsSectionRef}
        className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3"
      >
        {paginatedData.map(news => (
          <NewsCard key={news.id} {...news} />
        ))}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
