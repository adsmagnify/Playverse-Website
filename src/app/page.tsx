"use client";

import { useRef } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FaqList } from "@/components/FaqList";
import { DiagonalPanels } from "@/components/DiagonalPanels";
import { HomeScrollEffects } from "@/components/HomeScrollEffects";
import {
  DisciplineCard,
  ExperienceCard,
  FloatingOrbs,
  MagneticButton,
  Marquee,
  ScoreTicker,
  SplitStat,
  StadiumLights,
} from "@/components/PlayVerseUI";
import { CountUp, Reveal } from "@/components/motion";
import {
  disciplines,
  experiences,
  marqueeHighlights,
  marqueeItems,
  principles,
  principlesIntro,
  stats,
  tickerMatches,
} from "@/data/content";

export default function HomePage() {
  const mainRef = useRef<HTMLElement>(null);
  const featured = experiences.filter((e) => e.featured);

  return (
    <main ref={mainRef} className="bg-void text-ghost">
      <HomeScrollEffects scope={mainRef} />
      <Header />

      {/* HERO — four diagonal category panels */}
      <DiagonalPanels />

      <Marquee items={marqueeHighlights} />
      <Marquee items={marqueeItems} reverse />

      <div
        data-scroll-rule
        className="mx-auto h-px max-w-7xl origin-left bg-gradient-to-r from-cyan via-magenta to-lime opacity-60"
        aria-hidden
      />

      {/* STATS HUD */}
      <section
        data-scroll-stats
        className="relative px-5 py-20 md:px-8 md:py-28"
      >
        <div className="field-grid absolute inset-0 opacity-50" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
              Scoreboard
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-[0.06em] md:text-7xl">
              <span className="block overflow-hidden">
                <span data-scroll-line className="block">
                  We don&apos;t host
                </span>
              </span>
              <span className="block overflow-hidden">
                <span data-scroll-line className="block text-cyan">events.</span>
              </span>
              <span className="block overflow-hidden">
                <span data-scroll-line className="block text-magenta">
                  We drop raids.
                </span>
              </span>
            </h2>
            <p className="mt-5 max-w-sm text-sm text-ghost-dim">
              Production, ops, talent, and stage design fused into one esports
              machine — loud on purpose.
            </p>
          </Reveal>
          <div className="grid gap-2 sm:grid-cols-2">
            {stats.map((stat) => (
              <div key={stat.label} data-scroll-stat>
                <SplitStat
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  animate={false}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div
        data-scroll-rule
        className="mx-auto h-px max-w-7xl origin-left bg-gradient-to-r from-lime via-cyan to-magenta opacity-50"
        aria-hidden
      />

      {/* TITLES / DISCIPLINES */}
      <section className="px-5 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 md:mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-magenta">
              Loadout
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-[0.06em] md:text-7xl">
              Titles we torch
            </h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {disciplines.map((d, i) => (
              <DisciplineCard key={d.id} {...d} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section
        data-scroll-events
        className="border-t border-line px-5 py-20 md:px-8 md:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">
                Fixture feed
              </p>
              <h2 className="mt-3 font-display text-5xl tracking-[0.06em] md:text-7xl">
                Upcoming mayhem
              </h2>
            </div>
            <MagneticButton href="/events">All Events</MagneticButton>
          </Reveal>

          <div className="mb-10" data-scroll-ticker>
            <ScoreTicker items={tickerMatches} />
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {featured.map((exp) => (
              <ExperienceCard
                key={exp.slug}
                slug={exp.slug}
                href={`/events/${exp.slug}`}
                title={exp.title}
                category={exp.category}
                location={exp.location}
                summary={exp.summary}
                image={exp.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="relative overflow-hidden border-t border-line bg-void-2 px-5 py-20 md:px-8 md:py-28">
        <div className="hidden md:block">
          <FloatingOrbs />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
              Playbook
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-[0.06em] md:text-7xl">
              Rules of engagement
            </h2>
            <p className="mt-5 max-w-2xl text-sm text-ghost-dim md:text-base">
              {principlesIntro}
            </p>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {principles.map((p, i) => (
              <article
                key={p.title}
                data-scroll-principle
                className="group relative overflow-hidden border border-line bg-void/50 p-6 transition hover:border-cyan md:p-8"
              >
                  <span className="font-mono text-cyan text-sm">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-3xl tracking-[0.05em] group-hover:text-magenta md:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-ghost-dim md:text-base">{p.copy}</p>
                  <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan/10 blur-2xl transition group-hover:bg-magenta/20" />
                </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-magenta">
              FAQ
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-[0.06em] md:text-6xl">
              Before you queue
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div data-scroll-faq>
              <FaqList />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section
        data-scroll-cta
        className="relative overflow-hidden border-t border-line px-5 py-24 md:px-8 md:py-32"
      >
        <div
          data-scroll-cta-bg
          className="absolute inset-0 scale-105 bg-cover bg-center opacity-40 md:will-change-transform"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=2000&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/90 to-void/50" />
        <StadiumLights />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div data-scroll-cta-copy>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
              Final round
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-5xl tracking-[0.06em] md:text-7xl">
              Ready to make
              <br />
              the <span className="text-cyan">server</span> scream?
            </h2>
            <p className="mt-4 flex flex-wrap items-center gap-3 text-sm text-ghost-dim">
              <CountUp
                value="214"
                suffix="+"
                className="font-display text-4xl text-ghost"
              />
              <span>events already in the killfeed</span>
            </p>
          </div>
          <div data-scroll-cta-copy>
            <MagneticButton href="/contact" variant="solid">
              Start a Season
            </MagneticButton>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
