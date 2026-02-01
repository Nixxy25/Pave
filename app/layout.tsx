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
  title: "Pave - Global Payment Infrastructure for Modern Commerce",
  description: "Accept payments from anywhere, send money globally, and manage transactions across borders with ease. Powering the future of commerce.",
  openGraph: {
    title: "Pave - Global Payment Infrastructure for Modern Commerce",
    description: "Accept payments from anywhere, send money globally, and manage transactions across borders with ease. Powering the future of commerce.",
    images: ["/pave2.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pave - Global Payment Infrastructure for Modern Commerce",
    description: "Accept payments from anywhere, send money globally, and manage transactions across borders with ease. Powering the future of commerce.",
    images: ["/pave2.png"],
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
