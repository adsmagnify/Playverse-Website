/** Client-side perf helpers — safe to call only after mount. */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function isCoarsePointer(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: coarse)").matches;
}

export function isNarrowViewport(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 767px)").matches;
}

export function prefersSaveData(): boolean {
  if (typeof navigator === "undefined") return false;
  const conn = (
    navigator as Navigator & { connection?: { saveData?: boolean } }
  ).connection;
  return conn?.saveData === true;
}

/** Touch / small screens — use lighter animations and native scroll. */
export function isMobilePerf(): boolean {
  return isCoarsePointer() || isNarrowViewport() || prefersSaveData();
}

export function shouldUseSmoothScroll(): boolean {
  return !prefersReducedMotion() && !isMobilePerf();
}
