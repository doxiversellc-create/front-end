import Link from "next/link";

import { ArrowUpRight, BadgeCheck, Building2, Clock, DollarSign, MapPin } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { serverFetchPublic } from "@/lib/api/server";
type JobType = "full_time" | "part_time" | "contract" | "internship" | "freelance";

interface JobData {
  id: number;
  title: string;
  company_name: string;
  location: string;
  job_type: JobType;
  category: {
    id: number;
    name: string;
  };
  description: string;
  salary_range: string;
  application_url_or_email: string;
  posted_at_formatted: string;
  days_since_posted: number;
  is_featured: boolean;
}
export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = await params;
  const tool = await serverFetchPublic<JobData>(`/jobs/${id}`);

  return {
    title: tool?.title || "AI Job Ditail",
    description: tool?.description || "Discover Top AI Jobs Tailored for You",
  };
}
export default async function JobDetail({ params }: { params: { id: string } }) {
  const { id } = await params;
  const job = await serverFetchPublic<JobData>(`/jobs/${id}`);
  const getJobTypeBadgeColor = (jobType: JobType) => {
    switch (jobType.toLowerCase()) {
      case "full_time":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 py-1 px-2 rounded";
      case "part_time":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 py-1 px-2 rounded";
      case "contract":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 py-1 px-2 rounded";
      case "internship":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 py-1 px-2 rounded";
      case "freelance":
        return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200 py-1 px-2 rounded";
      case "remote":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 py-1 px-2 rounded";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200 py-1 px-2 rounded";
    }
  };

  const formatJobType = (jobType: string) => {
    return jobType.replace("_", " ").replace(/\b\w/g, l => l.toUpperCase());
  };

  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-20">
        <div className="w-full py-8">
          <div className="mx-auto flex flex-col items-start justify-between gap-10 md:flex-row">
            {/* Left Content */}
            <div className="flex-1 space-y-6">
              {/* Company Logo + Job Title + Company Name */}
              <div className="flex items-start gap-4">
                <div className="bg-muted flex h-8 w-8 items-center justify-center overflow-hidden rounded-xl border-2 md:h-16 md:w-16">
                  <Building2 className="text-muted-foreground h-4 w-4 md:h-8 md:w-8" />
                </div>
                <div className="flex-1">
                  <h1 className="text-foreground flex items-center gap-2 font-sans text-xl font-bold md:text-3xl">
                    <span>{job.title}</span>
                    {job.is_featured && <BadgeCheck className="h-6 w-6 fill-blue-500 text-white" />}
                  </h1>
                  <p className="text-muted-foreground mt-1 text-sm font-semibold md:text-xl">
                    {job.company_name}
                  </p>
                </div>
              </div>

              {/* Job Details */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="text-muted-foreground flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{job.location}</span>
                </div>
                <div className="text-muted-foreground flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">
                    Posted {job.posted_at_formatted} ({job.days_since_posted} days ago)
                  </span>
                </div>
                <div className="text-muted-foreground flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  <span className="text-sm">{job.salary_range}</span>
                </div>
              </div>

              {/* Job Type and Category */}
              <div className="flex flex-wrap items-center gap-3">
                <Badge className={getJobTypeBadgeColor(job.job_type)}>
                  {formatJobType(job.job_type)}
                </Badge>
                <Badge variant="secondary" className="py-1">
                  {job.category.name}
                </Badge>
                {job.is_featured && (
                  <Badge className="bg-yellow-100 py-1 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Apply Button */}
              <div className="hidden space-y-4 pt-6 md:block">
                <div className="flex items-center gap-4">
                  <span>
                    <b>Apply : </b>
                    <a
                      href={
                        job.application_url_or_email.includes("@")
                          ? `mailto:${job.application_url_or_email}`
                          : job.application_url_or_email
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline hover:opacity-80"
                    >
                      {job.application_url_or_email}
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Info Section */}
            <div className="w-full space-y-4 sm:w-auto">
              <Card className="w-full md:w-96">
                <CardHeader>
                  <CardTitle className="text-lg">Job Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm md:text-base">Company</span>
                      <span className="text-sm font-medium md:text-base">{job.company_name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm md:text-base">Location</span>
                      <span className="text-sm font-medium md:text-base">{job.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm md:text-base">Job Type</span>
                      <span className="text-sm font-medium md:text-base">
                        {formatJobType(job.job_type)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm md:text-base">Category</span>
                      <span className="text-sm font-medium md:text-base">{job.category.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm md:text-base">Salary</span>
                      <span className="text-sm font-medium md:text-base">{job.salary_range}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm md:text-base">Posted</span>
                      <span className="text-sm font-medium md:text-base">
                        {job.posted_at_formatted}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Mobile Apply Button */}
          <div className="block space-y-4 pt-6 md:hidden">
            <div className="flex items-center gap-4">
              <Button asChild size="lg" className="flex-1 rounded-full">
                <Link
                  href={
                    job.application_url_or_email.includes("@")
                      ? `mailto:${job.application_url_or_email}`
                      : job.application_url_or_email
                  }
                >
                  <span>Apply Now</span>
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-border mb-8 h-[1px] w-full" />

        {/* Job Description */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-foreground text-2xl font-bold">Job Description</h2>
            <div
              className="prose prose-gray dark:prose-invert max-w-none space-y-4"
              dangerouslySetInnerHTML={{ __html: job.description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
