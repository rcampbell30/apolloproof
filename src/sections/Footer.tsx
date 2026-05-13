import { Orbit } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="faq" className="relative py-16 border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-gray-950" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo & Tagline */}
            <div className="lg:col-span-2">
              <a
                href="#"
                className="flex items-center gap-3 mb-4"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <Orbit className="w-8 h-8 text-blue-500" />
                <span className="font-['Space_Grotesk'] font-bold text-xl tracking-tight">
                  Apollo<span className="text-blue-500">Proof</span>
                </span>
              </a>
              <p className="text-gray-400 max-w-md leading-relaxed">
                Evidence-based exploration of humanity&apos;s greatest journey. 
                Presenting scientific proof through independent verification, 
                modern imagery, and ongoing lunar research.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-['Space_Grotesk'] font-semibold text-lg mb-4">
                Explore
              </h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('#evidence')}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Evidence
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#claims')}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Claims
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#timeline')}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Timeline
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#sources')}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    Sources
                  </button>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="font-['Space_Grotesk'] font-semibold text-lg mb-4">
                About
              </h4>
              <ul className="space-y-3">
                <li>
                  <span className="text-gray-400">
                    Built for critical thinking
                  </span>
                </li>
                <li>
                  <span className="text-gray-400">
                    Educational purpose
                  </span>
                </li>
                <li>
                  <span className="text-gray-400">
                    Evidence-first approach
                  </span>
                </li>
                <li>
                  <span className="text-gray-400">
                    Independent sources
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="border-t border-white/10 pt-12 mb-12">
            <h4 className="font-['Space_Grotesk'] font-semibold text-lg mb-6 text-center">
              Frequently Asked Questions
            </h4>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/5 rounded-xl p-5">
                <h5 className="font-semibold text-blue-400 mb-2">Did the Soviets accept Apollo happened?</h5>
                <p className="text-gray-400 text-sm">Yes. The Soviet Union tracked the missions independently and acknowledged the landings. They had every incentive to expose a fake but never did.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5">
                <h5 className="font-semibold text-blue-400 mb-2">Can anyone bounce lasers off the Moon?</h5>
                <p className="text-gray-400 text-sm">Yes, with the right equipment. Observatories worldwide routinely target the Apollo retroreflectors to measure the Moon&apos;s distance.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5">
                <h5 className="font-semibold text-blue-400 mb-2">Are the landing sites visible?</h5>
                <p className="text-gray-400 text-sm">LRO has photographed all Apollo landing sites, showing modules, rovers, and astronaut tracks. China and India&apos;s orbiters have also imaged them.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5">
                <h5 className="font-semibold text-blue-400 mb-2">Is doubting Apollo irrational?</h5>
                <p className="text-gray-400 text-sm">Not necessarily. Healthy skepticism is good. This site aims to address legitimate questions with evidence, not mockery.</p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} ApolloProof. Educational purpose.
            </p>
            <p className="text-gray-600 text-sm">
              The evidence did not stop in 1969.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
