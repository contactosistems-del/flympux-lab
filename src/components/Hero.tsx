import { Button } from "./ui";
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

        <HeroVisual />
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[1/1] w-full max-w-[560px]" aria-hidden>
      {/* Anillo luminoso */}
      <div className="absolute inset-[6%] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,#c8ff9e_60deg,#7cff3d_140deg,#22c55e_220deg,transparent_300deg)] opacity-60 blur-[2px] animate-spin-slow [mask:radial-gradient(circle,transparent_63%,#000_64%,#000_65%,transparent_66%)]" />
      <div className="absolute inset-[18%] rounded-full bg-gradient-to-br from-electric/30 via-violet/20 to-transparent blur-3xl" />
      <div className="absolute inset-[22%] rounded-full border border-white/10" />
      <div className="absolute inset-[34%] rounded-full border border-dashed border-white/10" />

      {/* Panel de sistema administrativo */}
      <div className="ring-gradient absolute left-[2%] top-[14%] w-[80%] sm:left-[4%] sm:w-[66%] rounded-2xl bg-[#0e0e0e]/85 p-4 shadow-[0_30px_80px_-20px_rgb(0_0_0/.8)] backdrop-blur-xl animate-floaty">
        <div className="flex items-center justify-between">
          <div className="flex gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-white/15" /><i className="h-2.5 w-2.5 rounded-full bg-white/15" /><i className="h-2.5 w-2.5 rounded-full bg-white/15" /></div>
          <span className="text-[10px] font-medium text-white/40">panel.tuempresa.com</span>
        </div>
        <p className="mt-4 text-[11px] font-medium text-white/50">Ventas del mes</p>
        <div className="mt-1 flex items-end justify-between">
          <p className="font-display text-2xl font-semibold text-white">$284,520</p>
          <span className="rounded-md bg-emerald-400/10 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-300">+18.4%</span>
        </div>
        <div className="mt-4 flex h-24 items-end gap-1.5">
          {[40, 62, 48, 75, 58, 88, 70, 96, 80, 100, 86, 92].map((h, i) => (
            <span key={i} className="flex-1 rounded-t-[3px] bg-gradient-to-t from-electric/40 to-cyan animate-bar" style={{ height: `${h}%`, animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-[10px]">
          {[["Pedidos", "1,284"], ["Clientes", "642"], ["Tickets", "38"]].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-white/5 bg-white/[0.03] p-2"><p className="text-white/45">{k}</p><p className="mt-0.5 text-sm font-semibold text-white">{v}</p></div>
          ))}
        </div>
      </div>

      {/* Editor de código */}
      <div className="ring-gradient absolute bottom-[10%] right-[2%] w-[88%] overflow-hidden whitespace-nowrap rounded-2xl bg-[#0a0a0a]/90 p-4 font-mono text-[10px] sm:w-[60%] sm:text-[11px] leading-relaxed shadow-[0_30px_80px_-20px_rgb(0_0_0/.9)] backdrop-blur-xl animate-floaty [animation-delay:-3s]">
        <div className="mb-3 flex items-center gap-2 text-[10px] text-white/40"><span className="h-2 w-2 rounded-full bg-violet" />api/cotizaciones.ts</div>
        <p><span className="text-violet">export async function</span> <span className="text-cyan">crearCotizacion</span><span className="text-white/60">(datos)</span> {"{"}</p>
        <p className="pl-4"><span className="text-violet">const</span> <span className="text-white/80">cliente</span> = <span className="text-violet">await</span> <span className="text-cyan">db</span>.clientes.<span className="text-cyan">upsert</span>(datos);</p>
        <p className="pl-4"><span className="text-violet">await</span> <span className="text-cyan">notificar</span>(<span className="text-amber-200">&quot;whatsapp&quot;</span>, cliente);</p>
        <p className="pl-4"><span className="text-violet">return</span> {"{"} ok: <span className="text-emerald-300">true</span> {"}"};</p>
        <p>{"}"}</p>
      </div>

      {/* Notificación */}
      <div className="absolute right-[4%] top-[8%] flex items-center gap-3 rounded-xl border border-white/10 bg-[#111111]/90 px-3.5 py-2.5 shadow-2xl backdrop-blur-xl animate-floaty [animation-delay:-1.5s]">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan to-electric">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#05120a" strokeWidth="2.6" strokeLinecap="round"><path d="M5 12l5 5L20 7" /></svg>
        </span>
        <div><p className="text-[11px] font-semibold text-white">Despliegue exitoso</p><p className="text-[10px] text-white/45">Producción · hace 2 s</p></div>
      </div>

      <div className="absolute bottom-[4%] left-[8%] flex items-center gap-2 rounded-full border border-white/10 bg-[#111111]/85 px-3 py-1.5 text-[11px] font-medium text-white/70 backdrop-blur">
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-dot" />Servidor en línea
      </div>
    </div>
  );
}
