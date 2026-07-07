import { reasons, site } from "@/lib/site";
import { CheckIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-navy py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-gold/[0.08] blur-[130px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The Difference Is In The Details"
            intro="We treat your space the way we'd treat our own — with consistency, honesty, and genuine pride in the result."
            align="left"
            tone="light"
          />

          <Reveal delay={120}>
            <p className="mt-10 border-l-2 border-gold pl-5 font-display text-lg italic leading-relaxed text-ivory/90">
              &ldquo;{site.promise}&rdquo;
            </p>
          </Reveal>
        </div>

        <ul className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal key={r.title} as="li" delay={(i % 2) * 80} className="flex gap-4">
              <span className="mt-0.5 shrink-0 text-gold-light">
                <CheckIcon className="h-5 w-5" strokeWidth={2} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-ivory">
                  {r.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ivory/60">
                  {r.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
