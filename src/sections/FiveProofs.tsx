import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Radio, Target, Satellite, Gem, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const proofs = [
  {
    icon: Radio,
    title: 'Independent Tracking',
    description: 'Radio telescopes in the US, UK, Australia, and the Soviet Union tracked Apollo signals. Even Cold War rivals confirmed the missions.',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Target,
    title: 'Laser Ranging',
    description: 'Retroreflectors left on the Moon are still used today. Anyone with the right equipment can bounce lasers off them.',
    color: 'from-purple-500 to-pink-400',
  },
  {
    icon: Satellite,
    title: 'Modern Orbital Images',
    description: 'NASA\'s LRO, India\'s Chandrayaan, and China\'s orbiters have all photographed the landing sites.',
    color: 'from-green-500 to-emerald-400',
  },
  {
    icon: Gem,
    title: 'Lunar Samples',
    description: '842 pounds of moon rock have been studied by scientists in over 30 countries. They\'re unlike anything on Earth.',
    color: 'from-orange-500 to-amber-400',
  },
  {
    icon: Activity,
    title: 'Surface Experiments',
    description: 'Seismic stations and heat flow experiments left on the Moon transmitted data for years after the missions.',
    color: 'from-red-500 to-rose-400',
  },
];

const FiveProofs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from('.proofs-title', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Cards stagger animation
      gsap.from('.proof-card', {
        y: 80,
        opacity: 0,
        rotateY: 15,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="evidence"
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/10 to-black" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="proofs-title font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl mb-4">
              Five Independent Lines of Evidence
            </h2>
            <p className="proofs-title text-gray-400 text-lg max-w-2xl mx-auto">
              Even if you don&apos;t trust NASA, these proofs stand on their own
            </p>
          </div>

          {/* Proof Cards */}
          <div
            ref={cardsRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          >
            {proofs.map((proof, index) => (
              <div
                key={proof.title}
                className="proof-card group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 card-hover perspective-1000 preserve-3d"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Border on Hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${proof.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${proof.color} flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
                >
                  <proof.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-['Space_Grotesk'] font-semibold text-xl mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {proof.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {proof.description}
                </p>

                {/* Glow Effect */}
                <div
                  className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${proof.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiveProofs;
