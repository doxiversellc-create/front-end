import JobsList from "@/app/(main)/ai-jobs/_components/JobsList";
import { Job } from "@/app/(main)/ai-jobs/page";
import { serverFetchPublic } from "@/lib/api/server";

export default async function LoadJobs({
  queryParams,
  page_size,
}: {
  page_size: string;
  queryParams: URLSearchParams;
}) {
  const jobsData = await serverFetchPublic<{
    results: Job[];
    count: number;
    next: string | null;
    previous: string | null;
  }>(`/jobs?${queryParams.toString()}`, { retry: { retries: 3, delay: 1000 } });
  return (
    <>
      <JobsList
        jobsData={jobsData.results}
        count={jobsData.count}
        totalPages={Math.ceil(jobsData.count / Number.parseInt(page_size))}
      />
    </>
  );
}
