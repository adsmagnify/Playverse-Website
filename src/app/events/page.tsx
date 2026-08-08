"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero, PageRule, PageSection } from "@/components/PageLayout";
import { ExperienceCard, GlitchTitle, Marquee } from "@/components/PlayVerseUI";
import { experiences, eventsHeroImage, marqueeItems } from "@/data/content";

export default function EventsPage() {
  return (
    <main className="bg-void text-ghost">
      <Header />

      <PageHero
        badge="Event database unlocked"
        image={eventsHeroImage}
        description="Tournament seasons, LAN weekends, creator raids — pick your poison and enter the lobby."
        heading={<GlitchTitle text="Events" />}
      />

      <Marquee items={marqueeItems} fast />
      <div className="hidden md:block">
        <Marquee items={[...marqueeItems].reverse()} reverse />
      </div>
      <PageRule />

      <PageSection>
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

      <Footer />
    </main>
  );
}
