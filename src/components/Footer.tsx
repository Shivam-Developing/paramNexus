import Link from "next/link";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const serviceLinks = [
  { label: "Website Dev", href: "/services/website-development" },
  { label: "Social Media", href: "/services/social-media" },
  { label: "KliqueNexus", href: "/kliquenexus" },
  { label: "Starter Bundle", href: "/#starter-bundle" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Legacy", href: "/our-legacy" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/paramnexus", icon: "📷" },
  { label: "LinkedIn", href: "https://linkedin.com/company/paramnexus", icon: "💼" },
  { label: "YouTube", href: "https://youtube.com/@paramnexus", icon: "▶️" },
  { label: "WhatsApp", href: "https://wa.me/918744003727", icon: "💬" },
];

export default function Footer() {
  return (
    <footer className="bg-obsidian text-gray-400 border-t border-white/10 relative overflow-hidden">
      {/* Ambient bleed */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-neonIndigo/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Col 1: Brand Logos */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-display text-xl font-bold text-white tracking-tight">
                PARAM NEXUS
              </h3>
              <p className="text-sm text-neonIndigo mt-1">AI-Powered Digital Growth</p>
            </div>
            <div className="mb-6 pt-4 border-t border-white/10">
              <h4 className="font-display text-base font-semibold text-white/90">
                PARAM ADVERTISING
              </h4>
              <p className="text-sm text-cyberCyan mt-1">Jaipur&apos;s Print Authority</p>
            </div>
            <div className="flex gap-3 mt-6">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-white/5 hover:bg-neonIndigo/20 hover:text-white flex items-center justify-center text-lg transition-all duration-300 border border-white/5 hover:border-neonIndigo/30"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-widest mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-widest mb-6">
              Company
            </h4>
            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-widest mb-6">
              Contact
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-1 text-neonIndigo shrink-0" />
                <div>
                  <a href="tel:+918744003727" className="text-sm hover:text-white transition-colors block">
                    +91 87440 03727
                  </a>
                  <a href="tel:+918619620062" className="text-sm hover:text-white transition-colors block mt-1">
                    +91 86196 20062
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-neonIndigo shrink-0" />
                <a href="mailto:hello@paramnexus.in" className="text-sm hover:text-white transition-colors">
                  hello@paramnexus.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-neonIndigo shrink-0" />
                <span className="text-sm leading-relaxed">
                  Param Cloth Store, 22, Arjun Nagar Phatak Rd, Kartarpura Phatak, Jaipur, Rajasthan 302006
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-neonIndigo shrink-0" />
                <span className="text-sm">Mon–Sat: 10am–7pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-gray-500">
            © 2026 Param Nexus · A Division of Param Advertising Agency
          </p>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-xs text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
