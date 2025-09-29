"use server";
import { serverFetchAuth } from "@/lib/api/server";
import { getErrorMessage } from "@/lib/utils";

interface JobSubmissionForm {
  title: string;
  company_name: string;
  location: string;
  job_type: "full_time" | "part_time" | "contract" | "internship" | "freelance";
  category_id: number;
  description: string;
  salary_range?: string;
  application_url_or_email: string;
  expires_at: string;
}

export async function createJobAction(data: JobSubmissionForm) {
  try {
    // Important: include trailing slash to avoid 301/302 redirect that turns POST into GET
    const relativePath = "/jobs/submit/";
    const createdJob = await serverFetchAuth(relativePath, {
      method: "POST",
      body: JSON.stringify(data),
      retry: { retries: 2, delay: 300 },
    });

    return { success: true, job: createdJob };
  } catch (error) {
    const rawMessage = getErrorMessage(error, "Failed to post Job");
    const normalized = (() => {
      const msg = rawMessage.toLowerCase();
      if (msg.includes("authentication credentials were not provided")) {
        return "Please sign in to submit a Job.";
      }

      return rawMessage;
    })();
    throw new Error(normalized);
  }
}
