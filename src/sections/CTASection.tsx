import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Telescope, BookOpen } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black';

const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-heading', {
        scale: 0.9,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.cta-subheading', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.cta-button', {
        scale: 0.5,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollToEvidence = () => {
    const element = document.querySelector('#evidence');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTimeline = () => {
    const element = document.querySelector('#timeline');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" aria-hidden="true" />

      <div className="absolute inset-0 flex items-center justify-center opacity-10" aria-hidden="true">
        <img
          src="/earth-hero.jpg"
          alt=""
          aria-hidden="true"
          className="w-[800px] h-auto animate-float"
          style={{ animationDuration: '20s' }}
        />
      </div>

      <div className="absolute top-20 left-20 opacity-30 animate-twinkle" aria-hidden="true">
        <div className="w-1 h-1 bg-white rounded-full" />
      </div>
      <div className="absolute top-40 right-32 opacity-20 animate-twinkle" style={{ animationDelay: '1s' }} aria-hidden="true">
        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
      </div>
      <div className="absolute bottom-32 left-1/4 opacity-25 animate-twinkle" style={{ animationDelay: '2s' }} aria-hidden="true">
        <div className="w-1 h-1 bg-white rounded-full" />
      </div>

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="cta-heading font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl lg:text-6xl mb-6">
            Explore the Evidence Yourself
          </h2>

          <p className="cta-subheading text-gray-400 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Dive deeper into the proof, examine the claims, and draw your own conclusions. The evidence speaks for itself.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={scrollToEvidence} className={`cta-button btn-primary inline-flex items-center justify-center gap-2 ${focusRing}`} type="button">
              <Telescope aria-hidden="true" className="w-5 h-5" />
              View All Evidence
            </button>
            <button onClick={scrollToTimeline} className={`cta-button btn-secondary inline-flex items-center justify-center gap-2 ${focusRing}`} type="button">
              <BookOpen aria-hidden="true" className="w-5 h-5" />
              Browse the Timeline
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
