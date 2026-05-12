// app/robots.js
// Next.js App Router — Robots.txt Generator
// Docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: "https://muhfi.my.id/sitemap.xml",
    host: "https://muhfi.my.id",
  };
}