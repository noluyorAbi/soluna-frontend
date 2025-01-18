import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "@/Footer";

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
  description: "Dashboard for SOLUNA Clan activities, made by Alpi",
  keywords: [
    "SOLUNA Dashboard",
    "Clan Activities",
    "Next.js",
    "React",
    "Full-Stack Development",
    "TailwindCSS",
    "Gaming Dashboard",
    "Clan Management",
    "Web Developer",
  ],
  openGraph: {
    url: "https://soluna-dashboard.com",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        alt: "SOLUNA Dashboard - Manage Clan Activities",
        width: 1200,
        height: 675,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow pt-8 bg-gray-50 dark:bg-gray-900 transition-all">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}