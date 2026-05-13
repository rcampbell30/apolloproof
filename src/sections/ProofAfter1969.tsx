import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket, Target, Satellite, FlaskConical } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const timelineItems = [
  {
    year: '1969-1972',
    title: 'The Apollo Era',
    description: 'Six missions landed on the Moon. Twelve astronauts walked on the lunar surface. 842 pounds of samples returned to Earth.',
    icon: Rocket,
    color: 'from-blue-500 to-cyan-400',
  },
  {
    year: '1970s-Present',
    title: 'Laser Ranging Continues',
    description: 'Observatories worldwide still bounce lasers off the retroreflectors left by Apollo astronauts, measuring the Moon\'s distance to millimeter precision.',
    icon: Target,
    color: 'from-purple-500 to-pink-400',
  },
  {
    year: '2009-Present',
    title: 'LRO Imaging Era',
    description: 'NASA\'s Lunar Reconnaissance Orbiter captures high-resolution images of all Apollo landing sites, showing modules, rovers, and astronaut tracks.',
    icon: Satellite,
    color: 'from-green-500 to-emerald-400',
  },
  {
    year: 'Today',
    title: 'Samples Still Studied',
    description: 'Apollo samples sealed in 1972 are still being opened and analyzed with modern instruments, producing new scientific discoveries.',
    icon: FlaskConical,
    color: 'from-orange-500 to-amber-400',
  },
];

const ProofAfter1969 = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-title', {
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

      gsap.from('.timeline-line', {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 0.9,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.timeline-item', {
        x: 28,
        opacity: 0,
        duration: 0.45,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 88%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="timeline" ref={sectionRef} className="relative py-14 lg:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/10 to-black" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-10">
            <h2 className="timeline-title font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl mb-3">
              The Evidence Didn&apos;t Stop in 1969
            </h2>
            <p className="timeline-title text-gray-400 text-lg max-w-2xl mx-auto">
              Every decade since has added new confirmation
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-start">
            <div ref={timelineRef} className="relative">
              <div className="timeline-line absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500" />

              <div className="space-y-6">
                {timelineItems.map((item) => (
                  <div key={item.year} className="timeline-item relative flex gap-5">
                    <div className={`relative z-10 w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <item.icon className="w-5 h-5 text-white" />
                    </div>

                    <div className="flex-1 pt-1 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm">
                      <span className={`inline-block text-sm font-['Space_Grotesk'] font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}>
                        {item.year}
                      </span>
                      <h3 className="font-['Space_Grotesk'] font-semibold text-lg mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden">
              <img src="/lunar-surface.jpg" alt="Lunar surface with Apollo equipment" className="w-full h-full max-h-[520px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-black/80 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="font-['Space_Grotesk'] font-bold text-2xl text-blue-400">50+</div>
                      <div className="text-gray-400 text-xs">Years of Data</div>
                    </div>
                    <div>
                      <div className="font-['Space_Grotesk'] font-bold text-2xl text-purple-400">3</div>
                      <div className="text-gray-400 text-xs">Active Observatories</div>
                    </div>
                    <div>
                      <div className="font-['Space_Grotesk'] font-bold text-2xl text-orange-400">1000s</div>
                      <div className="text-gray-400 text-xs">Research Papers</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofAfter1969;
