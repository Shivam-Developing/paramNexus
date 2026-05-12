import type { Metadata } from "next";
import LegacyPage from "./LegacyPage";

export const metadata: Metadata = {
  title: "Newspaper Advertising Jaipur — Dainik Bhaskar, Rajasthan Patrika | Param Advertising",
  description: "Book ads in Dainik Bhaskar, Rajasthan Patrika, Times of India & all Jaipur publications. Param Advertising Agency — decades of trust.",
};

export default function Page() {
  return <LegacyPage />;
}
