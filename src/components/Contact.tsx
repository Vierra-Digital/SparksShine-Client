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
        <div className="absolute left-1/3 top-0 h-96 w-96 rounded-full bg-gold/10 blur-[130px]" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-aqua/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
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

        <div className="mt-12 grid gap-5 text-left sm:grid-cols-2">
          {contactCards.map(({ label, value, href, Icon, note }, i) => (
            <Reveal key={label} delay={i * 100}>
              <a
                href={href}
                className="group flex h-full flex-col gap-4 rounded-2xl border border-ivory/10 bg-ivory/[0.04] p-7 transition-colors hover:border-gold/40 hover:bg-ivory/[0.07]"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-gold-light to-gold-deep text-navy transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-xs uppercase tracking-[0.18em] text-ivory/55">
                    {label}
                  </span>
                  <span className="mt-1 block font-display text-xl text-ivory">
                    {value}
                  </span>
                </span>
                <span className="text-sm leading-relaxed text-ivory/60">
                  {note}
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
          <div className="mx-auto mt-10 inline-flex items-center gap-3 rounded-full border border-gold/25 bg-gold/[0.07] px-5 py-3">
            <Sparkle className="h-4 w-4 shrink-0 text-gold-light animate-twinkle" />
            <p className="text-sm text-ivory/80">
              Estimates are always{" "}
              <strong className="text-gold-light">free</strong>, with no
              obligation.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
