"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import StaggeredGrid from "@/components/ui/StaggeredGrid";
import { ArrowRight } from "lucide-react";

const pillars = [
  {
    emoji: "🏛",
    title: "ROOTED IN JAIPUR",
    body: "We didn't study your market from a Mumbai office. We grew up in it. We know the Diwali rush for jewelers, the admission season for coaching institutes, and the wedding tourism spike for hotels. Our strategies are built around your actual business calendar — not generic templates.",
  },
  {
    emoji: "🤖",
    title: "POWERED BY AI",
    body: "Every service we deliver is executed with a carefully chosen AI toolstack that reduces delivery time and cost by up to 70%. This isn't automation for automation's sake — it's precision efficiency that lets us price fairly without ever compromising on quality.",
  },
  {
    emoji: "📈",
    title: "OBSESSED WITH YOUR GROWTH",
    body: "We don't chase follower counts or website traffic numbers. We chase the metrics that matter to a local business owner: calls received, inquiries submitted, customers who said \"I found you on Google.\" That is our report card.",
  },
];

const founders = [
  { name: "Shivam Dhanda", role: "Co-Founder & Director", phone: "+91 87440 03727", bio: "Leading Param Nexus's vision to bridge print legacy with digital innovation, Shivam brings strategic business acumen and deep understanding of the Jaipur market." },
  { name: "Ayush Sharma", role: "Co-Founder & Director", phone: "+91 86196 20062", bio: "Driving the technology and creative vision at Param Nexus, Ayush combines AI expertise with a passion for helping local businesses achieve digital dominance." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-offWhite overflow-hidden pt-28 pb-20 lg:pt-32 lg:pb-28 circuit-watermark">
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-teal/[0.03] blur-[100px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-darkFooter leading-[1.08]">
                We&apos;ve Served Jaipur
                <br />
                For Decades.
                <br />
                Now We&apos;re Taking It{" "}
                <motion.span
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-teal"
                >
                  Digital.
                </motion.span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hidden lg:flex justify-end"
            >
              {/* Asymmetric image frame */}
              <div className="relative w-80 h-80">
                <div className="absolute top-0 left-0 w-56 h-64 rounded-2xl bg-gradient-to-br from-teal/20 to-teal/5 border-2 border-teal/30 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-warmGray to-offWhite flex items-center justify-center">
                    <span className="font-display text-6xl text-teal/20">PN</span>
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 w-48 h-52 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold/30 overflow-hidden shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-warmGray to-offWhite flex items-center justify-center">
                    <span className="font-display text-5xl text-gold/20">PA</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <SectionWrapper className="bg-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <p className="text-lg text-charcoal/70 leading-relaxed">
            Param Advertising Agency has placed thousands of campaigns across
            Dainik Bhaskar, Rajasthan Patrika, Times of India, and Mahanagar Times.
            In that time, we built something more valuable than a client list —
            we built genuine trust with hundreds of Jaipur business owners.
          </p>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            But we kept seeing the same story repeat itself. A brilliant jewelry
            showroom in Johari Bazar. A thriving coaching institute near Gopalpura.
            A heritage hotel near Amer. All investing in print — while their digital
            presence was broken, outdated, or simply didn&apos;t exist. Their customers
            were Googling them and finding nothing.
          </p>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            Param Nexus is our answer to that problem. Not with overpriced retainers.
            Not with generic strategies imported from Delhi or Mumbai. With AI-powered
            execution, deep local market knowledge, and pricing that respects where
            our clients actually are.
          </p>
          <div className="pt-4 border-l-4 border-teal pl-6">
            <p className="text-xl font-display font-bold text-teal">
              Our Mission: Make every Jaipur business impossible to ignore online.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* Three Pillars */}
      <SectionWrapper className="bg-offWhite py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggeredGrid className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl p-6 lg:p-8 border-t-4 border-t-teal shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300"
              >
                <span className="text-3xl block mb-4">{p.emoji}</span>
                <h3 className="font-display text-base font-bold text-darkFooter uppercase tracking-wide mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </StaggeredGrid>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-darkFooter text-center mb-12">
            The People Behind <span className="text-teal">Param Nexus</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {founders.map((f) => (
              <div key={f.name} className="text-center bg-offWhite rounded-2xl p-6 border border-black/5">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-teal/20 to-teal/5 border-2 border-teal/30 flex items-center justify-center">
                  <span className="font-display text-2xl font-bold text-teal/40">
                    {f.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-darkFooter">{f.name}</h3>
                <p className="text-sm text-teal font-medium">{f.role}</p>
                <p className="text-xs text-charcoal/50 mt-1">{f.phone}</p>
                <p className="text-sm text-charcoal/60 mt-3 leading-relaxed">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Parent Brand Bridge */}
      <SectionWrapper className="bg-warmGray/50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-darkFooter text-center mb-4">
            Our Parent Brand — <span className="text-teal">The Foundation Everything is Built On</span>
          </h2>
          <p className="text-center text-charcoal/60 max-w-2xl mx-auto mb-12 leading-relaxed">
            Param Advertising Agency is not just our parent company — it&apos;s our proof of concept.
            Decades of building trust, delivering campaigns on time, and helping Jaipur businesses grow
            is the foundation on which Param Nexus stands. When you work with Param Nexus, you&apos;re not
            working with a startup. You&apos;re working with a name this city has trusted for over two decades.
          </p>

          {/* Bridge Visual */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-0">
            <div className="bg-warmGray rounded-2xl p-8 text-center flex-1 max-w-xs border border-black/5">
              <h3 className="font-display text-xl font-bold text-darkFooter mb-2">PARAM ADVERTISING</h3>
              <p className="text-sm text-charcoal/50">Print · Legacy · Trust · Local</p>
            </div>
            <div className="flex items-center justify-center px-6">
              <div className="flex items-center gap-1">
                <div className="w-12 h-0.5 bg-gold" />
                <ArrowRight className="w-6 h-6 text-gold" />
              </div>
            </div>
            <div className="bg-teal rounded-2xl p-8 text-center flex-1 max-w-xs">
              <h3 className="font-display text-xl font-bold text-white mb-2">PARAM NEXUS</h3>
              <p className="text-sm text-white/60">Digital · AI · Growth · Future</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
            <Link href="/services/website-development" className="px-6 py-3 text-sm font-semibold text-white bg-teal rounded-full hover:bg-teal-dark transition-colors mobile-full-width-cta">
              🚀 See What We Can Do For Your Business
            </Link>
            <a href="tel:+918744003727" className="px-6 py-3 text-sm font-semibold text-teal border-2 border-teal rounded-full hover:bg-teal hover:text-white transition-all mobile-full-width-cta">
              📞 Talk to Our Team
            </a>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
