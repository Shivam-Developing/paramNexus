import type { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact Param Nexus — Free Digital Audit Jaipur",
  description: "Get a free digital audit for your Jaipur business. Contact Param Nexus — response within 2 hours. WhatsApp or call, Mon–Sat.",
};

export default function Page() {
  return <ContactPage />;
}
