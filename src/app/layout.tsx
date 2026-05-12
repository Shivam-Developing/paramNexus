import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Param Nexus — AI-Powered Digital Agency Jaipur",
  description:
    "Jaipur's most affordable AI-powered digital agency. Websites from ₹8,999, social media from ₹4,999/mo & video content. Built on 20+ years of Param Advertising trust.",
  keywords: [
    "digital agency jaipur",
    "website development jaipur",
    "social media marketing jaipur",
    "AI agency",
    "Param Nexus",
    "Param Advertising",
  ],
  authors: [
    { name: "Shivam Dhanda" },
    { name: "Ayush Sharma" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-body bg-obsidian text-white antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
