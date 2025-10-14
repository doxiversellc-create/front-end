"use server";

import { serverFetchPublic } from "@/lib/api/server";
import { buildUrlSearchParams, getErrorMessage } from "@/lib/utils";
import { getFDAApprovalResults } from "@/types/fda.types";

export async function getFDAApprovals({
  page,
  search,
}: {
  page?: string;
  search?: string;
}): Promise<getFDAApprovalResults> {
  try {
    const apiUrl = "/fda/api/submissions/";
    const url = buildUrlSearchParams(apiUrl, { page, search });
    const response = await serverFetchPublic<getFDAApprovalResults>(url);

    return { success: true, fdaApprovals: response.fdaApprovals, count: response.count };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Failed to fetch research articles") };
  }
}
