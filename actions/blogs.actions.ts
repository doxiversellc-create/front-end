"use server";

import { serverFetchAuth, serverFetchPublic } from "@/lib/api/server";
import { buildUrlSearchParams, getErrorMessage } from "@/lib/utils";
import {
  BlogArticleCommentsResponse,
  BlogArticleDetailResponse,
  BlogArticlesResponse,
  getBlogArticleCommentsResults,
  getBlogArticleDetailResults,
  getBlogArticlesResults,
} from "@/types/blogs.types";
import { ActionResult } from "@/types/shared.types";

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
}): Promise<getBlogArticleDetailResults> {
  try {
    const url = `/content/blog/posts/${id}/`;
    const response = await serverFetchPublic<BlogArticleDetailResponse>(url);

    return { success: true, articleDetail: response.data };
  } catch (error) {
    return { success: false, error: getErrorMessage(error, "Failed to fetch blog article detail") };
  }
}
export async function postCommentAction({
  id,
  content,
}: {
  id: string;
  content: string;
}): Promise<ActionResult> {
  try {
    const url = `/content/blog/posts/${id}/comment/`;
    const body = JSON.stringify(content);
    await serverFetchAuth(url, {
      body,
      method: "POST",
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: getErrorMessage(error, "Failed to fetch blog article detail") };
  }
}

export async function getBlogArticleComments({
  id,
}: {
  id?: string;
}): Promise<getBlogArticleCommentsResults> {
  try {
    const url = `/content/blog/posts/${id}/engagement/`;
    const response = await serverFetchPublic<BlogArticleCommentsResponse>(url);
    return { success: true, comments: response.data.comments.results };
  } catch (error) {
    return {
      success: false,
      error: getErrorMessage(error, "Failed to fetch blog article comments"),
    };
  }
}
