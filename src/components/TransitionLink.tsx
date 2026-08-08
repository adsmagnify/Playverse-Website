"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ComponentProps,
  MouseEvent,
  ReactNode,
  forwardRef,
} from "react";
import { useScrollControl } from "@/components/SmoothScroll";
import { isEventDetailPath, isSharedTransitionHref } from "@/lib/sharedTransition";

type Props = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  children: ReactNode;
  direction?: "forward" | "back";
};

function isSharedNav(href: string, currentPath: string) {
  return (
    isSharedTransitionHref(href) ||
    (isEventDetailPath(currentPath) && (href === "/events" || href === "/"))
  );
}

/** Event cards morph via View Transitions API; other links use the GSAP wipe. */
export const TransitionLink = forwardRef<HTMLAnchorElement, Props>(
  function TransitionLink(
    { href, children, direction = "forward", onClick, ...rest },
    ref
  ) {
    const router = useRouter();
    const scroll = useScrollControl();

    function handleClick(e: MouseEvent<HTMLAnchorElement>) {
      onClick?.(e);
      if (e.defaultPrevented) return;

      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      const samePath = href === window.location.pathname;
      const shared = isSharedNav(href, window.location.pathname);

      if (reduced || samePath) return;

      if (shared) {
        e.preventDefault();

        const navigate = () => {
          scroll?.scrollToTop(true);
          router.push(href);
        };

        if ("startViewTransition" in document) {
          document.startViewTransition(navigate).finished.catch(() => undefined);
        } else {
          navigate();
        }
        return;
      }
    }

    return (
      <Link
        ref={ref}
        href={href}
        onClick={handleClick}
        data-transition={direction}
        data-shared-transition={
          isSharedTransitionHref(href) ? "true" : undefined
        }
        scroll={false}
        {...rest}
      >
        {children}
      </Link>
    );
  }
);
