import { services } from "@/lib/site";
import { ServiceIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          title="Services Tailored To Every Space"
          intro="Whether it's a one-time refresh or a standing appointment, every clean is handled with the same care and attention to detail."
        />

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              as="article"
              delay={(i % 4) * 70}
              className="group border-t border-line pt-6"
            >
              <ServiceIcon
                name={s.icon}
                className="h-8 w-8 text-gold-deep transition-transform duration-500 group-hover:-translate-y-0.5"
              />
              <h3 className="mt-5 font-display text-lg font-semibold text-navy">
                {s.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted">
                {s.blurb}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
