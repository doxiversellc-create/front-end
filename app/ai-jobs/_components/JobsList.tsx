"use client";
import { Pagination } from "@/components/Pagination";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { Job } from "./../data/jobsData";
import JobCard from "./JobCard";
import JobFilters from "./JobFilters";

export default function JobsList({ jobsData }: { jobsData: Job[] }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const newsSectionRef = useRef<HTMLDivElement>(null);

  // 🔹 Filters
  const activeFilter = searchParams.get("filter") || "recent";
  const query = searchParams.get("q")?.toLowerCase() || "";

  // 🔹 Pagination
  const currentPage = parseInt(searchParams.get("page") || "1", 10);
  const PAGE_SIZE = 2;

  // Apply filters
  let filteredJobs = jobsData;

  if (activeFilter === "saved") {
    filteredJobs = jobsData.filter(job => job.isSaved); // you’ll need a field for saved jobs
  }

  if (query) {
    filteredJobs = filteredJobs.filter(
      job =>
        job.title.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query) ||
        job.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }

  const totalPages = Math.ceil(filteredJobs.length / PAGE_SIZE);
  const paginatedData = filteredJobs.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Scroll to section when page changes
  useEffect(() => {
    if (newsSectionRef.current) {
      const yOffset = -120; // offset for sticky header
      const y = newsSectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "instant" });
    }
  }, [currentPage]);

  return (
    <div className="lg:col-span-3">
      <JobFilters />
      <div
        ref={newsSectionRef}
        className="border border-border rounded-2xl overflow-hidden divide-y divide-border divide-opacity-100"
      >
        {paginatedData.map(job => (
          <JobCard key={job.id} {...job} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={totalPages}
      />
    </div>
  );
}
