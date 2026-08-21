import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "गाणी आणि गप्पा (Gaani Ani Gappa) — Marathi Nostalgia Radio",
  description: "सदाबहार मराठी गाणी, लावणी, चित्रपट संगीत, कोळीगीते आणि भावगीतांचा सुरेल खजिना. Stream the golden archive of Marathi music on a glass-morphic retro radio.",
  keywords: [
    "गाणी आणि गप्पा",
    "Gaani Ani Gappa",
    "Marathi Songs",
    "Marathi Nostalgia Radio",
    "Lata Mangeshkar",
    "Asha Bhosle",
    "Sudhir Phadke",
    "Ajay Atul",
    "Sanju Rathod",
    "Gulabi Sadi",
    "Zingaat",
    "Apsara Aali",
    "Marathi Retro Music"
  ],
  openGraph: {
    title: "गाणी आणि गप्पा (Gaani Ani Gappa) — Marathi Nostalgia Radio",
    description: "सदाबहार मराठी गाणी, लावणी, चित्रपट संगीत, कोळीगीते आणि भावगीतांचा सुरेल खजिना.",
    type: "website",
    locale: "mr_IN",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="mr" className="h-full scroll-smooth select-none antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mukta:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Share+Tech+Mono&family=Rozha+One&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="h-full bg-black text-white overflow-hidden">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
