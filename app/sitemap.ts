import type { MetadataRoute } from "next";

const BASE_URL = "https://wakasub.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/internship`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact-support`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
