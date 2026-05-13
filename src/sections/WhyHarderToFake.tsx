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
      gsap.from('.fake-title', {
        y: 24,
        opacity: 0,
        duration: 0.55,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.fake-card', {
        y: 36,
        opacity: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top 92%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-14 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-10">
            <h2 className="fake-title font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl mb-3">
              Why It Would Be Harder to Fake
            </h2>
            <p className="fake-title text-gray-400 text-lg max-w-2xl mx-auto">
              The conspiracy would require a bigger miracle than the missions themselves
            </p>
          </div>

          <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {fakeChallenges.map((challenge, index) => (
              <div
                key={challenge.title}
                className="fake-card group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 card-hover"
                style={{ animationDelay: `${index * 80}ms` }}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${challenge.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${challenge.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <challenge.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-['Space_Grotesk'] font-semibold text-lg mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {challenge.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {challenge.description}
                </p>

                <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${challenge.color} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300 -z-10`} />
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4">
              <p className="text-gray-300 text-base md:text-lg max-w-2xl">
                <span className="text-blue-400 font-semibold">The bottom line:</span> Faking the Moon landings would require hundreds of thousands of people, multiple hostile nations, and perfect secrecy for over 50 years. The evidence says we went.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHarderToFake;
