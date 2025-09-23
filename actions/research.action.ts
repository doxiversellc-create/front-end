"use client";

import { serverFetchPublic } from "@/lib/api/server";
import { buildUrlSearchParams, getErrorMessage } from "@/lib/utils";
import { getResearchArticlesResult, ResearchArticlesResponse } from "@/types/research.types";

export async function getResearchArticles({
  page,
  search,
}: {
  page?: string;
  search?: string;
}): Promise<getResearchArticlesResult> {
  try {
    const apiUrl = "/api/research/articles/";
    const url = buildUrlSearchParams(apiUrl, { page, search });
    const response = await serverFetchPublic<ResearchArticlesResponse>(url);

    return { success: true, articles: response.results };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Failed to fetch research articles") };
  }
}
