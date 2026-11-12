import { site } from "@/data/site";
import Photo from "./Photo";
import Reveal from "./Reveal";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section id="about" className="border-b border-line">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-24 md:px-10 md:py-32">
        <SectionLabel n="02">About</SectionLabel>

        <Reveal className="flex flex-1 flex-col items-center justify-center pt-16">
          <Photo
            src={site.aboutPhoto}
            alt={`Potret ${site.fullName}`}
            className="h-[220px] w-[220px] rounded-full sm:h-[280px] sm:w-[280px]"
          />
          <h2 className="mt-14 font-serif text-5xl font-light italic md:text-6xl">Tentang.</h2>
          <div className="mt-8 max-w-[60ch] space-y-5 text-center leading-relaxed text-mute">
            {site.about.map((p, i) => <p key={i}>{p}</p>)}
          </div>

          <dl className="mt-20 grid w-full max-w-3xl grid-cols-1 border-t border-line sm:grid-cols-3">
            {site.details.map((d, i) => (
              <div
                key={d.label}
                className={`py-6 sm:px-6 ${i > 0 ? "border-t border-line sm:border-l sm:border-t-0" : ""}`}
              >
                <dt className="text-[11px] uppercase tracking-[0.25em] text-mute">{d.label}</dt>
                <dd className="mt-2 text-sm">{d.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
