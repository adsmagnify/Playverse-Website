"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero, PageRule, PageSection } from "@/components/PageLayout";
import { CosplayerForm } from "@/components/RegistrationForms";
import { GlitchTitle } from "@/components/PlayVerseUI";
import { Reveal } from "@/components/motion";
import { registrationHeroImage } from "@/data/content";
import { TransitionLink } from "@/components/TransitionLink";

export default function CosplayerRegistrationPage() {
  return (
    <main className="bg-void text-ghost">
      <Header />

      <PageHero
        badge="Cosplayer registration"
        image={registrationHeroImage}
        description="One form for your character, costume, and stage details."
        heading={
          <>
            <GlitchTitle text="Cosplay" />
            <br />
            <span className="text-magenta">check-in</span>
          </>
        }
      />

      <PageRule />

      <PageSection containerClassName="max-w-2xl">
        <Reveal>
          <CosplayerForm />
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
