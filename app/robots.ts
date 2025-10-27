import { MetadataRoute } from "next";

const BASE_URL = "https://doxiverse.com"; // Replace with your actual domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/profile/",
          "/login",
          "/signup",
          "/forgot-password",
          "/verify-email",
          "/*?*utm_*", // Disallow URLs with UTM parameters
        ],
      },
      {
        userAgent: "GPTBot", // OpenAI's web crawler
        disallow: ["/"],
      },
      {
        userAgent: "CCBot", // Common Crawl bot
        disallow: ["/"],
      },
      {
        userAgent: "ChatGPT-User", // ChatGPT crawler
        disallow: ["/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
