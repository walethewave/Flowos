import Navbar from "@/components/Navbar";
import Hero from "./sections/Hero";
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
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
