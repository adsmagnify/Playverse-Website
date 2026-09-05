"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { siteMeta } from "@/data/content";

type CursorContextValue = {
  setLabel: (label: string) => void;
  setHovering: (v: boolean) => void;
  setMode: (m: "default" | "chaos") => void;
};

const CursorContext = createContext<CursorContextValue>({
  setLabel: () => undefined,
  setHovering: () => undefined,
  setMode: () => undefined,
});

export function useCursor() {
  return useContext(CursorContext);
}

export function SportCursor({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [mode, setMode] = useState<"default" | "chaos">("default");
  const [label, setLabel] = useState("");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 420, damping: 28 });
  const sy = useSpring(y, { stiffness: 420, damping: 28 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setReady(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  return (
    <CursorContext.Provider value={{ setLabel, setHovering, setMode }}>
      {children}
      {ready && (
        <>
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[80]"
            style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
            animate={{
              opacity: visible ? 1 : 0,
              scale: hovering ? 1.45 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <div className="relative grid place-items-center">
              <img
                src={siteMeta.favicon}
                alt=""
                width={34}
                height={34}
                draggable={false}
                className={`h-[34px] w-[34px] select-none transition-[filter] duration-300 ${
                  hovering
                    ? "drop-shadow-[0_0_14px_rgba(0,240,255,0.8)]"
                    : "drop-shadow-[0_0_6px_rgba(0,240,255,0.35)]"
                }`}
              />
              <AnimatePresence>
                {hovering && label && (
                  <motion.span
                    initial={{ opacity: 0, y: 3 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute top-full mt-0.5 whitespace-nowrap font-mono text-[8px] uppercase tracking-[0.2em] text-cyan"
                  >
                    {label}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </CursorContext.Provider>
  );
}

export function CursorTarget({
  children,
  label = "SELECT",
  className = "",
  chaos = false,
}: {
  children: ReactNode;
  label?: string;
  className?: string;
  chaos?: boolean;
}) {
  const { setHovering, setLabel, setMode } = useCursor();
  return (
    <div
      className={className}
      onMouseEnter={() => {
        setHovering(true);
        setLabel(label);
        if (chaos) setMode("chaos");
      }}
      onMouseLeave={() => {
        setHovering(false);
        setLabel("");
        setMode("default");
      }}
    >
      {children}
    </div>
  );
}
