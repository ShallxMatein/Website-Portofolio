import { site } from "@/data/site";
import Photo from "./Photo";
import SectionLabel from "./SectionLabel";

export default function Hero() {
  const words = [...site.marquee, ...site.marquee];
  return (
    <section id="home" className="flex min-h-svh flex-col pt-16 md:h-screen md:min-h-[640px]">
      <div className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 gap-12 px-6 py-12 md:grid-cols-[55fr_45fr] md:gap-0 md:px-10 md:py-0">
        <div className="flex flex-col justify-center md:pr-16">
          <SectionLabel n="01">Home</SectionLabel>
          <p className="mt-16 text-[11px] uppercase tracking-[0.3em] text-mute md:mt-24">
            Portfolio — {site.year}
          </p>
          <h1 className="mt-6 font-serif text-5xl font-light leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Halo, saya <em className="italic">{site.name}.</em>
          </h1>
          <p className="mt-8 max-w-[40ch] text-base leading-relaxed text-mute">{site.intro}</p>
          <div className="mt-10">
            <a
              href="#project"
              className="inline-block border border-paper px-6 py-3 text-[11px] uppercase tracking-[0.25em] transition-colors duration-300 hover:bg-paper hover:text-ink"
            >
              Lihat Project ↓
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center md:border-l md:border-line">
          <Photo
            src={site.heroPhoto}
            alt={`Foto ${site.fullName}`}
            className="aspect-[3/4] w-full max-w-[340px] rounded-[4px] md:h-[62vh] md:max-h-[560px] md:w-auto md:max-w-none"
          />
        </div>
      </div>

      <div className="overflow-hidden border-y border-line py-5" aria-hidden="true">
        <div className="marquee-track flex w-max whitespace-nowrap font-serif text-4xl md:text-5xl">
          {words.map((w, i) => (
            <span key={i} className="text-outline px-6">
              {w} <span className="pl-12">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
