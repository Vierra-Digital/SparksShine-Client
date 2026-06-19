import { services } from "@/lib/site";
import { ServiceIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Services Tailored To Every Space"
          intro="Whether it's a one-time refresh or a standing appointment, every clean is handled with the same care and attention to detail."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              as="article"
              delay={(i % 4) * 80}
              className="card-luxe group relative flex flex-col rounded-2xl p-7"
            >
              <span className="mb-5 grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-navy to-navy-soft text-gold-light shadow-[0_10px_24px_-12px_rgba(13,31,45,0.7)] transition-transform duration-500 group-hover:scale-105">
                <ServiceIcon name={s.icon} className="h-7 w-7" />
              </span>
              <h3 className="font-display text-xl font-semibold text-navy">
                {s.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {s.blurb}
              </p>
              <span className="mt-5 h-px w-12 bg-gradient-to-r from-gold to-transparent transition-all duration-500 group-hover:w-20" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
