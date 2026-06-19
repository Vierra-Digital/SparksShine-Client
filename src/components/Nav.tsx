"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import { PhoneIcon, Sparkle } from "./icons";

const links = [
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#about", label: "About" },
  { href: "#process", label: "How It Works" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy/92 backdrop-blur-md shadow-[0_12px_40px_-24px_rgba(0,0,0,0.8)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="group flex items-center gap-2.5" aria-label={site.fullName}>
          <span className="relative grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-gold-light to-gold-deep text-navy shadow-[0_6px_18px_-6px_rgba(200,162,74,0.8)]">
            <Sparkle className="h-4 w-4" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-tight text-ivory">
              Spark <span className="text-gold-light">&amp;</span> Shine
            </span>
            <span className="text-[0.6rem] uppercase tracking-[0.3em] text-ivory/55">
              Cleaning Services
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-ivory/80 transition-colors hover:text-ivory"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-gold-light transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={site.phone.href}
            className="hidden items-center gap-2 text-sm font-medium text-ivory/85 transition-colors hover:text-gold-light sm:flex"
          >
            <PhoneIcon className="h-4 w-4 text-gold-light" />
            {site.phone.display}
          </a>
          <a href="#contact" className="btn-gold hidden text-sm sm:inline-flex">
            Free Estimate
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 place-items-center rounded-full border border-ivory/25 text-ivory lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-current transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-navy/97 backdrop-blur-md transition-all duration-500 lg:hidden ${
          open ? "max-h-[90vh] border-t border-ivory/10" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-ivory/10 py-3.5 font-display text-xl text-ivory/90 transition-colors hover:text-gold-light"
            >
              {l.label}
            </a>
          ))}
          <div className="mt-5 flex flex-col gap-3">
            <a href={site.phone.href} className="btn-gold justify-center">
              <PhoneIcon className="h-4 w-4" />
              Call {site.phone.display}
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-ghost justify-center"
            >
              Request a Free Estimate
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
