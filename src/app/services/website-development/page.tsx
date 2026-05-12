import type { Metadata } from "next";
import WebDevPage from "./WebDevPage";

export const metadata: Metadata = {
  title: "Website Development Jaipur from ₹8,999 | Param Nexus",
  description: "Get a professional, mobile-ready website in 15 days. Starting at ₹8,999. AI-built, SEO-ready, Jaipur-made by Param Nexus.",
};

export default function Page() {
  return <WebDevPage />;
}
