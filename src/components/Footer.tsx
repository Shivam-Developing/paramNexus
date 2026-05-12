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
    <footer className="bg-darkFooter text-white/80 border-t-2 border-teal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1: Brand Logos */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="font-display text-xl font-bold text-white tracking-tight">
                PARAM NEXUS
              </h3>
              <p className="text-sm text-teal-light mt-1">AI-Powered Digital Growth</p>
            </div>
            <div className="mb-6 pt-4 border-t border-white/10">
              <h4 className="font-display text-base font-semibold text-white/90">
                PARAM ADVERTISING
              </h4>
              <p className="text-sm text-gold/80 mt-1">Jaipur&apos;s Print Authority</p>
            </div>
            <div className="flex gap-3 mt-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-teal/20 flex items-center justify-center text-lg transition-colors duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-teal-light transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-teal-light transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="font-display text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 mt-0.5 text-teal-light shrink-0" />
                <div>
                  <a href="tel:+918744003727" className="text-sm text-white/60 hover:text-white transition-colors">
                    +91 87440 03727
                  </a>
                  <br />
                  <a href="tel:+918619620062" className="text-sm text-white/60 hover:text-white transition-colors">
                    +91 86196 20062
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-teal-light shrink-0" />
                <a href="mailto:hello@paramnexus.in" className="text-sm text-white/60 hover:text-white transition-colors">
                  hello@paramnexus.in
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-teal-light shrink-0" />
                <span className="text-sm text-white/60">Jaipur, Rajasthan</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-teal-light shrink-0" />
                <a href="https://wa.me/918744003727" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-teal-light shrink-0" />
                <span className="text-sm text-white/60">Mon–Sat: 10am–7pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2026 Param Nexus · A Division of Param Advertising Agency
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-xs text-white/40 hover:text-white/70 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
