import { fetchPageContent } from "@/actions/content.actions";
import JobsDisplayer from "@/app/(main)/ai-jobs/_components/JobsDisplayer";
import { serverFetchPublic } from "@/lib/api/server";
import CreateJobButton from "./_components/CreateJobButton";

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
  const jobsData = await serverFetchPublic<{
    results: Job[];
    count: number;
    next: string | null;
    previous: string | null;
  }>(`/jobs?${queryParams.toString()}`, { retry: { retries: 3, delay: 1000 } });
  return (
    <div className="min-h-screen px-6 md:px-16 lg:px-20">
      <div className="from-primary/25 pointer-events-none absolute top-0 left-0 -z-10 h-[50vh] w-full bg-gradient-to-b to-transparent" />
      <main className="mx-auto max-w-7xl">
        <section className="pt-14 pb-12 text-left">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            {/* Title + Subtitle */}
            <div>
              <span className="bg-background rounded-full px-3 py-2 text-sm font-semibold">
                {content.page_title}
              </span>
              <h1 className="font-outfit mt-4 text-[40px] font-semibold tracking-tight">
                {content.subtitle}
              </h1>
            </div>
            <CreateJobButton categories={categoriesData.results} />
          </div>
        </section>

        <JobsDisplayer
          categories={categoriesData.results}
          content={content}
          count={jobsData.count}
          initialQueryParams={queryParams}
          jobsData={jobsData}
          page_size={page_size}
        />
      </main>
    </div>
  );
};

export default JobsPage;
