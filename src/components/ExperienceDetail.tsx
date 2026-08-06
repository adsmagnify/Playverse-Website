"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ExperienceCard,
  GlitchTitle,
  LiveBadge,
  MagneticButton,
  ParallaxImage,
  HudCorners,
} from "@/components/PlayVerseUI";
import { Reveal } from "@/components/motion";
import type { Experience } from "@/data/content";

export function ExperienceDetail({
  experience,
  others,
}: {
  experience: Experience;
  others: Experience[];
}) {
  return (
    <main className="bg-void text-ghost">
      <Header />

      <section className="relative min-h-[72svh] overflow-hidden">
        <ParallaxImage
          src={experience.image}
          className="absolute inset-0 h-full"
          speed={55}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/55 to-void/25" />
        <HudCorners className="z-10" />
        <div className="relative z-10 flex min-h-[72svh] flex-col justify-end px-5 pb-12 pt-28 md:px-8">
          <LiveBadge text={experience.season} />
          <motion.h1
            className="mt-4 max-w-4xl font-display text-[clamp(2.6rem,8vw,6rem)] leading-[0.9] tracking-[0.05em]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <GlitchTitle text={experience.title} />
          </motion.h1>
          <div className="mt-5 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.16em]">
            <span className="border border-cyan/40 px-3 py-1 text-cyan">
              {experience.category}
            </span>
            <span className="border border-magenta/40 px-3 py-1 text-magenta">
              {experience.location}
            </span>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <p className="text-lg leading-8 text-ghost-dim md:text-xl md:leading-9">
              {experience.description}
            </p>
            <p className="mt-6 text-base text-ghost">{experience.summary}</p>
            <div className="mt-8">
              <MagneticButton href="/contact" variant="solid">
                Host This Format
              </MagneticButton>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <dl className="space-y-4 border border-line bg-void-2 p-6">
              {[
                ["Category", experience.category],
                ["Location", experience.location],
                ["Season", experience.season],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="grid grid-cols-[100px_1fr] gap-3 border-b border-line pb-4 last:border-0"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ghost-dim">
                    {k}
                  </dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-4xl tracking-[0.06em] md:text-5xl">
              More lobbies
            </h2>
            <Link
              href="/events"
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-cyan hover:text-magenta"
            >
              All events →
            </Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {others.map((item) => (
              <ExperienceCard
                key={item.slug}
                href={`/events/${item.slug}`}
                title={item.title}
                category={item.category}
                location={item.location}
                summary={item.summary}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
