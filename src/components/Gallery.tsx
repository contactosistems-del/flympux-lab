"use client";
/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Reveal, SectionHeader } from "./ui";
import { InstagramIcon } from "./Social";
import { site } from "@/lib/site";
import inicial from "../../public/galeria/galeria.json";

/**
 * Galería de portafolio.
 * Las imágenes se leen en el navegador desde /public/galeria/galeria.json,
 * así que puedes agregar fotos nuevas SIN reconstruir el sitio:
 *   1. Sube la imagen a /galeria/  (ej. /galeria/mi-proyecto.webp)
 *   2. Agrega un objeto en galeria.json con src, titulo, categoria y descripcion.
 */
type Item = { src: string; titulo: string; categoria: string; descripcion?: string; ilustrativa?: boolean; etiqueta?: string };

const CATEGORIAS = ["Páginas web", "Sistemas", "Aplicaciones", "Proyectos digitales"];

export function Gallery() {
  const [items, setItems] = useState<Item[] | null>((inicial as { items: Item[] }).items);
  const error = false;
  const [filtro, setFiltro] = useState("Todos");
  const [abierta, setAbierta] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    fetch("/galeria/galeria.json", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => setItems(Array.isArray(d) ? d : d.items ?? []))
      .catch(() => { /* se conservan las imágenes incluidas en la compilación */ });
  }, []);

  const visibles = useMemo(() => (items ?? []).filter((i) => filtro === "Todos" || i.categoria === filtro), [items, filtro]);

  const mover = useCallback((dir: number) => {
    setAbierta((a) => (a === null ? a : (a + dir + visibles.length) % visibles.length));
  }, [visibles.length]);

  useEffect(() => {
    if (abierta === null) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAbierta(null);
      if (e.key === "ArrowRight") mover(1);
      if (e.key === "ArrowLeft") mover(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [abierta, mover]);

  const actual = abierta !== null ? visibles[abierta] : null;

  return (
    <section id="galeria" className="relative pb-24 pt-36 sm:pb-32 sm:pt-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader kicker="Portafolio visual" title={<>Galería de proyectos y fotografías</>} text="Una muestra visual de nuestro trabajo. Se actualiza constantemente con nuevos proyectos." />
          <Reveal>
            {site.social.instagram ? (
              <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/12 px-5 text-sm font-semibold text-white transition hover:border-transparent hover:bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)]">
                <InstagramIcon size={18} /> Síguenos en Instagram
              </a>
            ) : (
              <span title="Instagram: enlace pendiente de configurar" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 px-5 text-sm font-medium text-white/40">
                <InstagramIcon size={18} /> Instagram próximamente
              </span>
            )}
          </Reveal>
        </div>

        <Reveal className="mt-12">
          <div role="tablist" aria-label="Filtrar por categoría" className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]">
            {["Todos", ...CATEGORIAS].map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filtro === c}
                onClick={() => setFiltro(c)}
                className={`min-h-11 shrink-0 rounded-full border px-5 text-sm font-semibold transition ${filtro === c ? "border-electric bg-electric text-[#05120a]" : "border-white/12 text-white/70 hover:border-white/30 hover:text-white"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {items === null && !error && Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="h-64 animate-pulse rounded-2xl bg-white/[0.04]" />
          ))}
          {error && <p className="text-muted">No se pudo cargar la galería. Revisa el archivo galeria/galeria.json.</p>}
          {items !== null && visibles.length === 0 && (
            <div className="rounded-2xl border border-dashed border-white/15 p-10 text-center text-muted">Muy pronto agregaremos proyectos en esta categoría.</div>
          )}
          {visibles.map((it, i) => (
            <button
              key={it.src + i}
              type="button"
              onClick={() => setAbierta(i)}
              className="group relative block w-full break-inside-avoid overflow-hidden rounded-2xl border border-line text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-electric"
              aria-label={`Ampliar imagen: ${it.titulo}`}
            >
              <img src={it.src} alt={it.titulo} loading="lazy" className="w-full transition duration-700 group-hover:scale-[1.04]" />
              <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-80 transition group-hover:opacity-100" />
              <span className="absolute inset-x-0 bottom-0 p-5">
                <span className="text-xs font-semibold text-electric">{it.categoria}</span>
                <span className="mt-1 block font-display text-lg font-semibold text-white">{it.titulo}</span>
              </span>
              {(it.etiqueta || it.ilustrativa) && <span className="absolute left-3 top-3 rounded-full bg-ink/75 px-2.5 py-1 text-[10px] font-semibold text-white/80 backdrop-blur">{it.etiqueta || "Imagen ilustrativa"}</span>}
              <span className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-ink/70 text-white opacity-0 backdrop-blur transition group-hover:opacity-100" aria-hidden>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
              </span>
            </button>
          ))}
        </div>
      </div>

      {actual && (
        <div role="dialog" aria-modal="true" aria-label={actual.titulo} className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm" onClick={() => setAbierta(null)}>
          <figure className="relative max-h-full w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={actual.src} alt={actual.titulo} className="mx-auto max-h-[78vh] w-auto rounded-xl object-contain" />
            <figcaption className="mt-4 text-center">
              <span className="text-sm font-semibold text-electric">{actual.categoria}</span>
              <span className="mt-1 block font-display text-xl font-semibold text-white">{actual.titulo}</span>
              {actual.descripcion && <span className="mt-1 block text-muted">{actual.descripcion}</span>}
            </figcaption>
          </figure>
          <button ref={closeRef} onClick={() => setAbierta(null)} aria-label="Cerrar" className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6 6 18" /></svg>
          </button>
          {visibles.length > 1 && (<>
            <button onClick={(e) => { e.stopPropagation(); mover(-1); }} aria-label="Imagen anterior" className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M15 6l-6 6 6 6" /></svg>
            </button>
            <button onClick={(e) => { e.stopPropagation(); mover(1); }} aria-label="Imagen siguiente" className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M9 6l6 6-6 6" /></svg>
            </button>
          </>)}
        </div>
      )}
    </section>
  );
}
