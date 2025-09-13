import { cookies } from "next/headers";

import { processError } from "@/lib/utils";
import type { FetchOptions } from "./client";
import { fetchWithRetry } from "./client";

export async function serverHttpClient<T>(
  relativePath: string,
  options: FetchOptions = {}
): Promise<T> {
  const baseUrl = process.env.API_BASE_URL;

  if (!baseUrl) {
    throw new Error("API_BASE_URL is not defined in your .env.local file.");
  }

  const cookieStore = await cookies();
  const token = cookieStore.get("token");

  const fetchOptions: FetchOptions = { ...options };

  if (token) {
    fetchOptions.headers = {
      ...fetchOptions.headers,
      Cookie: `${token.name}=${token.value}`,
    };
  }

  if (fetchOptions.body && !(fetchOptions.body instanceof FormData)) {
    fetchOptions.headers = { ...fetchOptions.headers, "Content-Type": "application/json" };
  }

  const fullUrl = `${baseUrl}${relativePath}`;
  const response = await fetchWithRetry(fullUrl, fetchOptions, fetchOptions.retry);

  if (!response.ok) {
    const errorMessage = await processError(response);
    throw new Error(errorMessage);
  }

  return response.json() as T;
}
