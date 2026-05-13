import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown, Telescope, Radio, Microscope } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const earthRef = useRef<HTMLDivElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(starsRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(contentRef.current, {
        y: -50,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '40% top',
          scrub: true,
        },
      });

      gsap.to(earthRef.current, {
        y: -100,
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-eyebrow', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
      })
        .from(
          '.hero-headline span',
          {
            y: 60,
            opacity: 0,
            rotateX: 15,
            duration: 1,
            stagger: 0.1,
          },
          '-=0.4'
        )
        .from(
          '.hero-subheadline',
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          '-=0.6'
        )
        .from(
          '.hero-cta',
          {
            scale: 0.5,
            opacity: 0,
            duration: 0.5,
            stagger: 0.1,
            ease: 'back.out(1.7)',
          },
          '-=0.3'
        )
        .from(
          earthRef.current,
          {
            x: 200,
            scale: 0.6,
            rotate: 10,
            opacity: 0,
            duration: 1.5,
            ease: 'power2.out',
          },
          '-=1.2'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToEvidence = () => {
    const element = document.querySelector('#evidence');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToClaims = () => {
    const element = document.querySelector('#claims');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div ref={starsRef} className="absolute inset-0 starfield opacity-60" style={{ transform: 'scale(1.5)' }} aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black" aria-hidden="true" />

      <div className="absolute top-1/4 left-10 opacity-20 animate-float" aria-hidden="true">
        <Telescope aria-hidden="true" className="w-12 h-12 text-blue-400" />
      </div>
      <div className="absolute bottom-1/3 right-20 opacity-20 animate-float" style={{ animationDelay: '2s' }} aria-hidden="true">
        <Radio aria-hidden="true" className="w-10 h-10 text-blue-400" />
      </div>
      <div className="absolute top-1/3 right-1/4 opacity-15 animate-float" style={{ animationDelay: '4s' }} aria-hidden="true">
        <Microscope aria-hidden="true" className="w-8 h-8 text-blue-400" />
      </div>

      <div className="relative z-10 w-full section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div ref={contentRef} className="text-center lg:text-left">
            <p className="hero-eyebrow text-blue-400 font-['Space_Grotesk'] font-semibold text-sm tracking-widest uppercase mb-6">
              The Evidence Did Not Stop in 1969
            </p>

            <h1 className="hero-headline font-['Space_Grotesk'] font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6 perspective-1000">
              <span className="inline-block">We</span>{' '}
              <span className="inline-block">Really</span>{' '}
              <span className="inline-block">Went</span>{' '}
              <span className="inline-block text-gradient">to</span>{' '}
              <span className="inline-block text-gradient">the</span>{' '}
              <span className="inline-block text-gradient">Moon</span>
            </h1>

            <p className="hero-subheadline text-gray-400 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Independent verification. Laser ranging. Orbital imagery. Lunar samples. The proof is still accumulating today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button onClick={scrollToEvidence} className={`hero-cta btn-primary ${focusRing}`} type="button">
                See the Evidence
              </button>
              <button onClick={scrollToClaims} className={`hero-cta btn-secondary ${focusRing}`} type="button">
                Explore Claims
              </button>
            </div>
          </div>

          <div ref={earthRef} className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg animate-float">
              <img
                src="/earth-hero.jpg"
                alt="Earth seen from space, introducing ApolloProof as a Moon landing evidence library"
                className="w-full h-auto rounded-full shadow-2xl"
                style={{
                  boxShadow: '0 0 100px rgba(59, 130, 246, 0.3), 0 0 200px rgba(59, 130, 246, 0.1)',
                }}
              />
              <div
                className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-3/4 h-20 opacity-30"
                style={{
                  background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.3), transparent)',
                  filter: 'blur(20px)',
                  transform: 'translateX(-50%) scaleY(-1)',
                }}
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 animate-bounce" aria-hidden="true">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown aria-hidden="true" className="w-5 h-5" />
      </div>
    </section>
  );
};

export default Hero;
