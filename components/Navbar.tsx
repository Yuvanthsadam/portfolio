const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-paper/85 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold text-ink">
          Yuvanth<span className="text-gold">.</span>dev
        </a>
        <ul className="hidden items-center gap-8 font-mono text-[13px] text-ink/70 sm:flex">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-navy"
              >
                <span className="text-gold"></span> {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/resume.pdf"
          download
          className="rounded-md border border-navy px-4 py-2 font-mono text-[12px] font-medium text-navy transition-colors hover:bg-navy hover:text-paper"
        >
          Resume.pdf
        </a>
      </nav>
    </header>
  );
}
