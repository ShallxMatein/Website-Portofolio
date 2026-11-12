import { site } from "@/data/site";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Projects() {
  return (
    <section id="project" className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:items-end">
          <SectionLabel n="03">Project</SectionLabel>
          <h2 className="font-serif text-5xl font-light md:text-6xl">
            Yang sudah <em className="italic">jadi.</em>
          </h2>
        </div>

        <Reveal as="ol" className="mt-20 border-t border-line">
          {site.projects.map((p, i) => (
            <li key={p.title} className="border-b border-line">
              <a
                href={p.url}
                target={p.url.startsWith("http") ? "_blank" : undefined}
                rel={p.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-4 py-8 transition-colors duration-300 hover:bg-ink-2 md:grid-cols-[4rem_1fr_auto] md:px-4 md:py-10"
              >
                <span className="font-mono text-xs text-mute">{String(i + 1).padStart(2, "0")}</span>
                <span className="block transition-transform duration-300 ease-out group-hover:translate-x-2">
                  <span className="block font-serif text-3xl font-light leading-tight md:text-5xl">{p.title}</span>
                  <span className="mt-3 block text-[11px] uppercase tracking-[0.2em] text-mute">
                    {p.tags.join(" / ")}
                  </span>
                </span>
                <span className="flex items-baseline gap-3 font-mono text-xs text-mute">
                  {p.year}
                  <span aria-hidden="true" className="text-lg text-paper">↗</span>
                </span>
              </a>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
