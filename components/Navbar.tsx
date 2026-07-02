const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  // { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
        <a
          href="#top"
          className="rounded-full border border-navy/10 bg-white/70 px-3 py-2 font-display text-lg font-semibold text-ink shadow-sm transition-transform hover:-translate-y-0.5"
        >
          Yuvanth<span className="text-gold">.</span>dev
        </a>
        <ul className="hidden items-center gap-2 font-mono text-[13px] text-ink/70 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-full px-3 py-2 transition-all duration-200 hover:bg-white/80 hover:text-navy hover:shadow-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/Yuvanth_Sadam.pdf"
          download
          className="rounded-full border border-navy/15 bg-navy px-4 py-2 font-mono text-[12px] font-semibold text-paper transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy/90"
        >
          Resume.pdf
        </a>
      </nav>
    </header>
  );
}
