import { createFileRoute } from "@tanstack/react-router";

const PATHS = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/prodotti", priority: "0.9", changefreq: "weekly" },
  { path: "/come-funziona", priority: "0.8", changefreq: "monthly" },
  { path: "/tecnologia", priority: "0.7", changefreq: "monthly" },
  { path: "/chi-siamo", priority: "0.6", changefreq: "monthly" },
  { path: "/contatti", priority: "0.6", changefreq: "monthly" },
  { path: "/faq", priority: "0.5", changefreq: "monthly" },
  { path: "/privacy", priority: "0.2", changefreq: "yearly" },
  { path: "/cookie-policy", priority: "0.2", changefreq: "yearly" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const lastmod = new Date().toISOString().slice(0, 10);
        const urls = PATHS.map(
          (item) =>
            `  <url>\n    <loc>${origin}${item.path}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${item.changefreq}</changefreq>\n    <priority>${item.priority}</priority>\n  </url>`,
        ).join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});