"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/data/content";

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mt-8">
      {faqs.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-t border-line py-5">
            <button
              className="flex w-full items-start justify-between gap-6 text-left"
              onClick={() => setOpen(isOpen ? null : i)}
            >
              <span className="font-display text-2xl tracking-[0.05em] md:text-3xl">
                {item.q}
              </span>
              <span className="mt-1 font-mono text-cyan">{isOpen ? "[-]" : "[+]"}</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.p
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden text-sm leading-relaxed text-ghost-dim"
                >
                  <span className="mt-4 block max-w-2xl">{item.a}</span>
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
