import { site, waLink } from "@/lib/site";
import { WhatsAppIcon } from "./ui";

export const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
  </svg>
);

export const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
    <circle cx="12" cy="12" r="4.3" />
    <circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none" />
  </svg>
);

type Net = { key: string; label: string; href: string; icon: React.ReactNode; hover: string };

export const networks = (): Net[] => [
  { key: "facebook", label: "Facebook", href: site.social.facebook, icon: <FacebookIcon />, hover: "hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white" },
  { key: "instagram", label: "Instagram", href: site.social.instagram, icon: <InstagramIcon />, hover: "hover:border-transparent hover:bg-[linear-gradient(45deg,#f9ce34,#ee2a7b,#6228d7)] hover:text-white" },
  { key: "whatsapp", label: "WhatsApp", href: waLink(), icon: <WhatsAppIcon size={20} />, hover: "hover:border-[#25D366] hover:bg-[#25D366] hover:text-white" },
];

/** Botones de redes. Si una URL está pendiente en la configuración, el botón se muestra desactivado. */
export function SocialButtons({ withLabels = false }: { withLabels?: boolean }) {
  return (
    <ul className="flex flex-wrap gap-2.5">
      {networks().map((n) => {
        const base = `inline-flex h-11 items-center gap-2 rounded-full border border-white/12 text-white/75 transition duration-300 ${withLabels ? "px-4 text-sm font-medium" : "w-11 justify-center"}`;
        return (
          <li key={n.key}>
            {n.href ? (
              <a href={n.href} target="_blank" rel="noopener noreferrer" aria-label={`${n.label} de Flympux LAB (se abre en una pestaña nueva)`} className={`${base} ${n.hover} hover:-translate-y-0.5`}>
                {n.icon}{withLabels && n.label}
              </a>
            ) : (
              <span aria-disabled="true" title={`${n.label}: enlace pendiente de configurar`} className={`${base} cursor-not-allowed opacity-40`}>
                {n.icon}{withLabels && <>{n.label} <small className="text-[10px] uppercase tracking-wider">pronto</small></>}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

/** Botón flotante de WhatsApp visible en todas las páginas. */
export function WhatsAppFloat() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp (se abre en una pestaña nueva)"
      className="group fixed bottom-5 right-5 z-[60] flex items-center gap-3 rounded-full bg-[#25D366] p-4 text-white shadow-[0_12px_40px_-8px_rgb(37_211_102/.7)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_50px_-8px_rgb(37_211_102/.9)] sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40 [animation-duration:2.6s]" aria-hidden />
      <WhatsAppIcon size={28} />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap pr-0 text-sm font-semibold transition-all duration-500 group-hover:max-w-[160px] group-hover:pr-2 sm:inline">
        ¿Hablamos?
      </span>
    </a>
  );
}
