"use client";

import { useEffect, useState } from "react";
import { TransitionLink } from "@/components/TransitionLink";
import type { Experience } from "@/data/content";

const POP_DISTANCE = 5; // % of container to slide outward on activate

const zoneAccents = ["cyan", "magenta", "lime"] as const;
type ZoneAccent = (typeof zoneAccents)[number];

const accentTint: Record<ZoneAccent, string> = {
  cyan: "rgba(0,240,255,0.22)",
  magenta: "rgba(255,43,214,0.22)",
  lime: "rgba(184,255,0,0.22)",
};

/** Per-zone fine tune (%). Positive Y = shift image lower inside its wedge. */
const imageOffset: Record<string, { x?: number; y?: number }> = {
  "bgmi-zone": { y: 14 },
  "free-fire-zone": { x:5,y: 30 },
  "tech-exhibition-zone": { x:15,y: 25 },
  "cosplay-zone": { x: 25, y: 38 },
  "rock-concert-zone": { x:-5 , y: 31 },
  "valorant-zone": { x: 0, y: 15 },
};

function zoneAccent(index: number): ZoneAccent {
  return zoneAccents[index % zoneAccents.length];
}

function compactZoneTitle(title: string) {
  const short = title
    .replace(/\s*&\s*Entertainment Zone$/i, "")
    .replace(/ Zone$/i, "");
  const aliases: Record<string, string> = {
    "Tech Exhibition": "Tech Expo",
    "Food Festival": "Food Fest",
    "Rock Concert & Entertainment": "Rock Concert",
    "Indie Gaming": "Indie Games",
  };
  return aliases[short] ?? short;
}

/** Build a pie-wedge clip-path polygon (% coords). */
function wedgeClipPath(
  startDeg: number,
  endDeg: number,
  resolution = 22
): string {
  const pts: string[] = ["50% 50%"];
  for (let i = 0; i <= resolution; i++) {
    const t = i / resolution;
    const rad = ((startDeg + (endDeg - startDeg) * t - 90) * Math.PI) / 180;
    const x = 50 + 50 * Math.cos(rad);
    const y = 50 + 50 * Math.sin(rad);
    pts.push(`${x.toFixed(3)}% ${y.toFixed(3)}%`);
  }
  return `polygon(${pts.join(", ")})`;
}

function polarPoint(deg: number, radiusPercent: number) {
  const rad = ((deg - 90) * Math.PI) / 180;
  return {
    x: 50 + radiusPercent * Math.cos(rad),
    y: 50 + radiusPercent * Math.sin(rad),
  };
}

const CENTER_PERCENT = 26;

