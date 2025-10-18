import { type ClassValue, clsx } from "clsx";
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
    if (typeof value == "boolean") {
      continue;
    }
    if (typeof value == "string") {
      return value;
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
  if (!dateInput) return;

  const date = new Date(dateInput);

  // Check if the date is valid
  if (isNaN(date.getTime())) return;

  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  } as const;

  return new Intl.DateTimeFormat("en-US", options).format(date);
}
