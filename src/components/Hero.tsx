import { site } from "@/lib/site";
import { ArrowIcon, PhoneIcon, Sparkle } from "./icons";

const sparkles = [
  { top: "14%", left: "12%", size: 18, delay: "0s", dur: "5s" },
  { top: "22%", left: "82%", size: 26, delay: "1.1s", dur: "6.5s" },
  { top: "62%", left: "8%", size: 22, delay: "0.6s", dur: "7s" },
  { top: "78%", left: "88%", size: 16, delay: "1.6s", dur: "5.5s" },
  { top: "44%", left: "92%", size: 12, delay: "2s", dur: "6s" },
  { top: "8%", left: "52%", size: 12, delay: "0.3s", dur: "7.5s" },
  { top: "86%", left: "40%", size: 14, delay: "1.3s", dur: "6.2s" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      {/* Ambient glows — kept clear of the bottom edge for a clean transition */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-aqua/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating sparkles */}
      {sparkles.map((s, i) => (
        <Sparkle
          key={i}
          className="animate-drift pointer-events-none absolute text-gold-light/60"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            animationDelay: s.delay,
            animationDuration: s.dur,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-ivory/80">
          <Sparkle className="h-3.5 w-3.5 text-gold-light animate-twinkle" />
          <span className="eyebrow text-[0.68rem] text-gold-light">
            {site.pitch}
          </span>
        </span>

        <h1 className="mt-8 font-display text-5xl font-medium leading-[0.95] tracking-tight text-ivory sm:text-7xl">
          <span className="block font-script text-6xl font-bold sm:text-8xl">
            <span className="animate-sheen">Spark &amp; Shine</span>
          </span>
          <span className="mt-3 block text-2xl font-normal italic text-ivory/85 sm:text-4xl">
            Cleaning That Feels Like Luxury
          </span>
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-ivory/70">
          From a single deep clean to weekly white-glove care, we bring
          meticulous detail and a friendly touch to every home, office, and
          salon. {site.tagline}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#contact" className="btn-gold w-full justify-center sm:w-auto">
            Get a Free Estimate
            <ArrowIcon className="h-4 w-4" />
          </a>
          <a
            href={site.phone.href}
            className="btn-ghost w-full justify-center sm:w-auto"
          >
            <PhoneIcon className="h-4 w-4 text-gold-light" />
            {site.phone.display}
          </a>
        </div>
      </div>
    </section>
  );
}
