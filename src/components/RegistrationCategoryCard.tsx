"use client";

import { TransitionLink } from "@/components/TransitionLink";
import { CursorTarget } from "@/components/SportCursor";

const accentText = {
  cyan: "text-cyan",
  magenta: "text-magenta",
  lime: "text-lime",
} as const;

export function RegistrationCategoryCard({
  title,
  tag,
  copy,
  href,
  accent,
}: {
  title: string;
  tag: string;
  copy: string;
  href: string;
  accent: keyof typeof accentText;
}) {
  return (
    <CursorTarget label="REGISTER">
      <TransitionLink
        href={href}
        direction="forward"
        className={`pv-card pv-card--${accent} group block bg-void-2/80 p-8`}
      >
        <p className={`font-mono text-[10px] uppercase tracking-[0.18em] ${accentText[accent]}`}>
          {tag}
        </p>
        <h2 className="mt-4 font-display text-4xl tracking-[0.06em] md:text-5xl">
          {title}
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-ghost-dim">{copy}</p>
        <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-ghost">
          Enter lobby →
        </p>
      </TransitionLink>
    </CursorTarget>
  );
}
