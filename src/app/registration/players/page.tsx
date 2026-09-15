"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero, PageRule, PageSection } from "@/components/PageLayout";
import { PlayerRegistrationForm } from "@/components/RegistrationForms";
import { GlitchTitle } from "@/components/PlayVerseUI";
import { Reveal } from "@/components/motion";
import { registrationHeroImage } from "@/data/content";
import { TransitionLink } from "@/components/TransitionLink";

export default function PlayerRegistrationPage() {
  return (
    <main className="bg-void text-ghost">
      <Header />

      <PageHero
        badge="Player registration"
        image={registrationHeroImage}
        description="Choose your game, submit your squad details, and pay to confirm your bracket slot."
        heading={
          <>
            <GlitchTitle text="Player" />
            <br />
            <span className="text-magenta">signup</span>
          </>
        }
      />

      <PageRule />

      <PageSection containerClassName="max-w-4xl">
        <Reveal>
          <PlayerRegistrationForm />
        </Reveal>
        <TransitionLink
          href="/registration"
          className="mt-10 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-ghost-dim hover:text-cyan"
          direction="back"
        >
          ← All categories
        </TransitionLink>
      </PageSection>

      <Footer />
    </main>
  );
}
