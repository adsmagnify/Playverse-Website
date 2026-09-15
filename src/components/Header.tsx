"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, siteMeta } from "@/data/content";
import { CursorTarget } from "@/components/SportCursor";
import { TransitionLink } from "@/components/TransitionLink";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        style={{ viewTransitionName: "site-header" } as CSSProperties}
        className={`fixed inset-x-0 top-0 z-50 overflow-visible transition-colors duration-300 ${
          scrolled || open ? "bg-void/85 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="flex h-14 items-center justify-between px-5 md:h-16 md:px-8">
          <CursorTarget label="HOME" chaos>
            <TransitionLink
              href="/"
              onClick={() => setOpen(false)}
              className="inline-flex shrink-0 translate-y-2 items-center md:translate-y-2.5"
              direction="back"
            >
              <img
                src={siteMeta.logo}
                alt={siteMeta.name}
                width={320}
                height={96}
                className="h-[5rem] w-auto md:h-24"
              />
            </TransitionLink>
          </CursorTarget>

          <nav className="hidden items-center gap-5 lg:flex">
            {navLinks.map((link) => (
              <CursorTarget key={link.href} label="GO">
                <TransitionLink
                  href={link.href}
                  className="font-mono text-[11px] uppercase tracking-[0.2em] text-ghost-dim transition hover:text-cyan"
                  direction={link.href === "/" ? "back" : "forward"}
                >
                  {link.label}
                </TransitionLink>
              </CursorTarget>
            ))}
            <CursorTarget label="DROP">
              <TransitionLink
                href="/registration"
                className="pv-btn pv-btn--solid !px-4 !py-2.5 !text-[11px] !font-bold"
                direction="forward"
              >
                Registration
              </TransitionLink>
            </CursorTarget>
          </nav>

          <CursorTarget label={open ? "CLOSE" : "MENU"} className="lg:hidden">
            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
            >
              <span
                className={`block h-0.5 w-7 bg-cyan transition ${
                  open ? "translate-y-[4px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-7 bg-magenta transition ${
                  open ? "-translate-y-[4px] -rotate-45" : ""
                }`}
              />
            </button>
          </CursorTarget>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-void lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
              <ul className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i }}
                  >
                    <TransitionLink
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-5xl tracking-[0.08em] text-ghost"
                      direction={link.href === "/" ? "back" : "forward"}
                    >
                      {link.label}
                    </TransitionLink>
                  </motion.li>
                ))}
              </ul>
              <div className="space-y-4">
                <TransitionLink
                  href="/registration"
                  onClick={() => setOpen(false)}
                  className="pv-btn pv-btn--solid inline-flex !font-bold"
                  direction="forward"
                >
                  Registration
                </TransitionLink>
                <p className="font-mono text-sm text-cyan">{siteMeta.email}</p>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
