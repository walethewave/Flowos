import Navbar from "@/components/Navbar";
import Hero from "./sections/Hero";
import SocialProofBar from "./sections/SocialProofBar";
import Features from "./sections/Features";
import HowItWorks from "./sections/HowItWorks";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProofBar />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
