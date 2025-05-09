// app/api/sitemap/route.js
export async function GET() {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://www.triopromovecleanservice.com/</loc>
      <lastmod>2024-06-15</lastmod>
      <changefreq>weekly</changefreq>
      <priority>1.0</priority>
    </url>
    <url>
      <loc>https://www.triopromovecleanservice.com/our-services</loc>
      <lastmod>2024-06-15</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.9</priority>
    </url>
    <url>
      <loc>https://www.triopromovecleanservice.com/why-choose-us</loc>
      <lastmod>2024-06-15</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://www.triopromovecleanservice.com/contact-us</loc>
      <lastmod>2024-06-15</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
  </urlset>`;
  
    return new Response(sitemap, {
      headers: {
        'Content-Type': 'application/xml',
      },
    });
  }