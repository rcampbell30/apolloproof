import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import FiveProofs from './sections/FiveProofs';
import HowWeKnow from './sections/HowWeKnow';
import EvidenceLibrary from './sections/EvidenceLibrary';
import FeaturedClaims from './sections/FeaturedClaims';
import WhyHarderToFake from './sections/WhyHarderToFake';
import ProofAfter1969 from './sections/ProofAfter1969';
import SourceCredibility from './sections/SourceCredibility';
import CTASection from './sections/CTASection';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize scroll animations
    const ctx = gsap.context(() => {
      // Refresh ScrollTrigger on load
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <FiveProofs />
        <EvidenceLibrary />
        <HowWeKnow />
        <FeaturedClaims />
        <WhyHarderToFake />
        <ProofAfter1969 />
        <SourceCredibility />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
