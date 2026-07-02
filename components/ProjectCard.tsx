type ProjectCardProps = {
  index: string;
  title: string;
  category: string;
  description: string;
  bullets: string[];
  tags: string[];
};

export default function ProjectCard({
  index,
  title,
  category,
  description,
  bullets,
  tags,
}: ProjectCardProps) {
  return (
    <article className="project-card group rounded-[22px] border border-line/70 bg-gradient-to-br from-white/85 via-white/70 to-white/50 p-7 shadow-[0_12px_40px_-20px_rgba(18,33,63,0.25)]">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-signal">
            {category}
          </span>
          <h3 className="mt-2 font-display text-xl font-semibold text-ink">
            {title}
          </h3>
        </div>
        <span className="rounded-full border border-gold/20 bg-gold/10 px-3 py-2 font-mono text-lg font-semibold text-gold/70 transition-colors group-hover:text-gold">
          {index}
        </span>
      </div>

      <p className="text-[14.5px] leading-relaxed text-ink/70">{description}</p>

      <ul className="mt-4 space-y-2">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2 text-[13.5px] leading-snug text-ink/70">
            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-navy/15 bg-navy/5 px-3 py-1 font-mono text-[11px] font-medium text-navy transition-transform group-hover:-translate-y-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
