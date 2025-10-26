import { MetadataRoute } from "next";

// You can fetch dynamic routes from your API here
const BASE_URL = "https://doxiverse.com"; // Replace with your actual domain

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${BASE_URL}/about-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact-us`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ai-tools`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ai-news`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/ai-jobs`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/researches`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/fda-update`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/vendors`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/categories`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  // Dynamic routes - You can fetch these from your API
  // Example for blogs:
  try {
    // Uncomment and modify these based on your API endpoints
    // const blogsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
    // const blogs = await blogsResponse.json();
    // const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog: any) => ({
    //   url: `${BASE_URL}/blogs/${blog.slug}`,
    //   lastModified: new Date(blog.updatedAt),
    //   changeFrequency: 'monthly' as const,
    //   priority: 0.7,
    // }));

    // Similarly for tools:
    // const toolsResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tools`);
    // const tools = await toolsResponse.json();
    // const toolRoutes: MetadataRoute.Sitemap = tools.map((tool: any) => ({
    //   url: `${BASE_URL}/ai-tools/${tool.slug}`,
    //   lastModified: new Date(tool.updatedAt),
    //   changeFrequency: 'weekly' as const,
    //   priority: 0.7,
    // }));

    // For now, return static routes
    // Later, you can return [...staticRoutes, ...blogRoutes, ...toolRoutes, ...etc]
    return staticRoutes;
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return staticRoutes;
  }
}
