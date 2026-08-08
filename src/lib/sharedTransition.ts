export function eventImageTransitionName(slug: string) {
  return `pv-event-image-${slug}`;
}

export function eventTitleTransitionName(slug: string) {
  return `pv-event-title-${slug}`;
}

export function isEventDetailPath(pathname: string) {
  return /^\/events\/[^/]+$/.test(pathname);
}

/** Routes where card → detail shared-element morph should run (skip GSAP wipe). */
export function usesSharedElementTransition(from: string, to: string) {
  const fromDetail = isEventDetailPath(from);
  const toDetail = isEventDetailPath(to);
  const listSources = ["/", "/events"];

  if (toDetail && listSources.includes(from)) return true;
  if (fromDetail && listSources.includes(to)) return true;
  if (fromDetail && toDetail) return true;
  return false;
}

export function isSharedTransitionHref(href: string) {
  return isEventDetailPath(href);
}
