import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, Radio, Target, Gem, Satellite } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const evidenceItems = [
  {
    icon: Radio,
    text: 'Radio signals tracked by independent observatories',
  },
  {
    icon: Target,
    text: 'Retroreflectors still returning laser pulses today',
  },
  {
    icon: Gem,
    text: 'Lunar samples analyzed by labs in 30+ countries',
  },
  {
    icon: Satellite,
    text: 'Modern spacecraft image the landing sites',
  },
];

const HowWeKnow = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Content animations
      gsap.from('.how-eyebrow', {
        x: -30,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.how-heading', {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.how-paragraph', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.how-item', {
        x: -40,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 65%',
          toggleActions: 'play none none reverse',
        },
      });

      // Image parallax
      gsap.from(imageRef.current, {
        scale: 1.1,
        opacity: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.to(imageRef.current, {
        y: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-transparent" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <span className="how-eyebrow inline-block text-blue-400 font-['Space_Grotesk'] font-semibold text-sm tracking-widest uppercase mb-4">
                Verification Chain
              </span>

              <h2 className="how-heading font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl mb-6">
                How We Know It Happened
              </h2>

              <p className="how-paragraph text-gray-400 text-lg mb-10 leading-relaxed">
                The Apollo missions left multiple independent evidence trails. 
                Each one confirms the others, creating an unbreakable chain of proof.
              </p>

              {/* Evidence Checklist */}
              <div className="space-y-5">
                {evidenceItems.map((item, index) => (
                  <div
                    key={index}
                    className="how-item flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/30 transition-colors duration-300">
                      <Check className="w-5 h-5 text-blue-400" />
                    </div>
                    <div className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-gray-500 group-hover:text-blue-400 transition-colors duration-300" />
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {item.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
                <div>
                  <div className="font-['Space_Grotesk'] font-bold text-3xl text-blue-400">6</div>
                  <div className="text-gray-500 text-sm">Missions</div>
                </div>
                <div>
                  <div className="font-['Space_Grotesk'] font-bold text-3xl text-blue-400">12</div>
                  <div className="text-gray-500 text-sm">Moonwalkers</div>
                </div>
                <div>
                  <div className="font-['Space_Grotesk'] font-bold text-3xl text-blue-400">842</div>
                  <div className="text-gray-500 text-sm">Pounds of Samples</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div ref={imageRef} className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/astronaut-moon.jpg"
                  alt="Astronaut on the Moon"
                  className="w-full h-auto"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-blue-500 text-white px-6 py-4 rounded-xl shadow-lg animate-float">
                <div className="font-['Space_Grotesk'] font-bold text-2xl">1969</div>
                <div className="text-blue-100 text-sm">First Moon Landing</div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border border-blue-500/30 rounded-full" />
              <div className="absolute -bottom-8 -right-8 w-32 h-32 border border-blue-500/20 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeKnow;
