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
