import { reasons, site } from "@/lib/site";
import { CheckIcon, Sparkle } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-navy py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 top-1/4 h-80 w-80 rounded-full bg-gold/10 blur-[110px]" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-aqua/10 blur-[110px]" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The Difference Is In The Details"
            intro="We treat your space the way we'd treat our own, with consistency, honesty, and genuine pride in the result."
            align="left"
            tone="light"
          />

          <Reveal
            delay={120}
            className="mt-10 inline-flex items-center gap-4 rounded-2xl border border-gold/25 bg-gold/[0.07] px-6 py-5"
          >
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold-light to-gold-deep text-navy">
              <Sparkle className="h-6 w-6" />
            </span>
            <p className="font-display text-lg italic text-ivory">
              &ldquo;{site.promise}&rdquo;
            </p>
          </Reveal>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal
              key={r.title}
              as="li"
              delay={(i % 2) * 90}
              className="group flex flex-col rounded-2xl border border-ivory/10 bg-ivory/[0.04] p-6 transition-colors duration-400 hover:border-gold/40 hover:bg-ivory/[0.07]"
            >
              <span className="mb-4 grid h-10 w-10 place-items-center rounded-full border border-gold/40 bg-gold/10 text-gold-light transition-transform duration-400 group-hover:scale-110">
                <CheckIcon className="h-5 w-5" strokeWidth={2} />
              </span>
              <h3 className="font-display text-lg font-semibold text-ivory">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                {r.blurb}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