export function ZoneOrbitMap({ zones }: { zones: Experience[] }) {
  const wedgeSpan = 360 / zones.length;
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isTouch, setIsTouch] = useState(false);

  // Detect touch devices
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const apply = () => setIsTouch(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Auto-cycle wedges on touch devices
  useEffect(() => {
    if (!isTouch || zones.length === 0) return;
    setActiveIndex(0);
    const interval = window.setInterval(() => {
      setActiveIndex((prev) =>
        prev === null ? 0 : (prev + 1) % zones.length
      );
    }, 1400);
    return () => window.clearInterval(interval);
  }, [isTouch, zones.length]);

  const popOffset = (index: number) => {
    const mid = index * wedgeSpan + wedgeSpan / 2;
    const rad = ((mid - 90) * Math.PI) / 180;
    return {
      x: Math.cos(rad) * POP_DISTANCE,
      y: Math.sin(rad) * POP_DISTANCE,
    };
  };

  return (
    <div
      className="relative mx-auto aspect-square w-[min(92vw,68svh,560px)]"
      data-zone-orbit
      aria-label="One festival arena divided into nine zones"
    >
      {/* Ambient arena glow */}
      <div className="pointer-events-none absolute -inset-4 rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.18),transparent_65%)] blur-2xl" />

      {/* Arena outer ring */}
      <div className="pointer-events-none absolute inset-0 rounded-full border-2 border-cyan/55 shadow-[0_0_40px_rgba(0,240,255,0.25),inset_0_0_50px_rgba(0,240,255,0.06)]" />
      <div className="pointer-events-none absolute inset-[3.5%] rounded-full border border-magenta/25" />

      {/* Wedge tiles with images, one per zone */}
      <div className="absolute inset-0">
        {zones.map((zone, i) => {
          const start = i * wedgeSpan;
          const end = (i + 1) * wedgeSpan;
          const mid = start + wedgeSpan / 2;
          const rad = ((mid - 90) * Math.PI) / 180;
          // Shift each image outward along its wedge angle so the subject
          // (usually near the center of the source image) lands inside the
          // visible pie slice instead of being cropped near the hub.
          const tune = imageOffset[zone.slug] ?? {};
          const imgShiftX = Math.cos(rad) * 22 + (tune.x ?? 0);
          const imgShiftY = Math.sin(rad) * 22 + (tune.y ?? 0);
          const accent = zoneAccent(i);
          const label = compactZoneTitle(zone.title);
          const isActive = activeIndex === i;
          const pop = popOffset(i);

          return (
            <TransitionLink
              key={zone.slug}
              href={`/events/${zone.slug}`}
              direction="forward"
              data-wedge-index={i}
              onMouseEnter={() => {
                if (!isTouch) setActiveIndex(i);
              }}
              onMouseLeave={() => {
                if (!isTouch) setActiveIndex(null);
              }}
              className="absolute inset-0 block will-change-transform"
              style={{
                clipPath: wedgeClipPath(start, end),
                transform: `translate(${isActive ? pop.x : 0}%, ${
                  isActive ? pop.y : 0
                }%)`,
                transition:
                  "transform 0.5s cubic-bezier(0.34, 1.5, 0.64, 1), filter 0.35s ease",
                filter: isActive
                  ? "brightness(1.25) saturate(1.35)"
                  : undefined,
                zIndex: isActive ? 4 : 1,
              }}
              aria-label={label}
            >
              <img
                src={zone.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover brightness-[0.72] saturate-[1.25]"
                style={{
                  transform: `translate(${imgShiftX}%, ${imgShiftY}%) scale(1.18)`,
                  transformOrigin: "50% 50%",
                }}
              />
              {/* Accent color wash */}
              <div
                className="absolute inset-0 mix-blend-color transition-opacity duration-300"
                style={{
                  background: accentTint[accent],
                  opacity: isActive ? 0 : 0.8,
                }}
              />
              {/* Radial scrim — darken toward the hub tip so the outer subject stays clear */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(5,5,8,0.7)_0%,rgba(5,5,8,0.35)_28%,transparent_55%)]" />
            </TransitionLink>
          );
        })}
      </div>

      {/* Wedge dividers & rings */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden
      >
        {zones.map((_, i) => {
          const angle = ((i * wedgeSpan - 90) * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={50 + (CENTER_PERCENT / 2) * Math.cos(angle)}
              y1={50 + (CENTER_PERCENT / 2) * Math.sin(angle)}
              x2={50 + 50 * Math.cos(angle)}
              y2={50 + 50 * Math.sin(angle)}
              stroke="rgba(0,240,255,0.55)"
              strokeWidth="0.35"
              strokeDasharray="1.5 1.5"
            />
          );
        })}
        <circle
          cx="50"
          cy="50"
          r={CENTER_PERCENT / 2 + 0.6}
          fill="none"
          stroke="rgba(0,240,255,0.7)"
          strokeWidth="0.5"
        />
      </svg>

      {/* Zone labels — positioned in the middle of each wedge, upright */}
      {zones.map((zone, i) => {
        const start = i * wedgeSpan;
        const mid = start + wedgeSpan / 2;
        const label = compactZoneTitle(zone.title);
        const namePos = polarPoint(mid, 34);
        const isActive = activeIndex === i;
        const pop = popOffset(i);

        return (
          <div key={`label-${zone.slug}`}>
            <TransitionLink
              href={`/events/${zone.slug}`}
              direction="forward"
              onMouseEnter={() => {
                if (!isTouch) setActiveIndex(i);
              }}
              onMouseLeave={() => {
                if (!isTouch) setActiveIndex(null);
              }}
              className="absolute z-20 whitespace-nowrap px-2 py-1 font-display text-[clamp(0.65rem,2.4vmin,1rem)] uppercase leading-none tracking-[0.08em] text-ghost [text-shadow:0_2px_10px_rgba(0,0,0,0.95),0_0_18px_rgba(0,0,0,0.8)]"
              style={{
                left: `${namePos.x}%`,
                top: `${namePos.y}%`,
                transform: `translate(calc(-50% + ${
                  isActive ? pop.x : 0
                }%), calc(-50% + ${isActive ? pop.y : 0}%))`,
                transition:
                  "transform 0.5s cubic-bezier(0.34, 1.5, 0.64, 1)",
              }}
              aria-label={`Explore ${label}`}
            >
              {label}
            </TransitionLink>
          </div>
        );
      })}

      {/* Arena core — the "ONE ARENA" hub */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border-[3px] border-cyan bg-void shadow-[0_0_50px_rgba(0,240,255,0.55),inset_0_0_20px_rgba(0,240,255,0.15)]"
        style={{
          width: `${CENTER_PERCENT}%`,
          height: `${CENTER_PERCENT}%`,
        }}
      >
        <div className="absolute inset-[8%] rounded-full border border-magenta/40" />
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.14),transparent_65%)]" />
        <div className="relative text-center">
          <p className="font-display text-[clamp(1rem,3.8vmin,1.7rem)] leading-[0.9] tracking-[0.08em] text-cyan drop-shadow-[0_0_12px_rgba(0,240,255,0.55)]">
            ONE
            <br />
            ARENA
          </p>
          <div className="mx-auto mt-1.5 h-px w-6 bg-magenta/60 md:w-8" />
          <p className="mt-1.5 font-mono text-[8px] uppercase tracking-[0.24em] text-lime drop-shadow-[0_0_8px_rgba(184,255,0,0.55)] md:text-[10px]">
            9 zones
          </p>
        </div>
      </div>

      {/* Corner HUD brackets */}
      <span className="pointer-events-none absolute -left-2 -top-2 h-5 w-5 border-l-2 border-t-2 border-cyan/70" />
      <span className="pointer-events-none absolute -right-2 -top-2 h-5 w-5 border-r-2 border-t-2 border-cyan/70" />
      <span className="pointer-events-none absolute -bottom-2 -left-2 h-5 w-5 border-b-2 border-l-2 border-cyan/70" />
      <span className="pointer-events-none absolute -bottom-2 -right-2 h-5 w-5 border-b-2 border-r-2 border-cyan/70" />
    </div>
  );
}
