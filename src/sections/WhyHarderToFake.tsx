import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Globe, Microscope, Film, Lock, Radio } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const fakeChallenges = [
  {
    icon: Users,
    title: '400,000 People',
    description: 'That\'s how many worked on Apollo. Keeping them all silent for 50+ years? Impossible.',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Globe,
    title: 'Cold War Rivals',
    description: 'The Soviet Union tracked every mission. They had every incentive to expose a fake—but never did.',
    color: 'from-purple-500 to-pink-400',
  },
  {
    icon: Microscope,
    title: 'The Rocks Are Real',
    description: 'Lunar samples have been studied by scientists in 30+ countries. They\'re unlike anything on Earth.',
    color: 'from-green-500 to-emerald-400',
  },
  {
    icon: Film,
    title: '1960s Film Tech',
    description: 'Faking the footage would require technology that didn\'t exist—like perfect slow-motion in a vacuum.',
    color: 'from-orange-500 to-amber-400',
  },
  {
    icon: Lock,
    title: 'No Leaks. Ever.',
    description: 'Not one deathbed confession. No documents. No credible whistleblowers in half a century.',
    color: 'from-red-500 to-rose-400',
  },
  {
    icon: Radio,
    title: 'Independent Tracking',
    description: 'Radio telescopes in multiple countries tracked the missions. The signals came from the Moon.',
    color: 'from-indigo-500 to-violet-400',
  },
];

const WhyHarderToFake = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from('.fake-title', {
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
      gsap.from('.fake-card', {
        y: 60,
        opacity: 0,
        duration: 0.6,
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
      ref={sectionRef}
      className="relative py-24 lg:py-32"
    >
      {/* Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="fake-title font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl mb-4">
              Why It Would Be Harder to Fake
            </h2>
            <p className="fake-title text-gray-400 text-lg max-w-2xl mx-auto">
              The conspiracy would require a bigger miracle than the missions themselves
            </p>
          </div>

          {/* Challenge Cards */}
          <div
            ref={cardsRef}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {fakeChallenges.map((challenge, index) => (
              <div
                key={challenge.title}
                className="fake-card group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Border on Hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${challenge.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${challenge.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <challenge.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-['Space_Grotesk'] font-semibold text-xl mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {challenge.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {challenge.description}
                </p>

                {/* Glow Effect */}
                <div
                  className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${challenge.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10`}
                />
              </div>
            ))}
          </div>

          {/* Closing Statement */}
          <div className="mt-16 text-center">
            <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-8 py-6">
              <p className="text-gray-300 text-lg max-w-2xl">
                <span className="text-blue-400 font-semibold">The bottom line:</span> Faking the Moon landings would require a conspiracy involving hundreds of thousands of people, multiple hostile nations, and perfect secrecy for over 50 years. The evidence says we went.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHarderToFake;
