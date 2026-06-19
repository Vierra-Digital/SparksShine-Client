import type { SVGProps } from "react";
import type { Service } from "@/lib/site";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Four-point sparkle — the brand's signature mark. */
export function Sparkle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 0c.5 5.5 3 8 8 8.5-5 .5-7.5 3-8 8.5-.5-5.5-3-8-8-8.5 5-.5 7.5-3 8-8.5Z" />
    </svg>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4M8 14h2M14 14h2M8 18h2M14 18h2" />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M4 11.5 12 4l8 7.5" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </svg>
  );
}

export function OfficeIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M4 21V5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v16" />
      <path d="M15 9h4a1 1 0 0 1 1 1v11" />
      <path d="M7 8h1M11 8h1M7 12h1M11 12h1M7 16h1M11 16h1M18 13h.01M18 17h.01M3 21h18" />
    </svg>
  );
}

export function ScissorsIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M8.1 7.6 20 18M8.1 16.4 20 6M14 12l-5.9 4.4M14 12 8.1 7.6" />
    </svg>
  );
}

export function BoxesIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M3 7.5 12 3l9 4.5L12 12 3 7.5Z" />
      <path d="M3 7.5V16l9 5 9-5V7.5" />
      <path d="M12 12v9" />
    </svg>
  );
}

export function FeatherIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M20 5c0 6-4 10-10 10H5l9-9" />
      <path d="M5 19 12 12" />
      <path d="M13 9h3M11 11h3" />
    </svg>
  );
}

export function SteamIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M8 21h8a1 1 0 0 0 1-1v-4H7v4a1 1 0 0 0 1 1Z" />
      <path d="M7 16c-2 0-3-1.3-3-3 0-1.6 1-2.6 2.5-3" />
      <path d="M9 7c0-1.5 1-2 1-3.2C10 2.7 9.3 2 9.3 2M13 8c0-2 1.4-2.6 1.4-4.2 0-1.1-.9-1.8-.9-1.8M16.5 7.2c0-1.2.8-1.7.8-2.7" />
    </svg>
  );
}

const map = {
  sparkle: Sparkle,
  calendar: CalendarIcon,
  home: HomeIcon,
  office: OfficeIcon,
  scissors: ScissorsIcon,
  boxes: BoxesIcon,
  feather: FeatherIcon,
  steam: SteamIcon,
} satisfies Record<Service["icon"], (p: IconProps) => React.JSX.Element>;

export function ServiceIcon({
  name,
  ...props
}: { name: Service["icon"] } & IconProps) {
  const Cmp = map[name];
  return <Cmp {...props} />;
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="m5 12.5 4.5 4.5L19 7" />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg {...base} aria-hidden {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
