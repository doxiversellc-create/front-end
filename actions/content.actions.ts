"use server";

import fs from "fs";
import path from "path";

export async function fetchPageContent(pageName: string) {
  const apiURL = process.env.API_BASE_URL;
  const cmsEndpoint = `${apiURL}/content/${pageName}`;
  const fallbackFilePath = path.join(
    process.cwd(),
    "public",
    "contents",
    `fallback-${pageName}-content.json`
  );

  try {
    // Attempt to fetch from the CMS API
    const response = await fetch(cmsEndpoint, { next: { revalidate: 3600 } }); // Add revalidation for ISR

    if (!response.ok) {
      throw new Error(`CMS API fetch failed with status: ${response.status}`);
    }

    const data = await response.json();

    if (!data || Object.keys(data).length === 0) {
      console.warn(`CMS returned empty data for ${pageName}. Using fallback.`);
      throw new Error("CMS returned empty data");
    }

    return { success: true, content: data };
  } catch {
    try {
      // Read the local fallback JSON file
      const fileContents = fs.readFileSync(fallbackFilePath, "utf8");
      const fallbackData = JSON.parse(fileContents);
      return { success: true, content: fallbackData };
    } catch {
      return { success: false, error: "Failed to get any content." };
    }
  }
}
