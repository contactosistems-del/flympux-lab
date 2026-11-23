import Link from "next/link";
import { Logo } from "./Logo";
import { SocialButtons } from "./Social";
import { nav, site, waLink } from "@/lib/site";

const servicios = ["Software a medida", "Páginas web empresariales", "Tiendas en línea", "Sistemas administrativos", "Automatización de procesos", "Aplicaciones web", "Mantenimiento y soporte"];

export function Footer() {
  return (
    <footer className="border-t border-line bg-ink-2/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs leading-relaxed text-muted">Desarrollo de software, sistemas y páginas web para empresas y emprendedores.</p>
          <div className="mt-6"><SocialButtons /></div>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold text-white">Servicios</h2>
          <ul className="mt-4 space-y-2.5 text-[15px] text-muted">{servicios.map((s) => <li key={s}><Link href="/#servicios" className="hover:text-white">{s}</Link></li>)}</ul>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold text-white">Navegación</h2>
          <ul className="mt-4 space-y-2.5 text-[15px] text-muted">
            <li><Link href="/#inicio" className="hover:text-white">Inicio</Link></li>
            {nav.map((n) => <li key={n.href}><Link href={n.href} className="hover:text-white">{n.label}</Link></li>)}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold text-white">Contacto</h2>
          <ul className="mt-4 space-y-2.5 text-[15px] text-muted">
            <li><a href={waLink()} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp: {site.whatsappDisplay}</a></li>
            {site.email && <li><a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a></li>}
            <li>{site.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-6 text-sm text-white/45 sm:px-8">
          <p>© {new Date().getFullYear()} {site.legalName}. Todos los derechos reservados.</p>
          <Link href="/aviso-de-privacidad/" className="hover:text-white">Aviso de privacidad</Link>
        </div>
      </div>
    </footer>
  );
}
