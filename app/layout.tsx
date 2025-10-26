import { Inter, Outfit, Space_Grotesk } from "next/font/google";

import type { Metadata } from "next";
import { Toaster } from "sonner";

import { AuthProvider } from "@/contexts/AuthContext";

import "./globals.css";

const space_grotesk = Space_Grotesk({
  variable: "--font-space_grotesk",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  metadataBase: new URL("https://doxiverse.com"), // Replace with your actual domain
  title: {
    template: "%s | Doxiverse",
    default: "Doxiverse | AI for Healthcare",
  },
  description:
    "Discover the latest AI tools, researches, and innovations in healthcare. Stay updated with FDA approvals, research, and cutting-edge AI technologies transforming medical care.",
  keywords: [
    "AI healthcare",
    "medical AI tools",
    "healthcare technology",
    "FDA updates",
    "medical research",
    "AI news",
    "healthcare innovation",
    "medical AI",
    "digital health",
  ],
  authors: [{ name: "Doxiverse Team" }],
  creator: "Doxiverse",
  publisher: "Doxiverse",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://doxiverse.com",
    siteName: "Doxiverse",
    title: "Doxiverse | AI for Healthcare",
    description:
      "Discover the latest AI tools, researches, and innovations in healthcare. Stay updated with FDA approvals, research, and cutting-edge AI technologies transforming medical care.",
    images: [
      {
        url: "/og-image.png", // You'll need to create this
        width: 1200,
        height: 630,
        alt: "Doxiverse - AI for Healthcare",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Doxiverse | AI for Healthcare",
    description:
      "Discover the latest AI tools, researches, and innovations in healthcare. Stay updated with FDA approvals, research, and cutting-edge AI technologies transforming medical care.",
    images: ["/twitter-image.png"], // You'll need to create this
    creator: "@doxiverse", // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    // Add these when you set up the services
    // google: "your-google-site-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${outfit.variable} ${space_grotesk.variable} font-inter antialiased`}
      >
        <AuthProvider>{children}</AuthProvider>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
