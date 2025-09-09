import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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

export async function processError(error: unknown) {
  try {
    if (error instanceof Response) {
      const errorResponse: { success: boolean; message: string } = await error
        .json()
        .catch(() => ({ message: "Something went wrong" }));
      console.error("Error details: ", errorResponse);
      return errorResponse.message;
    } else if (error instanceof Error) {
      return error.message || "An unexpected error occurred.";
    } else {
      console.error("Error details: ", error);
      return "Unknown error occurred.";
    }
  } catch (innerError) {
    console.error("Error processing error:", innerError);
    return "An internal error occurred.";
  }
}
