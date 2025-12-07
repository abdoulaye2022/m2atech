// app/sitemap.js
export default function sitemap() {
    const baseUrl = "https://www.m2atech.com";
    const currentDate = new Date().toISOString();

    // Pages principales
    const mainPages = [
      {
        url: baseUrl,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 1.0,
      },
      {
        url: `${baseUrl}/about`,
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
        url: `${baseUrl}/contact`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/jobs`,
        lastModified: currentDate,
        changeFrequency: "weekly",
        priority: 0.7,
      },
    ];

    // Pages de services
    const servicePages = [
      {
        url: `${baseUrl}/services/web-apps`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/services/mobile-apps`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/services/custom-software`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/services/seo`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/services/ai`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.9,
      },
      {
        url: `${baseUrl}/services/cybersecurity`,
        lastModified: currentDate,
        changeFrequency: "monthly",
        priority: 0.9,
      },
    ];

    // Pages légales
    const legalPages = [
      {
        url: `${baseUrl}/privacy`,
        lastModified: currentDate,
        changeFrequency: "yearly",
        priority: 0.3,
      },
      {
        url: `${baseUrl}/cookie`,
        lastModified: currentDate,
        changeFrequency: "yearly",
        priority: 0.3,
      },
    ];

    return [...mainPages, ...servicePages, ...legalPages];
  }