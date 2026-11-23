"use client";
/* eslint-disable @next/next/no-img-element */
import { Reveal, SectionHeader, trackSpot, Button } from "./ui";

type Proyecto = {
  nombre: string;
  tipo: string;
  descripcion: string;
  tags: string[];
  desktop: string;
  mobile?: string;
  url?: string;
  urlLabel?: string;
  dominio: string;
  nota?: string;
};

/* Proyectos reales de Flympux LAB. */
const proyectos: Proyecto[] = [
  {
    nombre: "JFX Seguridad y Protección",
    tipo: "Sitio web comercial",
    descripcion: "Sitio para venta e instalación de cámaras IP/WiFi y circuito cerrado: paquetes, cobertura y cotización directa por WhatsApp.",
    tags: ["Diseño a medida", "SEO", "WhatsApp"],
    desktop: "/proyectos/jfx-seguridad-d.webp",
    mobile: "/proyectos/jfx-seguridad-m.webp",
    url: "https://jfx-seguridad.vercel.app",
    dominio: "jfx-seguridad.vercel.app",
  },
  {
    nombre: "MUESTRA.MX",
    tipo: "Portal de encuestas y noticias",
    descripcion: "Portal de opinión pública con encuestas en tiempo real, panel administrativo, exportación de resultados y mapas de seguimiento.",
    tags: ["Angular", "Firebase", "Mapas"],
    desktop: "/proyectos/muestra-mx-d.webp",
    mobile: "/proyectos/muestra-mx-m.webp",
    url: "https://muestra.mx",
    dominio: "muestra.mx",
  },
  {
    nombre: "Tacos Esmeralda",
    tipo: "Sitio web de negocio",
    descripcion: "Taquizas y guisados a domicilio: paquetes con precio, cotizador de eventos, galería y contacto inmediato.",
    tags: ["Cotizador", "Responsive", "Redes sociales"],
    desktop: "/proyectos/tacos-esmeralda-d.webp",
    mobile: "/proyectos/tacos-esmeralda-m.webp",
    url: "https://tacos-esmeralda.vercel.app",
    dominio: "tacos-esmeralda.vercel.app",
  },
  {
    nombre: "Nails Glez",
    tipo: "Sitio web de belleza",
    descripcion: "Estudio de uñas y alaciados: identidad rosa a la medida, galería de trabajos, servicios y agenda de citas.",
    tags: ["Branding", "Animaciones", "Citas"],
    desktop: "/proyectos/nails-glez-d.webp",
    mobile: "/proyectos/nails-glez-m.webp",
    url: "https://www.instagram.com/nails.glez21",
    urlLabel: "Ver en Instagram",
    dominio: "nails-glez",
  },
];

function Showcase({ p, big }: { p: Proyecto; big?: boolean }) {
  return (
    <div className={`relative ${big ? "px-4 pt-8 sm:px-10 sm:pt-12" : "px-4 pt-7 sm:px-7 sm:pt-9"}`}>
      <div className="overflow-hidden rounded-t-xl border border-white/12 bg-[#0e0e0e] shadow-[0_30px_80px_-20px_rgb(0_0_0/.9)] transition duration-700 group-hover:-translate-y-1.5">
        <div className="flex items-center gap-2 border-b border-white/8 bg-white/[0.04] px-3 py-2">
          <span className="flex gap-1.5" aria-hidden><i className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" /><i className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" /><i className="h-2.5 w-2.5 rounded-full bg-[#28c840]" /></span>
          <span className="mx-auto flex max-w-[70%] items-center gap-1.5 truncate rounded-md bg-black/40 px-3 py-0.5 text-[11px] text-white/55">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden><rect x="5" y="11" width="14" height="10" rx="2" /><path d="M8 11V7a4 4 0 0 1 8 0v4" /></svg>
            {p.dominio}
          </span>
        </div>
        <img src={p.desktop} alt={`Captura de ${p.nombre}`} loading="lazy" className="aspect-[16/10] w-full object-cover object-top" />
      </div>
      {p.mobile && (
        <div className={`absolute bottom-0 right-3 overflow-hidden rounded-t-[22px] border-[5px] border-b-0 border-[#1c1c1c] bg-black shadow-[0_20px_60px_-10px_rgb(0_0_0/.95)] transition duration-700 group-hover:-translate-y-3 sm:right-6 ${big ? "w-[22%] min-w-[96px]" : "w-[26%] min-w-[80px]"}`}>
          <img src={p.mobile} alt="" aria-hidden loading="lazy" className="aspect-[9/16] w-full object-cover object-top" />
        </div>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <section id="proyectos" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader kicker="Proyectos" title={<>Proyectos que ya están trabajando</>} text="Sitios y portales que diseñamos y desarrollamos para negocios reales." />
        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {proyectos.map((p, i) => (
            <Reveal key={p.nombre} className={i === 0 ? "md:col-span-2 lg:col-span-3" : ""}>
              <article onMouseMove={trackSpot} className={`spot group h-full overflow-hidden rounded-3xl border border-line bg-white/[0.02] transition duration-500 hover:border-electric/40 ${i === 0 ? "lg:grid lg:grid-cols-[1.35fr_1fr] lg:items-center" : "flex flex-col"}`}>
                <div className="relative overflow-hidden bg-[radial-gradient(ellipse_at_30%_0%,rgb(255_255_255/.07),transparent_60%)]">
                  <div className="absolute inset-0 grid-bg opacity-50 [mask-image:linear-gradient(#000,transparent)]" aria-hidden />
                  <Showcase p={p} big={i === 0} />
                </div>
                <div className={`flex flex-1 flex-col p-7 ${i === 0 ? "sm:p-10" : ""}`}>
                  <p className="text-sm font-semibold text-electric">{p.tipo}</p>
                  <h3 className={`mt-2 font-display font-semibold tracking-tight text-white ${i === 0 ? "text-3xl" : "text-2xl"}`}>{p.nombre}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{p.descripcion}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => <li key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/70">{t}</li>)}
                  </ul>
                  {p.nota && <p className="mt-5 rounded-xl border border-white/8 bg-white/[0.03] p-3 text-xs leading-relaxed text-white/55">🔒 {p.nota}</p>}
                  <div className="mt-auto pt-7">
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="group/l inline-flex min-h-11 items-center gap-3 rounded-full border border-white/12 bg-white/[0.03] py-1.5 pl-5 pr-1.5 text-sm font-semibold text-white transition hover:border-electric/60 hover:bg-electric/10">
                        {p.urlLabel ?? "Visitar sitio"}
                        <span className="grid h-8 w-8 place-items-center rounded-full bg-electric text-[#05120a] transition group-hover/l:-rotate-45">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                        </span>
                      </a>
                    ) : (
                      <span className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/10 px-5 text-sm font-medium text-white/55">
                        <span className="h-2 w-2 rounded-full bg-electric animate-pulse-dot" aria-hidden /> En operación
                      </span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 flex justify-center">
          <Button href="/galeria/" variant="ghost" icon="arrow">Ver galería completa</Button>
        </Reveal>
      </div>
    </section>
  );
}
