"use client";
import { useState } from "react";
import { Reveal, SectionHeader, trackSpot, Button } from "./ui";
import { waLink } from "@/lib/site";

type Use = { id: string; label: string; card: string; title: string; text: string; icon: React.ReactNode };

const I = ({ d }: { d: string }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d={d} />
  </svg>
);

const uses: Use[] = [
  {
    id: "menu",
    label: "Menú",
    card: "VER MENÚ",
    title: "Menú digital",
    text: "Tus clientes ven tu menú completo con fotos y precios desde su celular. Cambias precios sin reimprimir nada.",
    icon: <I d="M4 4h16v16H4zM8 8h8M8 12h8M8 16h5" />,
  },
  {
    id: "contacto",
    label: "Contacto",
    card: "CONTACTO",
    title: "Tarjeta de presentación",
    text: "Acercan el celular y guardan tu nombre, teléfono, correo y dirección. Adiós a las tarjetas de papel que se pierden.",
    icon: <I d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21a8 8 0 0 1 16 0" />,
  },
  {
    id: "redes",
    label: "Redes sociales",
    card: "SÍGUENOS",
    title: "Facebook, Instagram, TikTok y WhatsApp",
    text: "Un toque y te siguen o te escriben. Ideal para el mostrador, la caja o la mesa.",
    icon: <I d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM8.6 13.5l6.8 4M15.4 6.5l-6.8 4" />,
  },
  {
    id: "resenas",
    label: "Reseñas de Google",
    card: "DÉJANOS 5 ★",
    title: "Más reseñas en Google",
    text: "Se abre directo la ventana para calificarte. Más estrellas = más clientes que te encuentran en Google Maps.",
    icon: <I d="M12 2l3 6.5 7 .9-5.1 4.8 1.3 7L12 17.8 5.8 21.2l1.3-7L2 9.4l7-.9z" />,
  },
  {
    id: "comprar",
    label: "Comprar",
    card: "COMPRA AQUÍ",
    title: "Venta de productos y servicios",
    text: "Llévalos a tu catálogo, tienda en línea o a agendar una cita. Vendes aunque no estés.",
    icon: <I d="M6 6h15l-1.5 9h-12zM6 6L5 2H2M9 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM18 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />,
  },
  {
    id: "pagina",
    label: "Tu página web",
    card: "VISÍTANOS",
    title: "Si ya tienes página, también",
    text: "La tarjeta abre tu sitio web. Y si todavía no tienes, yo te lo creo.",
    icon: <I d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" />,
  },
];

const formats = [
  { t: "Placa de mesa", d: "Base de acrílico para mostrador, caja o cada mesa." },
  { t: "Tarjeta tipo crédito", d: "Tu tarjeta de presentación, siempre en tu cartera." },
  { t: "Llavero NFC", d: "Para traerlo contigo o para tu equipo de trabajo." },
];

const steps = [
  { t: "Elige qué abre", d: "Menú, reseñas, redes, contacto, tienda o tu página." },
  { t: "La diseño con tu marca", d: "Tu logo, tus colores, con QR de respaldo." },
  { t: "La programo y te la entrego", d: "Lista para usar. Si cambias de link, la reprogramo." },
];

const Waves = () => (
  <svg width="40" height="28" viewBox="0 0 40 28" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden>
    <path d="M8 6a12 12 0 0 0 0 16M14 9a7 7 0 0 0 0 10M26 9a7 7 0 0 1 0 10M32 6a12 12 0 0 1 0 16" />
    <text x="20" y="18" textAnchor="middle" fontSize="8" fontWeight="700" fill="currentColor" stroke="none">NFC</text>
  </svg>
);

