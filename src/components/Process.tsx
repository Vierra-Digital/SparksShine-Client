import { steps } from "@/lib/site";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-ivory-soft py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Sparkling Clean In Three Easy Steps"
          intro="No complicated booking, no surprises. Just a simple path from first call to a space that shines."
        />

        <div className="relative mt-16 grid gap-8 md:grid-cols-3">
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent md:block" />

          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 120}
              className="relative flex flex-col items-center text-center"
            >
              <span className="relative grid h-24 w-24 place-items-center rounded-full border border-gold/30 bg-cream shadow-[0_18px_40px_-22px_rgba(13,31,45,0.5)]">
                <span className="font-display text-3xl font-semibold text-gold-gradient">
                  {s.n}
                </span>
              </span>
              <h3 className="mt-7 font-display text-xl font-semibold text-navy">
                {s.title}
              </h3>
              <p className="mt-2.5 max-w-xs text-sm leading-relaxed text-muted">
                {s.blurb}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
