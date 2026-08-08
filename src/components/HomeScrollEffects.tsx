"use client";

import { RefObject, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function HomeScrollEffects({
  scope,
}: {
  scope: RefObject<HTMLElement | null>;
}) {
  useEffect(() => {
    const root = scope.current;
    if (!root) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      const hero = root.querySelector<HTMLElement>("[data-scroll-hero]");
      const heroBg = root.querySelector<HTMLElement>("[data-scroll-hero-bg]");
      const heroWash = root.querySelector<HTMLElement>("[data-scroll-hero-wash]");
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

      if (hero && heroBg) {
        gsap.to(heroBg, {
          yPercent: 22,
          scale: 1.12,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });

        if (heroWash) {
          gsap.to(heroWash, {
            opacity: 0.35,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 0.6,
            },
          });
        }
      }

      if (statsLines.length) {
        gsap.from(statsLines, {
          yPercent: 110,
          opacity: 0,
          rotateX: -18,
          transformOrigin: "50% 100%",
          stagger: 0.1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsSection ?? statsLines[0],
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (statItems.length) {
        gsap.from(statItems, {
          y: 48,
          opacity: 0,
          scale: 0.94,
          stagger: 0.08,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsSection ?? statItems[0],
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });
      }

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
            toggleActions: "play none none reverse",
          },
        });
      });

      if (eventsSection) {
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
              toggleActions: "play none none reverse",
            },
          });
        }
      }

      if (principleCards.length) {
        gsap.from(principleCards, {
          y: 40,
          opacity: 0,
          rotateX: 8,
          transformOrigin: "50% 100%",
          stagger: 0.1,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: principleCards[0].parentElement,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (faqBlock) {
        gsap.from(faqBlock, {
          x: -40,
          opacity: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: {
            trigger: faqBlock,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }

      if (ctaSection && ctaBg) {
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

        gsap.from(ctaSection.querySelectorAll("[data-scroll-cta-copy]"), {
          y: 36,
          opacity: 0,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaSection,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }

      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          if (!statsSection) return;
          ScrollTrigger.create({
            trigger: statsSection,
            start: "top top",
            end: "+=55%",
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          });
        },
      });
    }, root);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    refresh();

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [scope]);

  return null;
}
