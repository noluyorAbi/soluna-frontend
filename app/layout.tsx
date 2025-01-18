// app/layout.tsx

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "@/app/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SOLUNA Dashboard",
  description: "Dashboard für SOLUNA Clan Aktivitäten, erstellt von Alpi",
  keywords: [
    "SOLUNA Dashboard",
    "Clan Aktivitäten",
    "Next.js",
    "React",
    "Full-Stack Entwicklung",
    "TailwindCSS",
    "Gaming Dashboard",
    "Clan Management",
    "Web Entwickler",
  ],
  openGraph: {
    url: "https://soluna-frontend.vercel.app/",
    type: "website",
    title: "SOLUNA Dashboard",
    description: "Dashboard für SOLUNA Clan Aktivitäten, erstellt von Alpi",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/cc397e5f-fa6e-405b-a3e3-ec8e883832d7.png?token=4LUi2J75S8b5CVBVirtNRZZZ4ZoPzuLsY3CHbjR8k9Q&height=420&width=800&expires=33273239527",
        alt: "SOLUNA Dashboard - Clan Aktivitäten verwalten",
        width: 800,
        height: 420,
      },
    ],
    siteName: "SOLUNA Dashboard",
  },
  twitter: {
    card: "summary_large_image",
    title: "SOLUNA Dashboard",
    description: "Dashboard für SOLUNA Clan Aktivitäten, erstellt von Alpi",
    images: [
      "https://opengraph.b-cdn.net/production/images/cc397e5f-fa6e-405b-a3e3-ec8e883832d7.png?token=4LUi2J75S8b5CVBVirtNRZZZ4ZoPzuLsY3CHbjR8k9Q&height=420&width=800&expires=33273239527",
    ],
    site: "@soluna_dashboard", // Falls du einen Twitter-Handle hast
    creator: "@alpi_handle", // Optional: Der Twitter-Handle des Erstellers
  },
  icons: {
    icon: "/favicon.ico", // Pfad zu deinem Favicon
    apple: "/apple-touch-icon.png", // Optional: Apple Touch Icon
  },
  // Weitere Metadaten können hier hinzugefügt werden
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow pt-14 bg-gray-50 dark:bg-gray-900 transition-all">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
