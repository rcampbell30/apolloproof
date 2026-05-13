import { ExternalLink } from 'lucide-react';

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black';

const sourceTiers = [
  {
    tier: 'Primary mission records',
    description: 'Original Apollo surface journals, mission reports, image libraries and technical records.',
    links: [
      { name: 'Apollo Lunar Surface Journal', url: 'https://www.nasa.gov/history/alsj/' },
      { name: 'Apollo 11 Mission Report', url: 'https://www.nasa.gov/history/alsj/a11/a11mr.html' },
      { name: 'Apollo 11 Image Library', url: 'https://www.nasa.gov/history/alsj/a11/images11.html' },
    ],
  },
  {
    tier: 'Physical evidence',
    description: 'Returned lunar samples, curation records and ongoing laboratory analysis.',
    links: [
      { name: 'NASA Lunar Sample Laboratory', url: 'https://curator.jsc.nasa.gov/lunar/' },
      { name: 'Apollo sample collection', url: 'https://curator.jsc.nasa.gov/lunar/lsc/' },
      { name: 'NASA sample research', url: 'https://www.nasa.gov/missions/artemis/apollo-next-generation-sample-analysis-program/' },
    ],
  },
  {
    tier: 'Later independent checks',
    description: 'Orbital imaging, laser ranging and tracking evidence that continued after the crews came home.',
    links: [
      { name: 'LROC Apollo landing sites', url: 'https://www.lroc.asu.edu/images/?q=apollo' },
      { name: 'McDonald Observatory lunar ranging', url: 'https://mcdonaldobservatory.org/research/instruments/lunar-laser-ranging' },
      { name: 'Jodrell Bank Apollo 11', url: 'https://www.jodrellbank.net/explore/heritage/apollo-11/' },
    ],
  },
  {
    tier: 'Museums and explainers',
    description: 'Useful context from institutions that preserve hardware, photographs, oral history and public education material.',
    links: [
      { name: 'Smithsonian Air and Space Museum', url: 'https://airandspace.si.edu/' },
      { name: 'Royal Museums Greenwich', url: 'https://www.rmg.co.uk/stories/topics/moon-landing-conspiracy-theories-debunked' },
      { name: 'NASA Apollo program overview', url: 'https://www.nasa.gov/the-apollo-program/' },
    ],
  },
];

const SourceCredibility = () => {
  return (
    <section id="sources" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black" aria-hidden="true" />
      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl mb-4">
              Source Quality Ladder
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              ApolloProof favours primary records and physical evidence first. Explainers are useful, but they sit below mission archives, samples, landing-site images and active measurement experiments.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {sourceTiers.map((tier, index) => (
              <article key={tier.tier} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-10 h-10 rounded-full bg-green-500/15 border border-green-500/30 flex items-center justify-center text-green-300 font-bold" aria-hidden="true">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-['Space_Grotesk'] font-semibold text-2xl mb-2">{tier.tier}</h3>
                    <p className="text-gray-400 leading-relaxed">{tier.description}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {tier.links.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between gap-4 rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-gray-300 hover:text-white hover:border-green-400/40 transition-colors ${focusRing}`}
                    >
                      <span className="text-sm">{link.name}</span>
                      <ExternalLink aria-hidden="true" className="w-4 h-4 flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
              <span className="text-gray-400 text-sm">
                Strong debunking means linking the reader to the evidence, not asking them to trust a slogan.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SourceCredibility;
