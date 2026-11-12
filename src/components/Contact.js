import { site } from "@/data/site";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-7xl px-6 pt-24 md:px-10 md:pt-32">
        <SectionLabel n="05">Contact</SectionLabel>

        <Reveal className="flex flex-col items-center py-24 text-center md:py-32">
          <h2 className="font-serif text-[clamp(3rem,10vw,6rem)] font-light leading-none tracking-tight">
            Mari <em className="italic">bicara.</em>
          </h2>
          <p className="mt-8 max-w-[44ch] text-mute">
            Punya pekerjaan berulang yang ingin diotomasi, atau sekadar ingin bertanya? Email saya.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-10 break-all font-serif text-2xl underline decoration-1 underline-offset-8 transition-colors hover:decoration-mute md:text-4xl"
          >
            {site.email}
          </a>
          <ul className="mt-12 flex flex-wrap justify-center gap-3 text-[11px] uppercase tracking-[0.25em]">
            {site.socials.map((s, i) => (
              <li key={s.label} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="text-mute">·</span>}
                <a href={s.url} target="_blank" rel="noopener noreferrer" className="link-u">{s.label}</a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-8 text-xs text-mute sm:flex-row sm:justify-between md:px-10">
          <p>© {site.year} {site.fullName}</p>
          <p className="italic font-serif text-sm">Dibuat dengan sengaja, bukan template.</p>
        </div>
      </footer>
    </section>
  );
}
