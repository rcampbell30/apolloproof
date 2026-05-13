import { ExternalLink, FlaskConical, Image, Radio, Ruler, Satellite, ScrollText } from 'lucide-react';

const evidenceItems = [
  {
    icon: FlaskConical,
    title: 'Lunar samples',
    verdict: 'Apollo returned 382 kg / 842 lb of lunar material across six landing missions.',
    whyItMatters: 'The rocks show impact history, oxygen isotope patterns, solar-wind exposure and glassy regolith features that are not explained by ordinary Earth rocks or meteorites alone.',
    sources: [
      { label: 'NASA Lunar Sample Laboratory', url: 'https://curator.jsc.nasa.gov/lunar/' },
      { label: 'NASA Apollo sample overview', url: 'https://curator.jsc.nasa.gov/lunar/lsc/' },
    ],
  },
  {
    icon: Image,
    title: 'Landing-site photography',
    verdict: 'The Lunar Reconnaissance Orbiter has imaged Apollo descent stages, experiment packages, rover tracks and astronaut footpaths.',
    whyItMatters: 'These images were taken decades after Apollo by an independent spacecraft orbiting the Moon, matching the published mission locations.',
    sources: [
      { label: 'LROC Apollo landing sites', url: 'https://www.lroc.asu.edu/images/?q=apollo' },
      { label: 'LROC Featured Sites', url: 'https://www.lroc.asu.edu/featured_sites' },
    ],
  },
  {
    icon: Ruler,
    title: 'Laser retroreflectors',
    verdict: 'Apollo 11, 14 and 15 left retroreflector arrays that are still used for lunar laser ranging.',
    whyItMatters: 'The arrays are passive hardware on the lunar surface. They return laser pulses to Earth and support precision measurements of the Earth-Moon distance.',
    sources: [
      { label: 'McDonald Observatory lunar ranging', url: 'https://mcdonaldobservatory.org/research/instruments/lunar-laser-ranging' },
      { label: 'NASA Goddard laser ranging', url: 'https://cddis.nasa.gov/Techniques/SLR/SLR_Overview.html' },
    ],
  },
  {
    icon: Radio,
    title: 'Independent tracking',
    verdict: 'Apollo radio signals were tracked by multiple stations, including facilities outside NASA control.',
    whyItMatters: 'A hoax would have needed to fool radio astronomers, tracking stations, engineers, the Soviet Union and thousands of mission staff during the Cold War.',
    sources: [
      { label: 'Jodrell Bank Apollo tracking archive', url: 'https://www.jodrellbank.net/explore/heritage/apollo-11/' },
      { label: 'Honeysuckle Creek tracking station', url: 'https://www.honeysucklecreek.net/' },
    ],
  },
  {
    icon: ScrollText,
    title: 'Mission records and transcripts',
    verdict: 'The Apollo record includes mission reports, flight plans, photographs, film, audio, transcripts, telemetry and surface journals.',
    whyItMatters: 'The evidence is not one video. It is an enormous engineering and scientific archive with cross-checkable details.',
    sources: [
      { label: 'Apollo Lunar Surface Journal', url: 'https://www.nasa.gov/history/alsj/' },
      { label: 'NASA Apollo mission reports', url: 'https://www.nasa.gov/history/alsj/frame.html' },
    ],
  },
  {
    icon: Satellite,
    title: 'Science after Apollo',
    verdict: 'Apollo instruments and samples continued producing science long after the astronauts returned.',
    whyItMatters: 'A short-lived television stunt does not explain decades of seismology, sample work, laser ranging and later orbital confirmation.',
    sources: [
      { label: 'NASA Apollo Next Generation Sample Analysis', url: 'https://www.nasa.gov/missions/artemis/apollo-next-generation-sample-analysis-program/' },
      { label: 'NASA Lunar Reconnaissance Orbiter', url: 'https://www.nasa.gov/mission/lunar-reconnaissance-orbiter/' },
    ],
  },
];

const EvidenceLibrary = () => {
  return (
    <section id="library" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950/70 to-black" />
      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl mb-4">
              Evidence Library
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              ApolloProof is strongest when every claim points back to something checkable: samples, images, experiments, tracking records and mission archives.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {evidenceItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/[0.07] transition-colors duration-300">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-['Space_Grotesk'] font-semibold text-2xl mb-2">{item.title}</h3>
                      <p className="text-blue-200 text-sm leading-relaxed">{item.verdict}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-5">{item.whyItMatters}</p>
                  <div className="flex flex-wrap gap-3">
                    {item.sources.map((source) => (
                      <a
                        key={source.label}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 hover:border-blue-400/50 hover:text-white transition-colors"
                      >
                        {source.label}
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvidenceLibrary;
