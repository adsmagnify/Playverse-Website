export const siteMeta = {
  name: "PlayVerse",
  title: "PlayVerse | Esports Events That Hit Different",
  description:
    "PlayVerse is an esports events company — LAN nights, tournament seasons, creator stages, and arena takeovers built for chaos and competition.",
  email: "hello@playverse.gg",
  phone: "+91 98765 43210",
  phoneHref: "+919876543210",
  socials: {
    instagram: "https://instagram.com/",
    youtube: "https://youtube.com/",
    discord: "https://discord.com/",
    twitter: "https://x.com/",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const marqueeItems = [
  "VALORANT",
  "CS2",
  "LEAGUE",
  "BGMI",
  "APEX",
  "DOTA 2",
  "FNCS",
  "ROCKET LEAGUE",
  "FIGHTING GAMES",
  "SPEEDRUNS",
  "CREATOR LANS",
  "BOOTCAMPS",
];

export const stats = [
  { label: "Peak Concurrent", value: "92", suffix: "K" },
  { label: "Events Staged", value: "214", suffix: "+" },
  { label: "Prize Pools", value: "1.8", suffix: "Cr+" },
  { label: "Cities Lit", value: "18", suffix: "" },
];

export const disciplines = [
  {
    id: "tactical",
    title: "Tactical Shooters",
    tag: "VAL · CS2 · Apex",
    copy: "Clutch rounds, stage smoke, and crowd detonations when the bomb goes down.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "moba",
    title: "MOBA Wars",
    tag: "League · Dota",
    copy: "Draft boards, baron calls, and arena lighting synced to every objective.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "battle",
    title: "Battle Royale",
    tag: "BGMI · Fortnite",
    copy: "Zone collapses, drop spots, and jumbotron chaos for mobile + PC crowds.",
    image:
      "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "hybrid",
    title: "Hybrid Stages",
    tag: "Creators · FGC · LAN",
    copy: "Fighting game brackets, speedrun showcases, and influencer LAN takeovers.",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=1600&q=80",
  },
];

export type Experience = {
  slug: string;
  title: string;
  category: string;
  location: string;
  season: string;
  summary: string;
  description: string;
  image: string;
  featured?: boolean;
};

export const experiences: Experience[] = [
  {
    slug: "neon-rift-invitational",
    title: "Neon Rift Invitational",
    category: "VALORANT",
    location: "Mumbai Arena",
    season: "S1 2026",
    summary: "16 teams. One rift. Floodlights, fog, and final-map hysteria.",
    description:
      "Our flagship VALORANT invitational — broadcast-ready stage design, player cam tunnels, and a live crowd calibrated for every clutch. From opening night to grand final, the whole building runs like a boss fight.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1800&q=80",
    featured: true,
  },
  {
    slug: "circuit-break-lan",
    title: "Circuit Break LAN",
    category: "Multi-title LAN",
    location: "Bengaluru",
    season: "Quarterly",
    summary: "48-hour LAN fever dream — brackets, bootcamps, and midnight queues.",
    description:
      "A roaming multi-title LAN with open brackets, creator showmatches, and production that feels like a music festival crashed into a server room.",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1800&q=80",
    featured: true,
  },
  {
    slug: "zone-wars-india",
    title: "Zone Wars India",
    category: "BGMI",
    location: "Delhi NCR",
    season: "2026 Tour",
    summary: "Mobile royale on a stadium screen — drops, zones, and deafening casters.",
    description:
      "A BGMI touring circuit built for phone-in-hand fans and jumbotron drama. Squad intros, hype packages, and stage craft made for mobile esports energy.",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1800&q=80",
    featured: true,
  },
  {
    slug: "pixel-brawl-cup",
    title: "Pixel Brawl Cup",
    category: "Fighting Games",
    location: "Hyderabad",
    season: "Summer",
    summary: "FGC sacred ground — pools to top 8 under neon and vinyl seats.",
    description:
      "A fighting game cup with classic bracket energy, player cams on every punish, and a venue layout that keeps the crowd inches from the setup.",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=1800&q=80",
    featured: true,
  },
  {
    slug: "creator-overclock",
    title: "Creator Overclock",
    category: "Creator Event",
    location: "Pan-India",
    season: "Drop weekends",
    summary: "Influencer LANs, challenge shows, and content that breaks timelines.",
    description:
      "Custom creator events engineered for clips — challenge formats, surprise guests, and production designed to go viral before the VOD hits.",
    image:
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=1800&q=80",
  },
  {
    slug: "bootcamp-forge",
    title: "Bootcamp Forge",
    category: "Team Bootcamp",
    location: "Private facilities",
    season: "On demand",
    summary: "Pro house takeovers with scrim stages and content capture built-in.",
    description:
      "Full bootcamp production for orgs — practice rooms, content corners, and logistical ops so teams can lock in before majors.",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1800&q=80",
  },
];

export const principlesIntro =
  "Every PlayVerse event runs on the same playbook — loud on purpose, tight on ops, and built so players, crowds, and cameras all catch the same moment.";

export const principles = [
  {
    title: "Chaos, directed",
    copy: "We don’t calm the crowd — we design the spike. Sound, lights, and pacing timed to the round.",
  },
  {
    title: "Stage is a weapon",
    copy: "Every tunnel, LED wall, and caster desk is part of the meta. The venue plays too.",
  },
  {
    title: "Players are bosses",
    copy: "From player cams to walkouts, competitors get main-character treatment — always.",
  },
  {
    title: "Clips or it didn’t happen",
    copy: "Formats built for moments that travel: highlight packages, creator hooks, and shareable insanity.",
  },
];

export const faqs = [
  {
    q: "What kind of events does PlayVerse run?",
    a: "LAN tournaments, arena majors, campus circuits, creator showmatches, bootcamps, and brand-powered esports seasons across PC and mobile titles.",
  },
  {
    q: "Can you produce for our title / org?",
    a: "Yes. We build formats around VALORANT, CS2, BGMI, League, FGC, and custom multi-game LANs — plus full production crews.",
  },
  {
    q: "Do you handle broadcast and stage?",
    a: "End-to-end: stage design, LED, audio, OBS/broadcast, casters, talent booking, and on-site ops.",
  },
  {
    q: "Campus or city-level — what’s the minimum?",
    a: "From 64-player campus cups to multi-day arena events. Tell us the headcount and vibe; we’ll spec the chaos.",
  },
  {
    q: "How do we book a season?",
    a: "Hit contact with your title, city, and budget range. We’ll send a format deck and production timeline.",
  },
];

export const heroImage =
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=2400&q=80";

export const aboutHeroImage =
  "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=2400&q=80";

export const eventsHeroImage =
  "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=2400&q=80";

export const contactHeroImage =
  "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=2400&q=80";

export const heroScrollBeat = {
  image: "/BGMI_image.png",
  eyebrow: "Next drop",
  title: "Zone Wars India",
  category: "BGMI · Delhi NCR",
  copy: "Mobile royale on a stadium screen — drops, zones, and deafening casters.",
  href: "/events/zone-wars-india",
};

export const tickerMatches = [
  { label: "LIVE", value: "NRI · Map 3" },
  { label: "NEXT", value: "Circuit Break" },
  { label: "DROP", value: "Zone Wars DEL" },
  { label: "FGC", value: "Pixel Brawl" },
  { label: "LAN", value: "48H Queue" },
];
