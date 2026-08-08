"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ExperienceCard,
  GlitchTitle,
  LiveBadge,
  Marquee,
} from "@/components/PlayVerseUI";
import { Reveal } from "@/components/motion";
import { experiences, marqueeItems } from "@/data/content";

export default function EventsPage() {
  return (
    <main className="bg-void text-ghost">
      <Header />

      <section className="px-5 pb-8 pt-28 md:px-8 md:pt-36">
        <div className="mx-auto max-w-7xl">
          <LiveBadge text="Event database unlocked" />
          <motion.h1
            className="mt-5 font-display text-[clamp(3.2rem,11vw,8rem)] leading-[0.85] tracking-[0.06em]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
          >
            <GlitchTitle text="Events" />
          </motion.h1>
          <Reveal className="mt-4 max-w-lg text-sm text-ghost-dim md:text-base">
            Tournament seasons, LAN weekends, creator raids — pick your poison
            and enter the lobby.
          </Reveal>
        </div>
      </section>

      <Marquee items={marqueeItems} fast />

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
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
      </section>

      <Footer />
    </main>
  );
}
