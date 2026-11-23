import { Button } from "./ui";
import { HeroLogo } from "./HeroLogo";
import { waLink } from "@/lib/site";

const stack = ["React", "Next.js", "Angular", "Python", "FastAPI", "Node.js", "PostgreSQL", "MySQL", "AWS", "Vercel"];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pt-[72px]">
      {/* Fondo: foto abstracta + rejilla + luces */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-[url('/img/waves-navy.webp')] bg-cover bg-center opacity-60 grayscale brightness-[.8] contrast-125" />
        <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_70%_60%_at_60%_40%,#000,transparent_75%)]" />
        <div className="absolute -top-40 left-1/2 h-[620px] w-[920px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-[140px]" />
        <div className="absolute right-[-10%] top-[30%] h-[460px] w-[520px] rounded-full bg-electric/[0.07] blur-[130px]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-14 sm:px-8 lg:min-h-[calc(100svh-72px)] lg:grid-cols-[1.05fr_1fr] lg:pb-24 lg:pt-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] py-1.5 pl-2 pr-4 text-[13px] font-medium text-white/80 backdrop-blur">
            <span className="rounded-full bg-gradient-to-r from-electric to-violet px-2 py-0.5 text-[11px] font-semibold text-[#05120a]">Nuevo</span>
            Software, sistemas y páginas web a la medida
          </span>
          <h1 className="mt-7 font-display text-[clamp(44px,6.4vw,78px)] font-semibold leading-[0.98] tracking-[-0.045em] text-balance">
            <span className="text-gradient">Transformamos ideas en </span>
            <span className="text-accent">soluciones digitales.</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
            Diseñamos y desarrollamos software a medida, sitios web empresariales, tiendas en línea y sistemas que hacen crecer tu negocio. Con atención directa y tecnología moderna.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="/#contacto">Solicitar cotización</Button>
            <Button href={waLink()} external variant="ghost" icon="whatsapp">Hablar por WhatsApp</Button>
          </div>
          <div className="mt-12">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">Tecnologías con las que trabajamos</p>
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-white/55">
              {stack.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </div>

        <HeroLogo />
      </div>
    </section>
  );
}

