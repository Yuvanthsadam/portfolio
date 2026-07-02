import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";

const skills = [
  { label: "Languages", value: "HTML, CSS, JavaScript, TypeScript" },
  { label: "Frontend", value: "React, Next.js, React Native, Tailwind CSS" },
  { label: "Backend", value: "Node.js, NestJS" },
  { label: "Database & Tools", value: "MySQL, Postman, GitLab" },
  {
    label: "Practices",
    value:
      "Responsive Design, Component-Based Architecture, REST API Integration, Version Control",
  },
];

// const projects = [
//   {
//     index: "01",
//     title: "HDFC Web Application",
//     category: "Enterprise · Fintech",
//     description:
//       "Frontend implementation for an enterprise-level web application built for a major financial institution, built strictly to brand and accessibility standards.",
//     bullets: [
//       "Contributed to UI/UX design and frontend implementation",
//       "Built a reusable component library to keep every screen pixel-consistent with brand guidelines",
//     ],
//     tags: ["React", "TypeScript", "Tailwind CSS"],
//   },
//   {
//     index: "02",
//     title: "Sports Timing Solutions",
//     category: "Production · Live Data",
//     description:
//       "A marathon organization platform used to run races across India and internationally, with live participant and race-timing data.",
//     bullets: [
//       "Architected modular React components for event listings, dashboards, and race views",
//       "Integrated REST APIs to dynamically fetch and display live race data",
//     ],
//     tags: ["React", "REST API", "Component Architecture"],
//   },
//   {
//     index: "03",
//     title: "Motorola — Web & Mobile",
//     category: "Cross-Platform",
//     description:
//       "A companion mobile application built alongside a web client, sharing logic across platforms to speed up delivery.",
//     bullets: [
//       "Built cross-platform mobile screens using React Native",
//       "Shared business logic between web and mobile to avoid duplicated code",
//     ],
//     tags: ["React Native", "TypeScript", "Tailwind CSS"],
//   },
//   {
//     index: "04",
//     title: "PadCare Web App",
//     category: "Dashboards",
//     description:
//       "Dashboard and informational modules for end users, with a focus on clarity and frontend performance.",
//     bullets: [
//       "Collaborated cross-functionally to improve design clarity",
//       "Built responsive UI components powering core dashboard modules",
//     ],
//     tags: ["React", "Responsive Design"],
//   },
// ];

export default function Home() {
  return (
    <main id="top" className="relative overflow-hidden bg-paper">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="hero-orb left-[8%] top-[10%] h-32 w-32 bg-gold/20" />
        <div className="hero-orb hero-orb--2 right-[8%] top-[18%] h-40 w-40 bg-[#12213f]/10" />
        <div className="hero-orb hero-orb--3 bottom-[12%] left-[45%] h-24 w-24 bg-[#f0c36b]/20" />
      </div>

      <Navbar />

      <section className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-24">
        <div className="editor-frame">
          <div className="editor-titlebar">
            <span className="dot bg-[#ff5f57]" />
            <span className="dot bg-[#febc2e]" />
            <span className="dot bg-[#28c840]" />
            <span className="ml-3 font-mono text-[12px] text-white/40">
              Portfolio.tsx
            </span>
          </div>
          <div className="px-6 py-12 sm:px-10 sm:py-8">
            <p className="font-mono text-[13px] text-signal">
              // frontend developer
            </p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-paper sm:text-5xl">
              <span className="text-white/40">const</span> developer{" "}
              <span className="text-white/40">=</span>{" "}
              <span className="text-gold">&quot;Yuvanth Sadam&quot;</span>
              <span className="text-white/40">;</span>
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">
              I build responsive, component-driven interfaces with React,
              Next.js, TypeScript, and React Native — for enterprise
              platforms and products people actually use.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-md bg-gold px-5 py-2.5 font-mono text-[13px] font-medium text-navyDeep transition-opacity hover:opacity-90"
              >
                view projects
              </a>
              <a
                href="#contact"
                className="rounded-md border border-white/20 px-5 py-2.5 font-mono text-[13px] font-medium text-white/80 transition-colors hover:border-white/40 hover:text-white"
              >
                get in touch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[28px] border border-line/70 bg-white/65 p-8 shadow-[0_20px_70px_-35px_rgba(18,33,63,0.28)] backdrop-blur sm:p-10">
          <p className="font-mono text-[13px] uppercase tracking-[0.28em] text-gold">
            About
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
            What I do
          </h2>
          <p className="mt-5 max-w-3xl text-[15px] leading-relaxed text-ink/70">
            I&apos;m a Frontend Developer with hands-on experience building
            responsive, high-performance web and mobile applications for
            enterprise clients. I care about clean component architecture,
            pixel-accurate implementation, and interfaces that hold up under
            real production use — not just in a demo.
          </p>
        </div>
      </section>

      <section id="skills" className="border-y border-line/70 bg-white/50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="font-mono text-[13px] uppercase tracking-[0.28em] text-gold">
            Skills
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
            Tools I reach for
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {skills.map((s) => (
              <div
                key={s.label}
                className="rounded-[20px] border border-line/70 bg-white/75 p-6 shadow-[0_12px_40px_-24px_rgba(18,33,63,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-26px_rgba(18,33,63,0.4)]"
              >
                <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-navy/60">
                  {s.label}
                </p>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink/80">
                  {s.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
        <p className="font-mono text-[13px] uppercase tracking-[0.28em] text-gold">
          Projects
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
          Things I&apos;ve built
        </h2>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.index} {...p} />
          ))}
        </div>
      </section> */}

      <section id="contact" className="border-t border-line/70 bg-navyDeep text-paper">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="font-mono text-[13px] uppercase tracking-[0.28em] text-gold">
            Contact
          </p>
          <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
            Let&apos;s work together
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/60">
            I&apos;m open to frontend and full-stack opportunities. The
            fastest way to reach me is email.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 font-mono text-[13px]">
            <a
              href="mailto:sadamyuvanth@gmail.com"
              className="rounded-full bg-gold px-5 py-2.5 font-semibold text-navyDeep transition-transform hover:-translate-y-0.5 hover:opacity-90"
            >
              sadamyuvanth@gmail.com
            </a>
            <a
              href="tel:+918652420386"
              className="rounded-full border border-white/20 px-5 py-2.5 text-white/80 transition-all hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
            >
              +91 86524 20386
            </a>
            <a
              href="https://linkedin.com/in/yuvanth-sadam"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-5 py-2.5 text-white/80 transition-all hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
            >
              linkedin
            </a>
            <a
              href="https://github.com/Yuvanthsadam"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-5 py-2.5 text-white/80 transition-all hover:-translate-y-0.5 hover:border-white/40 hover:text-white"
            >
              github
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
