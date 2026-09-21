"use client";

import { TransitionLink } from "@/components/TransitionLink";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageRule, PageSection } from "@/components/PageLayout";
import {
  ExperienceCard,
  GlitchTitle,
  HudCorners,
  LiveBadge,
  MagneticButton,
  StadiumLights,
} from "@/components/PlayVerseUI";
import { SharedEventImage, SharedEventTitle } from "@/components/SharedEventMedia";
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

      <section className="relative h-svh overflow-hidden">
        <SharedEventImage
          slug={experience.slug}
          src={experience.image}
          overlayClassName="bg-gradient-to-r from-void/70 via-void/25 to-transparent"
        />
        <div className="pointer-events-none absolute inset-0 z-[1]">
          <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-transparent to-transparent" />
        </div>
        <div className="field-grid pointer-events-none absolute inset-0 z-[2] opacity-25" />
        <div className="pointer-events-none absolute inset-0 z-[2] opacity-35">
          <StadiumLights />
        </div>
        <HudCorners className="z-10 opacity-70" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-12 pt-28 md:px-8 md:pb-14">
          <LiveBadge text={experience.season} />

          <SharedEventTitle
            slug={experience.slug}
            as="h1"
            className="mt-4 max-w-4xl font-display text-[clamp(2.6rem,8vw,6rem)] leading-[0.9] tracking-[0.05em]"
          >
            <GlitchTitle text={experience.title} />
          </SharedEventTitle>

          <div className="mt-5 flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-[0.16em]">
            <span className="border border-cyan/40 bg-void/50 px-3 py-1 text-cyan backdrop-blur-sm">
              {experience.category}
            </span>
            <span className="border border-magenta/40 bg-void/50 px-3 py-1 text-magenta backdrop-blur-sm">
              {experience.location}
            </span>
          </div>

          <p className="mt-5 max-w-2xl text-sm text-ghost-dim md:text-base">
            {experience.summary}
          </p>
        </div>
      </section>

      <PageRule />

      <PageSection containerClassName="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
            Briefing
          </p>
          <p className="mt-4 text-lg leading-8 text-ghost md:text-xl md:leading-9">
            {experience.description}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
            Key Attractions
          </p>
          {experience.attractions?.length ? (
            <ul className="mt-6 space-y-3">
              {experience.attractions.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm text-ghost-dim md:text-base"
                >
                  <span className="text-cyan">▸</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
          <div className="mt-8">
            <MagneticButton href="/registration" variant="solid">
              Register
            </MagneticButton>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <dl className="pv-card pv-card--cyan space-y-4 bg-void-2/80 p-6 backdrop-blur-md">
            {[
              ["Category", experience.category],
              ["Location", experience.location],
              ["Season", experience.season],
            ].map(([k, v]) => (
              <div
                key={k}
                className="grid grid-cols-[100px_1fr] gap-3 border-b border-line/40 pb-4 last:border-0"
              >
                <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-ghost-dim">
                  {k}
                </dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </PageSection>

      <PageSection variant="alt">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
              More zones
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[0.06em] md:text-5xl">
              Explore further
            </h2>
          </div>
          <TransitionLink
            href="/events"
            className="font-mono text-[11px] uppercase tracking-[0.16em] text-cyan hover:text-magenta"
            direction="back"
          >
            All zones →
          </TransitionLink>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {others.map((item) => (
            <ExperienceCard
              key={item.slug}
              slug={item.slug}
              href={`/events/${item.slug}`}
              title={item.title}
              category={item.category}
              location={item.location}
              summary={item.summary}
              image={item.image}
            />
          ))}
        </div>
      </PageSection>

      <Footer />
    </main>
  );
}
