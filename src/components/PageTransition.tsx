"use client";

import {
  ReactNode,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useScrollControl } from "@/components/SmoothScroll";
import { usesSharedElementTransition } from "@/lib/sharedTransition";
import { isMobilePerf } from "@/lib/perf";

const ease = "power3.inOut";

// URL segments whose displayed transition label should differ from the slug.
const routeLabelOverrides: Record<string, string> = {
  events: "ZONES",
};

function routeLabel(pathname: string) {
  if (pathname === "/") return "HOME";
  const segment = pathname.split("/").filter(Boolean).pop();
  if (!segment) return "LOAD";
  return (
    routeLabelOverrides[segment] ?? segment.replace(/-/g, " ").toUpperCase()
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const scroll = useScrollControl();
  const overlayRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const glitchRef = useRef<HTMLSpanElement>(null);
  const barsRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const isFirst = useRef(true);
  const prevPath = useRef(pathname);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const [transitioning, setTransitioning] = useState(false);

  const runTransition = useCallback(() => {
    const overlay = overlayRef.current;
    const bars = barsRef.current?.querySelectorAll<HTMLElement>("[data-bar]");
    const label = labelRef.current;
    const glitch = glitchRef.current;
    const content = contentRef.current;

    if (!overlay || !bars?.length || !label) {
      scroll?.scrollToTop(true);
      return;
    }

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced) {
      scroll?.scrollToTop(true);
      return;
    }

    const mobile = isMobilePerf();

    timelineRef.current?.kill();

    label.textContent = routeLabel(pathname);
    setTransitioning(true);
    scroll?.scrollToTop(true);

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(overlay, { opacity: 0, pointerEvents: "none" });
        setTransitioning(false);
      },
    });

    timelineRef.current = tl;

    if (mobile) {
      tl.to(content, { opacity: 0, duration: 0.12, ease: "power2.out" }, 0)
        .to(content, { opacity: 1, duration: 0.18, ease: "power2.out" }, 0.14);
      return () => {
        tl.kill();
      };
    }

    gsap.set(overlay, { opacity: 1, pointerEvents: "auto" });
    gsap.set(bars, {
      scaleX: 0,
      transformOrigin: "left center",
      skewX: -4,
    });
    gsap.set(label, { opacity: 0, y: 24, skewX: -8 });
    if (glitch) gsap.set(glitch, { opacity: 0 });

    tl.to(content, { opacity: 0.35, duration: 0.25, ease }, 0)
      .to(
        bars,
        {
          scaleX: 1.08,
          duration: 0.55,
          stagger: 0.08,
          ease,
        },
        0
      )
      .to(label, { opacity: 1, y: 0, duration: 0.35, ease }, 0.15)
      .to(
        glitch,
        {
          opacity: 1,
          duration: 0.08,
          repeat: 5,
          yoyo: true,
          ease: "steps(1)",
        },
        0.2
      )
      .to(
        bars,
        {
          scaleX: 0,
          transformOrigin: "right center",
          duration: 0.5,
          stagger: 0.06,
          ease,
        },
        "+=0.12"
      )
      .to(label, { opacity: 0, y: -16, duration: 0.25, ease }, "-=0.45")
      .to(content, { opacity: 1, duration: 0.35, ease }, "-=0.25");

    return () => {
      tl.kill();
    };
  }, [pathname, scroll]);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      prevPath.current = pathname;
      return;
    }

    if (prevPath.current === pathname) return;

    const from = prevPath.current;
    prevPath.current = pathname;

    if (usesSharedElementTransition(from, pathname)) {
      scroll?.scrollToTop(true);
      return;
    }

    return runTransition();
  }, [pathname, runTransition, scroll]);

  return (
    <>
      <div
        ref={overlayRef}
        className="pv-transition-overlay pointer-events-none fixed inset-0 z-[90] overflow-hidden opacity-0"
        aria-hidden={!transitioning}
      >
        <div ref={barsRef} className="absolute inset-0 overflow-hidden">
          <div className="pv-transition-bars">
            <div data-bar className="pv-transition-bar pv-transition-bar--cyan h-[34%]" />
            <div data-bar className="pv-transition-bar pv-transition-bar--magenta h-[33%]" />
            <div data-bar className="pv-transition-bar pv-transition-bar--lime h-[33%]" />
          </div>
        </div>

        <div className="absolute inset-0 grid place-items-center">
          <div className="relative text-center">
            <span
              ref={glitchRef}
              className="pv-transition-glitch pointer-events-none absolute inset-0 font-display text-5xl tracking-[0.2em] opacity-0 md:text-7xl"
              aria-hidden
            >
              {routeLabel(pathname)}
            </span>
            <span
              ref={labelRef}
              className="pv-transition-label relative font-display text-5xl tracking-[0.2em] md:text-7xl"
            >
              LOAD
            </span>
          </div>
        </div>
      </div>

      <div ref={contentRef} className="min-h-full md:will-change-[opacity]">
        {children}
      </div>
    </>
  );
}
