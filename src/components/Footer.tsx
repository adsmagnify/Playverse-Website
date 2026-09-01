import { siteMeta } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-void-2 px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 md:flex-row md:items-end md:justify-between">
        <div>
          <img
            src={siteMeta.logo}
            alt={siteMeta.name}
            width={360}
            height={108}
            className="h-20 w-auto sm:h-24 md:h-28"
          />
          <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-cyan">
            {siteMeta.tagline}
          </p>
          <p className="mt-3 max-w-sm text-sm text-ghost-dim">
            Esports events company — LANs, arena majors, creator stages, and
            seasons engineered for chaos.
          </p>
        </div>
        <div className="flex flex-wrap gap-5 font-mono text-[11px] uppercase tracking-[0.16em] text-ghost-dim">
          <a href={`mailto:${siteMeta.email}`} className="hover:text-cyan">
            {siteMeta.email}
          </a>
          <a href={siteMeta.socials.discord} className="hover:text-magenta">
            Discord
          </a>
          <a href={siteMeta.socials.youtube} className="hover:text-lime">
            YouTube
          </a>
          <a href={siteMeta.socials.instagram} className="hover:text-cyan">
            Instagram
          </a>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-line pt-6 font-mono text-[10px] uppercase tracking-[0.16em] text-ghost-dim">
        © {new Date().getFullYear()} Asaiverse · GG · WP · FF
      </div>
    </footer>
  );
}
