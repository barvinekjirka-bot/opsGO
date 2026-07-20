import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import WhoWeHelpWhatWeDo from "@/components/WhoWeHelpWhatWeDo";
import HowWeWork from "@/components/HowWeWork";
import Methods from "@/components/Methods";
import BusinessModel from "@/components/BusinessModel";
import ImpactMetrics from "@/components/ImpactMetrics";
import Founders from "@/components/Founders";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden bg-ink">
      <Navbar />
      <Hero />
      <WhyUs />
      <WhoWeHelpWhatWeDo />
      <HowWeWork />
      <Methods />
      <BusinessModel />
      <ImpactMetrics />
      <Founders />
      <CaseStudies />
      <Contact />
      <Footer />
    </main>
  );
}
