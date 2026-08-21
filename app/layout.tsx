import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Punjabi Pop Nostalgia — Radio & Music Archive",
  description: "A gorgeous, interactive single-page music player archiving the classic golden era of Punjabi Pop and modern hits.",
  keywords: ["Punjabi Pop", "Nostalgia Music", "Sidhu Moose Wala", "Diljit Dosanjh", "Yo Yo Honey Singh", "Karan Aujla", "Shubh", "AP Dhillon", "Punjabi Songs", "Retro Radio"],
  openGraph: {
    title: "Punjabi Pop Nostalgia — Radio & Music Archive",
    description: "Stream the greatest Punjabi pop nostalgic tracks on a glass-morphic music player.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth select-none antialiased">
      <body className="h-full bg-black text-white overflow-hidden">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
