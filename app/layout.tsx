import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = { metadataBase: new URL("https://refashionlab.cc"), title: { default: "refashionlab — Beginner Sewing, Repair & Upcycling", template: "%s — refashionlab" }, description: "Beginner sewing, clothing repair, and upcycling guides.", alternates: { canonical: "/" }, icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><script async src="https://www.googletagmanager.com/gtag/js?id=G-DM6T1750HP"></script><script dangerouslySetInnerHTML={{ __html: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-DM6T1750HP');" }} /></head><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