export function NFC() {
  const [sel, setSel] = useState(uses[3]);

  return (
    <section id="tarjetas-nfc" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_80%_20%,rgb(124_255_61/.08),transparent)]" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          kicker="Tarjetas NFC para negocios"
          title={<>Acerca tu celular y listo</>}
          text="Tu cliente acerca su celular a la tarjeta y se abre lo que tú quieras. Sin apps y sin escanear nada. Toca una opción para ver cómo funciona."
        />

        {/* Demo interactivo */}
        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3" role="tablist" aria-label="¿Qué abre tu tarjeta?">
              {uses.map((u) => {
                const on = u.id === sel.id;
                return (
                  <button
                    key={u.id}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    onClick={() => setSel(u)}
                    className={`flex min-h-[92px] flex-col items-start justify-between gap-3 rounded-2xl border p-4 text-left text-[15px] font-semibold transition duration-300 ${on ? "border-electric/60 bg-electric/10 text-white shadow-[0_0_30px_-10px_rgb(124_255_61/.8)]" : "border-line bg-white/[0.03] text-white/80 hover:border-white/20 hover:bg-white/[0.06]"}`}
                  >
                    <span className={on ? "text-electric" : "text-white/60"}>{u.icon}</span>
                    {u.label}
                  </button>
                );
              })}
            </div>
            <div className="mt-6 rounded-2xl border border-line bg-white/[0.03] p-6" aria-live="polite">
              <h3 className="font-display text-xl font-semibold text-white">{sel.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{sel.text}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="relative mx-auto flex h-[380px] w-full max-w-[420px] items-center justify-center">
              {/* Tarjeta */}
              <div key={sel.id} className="nfc-card absolute left-0 top-10 flex h-[250px] w-[180px] -rotate-6 flex-col items-center justify-between rounded-3xl border border-white/15 bg-[linear-gradient(160deg,#151515,#050505)] p-5 text-center shadow-[0_30px_60px_-20px_rgb(0_0_0/.9),0_0_40px_-15px_rgb(124_255_61/.6)]">
                <span className="font-display text-xs font-bold tracking-[0.25em] text-white/50">TU NEGOCIO</span>
                <span className="text-electric">{sel.icon}</span>
                <span className="font-display text-xl font-bold leading-tight text-white">{sel.card}</span>
                <span className="text-electric"><Waves /></span>
                <span className="text-[10px] text-white/45">Acerca tu celular</span>
              </div>
              {/* Celular */}
              <div className="absolute right-0 top-0 h-[360px] w-[190px] rotate-3 rounded-[2.2rem] border-[6px] border-[#1c1c1c] bg-ink shadow-[0_30px_70px_-20px_rgb(0_0_0/.95)]">
                <div className="mx-auto mt-2 h-4 w-16 rounded-full bg-[#1c1c1c]" />
                <div key={sel.id + "p"} className="nfc-screen flex h-[calc(100%-2rem)] flex-col items-center justify-center gap-4 p-5 text-center">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-electric/15 text-electric">{sel.icon}</span>
                  <p className="font-display text-base font-semibold text-white">{sel.title}</p>
                  <div className="w-full space-y-2">
                    <span className="block h-2 rounded bg-white/10" />
                    <span className="block h-2 w-4/5 rounded bg-white/10" />
                    <span className="block h-2 w-3/5 rounded bg-white/10" />
                  </div>
                  <span className="rounded-full bg-electric px-4 py-1.5 text-xs font-bold text-[#05120a]">Abierto ✓</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Formatos + pasos */}
        <div className="mt-20 grid gap-5 lg:grid-cols-2">
          <Reveal>
            <article onMouseMove={trackSpot} className="spot h-full rounded-3xl border border-line bg-gradient-to-b from-white/[0.045] to-white/[0.01] p-7 sm:p-8">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-white">Formatos</h3>
              <ul className="mt-6 space-y-4">
                {formats.map((f) => (
                  <li key={f.t} className="flex gap-3">
                    <svg className="mt-1 shrink-0 text-electric" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden><path d="M5 12l5 5L20 7" /></svg>
                    <p><span className="font-semibold text-white">{f.t}.</span> <span className="text-muted">{f.d}</span></p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-white/55">Ideal para restaurantes, taquerías, barberías, salones de uñas, talleres y consultorios.</p>
            </article>
          </Reveal>
          <Reveal>
            <article onMouseMove={trackSpot} className="spot h-full rounded-3xl border border-line bg-gradient-to-b from-white/[0.045] to-white/[0.01] p-7 sm:p-8">
              <h3 className="font-display text-2xl font-semibold tracking-tight text-white">Así de fácil</h3>
              <ol className="mt-6 space-y-5">
                {steps.map((s, i) => (
                  <li key={s.t} className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-electric/15 font-display text-sm font-bold text-electric">{i + 1}</span>
                    <div>
                      <p className="font-semibold text-white">{s.t}</p>
                      <p className="text-[15px] text-muted">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          </Reveal>
        </div>

        {/* Precio + sistema */}
        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1.3fr]">
          <Reveal>
            <div className="flex h-full flex-col justify-between gap-6 rounded-3xl bg-[linear-gradient(135deg,#d6ffb8,#7cff3d_45%,#2fd45a)] p-7 text-[#05120a] sm:p-8">
              <div>
                <p className="text-sm font-semibold text-[#0d2e15]">Tarjeta NFC programada</p>
                <p className="mt-1 font-display text-5xl font-bold tracking-tight">$450<span className="ml-1 text-base font-semibold opacity-70">MXN</span></p>
                <p className="mt-1 font-semibold">Pago único · sin mensualidades</p>
                <p className="mt-3 text-sm text-[#0d2e15]">¿Necesitas varias? Pregunta por precio especial por volumen. Envíos a todo México.</p>
              </div>
              <a href={waLink("Hola Flympux LAB, quiero una tarjeta NFC para mi negocio.")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#05120a] px-7 font-semibold text-electric transition hover:-translate-y-0.5">
                Pedir mi tarjeta
              </a>
            </div>
          </Reveal>
          <Reveal>
            <div onMouseMove={trackSpot} className="spot ring-gradient flex h-full flex-col justify-between gap-6 rounded-3xl bg-white/[0.03] p-7 sm:p-8">
              <div>
                <p className="text-sm font-semibold text-electric">¿No tienes página ni menú digital?</p>
                <h3 className="mt-2 font-display text-3xl font-semibold leading-tight tracking-tight text-white">Yo te lo creo. Todo interactivo, nada de información estática.</h3>
                <p className="mt-3 leading-relaxed text-muted">Tu menú, catálogo o página con fotos, precios, botón de WhatsApp y ubicación. Lo actualizas cuando quieras y tu tarjeta NFC apunta ahí.</p>
              </div>
              <div>
                <Button href={waLink("Hola Flympux LAB, quiero tarjeta NFC y que me crees mi página / menú digital.")} external icon="whatsapp" size="sm">Cotizar tarjeta + página</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
