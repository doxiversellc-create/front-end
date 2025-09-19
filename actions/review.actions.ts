"use server";

import { serverFetchAuth } from "@/lib/api/server";
import { getErrorMessage } from "@/lib/utils";

interface AddReviewPayload {
  ai_tool: string;
  rating: number;
  review: string;
}

export async function addReviewAction({ ai_tool, rating, review }: AddReviewPayload) {
  // Validation
  if (!review || review.length < 35) {
    throw new Error("Review should be more than 35 characters.");
  }
  if (!rating || rating < 1 || rating > 5) {
    throw new Error("Please provide a valid rating between 1 and 5.");
  }

  try {
    // Important: include trailing slash to avoid 301/302 redirect that turns POST into GET
    const relativePath = "/ai-tool-reviews/";
    const createdReview = await serverFetchAuth<{ id: string }>(relativePath, {
      method: "POST",
      body: JSON.stringify({
        ai_tool: Number(ai_tool),
        rating: Math.round(rating),
        comment: review,
      }),
      retry: { retries: 2, delay: 300 },
    });

    return { success: true, review: createdReview };
  } catch (error) {
    const rawMessage = getErrorMessage(error, "Failed to post review");
    const normalized = (() => {
      const msg = rawMessage.toLowerCase();
      if (msg.includes("authentication credentials were not provided")) {
        return "Please sign in to submit a review.";
      }
      if (msg.includes("already reviewed")) {
        return "You’ve already submitted a review for this tool.";
      }
      if (msg.includes("this field is required")) {
        return "Please fill in all required fields.";
      }
      return rawMessage;
    })();
    throw new Error(normalized);
  }
}

// Bookmark Actions
export async function addBookmarkAction(toolId: number) {
  try {
    const created = await serverFetchAuth<{ id: number }>(`/ai-tool-bookmarks/`, {
      method: "POST",
      body: JSON.stringify({ ai_tool: toolId }),
      retry: { retries: 2, delay: 300 },
    });
    return { success: true, bookmark: created };
  } catch (error) {
    const raw = getErrorMessage(error, "Failed to bookmark tool");
    const msg = raw.toLowerCase().includes("authentication credentials were not provided")
      ? "Please sign in to save tools."
      : raw.toLowerCase().includes("already bookmarked")
        ? "This tool is already in your bookmarks."
        : raw;
    throw new Error(msg);
  }
}

export async function removeBookmarkAction(bookmarkId: number) {
  try {
    await serverFetchAuth<void>(`/ai-tool-bookmarks/${bookmarkId}/`, {
      method: "DELETE",
      retry: { retries: 2, delay: 300 },
    });
    return { success: true };
  } catch (error) {
    const raw = getErrorMessage(error, "Failed to remove bookmark");
    const msg = raw.toLowerCase().includes("authentication credentials were not provided")
      ? "Please sign in to manage bookmarks."
      : raw;
    throw new Error(msg);
  }
}
