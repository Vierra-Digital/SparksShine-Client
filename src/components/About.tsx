import { site } from "@/lib/site";
import { PhoneIcon, Sparkle } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
        {/* Portrait / signature card */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold/20 via-transparent to-aqua/15 blur-xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-line bg-navy p-10 text-center shadow-[0_40px_90px_-50px_rgba(13,31,45,0.8)]">
              <div className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
                  backgroundSize: "30px 30px",
                }}
              />
              <div className="relative">
                <div className="mx-auto grid h-24 w-24 place-items-center rounded-full bg-gradient-to-br from-gold-light to-gold-deep text-navy shadow-[0_16px_40px_-16px_rgba(200,162,74,0.9)]">
                  <span className="font-display text-3xl font-bold">DM</span>
                </div>
                <p className="mt-6 font-script text-4xl text-gold-light">
                  {site.owner.name}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-ivory/55">
                  {site.owner.title}
                </p>
                <div className="gold-rule mx-auto my-7 w-3/4" />
                <p className="font-display text-lg italic leading-relaxed text-ivory/85">
                  &ldquo;Every home tells a story. I want yours to feel calm,
                  cared for, and absolutely spotless.&rdquo;
                </p>
                <a
                  href={site.phone.href}
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-gold-light hover:text-ivory"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {site.phone.display}
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Meet the Owner"
            title="A Local Touch You Can Trust"
            align="left"
          />
          <Reveal delay={100}>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              <p>
                Spark &amp; Shine Cleaning Services is led by{" "}
                <strong className="text-navy">{site.owner.name}</strong>, who
                built the business on a simple belief: a truly clean space
                should feel effortless to the people who live and work in it.
              </p>
              <p>
                That means showing up dependably, paying attention to the small
                things, and treating every property, from busy family homes to
                salons and offices across {site.serviceArea}, with genuine
                pride and respect.
              </p>
              <p>
                The result is more than a clean space. It&apos;s the quiet
                confidence of walking into a room that sparkles, every single
                time.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180} className="mt-9 flex flex-wrap gap-x-8 gap-y-4">
            {[
              "Locally owned & operated",
              "Fully equipped & supplied",
              "Residential & commercial",
            ].map((t) => (
              <span key={t} className="flex items-center gap-2 text-sm font-medium text-navy">
                <Sparkle className="h-4 w-4 text-gold" />
                {t}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
