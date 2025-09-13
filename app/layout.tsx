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
  title: {
    template: "%s | Doxiverse",
    default: "Doxiverse | AI for Healthcare",
  },
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
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
