"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { CursorTarget } from "@/components/SportCursor";
import { TransitionLink } from "@/components/TransitionLink";
import { homePanels } from "@/data/content";

const accentColor = {
  cyan: "var(--cyan)",
  magenta: "var(--magenta)",
  lime: "var(--lime)",
} as const;

const ease = [0.22, 1, 0.36, 1] as const;

export function DiagonalPanels() {
  return (
    <section className="relative h-svh w-full overflow-hidden bg-void">
      <h1 className="sr-only">
        Asaiverse — cosplay, esports, concerts, and exhibitions
      </h1>

      <div className="pv-diagonal-rail flex h-full">
        {homePanels.map((panel, i) => (
          <CursorTarget
            key={panel.label}
            label="Enter"
            className="pv-diagonal-panel group relative h-full flex-1 basis-0 overflow-hidden"
          >
            <motion.div
              className="h-full w-full"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.08 * i }}
              style={{ "--accent": accentColor[panel.accent] } as CSSProperties}
            >
              <TransitionLink
                href={panel.href}
                className="relative block h-full w-full"
              >
                <div className="pv-diagonal-media">
                  <Image
                    src={panel.image}
                    alt=""
                    fill
                    priority
                    draggable={false}
                    sizes="(max-width: 767px) 80vw, 60vw"
                    className="object-cover object-center brightness-[0.58] grayscale-[0.3] transition duration-500 group-hover:brightness-[0.78] group-hover:grayscale-[0.15]"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-void/95 via-void/45 to-void/30" />

                {/* diagonal seam */}
                <span
                  className="pointer-events-none absolute inset-y-0 right-0 w-px bg-line"
                  aria-hidden
                />

                <div className="pv-diagonal-unskew pointer-events-none absolute inset-0 px-2">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h2
                      aria-label={panel.label}
                      className="pv-diagonal-lean pv-diagonal-label flex flex-col items-center font-display leading-[1.2] text-ghost"
                      style={{ "--label-len": panel.label.length } as CSSProperties}
                    >
                      {panel.label.split("").map((char, c) => (
                        <span
                          key={`${panel.label}-${c}`}
                          className="pv-diagonal-letter"
                          aria-hidden
                        >
                          {char}
                        </span>
                      ))}
                    </h2>
                  </div>

                  <div className="absolute inset-x-0 top-[78vh] flex justify-center">
                    <span
                      className="h-10 w-px opacity-60"
                      style={{ background: "var(--accent)" }}
                      aria-hidden
                    />
                  </div>

                  <div className="absolute inset-x-0 bottom-[6vh] hidden justify-center px-2 md:flex">
                    <span className="max-w-[18ch] text-center text-xs leading-relaxed text-ghost-dim">
                      {panel.copy}
                    </span>
                  </div>
                </div>
              </TransitionLink>
            </motion.div>
          </CursorTarget>
        ))}
      </div>

      <motion.p
        className="scroll-cue pointer-events-none absolute inset-x-0 bottom-5 z-10 text-center font-mono text-[10px] uppercase tracking-[0.28em] text-cyan md:bottom-7"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        Scroll to frag
      </motion.p>
    </section>
  );
}
