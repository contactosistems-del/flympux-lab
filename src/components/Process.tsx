import { Reveal, SectionHeader } from "./ui";

const steps = [
  { t: "Análisis de necesidades", d: "Entendemos tu negocio, tus objetivos y los problemas que quieres resolver." },
  { t: "Planeación", d: "Definimos alcance, funcionalidades, tiempos y presupuesto por escrito." },
  { t: "Diseño", d: "Creamos la experiencia y la interfaz. Las revisas y apruebas antes de programar." },
  { t: "Desarrollo", d: "Construimos con tecnología moderna y te mostramos avances funcionales." },
  { t: "Pruebas", d: "Revisamos funcionamiento, velocidad, seguridad y compatibilidad en todos los dispositivos." },
  { t: "Entrega y soporte", d: "Publicamos, capacitamos a tu equipo y te acompañamos después del lanzamiento." },
];

export function Process() {
  return (
    <section id="proceso" className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-ink-2 to-transparent" aria-hidden />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader center kicker="Proceso de trabajo" title={<>De la idea al lanzamiento</>} />
        <ol className="relative mt-12 grid gap-y-12 md:grid-cols-3 md:gap-x-6 lg:grid-cols-6">
          <span className="absolute left-[23px] top-6 bottom-6 w-px bg-gradient-to-b from-cyan via-electric to-violet md:hidden" aria-hidden />
          <span className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-cyan/0 via-electric/60 to-violet/0 lg:block" aria-hidden />
          {steps.map((s, i) => (
            <li key={s.t} className="relative pl-16 md:pl-0">
              <Reveal delay={i * 90}>
                <span className="absolute left-0 top-0 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-ink font-display text-sm font-semibold text-white shadow-[0_0_0_6px_var(--color-ink)] md:relative">
                  <span className="absolute inset-0 rounded-2xl bg-gradient-to-br from-electric/30 to-violet/20" />
                  <span className="relative">{String(i + 1).padStart(2, "0")}</span>
                </span>
                <h3 className="font-display text-lg font-semibold text-white md:mt-6">{s.t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.d}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
