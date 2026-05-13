import { ArrowRight, Camera, CircleDot, Flag, Image, Shield, Sun } from 'lucide-react';

const focusRing = 'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black';

const claims = [
  {
    icon: Camera,
    claim: '“There are no stars, so it was filmed in a studio.”',
    shortAnswer: 'The cameras were exposed for bright lunar daylight, not faint stars.',
    whyPeopleBelieveIt: 'People expect space photos to show a black sky full of stars, because that is how space is often shown in films and artwork.',
    evidence: [
      'The lunar surface and white spacesuits were brightly lit by the Sun.',
      'Short camera exposures preserve surface detail but do not capture dim stars.',
      'Daytime photographs on Earth also hide stars for the same exposure reason.',
    ],
    verdict: 'A missing star field is expected camera behaviour, not evidence of a studio set.',
    sourceLabel: 'Apollo image archive',
    sourceUrl: 'https://www.nasa.gov/history/alsj/a11/images11.html',
  },
  {
    icon: Flag,
    claim: '“The flag waves, so there must be wind.”',
    shortAnswer: 'The flag moved because astronauts twisted the pole and the flag had a horizontal support rod.',
    whyPeopleBelieveIt: 'On Earth, a moving flag usually means wind. On the Moon, fabric can still move if someone applies force to it.',
    evidence: [
      'The flag assembly included a crossbar so it would not hang limp in vacuum.',
      'Astronauts twisted the pole while planting it in lunar soil.',
      'Without air resistance, motion damps differently than it does on Earth.',
    ],
    verdict: 'The movement is compatible with inertia and handling in vacuum.',
    sourceLabel: 'Apollo Lunar Surface Journal',
    sourceUrl: 'https://www.nasa.gov/history/alsj/a11/a11.clsout.html',
  },
  {
    icon: Sun,
    claim: '“The shadows go in different directions.”',
    shortAnswer: 'Perspective, slopes and uneven lunar ground change how shadows appear in photos.',
    whyPeopleBelieveIt: 'People often treat a photograph as if it is a flat diagram. Lunar terrain is not flat, and camera perspective changes apparent angles.',
    evidence: [
      'Parallel lines can appear to converge in photographs because of perspective.',
      'Cratered ground changes the direction and length of shadows locally.',
      'Fill light from the surface and spacesuits can brighten shadow areas without requiring a second Sun.',
    ],
    verdict: 'The shadow geometry is explainable with ordinary photography and terrain effects.',
    sourceLabel: 'NASA Apollo image archive',
    sourceUrl: 'https://www.nasa.gov/history/alsj/a11/images11.html',
  },
  {
    icon: Shield,
    claim: '“The Van Allen belts would have killed them.”',
    shortAnswer: 'Apollo crossed the belts quickly on planned trajectories with spacecraft shielding.',
    whyPeopleBelieveIt: 'The belts are real radiation regions, so the argument sounds scientific until dose, time and trajectory are considered.',
    evidence: [
      'Radiation risk depends on dose, shielding and exposure time.',
      'Apollo trajectories passed through the belts quickly rather than lingering there.',
      'Mission dosimetry was monitored and reported as part of crew safety analysis.',
    ],
    verdict: 'The belts were a managed engineering hazard, not an instant barrier.',
    sourceLabel: 'NASA Van Allen belts explanation',
    sourceUrl: 'https://www.nasa.gov/history/alsj/VanAllenBelts.html',
  },
  {
    icon: CircleDot,
    claim: '“There should be a huge blast crater.”',
    shortAnswer: 'The lunar module landed under low thrust in low gravity, then shut down near the surface.',
    whyPeopleBelieveIt: 'People imagine a rocket launch plume. Landing was the opposite: a carefully throttled descent close to touchdown.',
    evidence: [
      'The lunar module descent engine was throttled during final approach.',
      'The Moon has one-sixth Earth gravity, so less thrust was needed for the final landing phase.',
      'In vacuum, exhaust expands outward rather than behaving like a dense jet through air.',
    ],
    verdict: 'Minor surface disturbance fits the landing conditions better than a large crater would.',
    sourceLabel: 'Apollo 11 mission report',
    sourceUrl: 'https://www.nasa.gov/history/alsj/a11/a11mr.html',
  },
  {
    icon: Image,
    claim: '“The photos are too perfect.”',
    shortAnswer: 'Astronauts trained with the cameras, took many photos, and published selections are not the whole archive.',
    whyPeopleBelieveIt: 'The famous images are memorable because they are the best ones. The archive also contains awkward framing, glare and technical imperfections.',
    evidence: [
      'Apollo crews trained with chest-mounted Hasselblad cameras.',
      'The image archive contains many ordinary, repetitive and imperfect frames.',
      'Selecting strong photographs for public release is normal archival practice.',
    ],
    verdict: 'Good photos are not suspicious when thousands of frames and extensive training are considered.',
    sourceLabel: 'Apollo 11 image library',
    sourceUrl: 'https://www.nasa.gov/history/alsj/a11/images11.html',
  },
];

const FeaturedClaims = () => {
  return (
    <section id="claims" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" aria-hidden="true" />
      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Space_Grotesk'] font-bold text-4xl sm:text-5xl mb-4">
              Common Claims, Fully Answered
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Each claim is treated the same way: why it sounds persuasive, what the evidence says, and where to check the source yourself.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {claims.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.claim} className="bg-gradient-to-br from-white/6 to-white/[0.02] border border-white/10 rounded-2xl p-6">
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <Icon aria-hidden="true" className="w-6 h-6 text-purple-300" />
                    </div>
                    <div>
                      <h3 className="font-['Space_Grotesk'] font-semibold text-xl md:text-2xl mb-2">{item.claim}</h3>
                      <p className="text-blue-200 leading-relaxed">{item.shortAnswer}</p>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-xl bg-black/30 border border-white/10 p-4">
                      <h4 className="font-semibold text-purple-300 mb-2">Why people believe it</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.whyPeopleBelieveIt}</p>
                    </div>

                    <div className="rounded-xl bg-black/30 border border-white/10 p-4">
                      <h4 className="font-semibold text-green-300 mb-3">Evidence check</h4>
                      <ul className="space-y-2">
                        {item.evidence.map((point) => (
                          <li key={point} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-green-400 flex-shrink-0" aria-hidden="true" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-xl bg-blue-500/10 border border-blue-500/30 p-4">
                      <h4 className="font-semibold text-blue-300 mb-2">Verdict</h4>
                      <p className="text-gray-200 text-sm leading-relaxed">{item.verdict}</p>
                    </div>
                  </div>

                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-5 inline-flex items-center gap-2 rounded text-sm font-medium text-blue-300 hover:text-white transition-colors ${focusRing}`}
                  >
                    Source: {item.sourceLabel}
                    <ArrowRight aria-hidden="true" className="w-4 h-4" />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedClaims;
