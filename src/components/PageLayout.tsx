"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import { HudCorners, LiveBadge, StadiumLights } from "@/components/PlayVerseUI";

const ease = [0.22, 1, 0.36, 1] as const;

export function PageHero({
  badge,
  image,
  description,
  heading,
  priority = true,
}: {
  badge: string;
  image: string;
  description?: string;
  heading: ReactNode;
  priority?: boolean;
}) {
  return (
    <section className="relative h-svh overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority={priority}
          draggable={false}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-r from-void/70 via-void/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_32%,rgba(0,240,255,0.14),transparent_58%)]" />
      </div>
      <div className="field-grid pointer-events-none absolute inset-0 z-[2] opacity-25" />
      <div className="pointer-events-none absolute inset-0 z-[2] opacity-35">
        <StadiumLights />
      </div>
      <HudCorners className="z-10 opacity-70" />

      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-12 pt-28 md:px-8 md:pb-14">
        <LiveBadge text={badge} />
        <motion.div
          className="mt-5 font-display text-[clamp(3.2rem,12vw,8.5rem)] leading-[0.85] tracking-[0.06em]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease }}
        >
          {heading}
        </motion.div>
        {description ? (
          <motion.p
            className="mt-5 max-w-lg text-sm text-ghost-dim md:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.12 }}
          >
            {description}
          </motion.p>
        ) : null}
      </div>
    </section>
  );
}

export function PageRule() {
  return (
    <div
      className="mx-auto h-px max-w-7xl origin-left bg-gradient-to-r from-cyan via-magenta to-lime opacity-60"
      aria-hidden
    />
  );
}

export function PageSection({
  children,
  className = "",
  variant = "default",
  containerClassName = "",
}: {
  children: ReactNode;
  className?: string;
  variant?: "default" | "alt";
  containerClassName?: string;
}) {
  return (
    <section
      className={`relative px-5 py-20 md:px-8 md:py-28 ${
        variant === "alt" ? "border-t border-line bg-void-2" : ""
      } ${className}`}
    >
      {variant === "default" ? (
        <div className="field-grid absolute inset-0 opacity-40" />
      ) : null}
      <div className={`relative mx-auto max-w-7xl ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
