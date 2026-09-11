"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero, PageRule, PageSection } from "@/components/PageLayout";
import { ExperienceCard, GlitchTitle, Marquee } from "@/components/PlayVerseUI";
import { Reveal } from "@/components/motion";
import {
  experiences,
  eventsHeroImage,
  integratedExperiences,
  marqueeItems,
} from "@/data/content";

export default function EventsPage() {
  return (
    <main className="bg-void text-ghost">
      <Header />

      <PageHero
        badge="Zones & experiences"
        image={eventsHeroImage}
        description="Explore competitive gaming, creator culture, technology, entertainment, and community experiences across the Asaiverse festival floor."
        heading={
          <>
            <GlitchTitle text="Festival" />
            <br />
            <span className="text-cyan">zones</span>
          </>
        }
      />

      <Marquee items={marqueeItems} fast />
      <div className="hidden md:block">
        <Marquee items={[...marqueeItems].reverse()} reverse />
      </div>
      <PageRule />

      <PageSection>
        <Reveal className="mb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
            Dedicated Zones
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-[0.06em] md:text-6xl">
            Nine worlds. One festival.
          </h2>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-2">
          {experiences.map((exp) => (
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
      </PageSection>

      <PageSection variant="alt">
        <Reveal className="mb-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-magenta">
            Festival-wide
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-[0.06em] md:text-6xl">
            Integrated experiences
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-ghost-dim md:text-base">
            Beyond individual zones, Asaiverse connects every attendee through
            shared programs that span the entire venue.
          </p>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {integratedExperiences.map((item, i) => (
            <Reveal key={item.title} delay={0.06 * i}>
              <article className="border border-line bg-void/50 p-6 md:p-8">
                <span className="font-mono text-sm text-cyan">0{i + 1}</span>
                <h3 className="mt-3 font-display text-2xl tracking-[0.05em] md:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-ghost-dim">{item.copy}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </PageSection>

      <Footer />
    </main>
  );
}
