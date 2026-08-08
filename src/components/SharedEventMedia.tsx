"use client";

import type { CSSProperties, ReactNode } from "react";
import {
  eventImageTransitionName,
  eventTitleTransitionName,
} from "@/lib/sharedTransition";

export function SharedEventImage({
  slug,
  src,
  overlayClassName = "",
}: {
  slug: string;
  src: string;
  overlayClassName?: string;
}) {
  const style: CSSProperties = {
    viewTransitionName: eventImageTransitionName(slug),
    backgroundImage: `url(${src})`,
  };

  return (
    <>
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={style}
        aria-hidden
      />
      {overlayClassName ? (
        <div
          className={`pointer-events-none absolute inset-0 z-[1] ${overlayClassName}`}
          aria-hidden
        />
      ) : null}
    </>
  );
}

export function SharedEventTitle({
  slug,
  children,
  className = "",
  as: Tag = "h3",
}: {
  slug: string;
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  const style: CSSProperties = {
    viewTransitionName: eventTitleTransitionName(slug),
  };

  return (
    <Tag className={className} style={style}>
      {children}
    </Tag>
  );
}
