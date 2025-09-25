import { Suspense } from "react";

import { fetchPageContent } from "@/actions/content.actions";
import CreateJobButton from "@/app/(main)/ai-jobs/_components/CreateJobButton";
import JobFilters from "@/app/(main)/ai-jobs/_components/JobFilters";
import JobsListSkeleton from "@/app/(main)/ai-jobs/_components/JobsListSkeleton";
import LoadJobs from "@/app/(main)/ai-jobs/_components/LoadJobs";
import { serverFetchPublic } from "@/lib/api/server";
import Sidebar from "./_components/Sidebar";

export async function generateMetadata() {
  const { content } = await fetchPageContent("aijobs");

  return {
    title: content.title,
    description: content?.description || "Find your next opportunity",
  };
}

type JobType = "full_time" | "part_time" | "contract" | "internship" | "freelance";

export interface Job {
  id: string;
  title: string;
  company_name: string;
  location: string;
  description_preview: string;
  salary_range?: string;
  job_type: JobType;
  category: {
    id: string;
    name: string;
  };
  posted_at_formatted: string;
  is_featured: boolean;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  is_active: boolean;
  job_count: string;
  created_at: string;
  updated_at: string;
}

interface JobsPageProps {
  searchParams: Promise<{
    page?: string;
    page_size?: string;
    job_type?: string;
    location?: string;
    ordering?: string;
    search?: string;
    category?: string;
  }>;
}

const JobsPage = async ({ searchParams }: JobsPageProps) => {
  const resolvedSearchParams = await searchParams;
  const page = resolvedSearchParams.page || "1";
  const page_size = resolvedSearchParams.page_size || "5";
  const job_type = resolvedSearchParams.job_type;
  const location = resolvedSearchParams.location;
  const ordering = resolvedSearchParams.ordering || "-created_at";
  const search = resolvedSearchParams.search;
  const category = resolvedSearchParams.category;

  // Build query parameters
  const queryParams = new URLSearchParams({
    page,
    page_size,
    ordering,
  });

  if (job_type) queryParams.append("job_type", job_type);
  if (location) queryParams.append("location", location);
  if (search) queryParams.append("search", search);
  if (category) queryParams.append("category", category);

  const { content } = await fetchPageContent("aijobs");

  // Fetch jobs and categories
  const categoriesData = await serverFetchPublic<{
    results: Category[];
    count: number;
  }>("/jobs/categories/");

  return (
    <div className="min-h-screen px-6 md:px-16 lg:px-20">
      <div className="from-primary/25 pointer-events-none absolute top-0 left-0 -z-10 h-[50vh] w-full bg-gradient-to-b to-transparent" />
      <main className="mx-auto max-w-7xl">
        <section className="pt-14 pb-12 text-left">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            {/* Title + Subtitle */}
            <div>
              <span className="bg-muted rounded-full px-3 py-1.5 text-sm font-medium">
                {content.page_title}
              </span>
              <h1 className="font-outfit mt-4 text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
                {content.subtitle}
              </h1>
            </div>

            {/* Button */}

            <CreateJobButton categories={categoriesData.results} />
          </div>
        </section>

        <Suspense fallback={<div>Loading filters...</div>}>
          <JobFilters categories={categoriesData.results} />
        </Suspense>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <Suspense fallback={<JobsListSkeleton />} key={queryParams.toString()}>
            <LoadJobs queryParams={queryParams} page_size={page_size} />
          </Suspense>

          <div className="lg:col-span-1">
            <Sidebar content={content} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default JobsPage;
