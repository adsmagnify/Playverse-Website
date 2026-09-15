"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero, PageRule, PageSection } from "@/components/PageLayout";
import { RegularVisitorForm } from "@/components/RegistrationForms";
import { GlitchTitle } from "@/components/PlayVerseUI";
import { Reveal } from "@/components/motion";
import { registrationHeroImage } from "@/data/content";
import { TransitionLink } from "@/components/TransitionLink";

export default function VisitorRegistrationPage() {
  return (
    <main className="bg-void text-ghost">
      <Header />

      <PageHero
        badge="Visitor registration"
        image={registrationHeroImage}
        description="General entry for spectators and guests exploring the festival."
        heading={
          <>
            <GlitchTitle text="Visitor" />
            <br />
            <span className="text-cyan">access</span>
          </>
        }
      />

      <PageRule />

      <PageSection containerClassName="max-w-2xl">
        <Reveal>
          <RegularVisitorForm />
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
