"use client";

import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import { CursorTarget } from "@/components/SportCursor";

export function GlitchTitle({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <span data-text={text} className={`glitch ${className}`}>
      {text}
    </span>
  );
}

export function MagneticButton({
  href,
  children,
  variant = "outline",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "outline" | "solid";
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 16 });
  const sy = useSpring(y, { stiffness: 260, damping: 16 });

  return (
    <CursorTarget label="ENTER" chaos>
      <motion.div style={{ x: sx, y: sy }} className={className}>
        <Link
          ref={ref}
          href={href}
          className={`pv-btn ${variant === "solid" ? "pv-btn--solid" : ""}`}
          onMouseMove={(e) => {
            const el = ref.current;
            if (!el) return;
            const r = el.getBoundingClientRect();
            x.set((e.clientX - r.left - r.width / 2) * 0.4);
            y.set((e.clientY - r.top - r.height / 2) * 0.4);
          }}
          onMouseLeave={() => {
            x.set(0);
            y.set(0);
          }}
        >
          {children}
        </Link>
      </motion.div>
    </CursorTarget>
  );
}

export function Marquee({
  items,
  fast,
  reverse,
}: {
  items: string[];
  fast?: boolean;
  reverse?: boolean;
}) {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-line bg-void-2/90 py-3">
      <div
        className={`marquee-track flex gap-8 pr-8 ${fast ? "marquee-track--fast" : ""} ${
          reverse ? "marquee-track--reverse" : ""
        }`}
      >
        {row.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-8">
            <span className="font-display text-3xl tracking-[0.1em] text-ghost md:text-5xl">
              {item}
            </span>
            <span
              className={`h-2.5 w-2.5 ${
                i % 3 === 0 ? "bg-cyan" : i % 3 === 1 ? "bg-magenta" : "bg-lime"
              }`}
              style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function LiveBadge({ text = "SERVER ONLINE" }: { text?: string }) {
  return (
    <div className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-cyan">
      <span className="relative flex h-2.5 w-2.5">
        <span className="live-ping absolute inset-0 rounded-full bg-lime" />
        <span className="relative h-2.5 w-2.5 rounded-full bg-lime" />
      </span>
      {text}
    </div>
  );
}

export function ScoreTicker({
  items,
}: {
  items: { label: string; value: string }[];
}) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {items.map((item, i) => (
        <div
          key={item.label}
          className="min-w-[150px] border border-line bg-void-2/80 px-4 py-3"
          style={{
            boxShadow:
              i % 2 === 0
                ? "inset 0 0 20px rgba(0,240,255,0.08)"
                : "inset 0 0 20px rgba(255,43,214,0.08)",
          }}
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ghost-dim">
            {item.label}
          </p>
          <p className="mt-1 font-display text-2xl tracking-wide text-ghost">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export function StadiumLights() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-10 top-0 h-[45%] w-[50%] bg-[radial-gradient(ellipse_at_center,rgba(0,240,255,0.25),transparent_70%)] blur-2xl" />
      <div className="absolute -right-10 top-20 h-[50%] w-[45%] bg-[radial-gradient(ellipse_at_center,rgba(255,43,214,0.22),transparent_70%)] blur-2xl" />
      <div className="absolute bottom-0 left-1/3 h-[40%] w-[40%] bg-[radial-gradient(ellipse_at_center,rgba(184,255,0,0.12),transparent_70%)] blur-2xl" />
    </div>
  );
}

export function FloatingOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[
        { c: "bg-cyan", s: "h-40 w-40", x: "10%", y: "20%", d: 0 },
        { c: "bg-magenta", s: "h-56 w-56", x: "70%", y: "30%", d: 1.2 },
        { c: "bg-lime", s: "h-32 w-32", x: "40%", y: "65%", d: 0.6 },
      ].map((o) => (
        <motion.div
          key={o.x}
          className={`absolute rounded-full ${o.c} ${o.s} opacity-20 blur-3xl`}
          style={{ left: o.x, top: o.y }}
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{
            duration: 6 + o.d,
            repeat: Infinity,
            ease: "easeInOut",
            delay: o.d,
          }}
        />
      ))}
    </div>
  );
}

