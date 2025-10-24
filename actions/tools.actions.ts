"use server";

import { serverFetchAuth, serverFetchPublic } from "@/lib/api/server";
import { buildUrlSearchParams, getErrorMessage } from "@/lib/utils";
import {
  AiToolsResponse,
  AiToolSubCategoryResponse,
  getAiToolsResult,
  getAiToolSubCategoriesResult,
  getBookmarkedAiToolsResult,
} from "@/types/tools.types";

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
    return { success: false, error: getErrorMessage(error, "Failed to fetch ai tools") };
  }
}
export async function getAiToolSubCategories({
  category,
}: {
  category?: string;
}): Promise<getAiToolSubCategoriesResult> {
  try {
    const url = `/ai-tool-categories/${category}/subcategories/`;

    const response = await serverFetchPublic<AiToolSubCategoryResponse>(url, {
      retry: { retries: 3 },
    });

    return { success: true, SubCategories: response.results };
  } catch (error) {
    return {
      success: false,
      error: getErrorMessage(error, "Failed to fetch ai tool sub categories"),
    };
  }
}

export async function getBookmarkedAiTools({
  page,
}: {
  page?: string;
}): Promise<getBookmarkedAiToolsResult> {
  try {
    const apiUrl = "/ai-tool-bookmarks/";

    const url = buildUrlSearchParams(apiUrl, { page });
    const response = await serverFetchAuth<AiToolsResponse>(url, {
      next: { tags: ["bookmarked-tools"] },
    });
    return { success: true, tools: response.results, count: response.count };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Failed to fetch bookmarked ai tools") };
  }
}
