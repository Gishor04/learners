import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dineshlearners.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          ta: `${baseUrl}/?lang=ta`,
          en: `${baseUrl}/?lang=en`,
          si: `${baseUrl}/?lang=si`,
        },
      },
    },
  ];
}