export function DisciplineCard({
  title,
  tag,
  copy,
  image,
  index,
}: {
  title: string;
  tag: string;
  copy: string;
  image: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const bg = useMotionTemplate`radial-gradient(420px circle at ${mx}% ${my}%, rgba(0,240,255,0.25), transparent 40%)`;

  return (
    <CursorTarget label="QUEUE" chaos>
      <motion.article
        ref={ref}
        className="group relative min-h-[440px] overflow-hidden border border-line bg-void-2"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.75, delay: index * 0.08 }}
        onMouseMove={(e) => {
          const r = ref.current?.getBoundingClientRect();
          if (!r) return;
          mx.set(((e.clientX - r.left) / r.width) * 100);
          my.set(((e.clientY - r.top) / r.height) * 100);
        }}
        whileHover={{ scale: 1.01 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 group-hover:saturate-150"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-void/10" />
        <motion.div
          className="absolute inset-0 opacity-0 mix-blend-screen transition-opacity group-hover:opacity-100"
          style={{ background: bg }}
        />
        <div className="absolute inset-x-0 top-0 flex justify-between p-5 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan">
          <span>0{index + 1}</span>
          <span className="text-magenta">{tag}</span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <h3 className="font-display text-4xl tracking-[0.06em] md:text-5xl">
            <span className="group-hover:hidden">{title}</span>
            <span className="hidden group-hover:inline">
              <GlitchTitle text={title} />
            </span>
          </h3>
          <p className="mt-3 max-w-sm text-sm text-ghost-dim opacity-90 transition md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
            {copy}
          </p>
        </div>
      </motion.article>
    </CursorTarget>
  );
}

export function ExperienceCard({
  href,
  title,
  category,
  location,
  summary,
  image,
}: {
  href: string;
  title: string;
  category: string;
  location: string;
  summary: string;
  image: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const rotateX = useSpring(0, { stiffness: 200, damping: 16 });
  const rotateY = useSpring(0, { stiffness: 200, damping: 16 });

  return (
    <CursorTarget label="JOIN" chaos>
      <motion.div
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7 }}
        style={{ perspective: 1200 }}
      >
        <Link
          ref={ref}
          href={href}
          className="group block"
          onMouseMove={(e) => {
            const el = ref.current;
            if (!el) return;
            const r = el.getBoundingClientRect();
            rotateX.set(((e.clientY - r.top) / r.height - 0.5) * -10);
            rotateY.set(((e.clientX - r.left) / r.width - 0.5) * 10);
          }}
          onMouseLeave={() => {
            rotateX.set(0);
            rotateY.set(0);
          }}
        >
          <motion.div
            className="relative aspect-[16/11] overflow-hidden border border-line"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110 group-hover:brightness-110"
              style={{ backgroundImage: `url(${image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />
            <div className="absolute inset-0 opacity-0 mix-blend-color-dodge transition group-hover:opacity-40"
              style={{
                background:
                  "linear-gradient(120deg, #00f0ff 0%, transparent 40%, #ff2bd6 100%)",
              }}
            />
            <div className="absolute left-4 top-4 flex gap-2 font-mono text-[10px] uppercase tracking-[0.14em]">
              <span className="border border-cyan/50 bg-void/60 px-2 py-1 text-cyan backdrop-blur-sm">
                {category}
              </span>
              <span className="border border-magenta/50 bg-void/60 px-2 py-1 text-magenta backdrop-blur-sm">
                {location}
              </span>
            </div>
          </motion.div>
          <div className="mt-4">
            <h3 className="font-display text-3xl tracking-[0.05em] transition group-hover:text-cyan md:text-4xl">
              {title}
            </h3>
            <p className="mt-2 max-w-md text-sm text-ghost-dim">{summary}</p>
          </div>
        </Link>
      </motion.div>
    </CursorTarget>
  );
}

export function ParallaxImage({
  src,
  className = "",
  speed = 60,
}: {
  src: string;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        className="h-[125%] w-full bg-cover bg-center"
        style={{ y, backgroundImage: `url(${src})` }}
      />
    </div>
  );
}

export function SplitStat({
  value,
  suffix,
  label,
}: {
  value: string;
  suffix: string;
  label: string;
}) {
  return (
    <motion.div
      className="border-t border-line py-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65 }}
    >
      <p className="font-display text-6xl tracking-wide text-ghost md:text-7xl">
        <CountUpStat value={value} suffix={suffix} />
      </p>
      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-ghost-dim">
        {label}
      </p>
    </motion.div>
  );
}

function CountUpStat({ value, suffix }: { value: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(0);
  const target = Number(value);
  const isFloat = value.includes(".");

  useEffect(() => {
    const el = ref.current;
    if (!el || Number.isNaN(target)) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min(1, (now - start) / 1300);
          const eased = 1 - Math.pow(1 - p, 3);
          const raw = target * eased;
          setN(isFloat ? Math.round(raw * 10) / 10 : Math.round(raw));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, isFloat]);

  return (
    <span ref={ref}>
      {Number.isNaN(target) ? value : n}
      <span className="text-lime">{suffix}</span>
    </span>
  );
}

export function HudCorners({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-3 ${className}`}>
      <span className="absolute left-0 top-0 h-6 w-6 border-l-2 border-t-2 border-cyan" />
      <span className="absolute right-0 top-0 h-6 w-6 border-r-2 border-t-2 border-magenta" />
      <span className="absolute bottom-0 left-0 h-6 w-6 border-b-2 border-l-2 border-lime" />
      <span className="absolute bottom-0 right-0 h-6 w-6 border-b-2 border-r-2 border-cyan" />
    </div>
  );
}
