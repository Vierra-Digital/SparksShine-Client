import Reveal from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
};

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  tone = "dark",
}: Props) {
  const isCenter = align === "center";
  const titleColor = tone === "light" ? "text-ivory" : "text-navy";
  const introColor = tone === "light" ? "text-ivory/70" : "text-muted";

  return (
    <Reveal
      className={`flex flex-col ${
        isCenter ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <span className="inline-flex items-center gap-3 eyebrow text-gold-deep">
        <span className="h-px w-7 bg-gold" />
        {eyebrow}
        {isCenter && <span className="h-px w-7 bg-gold" />}
      </span>
      <h2
        className={`mt-5 max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight sm:text-[2.75rem] ${titleColor}`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-5 max-w-xl text-base leading-relaxed sm:text-lg ${introColor}`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}
