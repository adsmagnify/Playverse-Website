"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { isMobilePerf } from "@/lib/perf";

export function ScrollProgress() {
  const [enabled, setEnabled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    restDelta: 0.001,
  });

  useEffect(() => {
    setEnabled(!isMobilePerf());
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      className="fixed left-0 top-0 z-[70] h-[3px] origin-left"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #00f0ff, #ff2bd6, #b8ff00)",
      }}
    />
  );
}
