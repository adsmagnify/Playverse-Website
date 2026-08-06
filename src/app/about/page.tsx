"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  GlitchTitle,
  LiveBadge,
  MagneticButton,
  ParallaxImage,
  SplitStat,
  StadiumLights,
  FloatingOrbs,
} from "@/components/PlayVerseUI";
import { HeroDrift, Reveal, Stagger, StaggerItem } from "@/components/motion";
import { principles, stats } from "@/data/content";

export default function AboutPage() {
  return (
    <main className="bg-void text-ghost">
      <Header />

      <section className="relative min-h-[85svh] overflow-hidden">
        <ParallaxImage
          src="https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=2200&q=80"
          className="absolute inset-0 h-full"
          speed={70}
        />
        <div className="hero-wash absolute inset-0" />
        <StadiumLights />
        <FloatingOrbs />

        <HeroDrift>
          <div className="relative z-10 flex min-h-[85svh] flex-col justify-end px-5 pb-12 pt-28 md:px-8">
            <LiveBadge text="ORG FILE // PLAYVERSE" />
            <motion.h1
              className="mt-5 font-display text-[clamp(3.2rem,12vw,8.5rem)] leading-[0.85] tracking-[0.06em]"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <GlitchTitle text="Born in" />
              <br />
              <span className="text-cyan">the lobby</span>
            </motion.h1>
            <p className="mt-5 max-w-lg text-sm text-ghost-dim md:text-base">
              PlayVerse is an esports events company. We build the nights where
              brackets matter, casters lose their minds, and the crowd becomes
              the fifth player.
            </p>
          </div>
        </HeroDrift>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
              {"// origin"}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[0.06em] md:text-6xl">
              Not another
              <br />
              boring AV crew
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-6 text-base leading-8 text-ghost-dim md:text-lg">
            <p>
              We came from scrims, campus cups, and Discord raids that deserved
              better stages. PlayVerse exists to turn competitive gaming into
              full-body experiences — lights, audio, walkouts, and formats that
              feel illegal in the best way.
            </p>
            <p>
              Today we run LANs, arena majors, BGMI tours, FGC cups, and creator
              overclocks across India — with production that hits like a ranked
              promo game.
            </p>
            <MagneticButton href="/contact" variant="solid">
              Squad Up
            </MagneticButton>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-void-2 px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-5xl tracking-[0.06em] md:text-6xl">
              Killfeed numbers
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <SplitStat
                key={s.label}
                value={s.value}
                suffix={s.suffix}
                label={s.label}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <h2 className="font-display text-5xl tracking-[0.06em] md:text-6xl">
              Creed
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
            {principles.map((p) => (
              <StaggerItem key={p.title}>
                <div className="border border-line p-7 transition hover:border-cyan hover:shadow-[0_0_40px_rgba(0,240,255,0.12)]">
                  <h3 className="font-display text-3xl tracking-[0.05em]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-ghost-dim">{p.copy}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <Footer />
    </main>
  );
}
