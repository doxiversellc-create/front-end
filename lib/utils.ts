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
  for (const [, value] of Object.entries(error)) {
    if (typeof value === "string") {
      return value;
    }
    if (typeof value === "undefined") {
      return "An unexpected error occurred.";
    }
    return value[0];
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
