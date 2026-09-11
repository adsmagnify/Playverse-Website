"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageHero, PageRule, PageSection } from "@/components/PageLayout";
import { RegularVisitorForm } from "@/components/RegistrationForms";
import { GlitchTitle, MagneticButton } from "@/components/PlayVerseUI";
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
        description="General entry for spectators, or competitive player registration for BGMI, Valorant, and Free Fire."
        heading={
          <>
            <GlitchTitle text="Visitor" />
            <br />
            <span className="text-cyan">access</span>
          </>
        }
      />

      <PageRule />

      <PageSection containerClassName="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <RegularVisitorForm />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative flex h-full flex-col border border-line bg-void-2/80 p-8">
            <div className="rgb-border absolute inset-0 -z-10 opacity-40" />
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-magenta">
              Competitive
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-[0.06em] md:text-5xl">
              Players
            </h2>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ghost-dim md:text-base">
              Register for tournament brackets across BGMI, Valorant, and Free
              Fire. Select your title, submit player details, and complete
              payment to lock your slot.
            </p>
            <ul className="mt-6 space-y-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ghost-dim">
              <li className="text-cyan">BGMI</li>
              <li className="text-magenta">Valorant</li>
              <li className="text-lime">Free Fire</li>
            </ul>
            <div className="mt-8">
              <MagneticButton href="/registration/players" variant="solid">
                Register as Player
              </MagneticButton>
            </div>
            <TransitionLink
              href="/registration"
              className="mt-4 inline-block font-mono text-[11px] uppercase tracking-[0.16em] text-ghost-dim hover:text-cyan"
              direction="back"
            >
              ← All categories
            </TransitionLink>
          </div>
        </Reveal>
      </PageSection>

      <Footer />
    </main>
  );
}
