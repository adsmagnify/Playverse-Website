"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FaqList } from "@/components/FaqList";
import {
  DisciplineCard,
  ExperienceCard,
  FloatingOrbs,
  GlitchTitle,
  HudCorners,
  LiveBadge,
  MagneticButton,
  Marquee,
  ScoreTicker,
  SplitStat,
  StadiumLights,
} from "@/components/PlayVerseUI";
import { CountUp, HeroDrift, Reveal, Stagger, StaggerItem } from "@/components/motion";
import {
  disciplines,
  experiences,
  heroImage,
  marqueeItems,
  principles,
  stats,
  tickerMatches,
} from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HomePage() {
  const featured = experiences.filter((e) => e.featured);

  return (
    <main className="bg-void text-ghost">
      <Header />

      {/* HERO */}
      <section className="relative min-h-svh overflow-hidden">
        <div
          className="absolute inset-0 scale-110 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="hero-wash absolute inset-0" />
        <div className="field-grid absolute inset-0" />
        <StadiumLights />
        <FloatingOrbs />
        <HudCorners className="z-10 opacity-70" />

        <HeroDrift>
          <div className="relative z-10 flex min-h-svh flex-col justify-end px-5 pb-10 pt-28 md:px-8 md:pb-12">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <LiveBadge text="MATCHDAY PROTOCOLS ONLINE" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-magenta">
                ping 12ms · servers hot
              </span>
            </motion.div>

            <motion.p
              className="mt-5 font-display text-[clamp(4.2rem,15vw,12rem)] leading-[0.8] tracking-[0.06em]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease, delay: 0.08 }}
            >
              <GlitchTitle text="PlayVerse" className="text-ghost" />
            </motion.p>

            <div className="mt-4 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.22 }}
              >
                <h1 className="max-w-xl font-display text-3xl tracking-[0.08em] text-cyan md:text-5xl">
                  Esports events that
                  <span className="text-magenta"> break </span>
                  the meta
                </h1>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ghost-dim md:text-base">
                  We throw LANs, arena majors, and creator takeovers — stages
                  built for clutches, crowds, and content that goes nuclear.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <MagneticButton href="/events" variant="solid">
                  View Events
                </MagneticButton>
                <MagneticButton href="/contact">Book Chaos</MagneticButton>
              </motion.div>
            </div>

            <motion.div
              className="mt-10 flex items-center justify-between border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-ghost-dim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
            >
              <span className="text-lime">01 · Init</span>
              <span className="scroll-cue text-cyan">Scroll to frag</span>
              <span className="text-magenta">India · Global</span>
            </motion.div>
          </div>
        </HeroDrift>
      </section>

      <Marquee items={marqueeItems} fast />
      <Marquee items={[...marqueeItems].reverse()} reverse />

      {/* STATS HUD */}
      <section className="relative px-5 py-20 md:px-8 md:py-28">
        <div className="field-grid absolute inset-0 opacity-50" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
              Scoreboard
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-[0.06em] md:text-7xl">
              We don&apos;t host
              <br />
              <span className="text-cyan">events.</span>
              <br />
              <span className="text-magenta">We drop raids.</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm text-ghost-dim">
              Production, ops, talent, and stage design fused into one esports
              machine — loud on purpose.
            </p>
          </Reveal>
          <div className="grid gap-2 sm:grid-cols-2">
            {stats.map((stat) => (
              <SplitStat
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

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
      <section className="border-t border-line px-5 py-20 md:px-8 md:py-28">
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

          <div className="mb-10">
            <ScoreTicker items={tickerMatches} />
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {featured.map((exp) => (
              <ExperienceCard
                key={exp.slug}
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
        <FloatingOrbs />
        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
              Playbook
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-[0.06em] md:text-7xl">
              Rules of engagement
            </h2>
          </Reveal>
          <Stagger className="mt-14 grid gap-4 md:grid-cols-2">
            {principles.map((p, i) => (
              <StaggerItem key={p.title}>
                <article className="group relative overflow-hidden border border-line bg-void/50 p-6 transition hover:border-cyan md:p-8">
                  <span className="font-mono text-cyan text-sm">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-3xl tracking-[0.05em] group-hover:text-magenta md:text-4xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-ghost-dim md:text-base">{p.copy}</p>
                  <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan/10 blur-2xl transition group-hover:bg-magenta/20" />
                </article>
              </StaggerItem>
            ))}
          </Stagger>
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
            <FaqList />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-line px-5 py-24 md:px-8 md:py-32">
        <div
          className="absolute inset-0 scale-105 bg-cover bg-center opacity-40"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=2000&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-void via-void/90 to-void/50" />
        <StadiumLights />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
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
          </Reveal>
          <Reveal delay={0.12}>
            <MagneticButton href="/contact" variant="solid">
              Start a Season
            </MagneticButton>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
