// app/sitemap.js
// Next.js App Router — Sitemap Generator
// Docs: https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

export default function sitemap() {
  const baseUrl = "https://muhfi.my.id";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}