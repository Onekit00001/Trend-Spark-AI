import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const title = "Free AI Content Idea Generator 2025 | TikTok, Instagram, YouTube | TrendSpark AI";
const description = "Generate unlimited, brand-new content ideas for TikTok, Instagram, YouTube, and more with TrendSpark AI. Our free, offline multi-tool includes a hashtag generator and caption templates to supercharge your social media presence.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "AI content generator", "content idea generator", "TikTok ideas", "Instagram ideas",
    "YouTube ideas", "social media ideas", "free content ideas", "TrendSpark AI",
    "hashtag generator", "caption templates"
  ],
  openGraph: { title, description, type: "website", url: "https://trendsparkai.work" },
  twitter: { card: "summary_large_image", title, description },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

    <meta name="monetag" content="a04dd9ed352c18c8b7f183464aff548f">
        {/* ← CORRECT FAVICON PATH ← */}
        <link rel="icon" href="/favicon.ico" sizes="any" />

      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
