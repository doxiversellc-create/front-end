/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import fs from "fs/promises";
import path from "path";

import {
  AboutUsContent,
  AIJobsContent,
  AINewsContent,
  AIToolsContent,
  ContactUsContent,
  DisclaimerContent,
  FDAUpdatesContent,
  FooterContent,
  LandingPageContent,
  NewsletterContent,
  PrivacyPolicyContent,
  ResearchesContent,
  TermsOfUseContent,
  VendorPrivacyPolicyContent,
  VendorTermsAndConditionsContent,
} from "@/types/content.types";

type PageContentMap = {
  landingpage: LandingPageContent;
  aboutus: AboutUsContent;
  aijobs: AIJobsContent;
  ["ai-tools"]: AIToolsContent;
  ainews: AINewsContent;
  contactus: ContactUsContent;
  fdaupdates: FDAUpdatesContent;
  footer: FooterContent;
  newsletter: NewsletterContent;
  researches: ResearchesContent;
  ["legal/disclaimer"]: DisclaimerContent;
  ["legal/privacy-policy"]: PrivacyPolicyContent;
  ["legal/terms-of-use"]: TermsOfUseContent;
  ["legal/vendor-privacy-policy"]: VendorPrivacyPolicyContent;
  ["legal/vendor-terms-and-conditions"]: VendorTermsAndConditionsContent;
};

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
export async function fetchPageContent<TPage extends keyof PageContentMap>(
  pageName: TPage,
  options: FetchPageContentOptions = {},
  endpoint: string | null = null
): Promise<{ success: boolean; content: PageContentMap[TPage] | any; error?: string }> {
  const {
    revalidate = 20,
    fallbackDir = path.join(process.cwd(), "public", "contents"),
    timeout = 10000,
    logErrors = false,
  } = options;

  const apiURL = process.env.API_BASE_URL;
  const cmsEndpoint = endpoint ? apiURL + endpoint : `${apiURL}/contxent/${pageName}`;
  const fallbackFilePath = path.join(
    fallbackDir,
    `fallback-${pageName.replace("/", "-")}-content.json`
  );

  try {
    const response = await fetchWithTimeout(cmsEndpoint, timeout, {
      next: { revalidate },
    });

    if (!response.ok) {
      throw new Error(`CMS API fetch failed with status: ${response.status}`);
    }

    const data: PageContentMap[TPage] = await response.json();

    if (!data || (typeof data === "object" && Object.keys(data).length === 0)) {
      throw new Error("CMS returned empty data");
    }

    return { success: true, content: data };
  } catch (err) {
    if (logErrors) {
      console.error(`[fetchPageContent] Failed for page "${pageName}":`, err);
    }

    try {
      const fileContents = await fs.readFile(fallbackFilePath, "utf8");
      const fallbackData: PageContentMap[TPage] = JSON.parse(fileContents);

      return {
        success: true,
        content: {
          ...fallbackData,
          meta: { ...(fallbackData as any).meta, is_fallback: true },
        },
      };
    } catch {
      return {
        success: false,
        error: "Failed to fetch content from CMS and fallback.",
        content: {},
      };
    }
  }
}
