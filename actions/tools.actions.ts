"use server";

import { cache } from "react";

import { serverFetchAuth, serverFetchPublic } from "@/lib/api/server";
import { buildUrlSearchParams, getErrorMessage } from "@/lib/utils";
import {
  AiToolSubCategoryResponse,
  GetAiToolDetailRespose,
  GetAiToolResult,
  GetAiToolsResponse,
  GetAiToolsResult,
  GetAiToolSubCategoriesResult,
  GetBookmarkedAiToolsResult,
  GetBookMarkedToolsResponse,
} from "@/types/tools.types";

export async function getAiToolsByCategory({
  page,
  category,
  subCategory,
}: {
  page?: string;
  category?: string;
  subCategory?: string;
}): Promise<GetAiToolsResult> {
  try {
    const apiUrl = subCategory
      ? `/ai-tools/by-subcategory/${category}/${subCategory}`
      : `/ai-tools/by-category/${category}`;

    const url = buildUrlSearchParams(apiUrl, { page });
    const response = await serverFetchPublic<GetAiToolsResponse>(url);

    return { success: true, tools: response.results, count: response.count };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Failed to fetch ai tools") };
  }
}
export async function getAiToolsByTags({
  page,
  tag,
}: {
  page?: string;
  tag?: string;
}): Promise<GetAiToolsResult> {
  try {
    const apiUrl = "/ai-tools";
    const url = buildUrlSearchParams(apiUrl, { tag, page });
    const response = await serverFetchPublic<GetAiToolsResponse>(url);

    return { success: true, tools: response.results, count: response.count };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Failed to fetch ai tools") };
  }
}

export async function getAiToolSubCategories({
  category,
}: {
  category?: string;
}): Promise<GetAiToolSubCategoriesResult> {
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
}): Promise<GetBookmarkedAiToolsResult> {
  try {
    const apiUrl = "/ai-tool-bookmarks/";

    const url = buildUrlSearchParams(apiUrl, { page });
    const response = await serverFetchAuth<GetBookMarkedToolsResponse>(url, {
      next: { tags: ["bookmarked-tools"] },
    });
    return { success: true, tools: response };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Failed to fetch bookmarked ai tools") };
  }
}

export const getAiToolDetails = cache(async ({ id }: { id: string }): Promise<GetAiToolResult> => {
  try {
    const url = `/ai-tools/${id}/`;

    const response = await serverFetchPublic<GetAiToolDetailRespose>(url);

    return { success: true, tool: response };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Failed to fetch ai tool detail") };
  }
});
