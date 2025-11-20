import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Free AI Content Idea Generator 2025 | TikTok, Instagram, YouTube | TrendSpark AI",
  description: "Generate unlimited content ideas with TrendSpark AI – free hashtag & caption tool.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

        {/* Adsterra Social Bar + In-Page Push */}
        <script src="https://www.effectivegatecpm.com/wtdqrhqc55?key=95c09a33e9658563fbefdcac0a5b1ae1" async></script>
        <script src="https://www.effectivegatecpm.com/ifh827nw?key=dc52fbe50ae6cfd56dee1359b404d16b" async></script>

        {/* PropellerAds Push + OnClick */}
        <script src="https://ad.propellerads.com/push/smart-link-3023446/push.js" async></script>
<meta name="monetag" content="a04dd9ed352c18c8b7f183464aff548f">
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
