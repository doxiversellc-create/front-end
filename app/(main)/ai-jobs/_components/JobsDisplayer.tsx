"use client";
import { Suspense, useTransition } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import JobFilters from "@/app/(main)/ai-jobs/_components/JobFilters";
import JobsList from "@/app/(main)/ai-jobs/_components/JobsList";
import JobsListSkeleton from "@/app/(main)/ai-jobs/_components/JobsListSkeleton";
import Sidebar from "@/app/(main)/ai-jobs/_components/Sidebar";
import { Category, Job } from "@/app/(main)/ai-jobs/page";
import { AIJobsContent } from "@/types/content.types";

export default function JobsDisplayer({
  categories,
  initialQueryParams,
  content,
  page_size,
  jobsData,
  count,
}: {
  categories: Category[];
  initialQueryParams: URLSearchParams;
  content: AIJobsContent;
  page_size: string;
  jobsData: {
    results: Job[];
    count: number;
    next: string | null;
    previous: string | null;
  };
  count: number;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const queryParams = initialQueryParams;
  const updateParams = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "" || value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    params.set("page", "1");

    const newUrl = `?${params.toString()}`;

    window.history.replaceState(null, "", newUrl);

    startTransition(() => {
      router.replace(newUrl, { scroll: false });
    });
  };

  return (
    <>
      <Suspense fallback={<div>Loading filters...</div>}>
        <JobFilters categories={categories} updateParams={updateParams} />
      </Suspense>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
        {isPending ? (
          <JobsListSkeleton />
        ) : (
          <Suspense fallback={<JobsListSkeleton />} key={queryParams.toString()}>
            <JobsList
              count={count}
              jobsData={jobsData.results}
              totalPages={Math.ceil(jobsData.count / Number.parseInt(page_size))}
            />
          </Suspense>
        )}

        <div className="lg:col-span-1">
          <Sidebar content={content} />
        </div>
      </div>
    </>
  );
}
