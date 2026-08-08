"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isMobilePerf, prefersReducedMotion } from "@/lib/perf";

gsap.registerPlugin(ScrollTrigger);

export function HomeScrollEffects({
  scope,
}: {
  scope: RefObject<HTMLElement | null>;
}) {
  useEffect(() => {
    const root = scope.current;
    if (!root) return;

    if (prefersReducedMotion()) return;

    const mobile = isMobilePerf();
    if (mobile) {
      ScrollTrigger.config({ limitCallbacks: true });
    }

    const ctx = gsap.context(() => {
      const journey = root.querySelector<HTMLElement>("[data-hero-journey]");
      const heroShell = root.querySelector<HTMLElement>("[data-hero-journey-pin]");
      const heroContent = root.querySelector<HTMLElement>(
        "[data-hero-journey-content]"
      );
      const heroMark = root.querySelector<HTMLElement>("[data-journey-mark]");
      const heroBg = root.querySelector<HTMLElement>("[data-scroll-hero-bg]");
      const heroBgAlt = root.querySelector<HTMLElement>("[data-scroll-hero-bg-alt]");
      const heroWash = root.querySelector<HTMLElement>("[data-scroll-hero-wash]");
      const heroReveal = root.querySelector<HTMLElement>("[data-hero-reveal]");
      const heroRevealScrim = root.querySelector<HTMLElement>(
        "[data-hero-reveal-scrim]"
      );
      const statsSection = root.querySelector<HTMLElement>("[data-scroll-stats]");
      const statsLines = root.querySelectorAll<HTMLElement>("[data-scroll-line]");
      const statItems = root.querySelectorAll<HTMLElement>("[data-scroll-stat]");
      const scrollLines = root.querySelectorAll<HTMLElement>("[data-scroll-rule]");
      const disciplineCards = root.querySelectorAll<HTMLElement>(
        "[data-scroll-discipline]"
      );
      const eventsSection = root.querySelector<HTMLElement>("[data-scroll-events]");
      const principleCards = root.querySelectorAll<HTMLElement>(
        "[data-scroll-principle]"
      );
      const faqBlock = root.querySelector<HTMLElement>("[data-scroll-faq]");
      const ctaSection = root.querySelector<HTMLElement>("[data-scroll-cta]");
      const ctaBg = root.querySelector<HTMLElement>("[data-scroll-cta-bg]");

      const once = "play none none none";

      if (journey && heroShell && heroBg && statsSection) {
        const heroGrid = heroShell.querySelector<HTMLElement>(".field-grid");

        if (heroMark) {
          gsap.set(heroMark, { transformOrigin: "left bottom" });
        }
        gsap.set(heroBg, { filter: "brightness(1)", scale: 1, yPercent: 0 });
        if (heroBgAlt) {
          gsap.set(heroBgAlt, { opacity: 0, scale: mobile ? 1 : 1.08 });
        }
        if (heroReveal) {
          gsap.set(heroReveal, { opacity: 0, y: mobile ? 20 : 32 });
        }
        if (heroRevealScrim) {
          gsap.set(heroRevealScrim, { opacity: 0 });
        }
        if (heroContent) {
          gsap.set(heroContent, {
            opacity: 1,
            y: 0,
            filter: mobile ? "none" : "blur(0px)",
          });
        }
        if (heroMark) {
          gsap.set(heroMark, {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: mobile ? "none" : "blur(0px)",
          });
        }

        if (mobile) {
          gsap.set(journey, { minHeight: "155vh" });

          const journeyTl = gsap.timeline({
            scrollTrigger: {
              trigger: journey,
              start: "top top",
              end: "bottom top",
              scrub: 0.25,
              invalidateOnRefresh: true,
            },
          });

          if (heroContent) {
            journeyTl.to(
              heroContent,
              { y: -48, opacity: 0, duration: 0.34, ease: "power2.in" },
              0
            );
          }

          journeyTl.to(
            heroBg,
            { yPercent: -6, duration: 0.5, ease: "none" },
            0
          );

          if (heroMark) {
            journeyTl.to(
              heroMark,
              { y: -40, opacity: 0, duration: 0.24, ease: "power2.in" },
              0.06
            );
          }

          if (heroBgAlt) {
            journeyTl.to(heroBg, { opacity: 0, duration: 0.32, ease: "power2.inOut" }, 0.22);
            journeyTl.to(heroBgAlt, { opacity: 1, duration: 0.34, ease: "power2.out" }, 0.22);
          }

          if (heroRevealScrim) {
            journeyTl.to(
              heroRevealScrim,
              { opacity: 1, duration: 0.24, ease: "power2.out" },
              0.28
            );
          }

          if (heroReveal) {
            journeyTl.to(
              heroReveal,
              { opacity: 1, y: 0, duration: 0.28, ease: "power2.out" },
              0.32
            );
            journeyTl.to(
              heroReveal,
              { opacity: 0, y: -16, duration: 0.18, ease: "power2.in" },
              0.72
            );
          }

          if (heroRevealScrim) {
            journeyTl.to(
              heroRevealScrim,
              { opacity: 0, duration: 0.18, ease: "power2.in" },
              0.72
            );
          }

          if (heroGrid) {
            journeyTl.to(heroGrid, { opacity: 0, duration: 0.2 }, 0.26);
          }
        } else {
          const journeyTl = gsap.timeline({
            scrollTrigger: {
              trigger: journey,
              start: "top top",
              end: "+=95%",
              pin: heroShell,
              scrub: 0.9,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          if (heroContent) {
            journeyTl.fromTo(
              heroContent,
              { y: 0, opacity: 1, filter: "blur(0px)" },
              {
                y: -80,
                opacity: 0,
                filter: "blur(10px)",
                duration: 0.34,
                ease: "power2.in",
              },
              0
            );
          }

          journeyTl.fromTo(
            heroBg,
            { scale: 1, yPercent: 0, filter: "brightness(1)" },
            {
              scale: 1.22,
              yPercent: -12,
              filter: "brightness(0.52)",
              duration: 0.62,
              ease: "none",
            },
            0
          );

          if (heroWash) {
            journeyTl.fromTo(
              heroWash,
              { opacity: 1 },
              { opacity: 0.38, duration: 0.42, ease: "none" },
              0
            );
          }

          if (heroMark) {
            journeyTl.fromTo(
              heroMark,
              { y: 0, scale: 1, opacity: 1, filter: "blur(0px)" },
              {
                y: () => -window.innerHeight * 0.12,
                scale: 1.04,
                opacity: 0,
                filter: "blur(12px)",
                duration: 0.22,
                ease: "power2.in",
              },
              0.08
            );
          }

          if (heroBgAlt) {
            journeyTl.fromTo(
              heroBg,
              { opacity: 1 },
              { opacity: 0, duration: 0.38, ease: "power2.inOut" },
              0.28
            );
            journeyTl.fromTo(
              heroBgAlt,
              { opacity: 0, scale: 1.08 },
              { opacity: 1, scale: 1, duration: 0.42, ease: "power2.out" },
              0.28
            );
          }

          if (heroRevealScrim) {
            journeyTl.fromTo(
              heroRevealScrim,
              { opacity: 0 },
              { opacity: 1, duration: 0.28, ease: "power2.out" },
              0.34
            );
          }

          if (heroReveal) {
            journeyTl.fromTo(
              heroReveal,
              { opacity: 0, y: 32 },
              { opacity: 1, y: 0, duration: 0.32, ease: "power2.out" },
              0.38
            );
            journeyTl.to(
              heroReveal,
              { opacity: 0, y: -24, duration: 0.2, ease: "power2.in" },
              0.8
            );
          }

          if (heroRevealScrim) {
            journeyTl.to(
              heroRevealScrim,
              { opacity: 0, duration: 0.2, ease: "power2.in" },
              0.8
            );
          }

          if (heroGrid) {
            journeyTl.fromTo(
              heroGrid,
              { opacity: 0.25 },
              { opacity: 0, duration: 0.28 },
              0.32
            );
          }
        }
      } else if (heroBg && !mobile) {
        gsap.to(heroBg, {
          yPercent: 18,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: heroBg.closest("section") ?? heroBg,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }

      if (statsLines.length) {
        gsap.fromTo(
          statsLines,
          { yPercent: mobile ? 40 : 110, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            rotateX: mobile ? 0 : -18,
            transformOrigin: "50% 100%",
            stagger: mobile ? 0.06 : 0.1,
            duration: mobile ? 0.55 : 0.9,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: statsSection ?? statsLines[0],
              start: "top 78%",
              toggleActions: once,
            },
          }
        );
      }

      if (statItems.length) {
        gsap.fromTo(
          statItems,
          { y: mobile ? 24 : 48, opacity: 0, scale: mobile ? 1 : 0.94 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: 0.08,
            duration: mobile ? 0.55 : 0.75,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: statsSection ?? statItems[0],
              start: "top 70%",
              toggleActions: once,
            },
          }
        );
      }

      if (!mobile) {
        scrollLines.forEach((line) => {
          gsap.fromTo(
            line,
            { scaleX: 0, opacity: 0.4 },
            {
              scaleX: 1,
              opacity: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: line,
                start: "top 92%",
                end: "top 70%",
                scrub: 0.8,
              },
            }
          );
        });
      }

      if (!mobile) {
        disciplineCards.forEach((card, i) => {
          gsap.from(card, {
            x: i % 2 === 0 ? -70 : 70,
            opacity: 0,
            rotate: i % 2 === 0 ? -2 : 2,
            duration: 0.85,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              toggleActions: once,
            },
          });
        });
      }

      if (eventsSection && !mobile) {
        const ticker = eventsSection.querySelector<HTMLElement>(
          "[data-scroll-ticker]"
        );
        if (ticker) {
          gsap.from(ticker, {
            x: 80,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ticker,
              start: "top 90%",
              toggleActions: once,
            },
          });
        }
      }

      if (principleCards.length) {
        gsap.fromTo(
          principleCards,
          {
            y: mobile ? 24 : 40,
            opacity: 0,
            rotateX: mobile ? 0 : 8,
            transformOrigin: "50% 100%",
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            stagger: mobile ? 0.06 : 0.1,
            duration: mobile ? 0.55 : 0.75,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: principleCards[0].parentElement,
              start: "top 85%",
              toggleActions: once,
            },
          }
        );
      }

      if (faqBlock && !mobile) {
        gsap.from(faqBlock, {
          x: -40,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: faqBlock,
            start: "top 85%",
            toggleActions: once,
          },
        });
      }

      if (ctaSection && ctaBg) {
        if (!mobile) {
          gsap.to(ctaBg, {
            yPercent: 18,
            scale: 1.08,
            ease: "none",
            scrollTrigger: {
              trigger: ctaSection,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7,
            },
          });
        }

        gsap.fromTo(
          ctaSection.querySelectorAll("[data-scroll-cta-copy]"),
          { y: mobile ? 20 : 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.12,
            duration: mobile ? 0.55 : 0.8,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: ctaSection,
              start: "top 75%",
              toggleActions: once,
            },
          }
        );
      }
    }, root);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    window.addEventListener("resize", refresh);
    refresh();
    const refreshTimer = window.setTimeout(refresh, 200);

    return () => {
      window.clearTimeout(refreshTimer);
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      ctx.revert();
    };
  }, [scope]);

  return null;
}
