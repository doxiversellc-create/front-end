"use server";

import { serverFetchPublic } from "@/lib/api/server";
import { buildUrlSearchParams, getErrorMessage } from "@/lib/utils";
import { BlogArticlesResponse, getBlogArticlesResults } from "@/types/blogs.types";

export async function getBlogArticles({
  page,
}: {
  page?: string;
}): Promise<getBlogArticlesResults> {
  try {
    const apiUrl = "/content/blog/posts/";
    const url = buildUrlSearchParams(apiUrl, { page });
    const response = await serverFetchPublic<BlogArticlesResponse>(url);

    return { success: true, articles: response.data.results, count: response.data.count };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Failed to fetch blog articles") };
  }
}
