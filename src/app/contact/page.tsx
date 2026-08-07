"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  FloatingOrbs,
  GlitchTitle,
  LiveBadge,
  StadiumLights,
} from "@/components/PlayVerseUI";
import { Reveal } from "@/components/motion";
import { siteMeta } from "@/data/content";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <main className="bg-void text-ghost">
      <Header />

      <section className="relative overflow-hidden px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-36">
        <StadiumLights />
        <FloatingOrbs />
        <div className="field-grid absolute inset-0 opacity-40" />

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <LiveBadge text="PARTY INVITE RECEIVED" />
            <motion.h1
              className="mt-5 font-display text-[clamp(3rem,10vw,7rem)] leading-[0.85] tracking-[0.06em]"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <GlitchTitle text="Queue" />
              <br />
              <span className="text-cyan">with us</span>
            </motion.h1>
            <Reveal className="mt-6 max-w-md text-sm text-ghost-dim md:text-base">
              Drop your title, city, and how unhinged you want the night. We&apos;ll
              reply with a format deck and production plan.
            </Reveal>

            <div className="mt-12 space-y-8">
              <Reveal delay={0.1}>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ghost-dim">
                  Email
                </p>
                <a
                  href={`mailto:${siteMeta.email}`}
                  className="mt-2 block font-display text-2xl tracking-[0.05em] hover:text-cyan"
                >
                  {siteMeta.email}
                </a>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ghost-dim">
                  Phone
                </p>
                <a
                  href={`tel:${siteMeta.phoneHref}`}
                  className="mt-2 block font-display text-2xl tracking-[0.05em] hover:text-magenta"
                >
                  {siteMeta.phone}
                </a>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="relative border border-line bg-void-2/90 p-6 md:p-8">
              <div className="rgb-border absolute inset-0 -z-10 opacity-40" />
              <h2 className="font-display text-3xl tracking-[0.06em]">
                Send the brief
              </h2>
              {sent ? (
                <p className="mt-8 font-mono text-sm text-lime">
                  {">"} PACKET RECEIVED. Lobby opens soon.
                </p>
              ) : (
                <form onSubmit={onSubmit} className="mt-8 space-y-5">
                  {(
                    [
                      ["name", "Name / Org", "text"],
                      ["email", "Email", "email"],
                      ["title", "Game Title", "text"],
                    ] as const
                  ).map(([name, label, type]) => (
                    <label key={name} className="block">
                      <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-ghost-dim">
                        {label}
                      </span>
                      <input
                        required
                        name={name}
                        type={type}
                        className="w-full border border-line bg-void px-4 py-3 outline-none transition focus:border-cyan focus:shadow-[0_0_20px_rgba(0,240,255,0.2)]"
                      />
                    </label>
                  ))}
                  <label className="block">
                    <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-ghost-dim">
                      How crazy?
                    </span>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      placeholder="Arena major / campus LAN / creator showmatch..."
                      className="w-full resize-y border border-line bg-void px-4 py-3 outline-none transition focus:border-magenta focus:shadow-[0_0_20px_rgba(255,43,214,0.2)]"
                    />
                  </label>
                  <button type="submit" className="pv-btn pv-btn--solid">
                    Deploy Brief
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
