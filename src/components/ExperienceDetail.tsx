"use client";

import { TransitionLink } from "@/components/TransitionLink";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ExperienceCard,
  GlitchTitle,
  LiveBadge,
  MagneticButton,
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

      <section className="relative min-h-svh overflow-hidden">
        <SharedEventImage
          slug={experience.slug}
          src={experience.image}
          overlayClassName="bg-gradient-to-t from-void via-void/70 to-void/15"
        />

        <div className="relative z-10 mx-auto flex min-h-svh max-w-6xl flex-col justify-end px-5 pb-14 pt-28 md:px-8 md:pb-16 md:pt-32">
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

          <p className="mt-5 max-w-2xl text-base text-ghost-dim md:text-lg">
            {experience.summary}
          </p>

          <div className="mt-10 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <p className="text-lg leading-8 text-ghost md:text-xl md:leading-9">
                {experience.description}
              </p>
              <div className="mt-8">
                <MagneticButton href="/contact" variant="solid">
                  Host This Format
                </MagneticButton>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <dl className="space-y-4 border border-line/60 bg-void/50 p-6 backdrop-blur-md">
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
          </div>
        </div>
      </section>

      <section className="relative z-10 border-t border-line bg-void px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="font-display text-4xl tracking-[0.06em] md:text-5xl">
              More lobbies
            </h2>
            <TransitionLink
              href="/events"
              className="font-mono text-[11px] uppercase tracking-[0.16em] text-cyan hover:text-magenta"
              direction="back"
            >
              All events →
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
