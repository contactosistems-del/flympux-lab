"use client";
/* eslint-disable @next/next/no-img-element */
import { Reveal, SectionHeader, trackSpot, Button } from "./ui";
import { site, waLink } from "@/lib/site";

type Item = {
  id: string;
  tag: string;
  title: string;
  text: string;
  img: string;
  points: string[];
  prices: { label: string; value: string }[];
  note?: string;
  cta: { label: string; href: string; external?: boolean };
};

const items: Item[] = [
  {
    id: "soporte",
    tag: "A domicilio",
    title: "Soporte técnico a domicilio",
    text: "¿Tu compu está lenta? Voy a tu casa, la diagnostico y la dejo lista el mismo día. Instalo solo lo que tu equipo sí aguanta, para que no se alente.",
    img: "/img/hdd-install.webp",
    points: ["Formateo e instalación de Windows", "Office y cualquier programa de PC", "Virus, drivers y optimización", "Piezas: te cotizo, compras y regreso a instalarlas"],
    prices: [
      { label: "Visita + diagnóstico", value: "$350" },
      { label: "Servicio completo", value: "$500" },
    ],
    note: "50% de anticipo y 50% al terminar. Pregunta por la cobertura en tu zona.",
    cta: { label: "Agendar visita", href: waLink("Hola Flympux LAB, quiero agendar soporte técnico a domicilio."), external: true },
  },
  {
    id: "nfc",
    tag: "Para negocios",
    title: "Tarjetas y llaveros NFC",
    text: "Tu cliente acerca su celular y se abre tu negocio: reseñas en Google, menú digital, WhatsApp o redes. Sin apps y sin escanear QR.",
    img: "/img/workspace.webp",
    points: ["Más reseñas en Google", "Menú digital para restaurantes", "WhatsApp y redes en un toque", "Programada para tu negocio"],
    prices: [{ label: "Pago único", value: "$450" }],
    note: "Ideal para restaurantes, barberías, talleres y más. Envíos a todo México.",
    cta: { label: "Ver cómo funciona", href: "/#tarjetas-nfc" },
  },
  {
    id: "camaras",
    tag: "Seguridad",
    title: "Cámaras de seguridad",
    text: "Instalación de cámaras IP/WiFi y circuito cerrado con JFX Seguridad y Protección. Mira tu casa o negocio en vivo desde tu celular.",
    img: "/img/camaras.webp",
    points: ["Cámaras Dahua de 2 MP", "Instalación incluida", "Grabación DVR / NVR", "Acceso desde tu celular"],
    prices: [
      { label: "4 cámaras", value: "$6,850" },
      { label: "8 cámaras", value: "$13,300" },
    ],
    cta: { label: "Ver paquetes", href: "https://jfx-seguridad.vercel.app", external: true },
  },
  {
    id: "fotografia",
    tag: "Book y marca",
    title: "Fotografía profesional",
    text: "Sesiones de fotos para tu negocio, tus productos o tu marca personal. Imágenes listas para redes, catálogo y página web.",
    img: "/img/team-coding.webp",
    points: ["Fotografía de producto", "Book y retrato profesional", "Fotos para redes y página web"],
    prices: [{ label: "Precio", value: "Cotización" }],
    cta: site.social.instagram
      ? { label: "Ver book en Instagram", href: site.social.instagram, external: true }
      : { label: "Cotizar sesión", href: waLink("Hola Flympux LAB, quiero cotizar una sesión de fotos."), external: true },
  },
];

export function LocalServices() {
  return (
    <section id="domicilio" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          kicker="Servicios con precio"
          title={<>Para tu casa y tu negocio</>}
          text="Servicios rápidos con precio claro. Escríbenos y lo agendamos."
        />
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {items.map((it) => (
            <Reveal key={it.id}>
              <article id={it.id} onMouseMove={trackSpot} className="spot group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-white/[0.045] to-white/[0.01] transition duration-500 hover:-translate-y-1 hover:border-electric/40">
                <div className="relative h-52 overflow-hidden">
                  <img src={it.img} alt="" aria-hidden loading="lazy" className="h-full w-full object-cover grayscale-[35%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/15 bg-ink/70 px-3 py-1 text-xs font-semibold text-electric backdrop-blur">{it.tag}</span>
                </div>
                <div className="relative -mt-6 flex flex-1 flex-col p-7 pt-0 sm:p-8 sm:pt-0">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-white">{it.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted">{it.text}</p>
                  <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                    {it.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-[15px] text-white/85">
                        <svg className="mt-1 shrink-0 text-electric" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden><path d="M5 12l5 5L20 7" /></svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {it.prices.map((pr, i) => (
                      <div key={pr.label} className={`rounded-2xl px-4 py-3 ${i === it.prices.length - 1 && it.prices.length > 1 ? "bg-[linear-gradient(135deg,#d6ffb8,#7cff3d_45%,#2fd45a)] text-[#05120a]" : "border border-white/12 bg-white/[0.03]"}`}>
                        <p className={`text-xs font-semibold ${i === it.prices.length - 1 && it.prices.length > 1 ? "text-[#0d2e15]" : "text-muted"}`}>{pr.label}</p>
                        <p className="font-display text-2xl font-bold tracking-tight">{pr.value}{pr.value.startsWith("$") && <span className="ml-1 text-xs font-semibold opacity-70">MXN</span>}</p>
                      </div>
                    ))}
                  </div>
                  {it.note && <p className="mt-4 text-sm leading-relaxed text-white/55">{it.note}</p>}
                  <div className="mt-auto pt-7">
                    <Button href={it.cta.href} external={it.cta.external} size="sm" icon={it.cta.href.includes("wa.me") ? "whatsapp" : "arrow"}>{it.cta.label}</Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
