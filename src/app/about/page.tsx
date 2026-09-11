"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero, PageRule, PageSection } from "@/components/PageLayout";
import {
  GlitchTitle,
  MagneticButton,
  Marquee,
  SplitStat,
} from "@/components/PlayVerseUI";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import {
  aboutHeroImage,
  marqueeItems,
  principles,
  stats,
} from "@/data/content";

export default function AboutPage() {
  return (
    <main className="bg-void text-ghost">
      <Header />

      <PageHero
        badge="About Asaiverse"
        image={aboutHeroImage}
        description="Asaiverse is an esports events company. We build the nights where brackets matter, casters lose their minds, and the crowd becomes the fifth player."
        heading={
          <>
            <GlitchTitle text="Born in" />
            <br />
            <span className="text-cyan">the lobby</span>
          </>
        }
      />

      <Marquee items={marqueeItems} fast />
      <PageRule />

      <PageSection containerClassName="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
            Origin
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
            better stages. Asaiverse exists to turn competitive gaming into
            full-body experiences — lights, audio, walkouts, and formats that
            feel illegal in the best way.
          </p>
          <p>
            Today we run LANs, arena majors, BGMI tours, FGC cups, and creator
            overclocks across India — with production that hits like a ranked
            promo game.
          </p>
          <MagneticButton href="/registration" variant="solid">
            Register
          </MagneticButton>
        </Reveal>
      </PageSection>

      <PageSection variant="alt">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
            Scoreboard
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-[0.06em] md:text-6xl">
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
      </PageSection>

      <PageSection>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
            Playbook
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-[0.06em] md:text-6xl">
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
      </PageSection>

      <Footer />
    </main>
  );
}
