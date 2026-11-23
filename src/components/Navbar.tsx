"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { nav, waLink } from "@/lib/site";
import { Button } from "./ui";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || open ? "border-b border-line bg-ink/75 backdrop-blur-xl" : "border-b border-transparent"}`}>
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center gap-6 px-5 sm:px-8" aria-label="Principal">
        <Link href="/#inicio" aria-label="Flympux LAB, ir al inicio"><Logo /></Link>
        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="rounded-lg px-3.5 py-2 text-sm font-medium text-muted transition hover:bg-white/5 hover:text-white">{n.label}</a>
            </li>
          ))}
        </ul>
        <div className="ml-auto hidden lg:ml-2 lg:block">
          <Button href={waLink()} external size="sm">Cotizar proyecto</Button>
        </div>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="ml-auto grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 top-0 h-0.5 w-5 rounded bg-white transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-white transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 top-3 h-0.5 w-5 rounded bg-white transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>
      <div id="menu-movil" className={`lg:hidden overflow-hidden transition-[max-height] duration-500 ${open ? "max-h-[480px]" : "max-h-0"}`}>
        <ul className="space-y-1 px-5 pb-6 pt-2">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={n.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-lg font-medium text-white/90 hover:bg-white/5">{n.label}</a>
            </li>
          ))}
          <li className="pt-3"><Button href={waLink()} external icon="whatsapp" className="w-full">Solicitar cotización</Button></li>
        </ul>
      </div>
    </header>
  );
}
