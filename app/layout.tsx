import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = localFont({
  src: [
    { path: "./fonts/SpaceGrotesk-Light.ttf", weight: "300" },
    { path: "./fonts/SpaceGrotesk-Regular.ttf", weight: "400" },
    { path: "./fonts/SpaceGrotesk-Medium.ttf", weight: "500" },
    { path: "./fonts/SpaceGrotesk-SemiBold.ttf", weight: "600" },
    { path: "./fonts/SpaceGrotesk-Bold.ttf", weight: "700" },
  ],
  variable: "--font-space-grotesk",
});

const spaceMono = localFont({
  src: [
    { path: "./fonts/SpaceMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/SpaceMono-Italic.ttf", weight: "400", style: "italic" },
    { path: "./fonts/SpaceMono-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/SpaceMono-BoldItalic.ttf", weight: "700", style: "italic" },
  ],
  variable: "--font-space-mono",
});

export const metadata: Metadata = {
  title: "Muhammad Noviyanto — Frontend Developer",
  description:
    "Portfolio resmi Muhammad Noviyanto (Muhnov / MuhFi), Frontend Developer. Next.js, Tailwind CSS, dan Shadcn UI.",
  keywords:
    "Muhammad Noviyanto, Muhnov, MuhFi, Frontend Developer, Next.js Developer, Web Developer Indonesia",
  authors: [{ name: "Muhammad Noviyanto", url: "https://muhfi.my.id" }],
  creator: "Muhammad Noviyanto",
  metadataBase: new URL("https://muhfi.my.id"),
  alternates: {
    canonical: "https://muhfi.my.id",
  },
  openGraph: {
    title: "Muhammad Noviyanto — Frontend Developer",
    description:
      "Portfolio resmi Muhammad Noviyanto, Frontend Developer dari Sukoharjo. Spesialisasi Next.js, Tailwind CSS, dan Shadcn UI.",
    url: "https://muhfi.my.id",
    siteName: "Muhammad Noviyanto",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Muhammad Noviyanto — Frontend Developer",
    description:
      "Portfolio resmi Muhammad Noviyanto, Frontend Developer dari Sukoharjo.",
    creator: "@MuhammadNoviya6",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Noviyanto",
  alternateName: ["Muhnov", "MuhFi"],
  url: "https://muhfi.my.id",
  image: "https://muhfi.my.id/avatar.jpg",
  sameAs: [
    "https://github.com/muhnov",
    "https://x.com/MuhammadNoviya6",
    "https://www.instagram.com/muh.noviyanto/",
    "https://tiktok.com/@muhnov_",
    "https://facebook.com/muhammad.noviyanto.2025",
  ],
  jobTitle: "Frontend Developer",
  description:
    "Frontend Developer dari Sukoharjo, Indonesia. Spesialisasi Next.js, Tailwind CSS, dan Shadcn UI.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Sukoharjo",
    addressLocality: "Jawa Tengah",
    addressCountry: "ID",
  },
  email: "muhnoviyanto815@gmail.com",
  knowsAbout: ["Next.js", "React", "Tailwind CSS", "Shadcn UI", "Frontend Development"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}