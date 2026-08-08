"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useScrollControl } from "@/components/SmoothScroll";

/** Reset scroll position on every route change (Lenis-aware). */
export function ScrollToTop() {
  const pathname = usePathname();
  const scroll = useScrollControl();

  useEffect(() => {
    scroll?.scrollToTop(true);
  }, [pathname, scroll]);

  return null;
}
