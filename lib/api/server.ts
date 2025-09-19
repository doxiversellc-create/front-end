import { cookies } from "next/headers";

import { fetchWithRetry } from "@/lib/api/client";
import { processError } from "@/lib/utils";

export interface FetchOptions extends RequestInit {
  retry?: {
    retries?: number;
    delay?: number;
  };
}

export async function getCookieHeader(): Promise<HeadersInit | undefined> {
  const cookieStore = await cookies();
  const tokenCookie = cookieStore.get("token");

  if (!tokenCookie?.value) {
    return undefined;
  }

  const tokenValue = tokenCookie.value;

  return {
    Authorization: `Token ${tokenValue}`,
  };
}

type AuthRequirement = "required" | "optional";

export async function baseServerHttpClient<T>(
  relativePath: string,
  authRequirement: AuthRequirement,
  options: FetchOptions = {}
): Promise<T> {
  const baseUrl = process.env.API_BASE_URL;
  if (!baseUrl) {
    throw new Error("API_BASE_URL is not defined in your .env.local file.");
  }

  const authHeader = await getCookieHeader();

  if (authRequirement === "required" && !authHeader) {
    throw Error("Authentication token not found. Please log in.");
  }

  const headers = {
    ...authHeader,
    ...options.headers,
  };
  if (options.body && !(options.body instanceof FormData)) {
    (headers as Record<string, string>)["Content-Type"] = "application/json";
  }

  const fullUrl = `${baseUrl}${relativePath}`;
  const shouldRetry = !!options.retry;

  const response = shouldRetry
    ? await fetchWithRetry(fullUrl, { ...options, headers }, options.retry)
    : await fetch(fullUrl, { ...options, headers });

  if (!response.ok) {
    const errorMessage = await processError(response);
    throw new Error(errorMessage);
  }

  return response.json() as T;
}

export function serverFetchAuth<T>(relativePath: string, options: FetchOptions = {}): Promise<T> {
  return baseServerHttpClient<T>(relativePath, "required", options);
}

export function serverFetchPublic<T>(relativePath: string, options: FetchOptions = {}): Promise<T> {
  return baseServerHttpClient<T>(relativePath, "optional", options);
}
