/* eslint-disable @typescript-eslint/no-explicit-any */
import qs from "qs";

export interface FetchOptions<TFilters = any> {
  page?: number;
  limit?: number;
  sort?: string;
  filters?: TFilters;
  signal?: AbortSignal;
  revalidate?: number | false;
  baseUrl?: string;
  method?: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  headers?: HeadersInit;
  body?: Record<string, any> | FormData | URLSearchParams;
}

export interface FetchResponse<T> {
  data: T | null;
  error: string | null;
  duration: number; // in ms
  status: number;
}

const API_BASE_URL = (() => {
  const baseUrl = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL;
  if (baseUrl) return baseUrl;
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000/api";
  }
  throw new Error("API_BASE_URL or API_BASE_URL must be set in production environment.");
})();

/**
 * Universal fetcher with support for all HTTP methods, pagination, filters, and error handling.
 */
export async function fetcher<TData = any, TFilters = any>(
  endpoint: string,
  options: FetchOptions<TFilters> = {}
): Promise<FetchResponse<TData>> {
  const {
    page,
    limit,
    sort,
    filters,
    signal,
    revalidate,
    baseUrl = API_BASE_URL,
    method = "GET",
    headers,
    body,
  } = options;

  // Build query string for GET, DELETE, etc.
  const queryString = qs.stringify(
    {
      page,
      limit,
      sort,
      ...filters,
    },
    { encodeValuesOnly: true, skipNulls: true }
  );

  const url = `${baseUrl}${endpoint}${method === "GET" && queryString ? `?${queryString}` : ""}`;
  const start = typeof performance !== "undefined" ? performance.now() : Date.now();

  try {
    const fetchOptions: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers, // Custom headers will override the default
      },
      signal,
      next: revalidate !== undefined ? { revalidate } : undefined,
    };

    // Add body for non-GET requests
    if (method !== "GET" && body) {
      if (body instanceof FormData || body instanceof URLSearchParams) {
        // Automatically sets Content-Type header
        delete (fetchOptions.headers as Record<string, any>)["Content-Type"];
        fetchOptions.body = body as any;
      } else {
        fetchOptions.body = JSON.stringify(body);
      }
    }

    const res = await fetch(url, fetchOptions);
    const duration = (typeof performance !== "undefined" ? performance.now() : Date.now()) - start;

    if (!res.ok) {
      const errorText = await res.text().catch(() => res.statusText);
      return {
        data: null,
        error: errorText || `Request failed with status ${res.status}`,
        duration,
        status: res.status,
      };
    }

    const json = (await res.json()) as TData;

    return {
      data: json,
      error: null,
      duration,
      status: res.status,
    };
  } catch (err: any) {
    const duration = (typeof performance !== "undefined" ? performance.now() : Date.now()) - start;
    const isAborted = err.name === "AbortError";

    return {
      data: null,
      error: isAborted ? "Request was aborted" : err.message || "An unexpected error occurred",
      duration,
      status: 0,
    };
  }
}
