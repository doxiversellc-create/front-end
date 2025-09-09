import { Inter, Outfit } from "next/font/google";

import type { Metadata } from "next";
import { Toaster } from "sonner";

import { AuthProvider } from "@/contexts/AuthContext";

import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Doxiverse - AI for Healthcare",
  description: "Revolutionizing Healthcare with AI-Powered Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-inter antialiased`}>
        <AuthProvider>{children}</AuthProvider>
        <Toaster />
      </body>
    </html>
  );
}
