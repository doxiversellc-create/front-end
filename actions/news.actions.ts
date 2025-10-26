"use server";

import { serverFetchPublic } from "@/lib/api/server";
import { buildUrlSearchParams, getErrorMessage } from "@/lib/utils";
import { getNewsListResponse, getNewsListResult } from "@/types/news.types";

export async function getNewsList({ page }: { page?: string }): Promise<getNewsListResult> {
  try {
    const apiUrl = "/ai-news/";
    const url = buildUrlSearchParams(apiUrl, { page });
    const response = await serverFetchPublic<getNewsListResponse>(url);

    return { success: true, newsList: response.results, count: response.count };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Failed to fetch news list") };
  }
}
