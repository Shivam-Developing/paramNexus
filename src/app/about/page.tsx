import type { Metadata } from "next";
import AboutPage from "./AboutPage";

export const metadata: Metadata = {
  title: "About Param Nexus — Built on 20+ Years of Jaipur Trust",
  description:
    "Param Nexus is the AI-powered digital division of Param Advertising Agency. Websites, social media & video for Jaipur businesses at honest pricing.",
};

export default function Page() {
  return <AboutPage />;
}
