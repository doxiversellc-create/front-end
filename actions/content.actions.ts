"use server";

import fs from "fs/promises";
import path from "path";

interface FetchPageContentResult<T = any> {
  success: boolean;
  content?: T;
  error?: string;
}

interface FetchPageContentOptions {
  revalidate?: number; // ISR revalidate time in seconds
  fallbackDir?: string; // fallback folder (default: public/contents)
  timeout?: number; // fetch timeout in ms (default: 10000)
  logErrors?: boolean; // control logging
}

/**
 * Internal helper to wrap fetch with a timeout.
 */
async function fetchWithTimeout(url: string, ms: number, options?: RequestInit): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), ms);

  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    return res;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Fetches page content from CMS API with a local fallback mechanism.
 * - Uses ISR revalidation for caching.
 * - Falls back to a local JSON file if the API fails or returns empty.
 *
 * @param pageName - The name of the page (e.g. "about-us")
 * @param options - Optional configuration (revalidate time, fallback dir, logging, timeout)
 */
export async function fetchPageContent<T = any>(
  pageName: string,
  options: FetchPageContentOptions = {}
): Promise<FetchPageContentResult<T>> {
  const {
    revalidate = 3600,
    fallbackDir = path.join(process.cwd(), "public", "contents"),
    timeout = 10000,
  } = options;

  const apiURL = process.env.API_BASE_URL;
  const cmsEndpoint = `${apiURL}/content/${pageName}`;
  const fallbackFilePath = path.join(fallbackDir, `fallback-${pageName}-content.json`);

  try {
    // Attempt to fetch from the CMS API with timeout
    const response = await fetchWithTimeout(cmsEndpoint, timeout, {
      next: { revalidate },
    });

    if (!response.ok) {
      throw new Error(`CMS API fetch failed with status: ${response.status}`);
    }

    const data: T = await response.json();

    if (!data || (typeof data === "object" && Object.keys(data).length === 0)) {
      throw new Error("CMS returned empty data");
    }

    return { success: true, content: data };
  } catch {
    // Fallback to local JSON file
    try {
      const fileContents = await fs.readFile(fallbackFilePath, "utf8");
      const fallbackData: T = JSON.parse(fileContents);

      return { success: true, content: fallbackData };
    } catch {
      return { success: false, error: "Failed to fetch content from CMS and fallback." };
    }
  }
}
