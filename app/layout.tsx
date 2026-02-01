import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pave",
  description: "Global Payment Infrastructure for Modern Commerce.",
  openGraph: {
    title: "Pave",
    description: "Global Payment Infrastructure for Modern Commerce.",
    images: ["/pave.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pave",
    description: "Global Payment Infrastructure for Modern Commerce.",
    images: ["/pave.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
