import { Reveal, SectionHeader, Button } from "./ui";

const reasons = [
  { t: "Calidad", d: "Código limpio, documentado y probado, listo para crecer." },
  { t: "Soluciones a la medida", d: "Nada de plantillas genéricas: todo responde a cómo opera tu negocio." },
  { t: "Comunicación directa", d: "Hablas con quien desarrolla tu proyecto, sin intermediarios." },
  { t: "Tecnología moderna", d: "Herramientas actuales y probadas por empresas líderes." },
  { t: "Acompañamiento", d: "Soporte, ajustes y mejoras también después de la entrega." },
];

export function About() {
  return (
    <section id="nosotros" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute left-[-20%] top-1/3 -z-10 h-[500px] w-[600px] rounded-full bg-white/[0.03] blur-[140px]" aria-hidden />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr]">
        <Reveal className="relative">
          <div className="ring-gradient relative overflow-hidden rounded-[28px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/team-coding.webp" alt="Equipo trabajando en el desarrollo de un proyecto de software" className="aspect-[4/3.6] w-full object-cover" loading="lazy" width={1600} height={1067} />
            <div className="absolute inset-0 bg-gradient-to-tr from-ink/85 via-ink/10 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-ink/70 p-5 backdrop-blur-xl">
              <p className="font-display text-lg font-semibold text-white">“Cada línea de código tiene un objetivo de negocio.”</p>
              <p className="mt-1 text-sm text-muted">Principio de trabajo de Flympux LAB</p>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeader
            kicker="Nosotros"
            title={<>Tecnología seria, trato cercano</>}
            text="Flympux LAB es un laboratorio de software que acerca desarrollo de nivel empresarial a negocios de todos los tamaños. Escuchamos, diseñamos y construimos contigo."
          />
          <ul className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {reasons.map((r) => (
              <li key={r.t} className="group flex gap-4">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-cyan to-violet text-ink transition group-hover:scale-110" aria-hidden>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M5 12l5 5L20 7" /></svg>
                </span>
                <div>
                  <h3 className="font-display text-[17px] font-semibold text-white">{r.t}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">{r.d}</p>
                </div>
              </li>
            ))}
          </ul>
          <Reveal className="mt-10"><Button href="/#contacto">Hablemos de tu proyecto</Button></Reveal>
        </div>
      </div>
    </section>
  );
}
