"use server";

import { serverFetchPublic } from "@/lib/api/server";
import { buildUrlSearchParams, getErrorMessage } from "@/lib/utils";
import { FDAApprovalResponse, getFDAApprovalResults } from "@/types/fda.types";

export async function getFDAApprovals({
  page,
  search,
}: {
  page?: string;
  search?: string;
}): Promise<getFDAApprovalResults> {
  try {
    const apiUrl = "/fda/api/submissions/";
    const url = buildUrlSearchParams(apiUrl, { page, search, page_size: "20" });
    const response = await serverFetchPublic<FDAApprovalResponse>(url);
    return { success: true, fdaApprovals: response.results, count: response.count };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Failed to fetch research articles") };
  }
}
