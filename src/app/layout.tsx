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
  title: "Rafi Fauzan Hermansah | Portfolio",
  description:
    "Personal portfolio of Rafi Fauzan Hermansah, D3 Sistem Informasi student at Telkom University, building full-stack web and mobile applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased dark"
    >
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans`}>
        {children}
      </body>
    </html>
  );
}
