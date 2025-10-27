"use server";

import { serverFetchPublic } from "@/lib/api/server";
import { buildUrlSearchParams, getErrorMessage } from "@/lib/utils";
import {
  GetNewsDetailResponse,
  GetNewsDetailResult,
  getNewsListResponse,
  getNewsListResult,
} from "@/types/news.types";

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

export async function getNewsDetailAction({ id }: { id: string }): Promise<GetNewsDetailResult> {
  try {
    const url = `/ai-news/${id}/`;
    const response = await serverFetchPublic<GetNewsDetailResponse>(url);

    return { success: true, newsDetail: response };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Failed to fetch news article detail") };
  }
}
