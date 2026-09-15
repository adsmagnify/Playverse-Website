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
      const heroWash = root.querySelector<HTMLElement>("[data-scroll-hero-wash]");
      const zonesReveal = root.querySelector<HTMLElement>("[data-zones-reveal]");
      const zonesRevealScrim = root.querySelector<HTMLElement>(
        "[data-zones-reveal-scrim]"
      );
      const zonesSection = root.querySelector<HTMLElement>("[data-scroll-zones]");
      const zoneCards = root.querySelectorAll<HTMLElement>("[data-scroll-zone-card]");
      const statsSection = root.querySelector<HTMLElement>("[data-scroll-stats]");
      const statsLines = root.querySelectorAll<HTMLElement>("[data-scroll-line]");
      const statItems = root.querySelectorAll<HTMLElement>("[data-scroll-stat]");
      const scrollLines = root.querySelectorAll<HTMLElement>("[data-scroll-rule]");
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
        if (zonesReveal) {
          gsap.set(zonesReveal, { opacity: 0, y: mobile ? 20 : 32 });
        }
        if (zonesRevealScrim) {
          gsap.set(zonesRevealScrim, { opacity: 0 });
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
          const journeyTl = gsap.timeline({
            scrollTrigger: {
              trigger: journey,
              start: "top top",
              end: "bottom top",
              scrub: 0.35,
              invalidateOnRefresh: true,
            },
          });

          if (heroContent) {
            journeyTl.fromTo(
              heroContent,
              { y: 0, opacity: 1 },
              { y: -48, opacity: 0, duration: 0.34, ease: "power2.in" },
              0
            );
          }

          journeyTl.fromTo(
            heroBg,
            { yPercent: 0, opacity: 1 },
            { yPercent: -6, duration: 0.5, ease: "none" },
            0
          );

          if (heroMark) {
            journeyTl.fromTo(
              heroMark,
              { y: 0, opacity: 1 },
              { y: -40, opacity: 0, duration: 0.24, ease: "power2.in" },
              0.06
            );
          }

          if (zonesRevealScrim) {
            journeyTl.fromTo(
              zonesRevealScrim,
              { opacity: 0 },
              { opacity: 1, duration: 0.24, ease: "power2.out" },
              0.28
            );
          }

          if (zonesReveal) {
            journeyTl.fromTo(
              zonesReveal,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, duration: 0.28, ease: "power2.out" },
              0.32
            );
            journeyTl.to(
              zonesReveal,
              { opacity: 0, y: -16, duration: 0.18, ease: "power2.in" },
              0.78
            );
          }

          if (zonesRevealScrim) {
            journeyTl.to(
              zonesRevealScrim,
              { opacity: 0, duration: 0.18, ease: "power2.in" },
              0.78
            );
          }

          if (heroGrid) {
            journeyTl.fromTo(
              heroGrid,
              { opacity: 0.25 },
              { opacity: 0, duration: 0.2 },
              0.26
            );
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

          if (zonesRevealScrim) {
            journeyTl.fromTo(
              zonesRevealScrim,
              { opacity: 0 },
              { opacity: 1, duration: 0.28, ease: "power2.out" },
              0.34
            );
          }

          if (zonesReveal) {
            journeyTl.fromTo(
              zonesReveal,
              { opacity: 0, y: 32 },
              { opacity: 1, y: 0, duration: 0.32, ease: "power2.out" },
              0.38
            );
            journeyTl.to(
              zonesReveal,
              { opacity: 0, y: -24, duration: 0.2, ease: "power2.in" },
              0.82
            );
          }

          if (zonesRevealScrim) {
            journeyTl.to(
              zonesRevealScrim,
              { opacity: 0, duration: 0.2, ease: "power2.in" },
              0.82
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

      if (zoneCards.length) {
        gsap.fromTo(
          zoneCards,
          { y: mobile ? 24 : 40, opacity: 0, scale: mobile ? 1 : 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            stagger: mobile ? 0.05 : 0.07,
            duration: mobile ? 0.55 : 0.75,
            ease: "power3.out",
            immediateRender: false,
            scrollTrigger: {
              trigger: zonesSection ?? zoneCards[0],
              start: "top 78%",
              toggleActions: once,
            },
          }
        );
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

    const images = root.querySelectorAll("img");
    let pendingImages = 0;
    const onImageDone = () => {
      pendingImages -= 1;
      if (pendingImages <= 0) refresh();
    };
    images.forEach((img) => {
      if (img.complete) return;
      pendingImages += 1;
      img.addEventListener("load", onImageDone);
      img.addEventListener("error", onImageDone);
    });

    refresh();
    const refreshTimer = window.setTimeout(refresh, 200);
    const refreshTimerLate = window.setTimeout(refresh, 800);

    return () => {
      window.clearTimeout(refreshTimer);
      window.clearTimeout(refreshTimerLate);
      window.removeEventListener("load", refresh);
      window.removeEventListener("resize", refresh);
      images.forEach((img) => {
        img.removeEventListener("load", onImageDone);
        img.removeEventListener("error", onImageDone);
      });
      ctx.revert();
    };
  }, [scope]);

  return null;
}
