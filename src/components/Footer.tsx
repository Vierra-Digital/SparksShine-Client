import { services, site } from "@/lib/site";
import { MailIcon, PhoneIcon, Sparkle } from "./icons";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#091721] text-ivory/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-gold-light to-gold-deep text-navy">
              <Sparkle className="h-4 w-4" />
            </span>
            <span className="font-display text-xl font-semibold text-ivory">
              Spark <span className="text-gold-light">&amp;</span> Shine
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Professional, reliable, and affordable cleaning for homes, offices,
            and salons across {site.serviceArea}. {site.tagline}
          </p>
        </div>

        <div>
          <h4 className="eyebrow mb-4 text-gold-light">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.title}>
                <a href="#services" className="transition-colors hover:text-ivory">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4 text-gold-light">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={site.phone.href}
                className="flex items-center gap-2.5 transition-colors hover:text-ivory"
              >
                <PhoneIcon className="h-4 w-4 text-gold-light" />
                {site.phone.display}
              </a>
            </li>
            <li>
              <a
                href={site.email.href}
                className="flex items-center gap-2.5 break-all transition-colors hover:text-ivory"
              >
                <MailIcon className="h-4 w-4 text-gold-light" />
                {site.email.display}
              </a>
            </li>
          </ul>
          <a href="#contact" className="btn-gold mt-6 text-sm">
            Free Estimate
          </a>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-ivory/45 sm:flex-row sm:px-8">
          <p>
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
          <p>
            Powered by{" "}
            <a
              href="https://vierradev.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ivory/70 underline-offset-4 transition-colors hover:text-gold-light hover:underline"
            >
              Vierra Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
