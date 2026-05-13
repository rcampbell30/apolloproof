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
      // Title animation
      gsap.from('.timeline-title', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Timeline line draw
      gsap.from('.timeline-line', {
        scaleY: 0,
        transformOrigin: 'top',
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Timeline items
      gsap.from('.timeline-item', {
        x: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      gsap.from('.timeline-dot', {
        scale: 0,
        duration: 0.3,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: timelineRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      // Image parallax
      gsap.from('.timeline-image', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="timeline" ref={sectionRef} className="relative py-24 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-orange-950/10 to-black" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="timeline-title font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl mb-4">
              The Evidence Didn&apos;t Stop in 1969
            </h2>
            <p className="timeline-title text-gray-400 text-lg max-w-2xl mx-auto">
              Every decade since has added new confirmation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Timeline */}
            <div ref={timelineRef} className="relative">
              {/* Timeline Line */}
              <div className="timeline-line absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500" />

              {/* Timeline Items */}
              <div className="space-y-10">
                {timelineItems.map((item) => (
                  <div key={item.year} className="timeline-item relative flex gap-6">
                    {/* Dot */}
                    <div
                      className={`timeline-dot relative z-10 w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
                    >
                      <item.icon className="w-5 h-5 text-white" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <span
                        className={`inline-block text-sm font-['Space_Grotesk'] font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2`}
                      >
                        {item.year}
                      </span>
                      <h3 className="font-['Space_Grotesk'] font-semibold text-xl mb-2">
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

            {/* Image */}
            <div className="timeline-image relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="/lunar-surface.jpg"
                  alt="Lunar surface with equipment"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>

              {/* Stats Overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/80 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="font-['Space_Grotesk'] font-bold text-2xl text-blue-400">
                        50+
                      </div>
                      <div className="text-gray-400 text-xs">Years of Data</div>
                    </div>
                    <div>
                      <div className="font-['Space_Grotesk'] font-bold text-2xl text-purple-400">
                        3
                      </div>
                      <div className="text-gray-400 text-xs">Active Observatories</div>
                    </div>
                    <div>
                      <div className="font-['Space_Grotesk'] font-bold text-2xl text-orange-400">
                        1000s
                      </div>
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
