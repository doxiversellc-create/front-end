import { type ClassValue, clsx } from "clsx";
import DOMPurify from "isomorphic-dompurify";
import { twMerge } from "tailwind-merge";

import { APIError } from "@/types/shared.types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getErrorMessage(error: unknown, customMessage?: string): string {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === "string") {
    return error;
  }
  if (
    error &&
    typeof error === "object" &&
    "message" in error &&
    typeof error.message === "string"
  ) {
    return error.message;
  }
  return customMessage || "An unexpected error occurred.";
}

export function extractAPIErrorMessage(error: APIError): string {
  for (const [key, value] of Object.entries(error)) {
    if (typeof value === "string") {
      return key ? `${key}: ${value}` : value;
    }
    if (Array.isArray(value)) {
      const first = value[0];
      return key ? `${key}: ${first}` : first;
    }
    if (typeof value === "undefined") {
      return "An unexpected error occurred.";
    }
    // Fallback for nested objects
    try {
      const serialized = JSON.stringify(value);
      return key ? `${key}: ${serialized}` : serialized;
    } catch {
      return "An unexpected error occurred.";
    }
  }

  if (typeof error === "string") {
    return error;
  }

  return "An unexpected error occurred.";
}

export async function processError(error: unknown) {
  try {
    if (error instanceof Response) {
      const errorResponse: APIError = await error.json();
      return extractAPIErrorMessage(errorResponse);
    } else {
      console.error("Error details: ", error);
      return "Unknown error occurred.";
    }
  } catch (innerError) {
    console.error("Error processing error:", innerError);
    return "An internal error occurred.";
  }
}

export function getSafeRedirectUrl(nextUrl: string) {
  if (!nextUrl) {
    return;
  }
  const decodedNextUrl = decodeURIComponent(nextUrl);

  if (decodedNextUrl.startsWith("/") && !decodedNextUrl.startsWith("//")) {
    if (decodedNextUrl.includes("@")) {
      return;
    }

    return decodedNextUrl;
  }

  // 6. If the checks fail, return the default fallback.
  console.warn("Invalid redirect URL detected, redirecting to default path.");
  return;
}

export function generateDummyArray(length: number) {
  return Array.from({ length }, (_, index) => index);
}

export function buildUrlSearchParams(
  endPoint: string,
  searchParams: {
    [key: string]: string | string[] | undefined;
  }
): string {
  const params = new URLSearchParams();

  for (const [key, value] of Object.entries(searchParams)) {
    if (typeof value === "string") {
      params.append(key, value);
    } else if (Array.isArray(value)) {
      for (const item of value) {
        params.append(key, item);
      }
    }
  }

  const queryString = params.toString();

  if (!queryString) {
    return endPoint;
  }

  if (endPoint.includes("?")) {
    return `${endPoint}&${queryString}`;
  } else {
    return `${endPoint}?${queryString}`;
  }
}

export function formatBlogDate(dateInput: string) {
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;

  const options = {
    year: "numeric", // Must be the literal string 'numeric' or '2-digit'
    month: "short", // Must be 'numeric', '2-digit', 'long', 'short', or 'narrow'
    day: "numeric", // Must be the literal string 'numeric' or '2-digit'
  } as const;

  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export const slugify = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, "");

export function extractHeadingAndContentClient(html: string) {
  if (typeof window == "undefined") {
    return { headings: [], content: "" };
  }
  // Sanitize HTML
  const sanitizedHtml = DOMPurify.sanitize(html);

  // Create a temporary DOM container
  const container = document.createElement("div");
  container.innerHTML = sanitizedHtml;

  const headings: { id: string; text: string }[] = [];

  // Traverse all elements once
  container.querySelectorAll("*").forEach(el => {
    // Remove Draft.js keys
    if (el.hasAttribute("data-block-key")) el.removeAttribute("data-block-key");

    // Add IDs to h3 elements
    if (el.tagName.toLowerCase() === "h3") {
      const text = el.textContent?.trim() || "heading";
      const id = slugify(text);
      el.id = id;
      headings.push({ id, text });
    }
  });

  return { headings, content: container.innerHTML };
}
