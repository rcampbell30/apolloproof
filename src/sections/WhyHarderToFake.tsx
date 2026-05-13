import { Users, Globe, Microscope, Film, Lock, Radio } from 'lucide-react';

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
    description: 'No deathbed confession. No documents. No credible whistleblowers in half a century.',
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
  return (
    <section className="relative py-8 lg:py-10">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6 lg:gap-8 items-start">
            <div className="lg:sticky lg:top-28 bg-white/5 border border-white/10 rounded-2xl p-5 lg:p-6 backdrop-blur-sm">
              <h2 className="font-['Space_Grotesk'] font-bold text-3xl sm:text-4xl mb-3">
                Why It Would Be Harder to Fake
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-4">
                The conspiracy would require a bigger miracle than the missions themselves.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="text-blue-400 font-semibold">The bottom line:</span> faking Apollo would require hundreds of thousands of people, multiple hostile nations, and perfect secrecy for over 50 years.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {fakeChallenges.map((challenge) => (
                <div key={challenge.title} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 card-hover">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${challenge.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />

                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${challenge.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <challenge.icon className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="font-['Space_Grotesk'] font-semibold text-base mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {challenge.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {challenge.description}
                  </p>

                  <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${challenge.color} opacity-0 group-hover:opacity-25 blur-xl transition-opacity duration-300 -z-10`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHarderToFake;
