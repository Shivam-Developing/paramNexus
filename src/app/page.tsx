import HeroSection from "@/components/home/HeroSection";
import TrustStrip from "@/components/home/TrustStrip";
import WakeUpCall from "@/components/home/WakeUpCall";
import ServiceWings from "@/components/home/ServiceWings";
import StarterBundle from "@/components/home/StarterBundle";
import AchievementNumbers from "@/components/home/AchievementNumbers";
import WhyParamNexus from "@/components/home/WhyParamNexus";
import IndustriesWeServe from "@/components/home/IndustriesWeServe";
import OurProcess from "@/components/home/OurProcess";
import Testimonials from "@/components/home/Testimonials";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <WakeUpCall />
      <ServiceWings />
      <StarterBundle />
      <AchievementNumbers />
      <WhyParamNexus />
      <IndustriesWeServe />
      <OurProcess />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
