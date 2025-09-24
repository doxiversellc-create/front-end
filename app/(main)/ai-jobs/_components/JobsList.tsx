"use client";
import { useEffect, useRef } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { Pagination } from "@/components/Pagination";
import type { Job } from "../page";
import JobCard from "./JobCard";

interface JobsListProps {
  jobsData: Job[];
  count: number;
  totalPages: number;
}

export default function JobsList({ jobsData, count, totalPages }: JobsListProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const jobsSectionRef = useRef<HTMLDivElement>(null);
  const currentPage = Number.parseInt(searchParams.get("page") || "1", 10);

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: false });
  };

  // Scroll to section when page changes
  useEffect(() => {
    if (jobsSectionRef.current) {
      const yOffset = -120; // offset for sticky header
      const y = jobsSectionRef.current.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [currentPage]);

  if (jobsData.length === 0) {
    return (
      <div className="text-muted-foreground py-20 text-center lg:col-span-3">
        <div className="space-y-4">
          <div className="text-6xl">🔍</div>
          <h3 className="text-xl font-semibold">No jobs found</h3>
          <p>Try adjusting your filters or search terms to find more opportunities.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:col-span-3">
      <div ref={jobsSectionRef} className="space-y-4">
        <div className="flex items-center justify-between">
          <p className="text-muted-foreground text-sm">
            Showing {jobsData.length} of {count} jobs
          </p>
        </div>

        <div className="border-border overflow-hidden rounded-2xl border">
          {jobsData.map(job => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-8">
            <Pagination
              currentPage={currentPage}
              onPageChange={handlePageChange}
              totalPages={totalPages}
            />
          </div>
        )}
      </div>
    </div>
  );
}
