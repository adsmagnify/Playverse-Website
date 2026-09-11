"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero, PageRule, PageSection } from "@/components/PageLayout";
import { SponsorForm } from "@/components/RegistrationForms";
import { GlitchTitle } from "@/components/PlayVerseUI";
import { Reveal } from "@/components/motion";
import { registrationHeroImage } from "@/data/content";
import { TransitionLink } from "@/components/TransitionLink";

export default function SponsorRegistrationPage() {
  return (
    <main className="bg-void text-ghost">
      <Header />

      <PageHero
        badge="Sponsor registration"
        image={registrationHeroImage}
        description="Share your brand details and sponsorship goals in one form."
        heading={
          <>
            <GlitchTitle text="Sponsor" />
            <br />
            <span className="text-lime">partner</span>
          </>
        }
      />

      <PageRule />

      <PageSection containerClassName="max-w-2xl">
        <Reveal>
          <SponsorForm />
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
