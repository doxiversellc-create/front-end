import { Inter, Outfit } from "next/font/google";

import type { Metadata } from "next";

import "./globals.css";
// import Navbar from "@/components/Navbar";

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
    default: "Doxiverse - AI for Healthcare",
  },
};
// export const metadata: Metadata = {
//   title: "Doxiverse - AI for Healthcare",
//   description: "Revolutionizing Healthcare with AI-Powered Solutions",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
