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
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 420, damping: 28 });
  const sy = useSpring(y, { stiffness: 420, damping: 28 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setReady(true);
    let id = 0;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      id += 1;
      const point = { x: e.clientX, y: e.clientY, id };
      setTrail((t) => [...t.slice(-10), point]);
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
          {trail.map((p, i) => (
            <motion.div
              key={p.id}
              className="pointer-events-none fixed z-[78] h-1.5 w-1.5 rounded-full"
              style={{
                left: p.x,
                top: p.y,
                background:
                  i % 3 === 0 ? "#00f0ff" : i % 3 === 1 ? "#ff2bd6" : "#b8ff00",
                opacity: (i + 1) / trail.length / 2,
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
          <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[80]"
            style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
            animate={{
              opacity: visible ? 1 : 0,
              scale: hovering ? 1.7 : 1,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 18 }}
          >
            <div
              className={`relative grid place-items-center border ${
                hovering
                  ? "h-16 w-16 border-cyan bg-magenta/20 shadow-[0_0_30px_rgba(0,240,255,0.5)]"
                  : "h-4 w-4 border-lime bg-cyan/80"
              }`}
              style={{
                clipPath: hovering
                  ? "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
                  : undefined,
                borderRadius: hovering ? 0 : 999,
              }}
            >
              <AnimatePresence>
                {hovering && label && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.2em] text-ghost"
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
