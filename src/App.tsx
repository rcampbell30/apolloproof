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
    const ctx = gsap.context(() => {
      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-blue-500 focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content">
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
