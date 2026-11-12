"use client";
import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#project", label: "Project" },
  { href: "#skill", label: "Skill" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > lastY.current && y > 80);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visible = !hidden || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${open ? "bg-ink" : ""}`}
    >
      <nav aria-label="Navigasi utama" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#home" className="font-serif text-2xl" aria-label={`${site.fullName}, kembali ke atas`}>
          {site.initials}
        </a>

        <ul className="hidden items-center gap-2 text-[11px] uppercase tracking-[0.25em] md:flex">
          {links.map((l, i) => (
            <li key={l.href} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true" className="text-mute">·</span>}
              <a href={l.href} className="link-u">{l.label}</a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="-mr-2 p-2 text-[11px] uppercase tracking-[0.25em] md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Tutup" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-b border-line px-6 pb-6 text-sm uppercase tracking-[0.25em] md:hidden">
          {links.map((l) => (
            <li key={l.href} className="border-t border-line">
              <a href={l.href} className="block py-4" onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
