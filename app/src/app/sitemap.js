// app/sitemap.js
export default function sitemap() {
    const baseUrl = "https://www.m2atech.com";
    const currentDate = new Date();

    return [
      {
        url: baseUrl,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 1.0,
      },
      {
        url: `${baseUrl}/services`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/services/web-apps`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/services/mobile-apps`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/services/custom-software`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/services/seo`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.8,
      },
      {
        url: `${baseUrl}/projects`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/jobs`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.6,
      },
      {
        url: `${baseUrl}/contact`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.8,
      },
    ];
  }