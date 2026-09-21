export const siteMeta = {
  name: "Asaiverse",
  title: "Asaiverse | Gaming, Esports & Digital Culture Festival",
  description:
    "Asaiverse is a premier gaming, esports, technology, and digital culture festival by ASAI — where competition, creativity, technology, and entertainment converge.",
  email: "hello@asaiverse.com",
  logo: "/asaiverse-logo.svg",
  favicon: "/asaiverse-favicon.svg",
  tagline: "esports | creators | cosplay",
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
  { label: "Zones", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const aboutContent = {
  heroDescription:
    "A premier gaming, esports, technology, and digital culture festival created by ASAI.",
  intro:
    "Asaiverse is a premier gaming, esports, technology, and digital culture festival designed to bring together gamers, creators, innovators, brands, and fans in one immersive experience. Created by ASAI, Asaiverse serves as a dynamic platform where competition, creativity, technology, and entertainment converge to celebrate the future of interactive culture.",
  body:
    "More than just an event, Asaiverse is a community-driven ecosystem that showcases the evolving world of gaming and digital experiences. From high-stakes esports tournaments and creator meet-and-greets to cutting-edge technology exhibitions, cosplay showcases, indie game demonstrations, live performances, and fan engagement activities, Asaiverse offers something for every enthusiast.",
  closing:
    "Built around the belief that gaming is one of the most influential cultural forces of the modern era, Asaiverse aims to connect passionate communities, empower emerging talent, and provide brands with meaningful opportunities to engage with the next generation of consumers. With dedicated zones for esports, creators, technology, cosplay, indie gaming, food, and live entertainment, Asaiverse transforms a traditional event into a vibrant festival where competition meets innovation and communities come together to create unforgettable experiences.",
  vision:
    "To become India's most iconic gaming and digital culture festival, connecting millions through gaming, technology, creativity, and entertainment.",
  mission:
    "To create a world-class platform that empowers gamers, creators, developers, brands, and communities while driving the growth of the gaming and digital entertainment ecosystem.",
};

export const marqueeItems = [
  "BGMI",
  "VALORANT",
  "FREE FIRE",
  "COSPLAY",
  "CREATORS",
  "TECH EXPO",
  "INDIE GAMES",
  "FOOD FEST",
  "LIVE CONCERT",
  "FAN HUNT",
  "MAIN STAGE",
  "MERCH MARKET",
];

export const stats = [
  { label: "Festival Zones", value: "9", suffix: "" },
  { label: "Integrated Experiences", value: "6", suffix: "" },
  { label: "Esports Titles", value: "3", suffix: "" },
  { label: "Main Stage", value: "1", suffix: "" },
];

export const disciplines = [
  {
    id: "esports",
    title: "Esports Zones",
    tag: "BGMI · Valorant · Free Fire",
    copy: "Professional tournaments, community competitions, live broadcasts, and fan challenges across India's biggest mobile and PC titles.",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "culture",
    title: "Creator & Cosplay",
    tag: "Creators · Cosplay",
    copy: "Meet influencers, showcase costumes, join competitions, and connect with the communities that shape gaming culture.",
    image: "/cosplay-zone.png",
  },
  {
    id: "tech",
    title: "Tech & Indie",
    tag: "Hardware · Startups · Indie",
    copy: "Explore gaming hardware, AI and immersive tech, startup innovations, and unreleased indie titles from emerging studios.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "entertainment",
    title: "Food & Live Entertainment",
    tag: "Food Fest · Concerts",
    copy: "Multi-cuisine food stalls, community seating, rock performances, celebrity appearances, and grand closing ceremonies.",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1600&q=80",
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
  attractions?: string[];
};

export const experiences: Experience[] = [
  {
    slug: "bgmi-zone",
    title: "BGMI Zone",
    category: "Esports",
    location: "Festival Arena",
    season: "Asaiverse Festival",
    summary:
      "India's most popular mobile esports battleground — tournaments, fan challenges, and live broadcasts.",
    description:
      "The BGMI Zone serves as the battleground for one of India's most popular mobile esports titles. Featuring professional tournaments, community competitions, fan challenges, and live match broadcasts, this zone attracts both competitive players and spectators. Attendees can witness high-level gameplay, interact with teams, and participate in open tournaments.",
    image: "/BGMI_image.png",
    featured: true,
    attractions: [
      "Professional esports tournaments",
      "Community competitions",
      "Team meet-and-greets",
      "Live commentary and analysis",
      "Fan challenges and giveaways",
    ],
  },
  {
    slug: "valorant-zone",
    title: "Valorant Zone",
    category: "Esports",
    location: "Tactical Arena",
    season: "Asaiverse Festival",
    summary:
      "Tactical shooter arena with competitive matches, creator showdowns, and immersive spectator experiences.",
    description:
      "Dedicated to tactical shooter enthusiasts, the Valorant Zone hosts competitive matches, creator showdowns, and community tournaments. Designed to replicate the excitement of a professional esports arena, the zone offers an immersive experience for players and fans alike.",
    image:
    "/valorant_image.png",  
    // "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1800&q=80",
    featured: true,
    attractions: [
      "Competitive Valorant tournaments",
      "Creator and influencer matches",
      "Team showcases",
      "Tactical gaming workshops",
      "Live spectator arena",
    ],
  },
  {
    slug: "free-fire-zone",
    title: "Free Fire Zone",
    category: "Esports",
    location: "Mobile Arena",
    season: "Asaiverse Festival",
    summary:
      "Fast-paced battle royale tournaments, skill challenges, and community meetups.",
    description:
      "The Free Fire Zone celebrates one of the world's most widely played mobile battle royale games. Players can compete in fast-paced tournaments, participate in skill challenges, and connect with fellow members of the Free Fire community.",
    image: "/free-fire-zone.jpg",
    featured: true,
    attractions: [
      "Battle Royale tournaments",
      "Open participation competitions",
      "Skill-based challenges",
      "Community meetups",
      "Merchandise and rewards",
    ],
  },
  {
    slug: "tech-exhibition-zone",
    title: "Tech Exhibition Zone",
    category: "Technology",
    location: "Innovation Pavilion",
    season: "Asaiverse Festival",
    summary:
      "Gaming hardware, AI, immersive tech, and startup innovations shaping digital experiences.",
    description:
      "The Tech Exhibition Zone showcases innovations shaping the future of gaming and digital experiences. Technology brands, startups, hardware manufacturers, and software companies present their latest products, solutions, and innovations.",
    image:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1800&q=80",
    featured: true,
    attractions: [
      "Gaming hardware displays",
      "Emerging technology showcases",
      "AI and immersive technology experiences",
      "Startup innovation pavilion",
      "Product demonstrations",
    ],
  },
  {
    slug: "cosplay-zone",
    title: "Cosplay Zone",
    category: "Cosplay",
    location: "Creator Stage",
    season: "Asaiverse Festival",
    summary:
      "Costume competitions, character showcases, judging panels, and fan photo sessions.",
    description:
      "The Cosplay Zone celebrates creativity and fandom culture. Cosplayers, artists, and enthusiasts can showcase their costumes, participate in competitions, and engage with fans through photo sessions and stage appearances.",
    image: "/cosplay-zone.png",
    featured: true,
    attractions: [
      "Cosplay competitions",
      "Character showcases",
      "Professional judging panels",
      "Fan interaction sessions",
      "Photography opportunities",
    ],
  },
  {
    slug: "creators-zone",
    title: "Creators Zone",
    category: "Creators",
    location: "Community Hub",
    season: "Asaiverse Festival",
    summary:
      "Meet gaming influencers, streamers, and creators through live sessions and fan activities.",
    description:
      "The Creators Zone brings together gaming influencers, streamers, content creators, and their communities. Fans can meet their favorite creators, participate in interactive activities, and enjoy exclusive content experiences.",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1800&q=80",
    featured: true,
    attractions: [
      "Creator meet-and-greets",
      "Fan interaction sessions",
      "Live content creation",
      "Creator challenges",
      "Community activities",
    ],
  },
  {
    slug: "food-festival-zone",
    title: "Food Festival Zone",
    category: "Food & Culture",
    location: "Social Hub",
    season: "Asaiverse Festival",
    summary:
      "Multi-cuisine stalls, regional specialties, and a social relaxation hub within the festival.",
    description:
      "The Food Festival Zone offers a diverse culinary experience featuring regional specialties, international cuisine, quick-service outlets, and experiential food stalls. It serves as a social and relaxation hub within the festival.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1800&q=80",
    attractions: [
      "Multi-cuisine food stalls",
      "Regional food experiences",
      "Beverage stations",
      "Food competitions",
      "Community seating areas",
    ],
  },
  {
    slug: "rock-concert-zone",
    title: "Rock Concert & Entertainment Zone",
    category: "Entertainment",
    location: "Main Stage",
    season: "Asaiverse Festival",
    summary:
      "Live rock performances, music concerts, celebrity appearances, and closing ceremonies.",
    description:
      "Asaiverse extends beyond gaming with live entertainment designed to energize audiences and create memorable experiences. The entertainment zone hosts musical performances, cultural acts, celebrity appearances, and evening headline shows.",
    image:
      // "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1800&q=80",
      "rock-concert.jpg",
    attractions: [
      "Live rock performances",
      "Music concerts",
      "Celebrity appearances",
      "Cultural performances",
      "Grand closing ceremonies",
    ],
  },
  {
    slug: "indie-gaming-zone",
    title: "Indie Gaming Zone",
    category: "Indie Games",
    location: "Developer Pavilion",
    season: "Asaiverse Festival",
    summary:
      "Unreleased indie titles, developer interactions, and the next generation of gaming talent.",
    description:
      "The Indie Gaming Zone provides a platform for independent developers and emerging studios to showcase innovative games and creative projects. Visitors can experience unreleased titles, interact directly with developers, and discover the next generation of gaming talent.",
    image:
      "https://images.unsplash.com/photo-1511882150382-421056c89033?auto=format&fit=crop&w=1800&q=80",
    attractions: [
      "Indie game showcases",
      "Playtesting opportunities",
      "Developer interactions",
      "Startup gaming studios",
      "Innovation awards",
    ],
  },
];

export const integratedExperiences = [
  {
    title: "Fan Hunt Program",
    copy: "Interactive challenges and missions encouraging attendees to explore every zone while earning rewards, collectibles, and exclusive experiences.",
  },
  {
    title: "Creator Challenges",
    copy: "Competitive and entertainment-focused activities involving creators, professional players, and community participants.",
  },
  {
    title: "Community Tournaments",
    copy: "Open-access competitions allowing visitors to compete and win prizes throughout the event.",
  },
  {
    title: "Brand Experience Activations",
    copy: "Interactive booths and experiential marketing installations from leading gaming, technology, lifestyle, and consumer brands.",
  },
  {
    title: "Merchandise Marketplace",
    copy: "Official merchandise, gaming collectibles, creator merchandise, cosplay accessories, and exclusive Asaiverse products.",
  },
  {
    title: "Main Stage Arena",
    copy: "The central hub for major announcements, award ceremonies, esports finals, creator appearances, and entertainment performances.",
  },
];

export const principlesIntro =
  "Together, these zones and experiences transform Asaiverse into a complete gaming and digital culture festival where competition, creativity, technology, and entertainment exist within a single connected universe.";

export const principles = [
  {
    title: "Our Vision",
    copy: aboutContent.vision,
  },
  {
    title: "Our Mission",
    copy: aboutContent.mission,
  },
  {
    title: "Community First",
    copy: "A community-driven ecosystem that connects passionate gamers, creators, innovators, brands, and fans in one immersive festival experience.",
  },
  {
    title: "One Connected Universe",
    copy: "Dedicated zones for esports, creators, technology, cosplay, indie gaming, food, and live entertainment — all woven into a single festival world.",
  },
];

export const faqs = [
  {
    q: "What is Asaiverse?",
    a: "Asaiverse is a premier gaming, esports, technology, and digital culture festival created by ASAI. It brings together competitive gaming, creator culture, technology exhibitions, cosplay, indie games, food, and live entertainment in one connected experience.",
  },
  {
    q: "What zones can I explore?",
    a: "Nine dedicated zones: BGMI, Valorant, Free Fire, Tech Exhibition, Cosplay, Creators, Food Festival, Rock Concert & Entertainment, and Indie Gaming — plus festival-wide experiences like Fan Hunt, Main Stage, and the Merchandise Marketplace.",
  },
  {
    q: "How do I register as a player?",
    a: "Head to Registration and choose Player. Select BGMI, Valorant, or Free Fire, submit your squad details, and complete payment to confirm your slot.",
  },
  {
    q: "Can cosplayers and sponsors register online?",
    a: "Cosplayers register directly from the Registration page. Brands and sponsors can explore partnership tiers from the Sponsor section on the homepage.",
  },
  {
    q: "Who created Asaiverse?",
    a: "Asaiverse is created by ASAI as a world-class platform to empower gamers, creators, developers, brands, and communities across India's gaming and digital entertainment ecosystem.",
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

export const registrationHeroImage =
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=2400&q=80";

export const registrationCategories = [
  {
    id: "visitor",
    title: "Visitor",
    tag: "Fans · Spectators",
    copy: "General festival entry for spectators and guests exploring the experience.",
    href: "/registration/visitor",
    accent: "cyan",
  },
  {
    id: "cosplayer",
    title: "Cosplayer",
    tag: "Stage · Parade · Showcase",
    copy: "Register your character, costume details, and stage requirements in one form.",
    href: "/registration/cosplayer",
    accent: "magenta",
  },
  {
    id: "players",
    title: "Player",
    tag: "BGMI · Valorant · Free Fire",
    copy: "Register for tournament brackets — select your title, submit squad details, and complete payment.",
    href: "/registration/players",
    accent: "lime",
  },
] as const;

export const sponsorSection = {
  badge: "Partners & Brands",
  title: "Sponsor the",
  titleAccent: "festival",
  copy: "Connect with India's next generation of gamers, creators, and fans. Title sponsorship, zone activations, booths, and brand integrations available.",
  tiers: [
    "Title Sponsor",
    "Zone Partner",
    "Booth Activation",
    "Brand Integration",
  ],
  href: "/registration/sponsors",
};

export const playerGames = [
  {
    id: "bgmi",
    title: "BGMI",
    format: "Squad · Mobile",
    fee: 400,
  },
  {
    id: "valorant",
    title: "Valorant",
    format: "5v5 · PC",
    fee: 400,
  },
  {
    id: "freefire",
    title: "Free Fire",
    format: "Squad · Mobile",
    fee: 400,
  },
] as const;

export const tickerMatches = [
  { label: "LIVE", value: "BGMI Finals" },
  { label: "NEXT", value: "Valorant Zone" },
  { label: "DROP", value: "Cosplay Stage" },
  { label: "HUB", value: "Creators Zone" },
  { label: "STAGE", value: "Main Arena" },
];
