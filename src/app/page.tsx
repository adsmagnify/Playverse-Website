"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FaqList } from "@/components/FaqList";
import { HomeScrollEffects } from "@/components/HomeScrollEffects";
import {
  DisciplineCard,
  FloatingOrbs,
  GlitchTitle,
  HudCorners,
  MagneticButton,
  Marquee,
  SplitStat,
  StadiumLights,
} from "@/components/PlayVerseUI";
import { ZoneShowcase } from "@/components/ZoneShowcase";
import { CountUp, Reveal } from "@/components/motion";
import {
  disciplines,
  experiences,
  heroImage,
  integratedExperiences,
  marqueeItems,
  principlesIntro,
  sponsorSection,
  stats,
} from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as const;

export default function HomePage() {
  const mainRef = useRef<HTMLElement>(null);

  return (
    <main ref={mainRef} className="bg-void text-ghost">
      <HomeScrollEffects scope={mainRef} />
      <Header />

      {/* HERO → STATS scroll journey */}
      <section data-hero-journey className="relative max-md:min-h-[190vh]">
        <div
          data-hero-journey-pin
          data-scroll-hero
          className="relative h-svh overflow-hidden max-md:sticky max-md:top-0"
        >
          <div data-hero-exit className="absolute inset-0 flex flex-col justify-end">
          <div
            data-scroll-hero-bg
            className="absolute inset-0 z-0 overflow-hidden md:will-change-transform"
          >
        <Image
              src={heroImage}
              alt=""
              fill
          priority
              draggable={false}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div
            data-scroll-hero-wash
            className="pointer-events-none absolute inset-0 z-[1]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-void/70 via-void/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_32%,rgba(0,240,255,0.14),transparent_58%)]" />
          </div>
          <div className="field-grid pointer-events-none absolute inset-0 z-[2] opacity-25" />
          <div className="pointer-events-none absolute inset-0 z-[2] hidden opacity-35 md:block">
            <StadiumLights />
          </div>
          <HudCorners className="z-10 opacity-70" />

          <div
            data-zones-reveal
            className="absolute inset-0 z-[11] flex flex-col overflow-hidden opacity-0"
          >
            <div
              data-zones-reveal-scrim
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/90 via-void/85 to-void/95"
              aria-hidden
            />
            <div className="pointer-events-auto relative min-h-0 flex-1">
              <ZoneShowcase zones={experiences} variant="compact" />
            </div>
          </div>

          <div className="relative z-10 flex w-full flex-col justify-end">
            <motion.div
              className="relative z-10 origin-bottom px-5 md:px-8 md:will-change-transform"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease, delay: 0.08 }}
            >
              <div data-journey-mark>
                <p className="font-display text-[clamp(4.2rem,15vw,12rem)] leading-[0.8] tracking-[0.06em]">
                  <GlitchTitle text="Asaiverse" className="text-ghost" />
                </p>
              </div>
            </motion.div>

            <div
              data-hero-journey-content
              className="flex flex-col px-5 pb-10 pt-4 md:px-8 md:pb-12 md:pt-6"
            >

            <div className="mt-4 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease, delay: 0.22 }}
              >
                <h1 className="max-w-xl font-display text-3xl tracking-[0.08em] text-cyan md:text-5xl">
                  India&apos;s gaming &
                  <span className="text-magenta"> digital </span>
                  culture festival
                </h1>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ghost-dim md:text-base">
                  Esports, creators, cosplay, tech, indie games, food, and live
                  entertainment — one immersive festival by ASAI.
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-3"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
              >
                <MagneticButton href="/events" variant="solid">
                  Explore Zones
                </MagneticButton>
                <MagneticButton href="/registration">Register</MagneticButton>
              </motion.div>
            </div>

            <motion.div
              className="mt-10 flex items-center justify-between pt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ghost-dim"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
            >
              <span className="text-lime">01 · Init</span>
              <span className="scroll-cue text-cyan">Scroll to explore</span>
              <span className="text-magenta">Created by ASAI</span>
            </motion.div>
          </div>
          </div>
          </div>
        </div>
      </section>

      <Marquee items={marqueeItems} fast />
      <div className="hidden md:block">
        <Marquee items={[...marqueeItems].reverse()} reverse />
      </div>

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
              The Festival
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-[0.06em] md:text-7xl">
              <span className="block overflow-hidden">
                <span data-scroll-line className="block">
                  One universe.
                </span>
              </span>
              <span className="block overflow-hidden">
                <span data-scroll-line className="block text-cyan">Nine zones.</span>
              </span>
              <span className="block overflow-hidden">
                <span data-scroll-line className="block text-magenta">
                  Infinite experiences.
                </span>
              </span>
            </h2>
            <p className="mt-5 max-w-sm text-sm text-ghost-dim">
              A multi-dimensional festival where esports, creators, technology,
              and entertainment converge in one connected ecosystem.
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

      {/* FESTIVAL WORLDS */}
      <section
        data-scroll-disciplines
        className="overflow-x-clip px-5 py-16 md:px-8 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal className="mb-10 md:mb-14">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-magenta">
              Festival Lanes
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-[0.06em] md:text-7xl">
              Explore by world
            </h2>
          </Reveal>
          <div className="grid gap-4 overflow-hidden md:grid-cols-2">
            {disciplines.map((d, i) => (
              <DisciplineCard key={d.id} {...d} index={i} />
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
              Connected Universe
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-[0.06em] md:text-7xl">
              Integrated experiences
            </h2>
            <p className="mt-5 max-w-2xl text-sm text-ghost-dim md:text-base">
              {principlesIntro}
            </p>
          </Reveal>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {integratedExperiences.map((item, i) => (
              <article
                key={item.title}
                data-scroll-principle
                className="group relative overflow-hidden border border-line bg-void/50 p-6 transition hover:border-cyan md:p-8"
              >
                <span className="font-mono text-cyan text-sm">0{i + 1}</span>
                <h3 className="mt-3 font-display text-2xl tracking-[0.05em] group-hover:text-magenta md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-ghost-dim md:text-base">{item.copy}</p>
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-cyan/10 blur-2xl transition group-hover:bg-magenta/20" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SPONSORS */}
      <section className="relative overflow-hidden border-t border-line px-5 py-20 md:px-8 md:py-28">
        <div className="field-grid absolute inset-0 opacity-40" />
        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
              {sponsorSection.badge}
            </p>
            <h2 className="mt-3 font-display text-5xl tracking-[0.06em] md:text-7xl">
              {sponsorSection.title}{" "}
              <span className="text-lime">{sponsorSection.titleAccent}</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm text-ghost-dim md:text-base">
              {sponsorSection.copy}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {sponsorSection.tiers.map((tier) => (
                <li
                  key={tier}
                  className="border border-lime/30 bg-void-2/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-lime"
                >
                  {tier}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative border border-line bg-void-2/80 p-8 md:p-10">
              <div className="rgb-border absolute inset-0 -z-10 opacity-40" />
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">
                Brand partnerships
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ghost-dim md:text-base">
                Put your brand in front of competitive gamers, creators, and
                festival crowds across nine dedicated zones.
              </p>
              <div className="mt-8">
                <MagneticButton href={sponsorSection.href} variant="solid">
                  Become a Sponsor
                </MagneticButton>
              </div>
            </div>
          </Reveal>
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
              Ready to join
              <br />
              the <span className="text-cyan">festival</span>?
            </h2>
            <p className="mt-4 flex flex-wrap items-center gap-3 text-sm text-ghost-dim">
              <CountUp
                value="9"
                suffix=""
                className="font-display text-4xl text-ghost"
              />
              <span>dedicated zones waiting to be explored</span>
            </p>
          </div>
          <div data-scroll-cta-copy>
            <MagneticButton href="/registration" variant="solid">
              Register Now
            </MagneticButton>
          </div>
        </div>
      </section>

      <Footer />
      </main>
  );
}
