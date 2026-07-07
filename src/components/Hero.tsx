import { site } from "@/lib/site";
import { ArrowIcon, PhoneIcon, Sparkle } from "./icons";

// Sparkles are positioned in the margins so they frame the content instead of
// crowding it. The tighter ones are hidden on small screens to keep mobile calm.
const sparkles = [
  { top: "16%", left: "9%", size: 22, dur: "6.5s", delay: "0s", mobile: true },
  { top: "70%", left: "12%", size: 16, dur: "7s", delay: "1.2s", mobile: true },
  { top: "24%", left: "88%", size: 26, dur: "6s", delay: "0.6s", mobile: true },
  { top: "76%", left: "90%", size: 18, dur: "7.5s", delay: "1.6s", mobile: false },
  { top: "44%", left: "94%", size: 12, dur: "5.5s", delay: "2s", mobile: false },
  { top: "10%", left: "50%", size: 13, dur: "6.8s", delay: "0.3s", mobile: false },
  { top: "88%", left: "42%", size: 14, dur: "6.2s", delay: "1.4s", mobile: false },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy"
    >
      {/* Ambient light + subtle dot texture that fades toward the edges */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-gold/[0.12] blur-[150px]" />
        <div className="absolute -bottom-32 right-[-6rem] h-[28rem] w-[28rem] rounded-full bg-aqua/[0.07] blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "38px 38px",
            maskImage:
              "radial-gradient(ellipse 65% 55% at 50% 45%, #000 35%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 65% 55% at 50% 45%, #000 35%, transparent 80%)",
          }}
        />
      </div>

      {/* Floating sparkles */}
      {sparkles.map((s, i) => (
        <Sparkle
          key={i}
          className={`animate-sparkle pointer-events-none absolute text-gold-light/60 ${
            s.mobile ? "" : "hidden sm:block"
          }`}
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

      <div className="relative mx-auto w-full max-w-3xl px-6 py-28 text-center sm:px-8 sm:py-32">
        <span className="inline-flex items-center gap-2.5 text-gold-light">
          <Sparkle className="h-3.5 w-3.5 animate-twinkle" />
          <span className="eyebrow text-[0.65rem] sm:text-[0.7rem]">
            {site.pitch}
          </span>
        </span>

        <h1 className="mt-7 text-ivory sm:mt-8">
          <span className="block animate-sheen font-script text-[3.35rem] font-bold leading-[0.9] sm:text-8xl">
            Spark &amp; Shine
          </span>
          <span className="mt-3 block font-display text-xl font-normal italic tracking-tight text-ivory/85 sm:mt-4 sm:text-4xl">
            Cleaning That Feels Like Luxury
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory/65 sm:mt-7 sm:text-lg">
          From a single deep clean to weekly white-glove care, we bring
          meticulous detail and a friendly touch to every home, office, and
          salon.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:mt-11 sm:flex-row">
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

      {/* Scroll cue — desktop only, to keep the mobile hero uncluttered */}
      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-ivory/40 transition-colors hover:text-gold-light sm:block"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 animate-bob"
          aria-hidden
        >
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
