"use server";

import { serverFetchPublic } from "@/lib/api/server";
import { buildUrlSearchParams, getErrorMessage } from "@/lib/utils";
import {
  BlogArticleDetailResponse,
  BlogArticlesResponse,
  getBlogArticlesResults,
} from "@/types/blogs.types";

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
export async function getBlogArticleDetails({
  id,
}: {
  id: string;
}): Promise<getBlogArticlesResults> {
  try {
    const url = `/content/blog/posts/${id}/`;
    const response = await serverFetchPublic<BlogArticleDetailResponse>(url);

    return { success: true, articleDetail: response };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Failed to fetch blog article detail") };
  }
}
