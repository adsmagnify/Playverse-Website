"use client";

import { TransitionLink } from "@/components/TransitionLink";
import { SharedEventImage, SharedEventTitle } from "@/components/SharedEventMedia";
import { GlitchTitle, MagneticButton } from "@/components/PlayVerseUI";
import { Reveal } from "@/components/motion";
import { ZoneOrbitMap } from "@/components/ZoneOrbitMap";
import type { Experience } from "@/data/content";

const zoneAccents = ["cyan", "magenta", "lime"] as const;
type ZoneAccent = (typeof zoneAccents)[number];

const accentStyles: Record<
  ZoneAccent,
  {
    card: string;
    tag: string;
    badge: string;
    footer: string;
    titleHover: string;
    cta: string;
  }
> = {
  cyan: {
    card: "border-cyan/50 hover:border-cyan hover:shadow-[0_0_32px_rgba(0,240,255,0.14)]",
    tag: "text-cyan",
    badge: "border-cyan/60 bg-void/90 text-cyan",
    footer: "border-l-[3px] border-l-cyan border-t border-t-cyan/20 bg-void/92",
    titleHover: "group-hover:text-cyan",
    cta: "text-cyan",
  },
  magenta: {
    card: "border-magenta/50 hover:border-magenta hover:shadow-[0_0_32px_rgba(255,43,214,0.14)]",
    tag: "text-magenta",
    badge: "border-magenta/60 bg-void/90 text-magenta",
    footer: "border-l-[3px] border-l-magenta border-t border-t-magenta/20 bg-void/92",
    titleHover: "group-hover:text-magenta",
    cta: "text-magenta",
  },
  lime: {
    card: "border-lime/50 hover:border-lime hover:shadow-[0_0_32px_rgba(184,255,0,0.14)]",
    tag: "text-lime",
    badge: "border-lime/60 bg-void/90 text-lime",
    footer: "border-l-[3px] border-l-lime border-t border-t-lime/20 bg-void/92",
    titleHover: "group-hover:text-lime",
    cta: "text-lime",
  },
};

function zoneAccent(index: number): ZoneAccent {
  return zoneAccents[index % zoneAccents.length];
}

function ZoneCard({
  zone,
  index,
}: {
  zone: Experience;
  index: number;
}) {
  const href = `/events/${zone.slug}`;
  const num = String(index + 1).padStart(2, "0");
  const accent = accentStyles[zoneAccent(index)];

  return (
    <TransitionLink
      href={href}
      data-scroll-zone-card
      className={`group relative block shrink-0 snap-center overflow-hidden border bg-void-2/90 transition md:shrink ${accent.card}`}
      direction="forward"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <SharedEventImage
          slug={zone.slug}
          src={zone.image}
          overlayClassName="bg-gradient-to-t from-void via-void/40 to-void/10"
        />
        <div className="absolute left-3 top-3 z-10 flex flex-wrap gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em]">
          <span className={`border px-2 py-1 backdrop-blur-sm ${accent.badge}`}>
            {num}
          </span>
          <span className={`border px-2 py-1 backdrop-blur-sm ${accent.badge}`}>
            {zone.category}
          </span>
        </div>
      </div>
      <div className="border-t border-ghost/10 bg-void/95 p-4 md:p-5">
        <SharedEventTitle
          slug={zone.slug}
          className={`font-display text-xl tracking-[0.05em] transition md:text-2xl ${accent.titleHover}`}
        >
          {zone.title}
        </SharedEventTitle>
        <p className="mt-2 line-clamp-2 text-sm text-ghost-dim">{zone.summary}</p>
        <p
          className={`mt-3 font-mono text-[10px] uppercase tracking-[0.16em] opacity-70 transition group-hover:opacity-100 ${accent.cta}`}
        >
          Enter zone →
        </p>
      </div>
    </TransitionLink>
  );
}

export function ZoneShowcase({
  zones,
  variant = "full",
}: {
  zones: Experience[];
  variant?: "compact" | "full";
}) {
  if (variant === "compact") {
    return (
      <div className="flex h-full min-h-0 flex-col px-3 pb-1 pt-4 md:px-6 md:pt-5">
        <div className="shrink-0 text-center">
          <p className="font-mono text-[8px] uppercase tracking-[0.24em] text-lime md:text-[9px]">
            Festival schematic
          </p>
          <h2 className="font-display text-sm tracking-[0.06em] md:text-lg lg:text-xl">
            <GlitchTitle text="One arena · 9 zones" className="text-ghost" />
          </h2>
        </div>

        <div className="mx-auto flex min-h-0 w-full flex-1 items-center justify-center py-2">
          <ZoneOrbitMap zones={zones} />
        </div>

        <div className="shrink-0 pb-1 text-center">
          <MagneticButton
            href="/events"
            className="!px-3 !py-1.5 !text-[9px] md:!text-[10px]"
          >
            All zones →
          </MagneticButton>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="field-grid pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-cyan/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-64 w-64 rounded-full bg-magenta/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mb-8 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
              09 · Festival Zones
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-[0.06em] md:text-7xl">
              <GlitchTitle text="Nine worlds." className="text-ghost" />
              <br />
              <span className="text-cyan">One festival.</span>
            </h2>
            <p className="mt-4 max-w-lg text-sm text-ghost-dim md:text-base">
              Esports arenas, creator hubs, cosplay stages, tech pavilions, and
              more — explore every dedicated zone across the Asaiverse floor.
            </p>
          </div>
          <MagneticButton href="/events">Explore all zones</MagneticButton>
        </Reveal>

        <div className="relative -mx-5 md:mx-0">
          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0">
            {zones.map((zone, i) => (
              <div key={zone.slug} className="w-[min(78vw,320px)] md:w-auto">
                <ZoneCard zone={zone} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
