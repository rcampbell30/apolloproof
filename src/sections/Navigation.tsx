import { useState, useEffect } from 'react';
import { Menu, X, Orbit } from 'lucide-react';

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Proofs', href: '#evidence' },
    { label: 'Library', href: '#library' },
    { label: 'Claims', href: '#claims' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Sources', href: '#sources' },
    { label: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass py-3'
          : 'bg-transparent py-5'
      }`}
      aria-label="Primary navigation"
    >
      <div className="w-full section-padding">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className={`flex items-center gap-3 group rounded-lg ${focusRing}`}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            aria-label="ApolloProof home"
          >
            <div className="relative" aria-hidden="true">
              <Orbit
                aria-hidden="true"
                className={`w-8 h-8 text-blue-500 transition-transform duration-1000 ${
                  isScrolled ? 'animate-orbit' : ''
                }`}
              />
            </div>
            <span className="font-['Space_Grotesk'] font-bold text-xl tracking-tight">
              Apollo<span className="text-blue-500">Proof</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className={`relative rounded text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200 group ${focusRing}`}
                type="button"
              >
                {link.label}
                <span aria-hidden="true" className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('#evidence')}
              className={`btn-primary text-sm py-2.5 px-5 animate-pulse-glow ${focusRing}`}
              type="button"
            >
              Explore the Proof
            </button>
          </div>

          <button
            className={`md:hidden text-white p-2 rounded-lg ${focusRing}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            type="button"
          >
            {isMobileMenuOpen ? <X aria-hidden="true" className="w-6 h-6" /> : <Menu aria-hidden="true" className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-left text-gray-300 hover:text-white transition-colors duration-200 py-2 rounded ${focusRing}`}
                  type="button"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('#evidence')}
                className={`btn-primary text-sm py-3 mt-2 ${focusRing}`}
                type="button"
              >
                Explore the Proof
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
