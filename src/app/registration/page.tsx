"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero, PageRule, PageSection } from "@/components/PageLayout";
import { RegistrationCategoryCard } from "@/components/RegistrationCategoryCard";
import { GlitchTitle } from "@/components/PlayVerseUI";
import { Reveal } from "@/components/motion";
import { registrationCategories, registrationHeroImage } from "@/data/content";

export default function RegistrationPage() {
  return (
    <main className="bg-void text-ghost">
      <Header />

      <PageHero
        badge="Registration open"
        image={registrationHeroImage}
        description="Choose your lane — visitor, cosplayer, or sponsor. Player registrations include game selection and payment."
        heading={
          <>
            <GlitchTitle text="Join" />
            <br />
            <span className="text-cyan">the lobby</span>
          </>
        }
      />

      <PageRule />

      <PageSection>
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-lime">
            Categories
          </p>
          <h2 className="mt-3 font-display text-5xl tracking-[0.06em] md:text-6xl">
            Pick your path
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-ghost-dim md:text-base">
            Visitors can enter as regular guests or register as competitive
            players. Cosplayers and sponsors complete a single registration form
            each.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {registrationCategories.map((category, i) => (
            <Reveal key={category.id} delay={0.08 * i}>
              <RegistrationCategoryCard {...category} />
            </Reveal>
          ))}
        </div>
      </PageSection>

      <Footer />
    </main>
  );
}
