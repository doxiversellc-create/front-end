"use server";

import { serverFetchPublic } from "@/lib/api/server";
import { buildUrlSearchParams, getErrorMessage } from "@/lib/utils";
import { AiToolsResponse, getAiToolsResult } from "@/types/tools.types";

export async function getAiTools({
  page,
  category,
  subCategory,
}: {
  page?: string;
  category?: string;
  subCategory?: string;
}): Promise<getAiToolsResult> {
  try {
    const apiUrl = subCategory
      ? `/ai-tools/by-subcategory/${category}/${subCategory}`
      : `/ai-tools/by-category/${category}`;

    const url = buildUrlSearchParams(apiUrl, { page });
    const response = await serverFetchPublic<AiToolsResponse>(url);

    return { success: true, tools: response.results, count: response.count };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Failed to fetch research articles") };
  }
}
