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
    <article className="group relative rounded-lg border border-line bg-white/60 p-7 transition-all hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-[0_18px_40px_-25px_rgba(18,33,63,0.45)]">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-widest text-signal">
            {category}
          </span>
          <h3 className="mt-1 font-display text-xl font-semibold text-ink">
            {title}
          </h3>
        </div>
        <span className="font-mono text-3xl font-semibold text-line group-hover:text-gold/50 transition-colors">
          {index}
        </span>
      </div>

      <p className="text-[14.5px] leading-relaxed text-ink/70">{description}</p>

      <ul className="mt-4 space-y-2">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2 text-[13.5px] leading-snug text-ink/70">
            <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gold" />
            {b}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-navy/15 bg-navy/5 px-3 py-1 font-mono text-[11px] text-navy"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
