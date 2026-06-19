// Central source of truth for all business information.
// Pulled directly from the Spark & Shine Cleaning Services flier.

export const site = {
  name: "Spark & Shine",
  fullName: "Spark & Shine Cleaning Services",
  tagline: "We take pride in every clean.",
  pitch: "Professional · Reliable · Affordable",
  motto: "We Don't Cut Corners… We Clean Them.",
  promise: "Your Satisfaction Is Our Priority.",
  owner: {
    name: "Deanna Mazzeo",
    title: "Owner, Spark & Shine Cleaning Services",
  },
  phone: {
    display: "781-850-5680",
    href: "tel:+17818505680",
  },
  email: {
    display: "dmazzeo83@comcast.net",
    href: "mailto:dmazzeo83@comcast.net",
  },
  serviceArea: "Greater Boston & the South Shore, Massachusetts",
} as const;

export type Service = {
  title: string;
  blurb: string;
  icon:
    | "sparkle"
    | "calendar"
    | "home"
    | "office"
    | "scissors"
    | "boxes"
    | "feather"
    | "steam";
};

export const services: Service[] = [
  {
    title: "Deep Cleaning",
    blurb:
      "A meticulous, top-to-bottom reset that reaches the corners, crevices, and surfaces everyday cleaning leaves behind.",
    icon: "sparkle",
  },
  {
    title: "Weekly, Bi-Weekly & Monthly",
    blurb:
      "Recurring care on a rhythm that fits your life, so your home or business always feels effortlessly maintained.",
    icon: "calendar",
  },
  {
    title: "Apartment & House Cleaning",
    blurb:
      "Tailored residential cleaning for spaces of every size, from cozy apartments to multi-level homes.",
    icon: "home",
  },
  {
    title: "Office Cleaning",
    blurb:
      "A polished, healthy workspace that makes the right impression on your team and every client who walks in.",
    icon: "office",
  },
  {
    title: "Hair Salon Cleaning",
    blurb:
      "Specialized care for salons, with spotless stations, floors, and shared spaces that keep clients coming back.",
    icon: "scissors",
  },
  {
    title: "Move-In / Move-Out",
    blurb:
      "A flawless turnover for tenants, owners, and realtors. Leave behind a space that shines like new.",
    icon: "boxes",
  },
  {
    title: "Dusting, Vacuuming & More",
    blurb:
      "The detailed finishing touches, like dusting, vacuuming, and the little things that make a space feel cared for.",
    icon: "feather",
  },
  {
    title: "Steam Mopping",
    blurb:
      "Deep, sanitizing steam that lifts grime and refreshes floors without harsh residue left behind.",
    icon: "steam",
  },
];

export const reasons = [
  {
    title: "Dependable & Friendly Service",
    blurb:
      "A familiar, trustworthy presence you'll be glad to welcome back, every single visit.",
  },
  {
    title: "Attention to Detail",
    blurb:
      "We notice and clean the things most people miss. The difference is in the details.",
  },
  {
    title: "Flexible Scheduling",
    blurb:
      "Days, evenings, one-time or recurring. We work around your calendar, not the other way around.",
  },
  {
    title: "Residential & Commercial",
    blurb:
      "Homes, apartments, offices, and salons. We're fully equipped for spaces of every kind.",
  },
  {
    title: "Satisfaction Guaranteed",
    blurb:
      "If something isn't perfect, we make it right. Your satisfaction is the whole point.",
  },
  {
    title: "Equipped & Ready",
    blurb:
      "We arrive fully supplied with professional-grade products and equipment, so you don't lift a finger.",
  },
];

export const steps = [
  {
    n: "01",
    title: "Reach Out",
    blurb:
      "Call or send a quick message with your space and what you're looking for. No pressure, ever.",
  },
  {
    n: "02",
    title: "Free Estimate",
    blurb:
      "We'll listen, walk through the details, and give you a clear, honest quote that's completely free.",
  },
  {
    n: "03",
    title: "Sit Back & Shine",
    blurb:
      "Our team arrives on schedule and gets to work. You come home to a space that truly sparkles.",
  },
];
