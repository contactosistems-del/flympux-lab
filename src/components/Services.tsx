"use client";
import { Reveal, SectionHeader, trackSpot } from "./ui";

const icons: Record<string, React.ReactNode> = {
  code: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16" />,
  web: <><rect x="3" y="4" width="18" height="16" rx="2.5" /><path d="M3 9h18M7 6.5h.01M10 6.5h.01" /></>,
  cart: <><path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 8H6.2" /><circle cx="10" cy="20" r="1.3" /><circle cx="17" cy="20" r="1.3" /></>,
  admin: <><rect x="3" y="3" width="7" height="9" rx="1.5" /><rect x="14" y="3" width="7" height="5" rx="1.5" /><rect x="14" y="12" width="7" height="9" rx="1.5" /><rect x="3" y="16" width="7" height="5" rx="1.5" /></>,
  auto: <><path d="M12 3v3M12 18v3M4.2 7.5l2.6 1.5M17.2 15l2.6 1.5M4.2 16.5l2.6-1.5M17.2 9l2.6-1.5" /><circle cx="12" cy="12" r="4" /></>,
  app: <><rect x="6" y="2.5" width="12" height="19" rx="2.5" /><path d="M10 18.5h4" /><path d="M9 7h6M9 10.5h6M9 14h3" /></>,
  support: <><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3.5 17.5a1.8 1.8 0 0 0 2.6 2.6l5.8-5.8a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.3-.3-.3-2.3z" /></>,
};

const services = [
  { icon: "code", title: "Desarrollo de software a medida", img: "/img/team-coding.webp", text: "Soluciones construidas desde cero para los procesos reales de tu empresa: sin licencias innecesarias y con el control total de tu sistema.", tags: ["Arquitectura escalable", "Integraciones", "Código propio"], wide: true },
  { icon: "web", title: "Páginas web empresariales", img: "/img/desk-coding.webp", text: "Sitios rápidos, optimizados para Google y diseñados para convertir visitas en clientes.", tags: ["SEO", "Responsive"] },
  { icon: "cart", title: "Tiendas en línea", img: "/img/workspace.webp", text: "E-commerce con catálogo, carrito, pagos en línea y panel para administrar pedidos e inventario.", tags: ["Pagos", "Inventario"] },
  { icon: "admin", title: "Sistemas administrativos", img: "/img/office-dark.webp", text: "Control de clientes, ventas, inventarios, personal y reportes en un solo panel, accesible desde cualquier lugar.", tags: ["Reportes", "Roles y permisos"] },
  { icon: "auto", title: "Automatización de procesos", img: "/img/server-room.webp", text: "Eliminamos tareas repetitivas: formularios, notificaciones, reportes automáticos y flujos entre tus herramientas.", tags: ["Ahorro de tiempo", "Menos errores"] },
  { icon: "app", title: "Aplicaciones web", img: "/img/team-tablets.webp", text: "Plataformas que funcionan en navegador y celular, con inicio de sesión, base de datos y experiencia de app.", tags: ["Multiplataforma", "Nube"] },
  { icon: "support", title: "Mantenimiento y soporte técnico", img: "/img/hdd-install.webp", text: "Actualizaciones, respaldos, monitoreo y mejoras continuas para que tu tecnología nunca se detenga.", tags: ["Respaldos", "Mejoras continuas"], wide: true },
];

export function Services() {
  return (
    <section id="servicios" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          kicker="Servicios"
          title={<>Todo lo que tu empresa necesita para operar en digital</>}
          text="Desde una página web profesional hasta sistemas complejos. Cada proyecto se diseña según tus objetivos, tu presupuesto y la forma en que trabaja tu equipo."
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 90} className={s.wide ? "sm:col-span-2 lg:col-span-2" : ""}>
              <article
                onMouseMove={trackSpot}
                className="spot group h-full overflow-hidden rounded-3xl border border-line bg-gradient-to-b from-white/[0.045] to-white/[0.01] transition duration-500 hover:-translate-y-1 hover:border-electric/40 hover:shadow-[0_30px_80px_-30px_rgb(124_255_61/.45)]"
              >
                <div className="relative h-44 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt="" aria-hidden loading="lazy" className="h-full w-full object-cover grayscale-[35%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/40 to-transparent" />
                  <div className="absolute inset-0 bg-electric/10 mix-blend-color" />
                </div>
                <div className="-mt-10 relative p-7 pt-0 sm:p-8 sm:pt-0">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-[#0e0e0e] bg-gradient-to-br from-electric/25 to-violet/10 text-cyan transition duration-500 group-hover:scale-110 group-hover:text-white">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>{icons[s.icon]}</svg>
                  </span>
                  <span className="font-display text-sm text-white/25">0{i + 1}</span>
                </div>
                <h3 className="mt-7 font-display text-[22px] font-semibold tracking-tight text-white">{s.title}</h3>
                <p className="mt-3 max-w-xl leading-relaxed text-muted">{s.text}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li key={t} className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-white/65">{t}</li>
                  ))}
                </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
