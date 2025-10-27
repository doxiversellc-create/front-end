"use server";

import { cache } from "react";

import { revalidateTag } from "next/cache";

import { serverFetchAuth, serverFetchPublic } from "@/lib/api/server";
import { buildUrlSearchParams, getErrorMessage } from "@/lib/utils";
import {
  BlogArticleDetailResponse,
  BlogArticleEngagementResponse,
  BlogArticlesResponse,
  getBlogArticleDetailResults,
  getBlogArticleEngagementResults,
  getBlogArticlesResults,
} from "@/types/blogs.types";
import { ActionResult } from "@/types/shared.types";

export const getBlogArticles = cache(
  async ({ page }: { page?: string }): Promise<getBlogArticlesResults> => {
    try {
      const apiUrl = "/content/blog/posts/";
      const url = buildUrlSearchParams(apiUrl, { page });
      const response = await serverFetchPublic<BlogArticlesResponse>(url);

      return {
        success: true,
        articles: response.data.results,
        count: response.data.count,
      };
    } catch (error) {
      return {
        success: false,
        error: getErrorMessage(error, "Failed to fetch blog articles"),
      };
    }
  }
);

export const getBlogArticleDetails = cache(
  async ({ id }: { id: string }): Promise<getBlogArticleDetailResults> => {
    try {
      const url = `/content/blog/posts/${id}/`;
      const response = await serverFetchPublic<BlogArticleDetailResponse>(url);

      return { success: true, articleDetail: response.data };
    } catch (error) {
      return {
        success: false,
        error: getErrorMessage(error, "Failed to fetch blog article detail"),
      };
    }
  }
);

export const getBlogArticleEngagement = cache(
  async ({ id }: { id?: string }): Promise<getBlogArticleEngagementResults> => {
    try {
      const url = `/content/blog/posts/${id}/engagement/`;
      const response = await serverFetchPublic<BlogArticleEngagementResponse>(url, {
        next: { tags: ["blog-engagement"] },
      });

      return {
        success: true,
        comments: response.data.comments.results,
        likes: response.data.likes.results.length,
      };
    } catch (error) {
      return {
        success: false,
        error: getErrorMessage(error, "Failed to fetch blog article engagement"),
      };
    }
  }
);

export async function postCommentAction({
  id,
  content,
}: {
  id: string;
  content: string;
}): Promise<ActionResult> {
  try {
    const url = `/content/blog/posts/${id}/comment/`;
    const body = JSON.stringify({ content });
    await serverFetchAuth(url, {
      body,
      method: "POST",
    });

    revalidateTag("blog-engagement");
    return { success: true };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: getErrorMessage(error, "Failed to post comment"),
    };
  }
}
export async function editCommentAction({
  id,
  content,
}: {
  id: string;
  content: string;
}): Promise<ActionResult> {
  try {
    const url = `/content/blog/comments/${id}/`;

    const body = JSON.stringify({ content });
    await serverFetchAuth(url, {
      body,
      method: "PUT",
    });
    revalidateTag("blog-engagement");
    return { success: true };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: getErrorMessage(error, "Failed to post comment"),
    };
  }
}

export async function deleteCommentAction({ id }: { id: string }): Promise<ActionResult> {
  try {
    const url = `/content/blog/comments/${id}/`;
    await serverFetchAuth(url, { method: "DELETE" });

    revalidateTag("blog-engagement");
    return { success: true };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: getErrorMessage(error, "Failed to delete comment"),
    };
  }
}

export async function likeArticleAction({ id }: { id: string }): Promise<ActionResult> {
  try {
    const url = `/content/blog/posts/${id}/like/`;
    await serverFetchAuth(url, { method: "POST" });

    revalidateTag("blog-engagement");
    return { success: true };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      error: getErrorMessage(error, "Failed to like blog article"),
    };
  }
}
