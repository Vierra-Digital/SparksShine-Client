import { site } from "@/lib/site";
import { MailIcon, PhoneIcon, Sparkle } from "./icons";
import Reveal from "./Reveal";

const contactCards = [
  {
    label: "Call or Text",
    value: site.phone.display,
    href: site.phone.href,
    Icon: PhoneIcon,
    note: "We're happy to talk through exactly what you need.",
  },
  {
    label: "Email",
    value: site.email.display,
    href: site.email.href,
    Icon: MailIcon,
    note: "Send a few details and we'll reply with your free quote.",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/[0.09] blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-6 text-center sm:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-3 eyebrow text-gold-light">
            <span className="h-px w-7 bg-gold" />
            Contact Today
            <span className="h-px w-7 bg-gold" />
          </span>
          <h2 className="mx-auto mt-5 max-w-xl font-display text-3xl font-medium leading-tight tracking-tight text-ivory sm:text-[2.75rem]">
            Ready For A Space That Truly{" "}
            <span className="text-gold-gradient">Sparkles?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ivory/70">
            Reach out for a free estimate. We offer flexible scheduling for
            homes, offices, and salons across {site.serviceArea}.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-x-10 gap-y-10 text-left sm:grid-cols-2">
          {contactCards.map(({ label, value, href, Icon, note }, i) => (
            <Reveal key={label} delay={i * 100}>
              <a href={href} className="group flex gap-4">
                <span className="mt-0.5 shrink-0 text-gold-light">
                  <Icon className="h-6 w-6" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.18em] text-ivory/50">
                    {label}
                  </span>
                  <span className="mt-1 block font-display text-xl text-ivory transition-colors group-hover:text-gold-light">
                    {value}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-ivory/55">
                    {note}
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href={site.phone.href} className="btn-gold w-full justify-center sm:w-auto">
              <PhoneIcon className="h-4 w-4" />
              Call {site.phone.display}
            </a>
            <a href={site.email.href} className="btn-ghost w-full justify-center sm:w-auto">
              <MailIcon className="h-4 w-4 text-gold-light" />
              Email Us
            </a>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-10 inline-flex items-center gap-2.5 text-sm text-ivory/70">
            <Sparkle className="h-4 w-4 shrink-0 text-gold-light animate-twinkle" />
            Estimates are always{" "}
            <strong className="font-semibold text-gold-light">free</strong>, with
            no obligation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
