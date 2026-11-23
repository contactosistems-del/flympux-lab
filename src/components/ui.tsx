"use client";
import { type ReactNode, type MouseEvent } from "react";

/** Aparece suavemente al entrar en pantalla (animación 100% CSS, visible aunque falle JavaScript). */
export function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  void delay;
  return <div className={`reveal ${className}`}>{children}</div>;
}

/** Mueve el reflector de la tarjeta con el cursor. */
export const trackSpot = (e: MouseEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

export function SectionHeader({ kicker, title, text, center = false }: { kicker: string; title: ReactNode; text?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="inline-flex items-center gap-2 text-sm font-medium text-cyan">
        <span className="h-px w-8 bg-gradient-to-r from-transparent to-cyan" aria-hidden />
        {kicker}
      </p>
      <h2 className="mt-4 font-display text-[clamp(32px,4.6vw,54px)] font-semibold leading-[1.04] tracking-[-0.03em] text-balance text-gradient">
        {title}
      </h2>
      {text && <p className={`mt-5 text-lg leading-relaxed text-muted ${center ? "mx-auto" : ""} max-w-2xl`}>{text}</p>}
    </Reveal>
  );
}

type BtnIcon = "arrow" | "whatsapp" | "none";

export function Button({ href, children, variant = "primary", external = false, icon, size = "md", className = "" }: { href: string; children: ReactNode; variant?: "primary" | "ghost"; external?: boolean; icon?: BtnIcon; size?: "sm" | "md"; className?: string }) {
  const ic: BtnIcon = icon ?? (variant === "primary" ? "arrow" : "none");
  const sm = size === "sm";
  const base = `group relative isolate inline-flex items-center justify-center overflow-hidden rounded-full font-semibold tracking-[-0.01em] transition-all duration-300 active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric ${sm ? "min-h-10 text-sm" : "min-h-[52px] text-[15px]"} ${ic === "none" ? (sm ? "px-5" : "px-7") : sm ? "gap-2.5 pl-5 pr-1" : "gap-3 pl-7 pr-1.5"}`;
  const styles = variant === "primary"
    ? "bg-[linear-gradient(135deg,#d6ffb8_0%,#7cff3d_45%,#2fd45a_100%)] text-[#05120a] shadow-[inset_0_1px_0_rgb(255_255_255/.65),inset_0_-2px_0_rgb(0_0_0/.12),0_10px_34px_-8px_rgb(124_255_61/.75)] hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgb(255_255_255/.7),inset_0_-2px_0_rgb(0_0_0/.12),0_16px_50px_-8px_rgb(124_255_61/.95)]"
    : "ring-gradient bg-white/[0.04] text-white backdrop-blur-md shadow-[inset_0_1px_0_rgb(255_255_255/.08)] hover:-translate-y-0.5 hover:bg-white/[0.08]";
  const iconBox = `relative grid shrink-0 place-items-center rounded-full transition-transform duration-500 group-hover:-rotate-45 ${sm ? "h-8 w-8" : "h-10 w-10"} ${variant === "primary" ? "bg-[#05120a] text-electric" : "bg-white/10 text-white group-hover:bg-electric group-hover:text-[#05120a]"}`;
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={`${base} ${styles} ${className}`}>
      <span className="pointer-events-none absolute inset-y-0 -left-1/3 -z-10 w-1/3 -skew-x-12 bg-white/40 blur-md opacity-0 group-hover:opacity-100 group-hover:animate-beam" aria-hidden />
      <span className="relative">{children}</span>
      {ic !== "none" && (
        <span className={iconBox} aria-hidden>
          {ic === "whatsapp" ? <span className="transition-transform duration-500 group-hover:rotate-45"><WhatsAppIcon size={sm ? 15 : 18} /></span> : (
            <svg width={sm ? 14 : 16} height={sm ? 14 : 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          )}
        </span>
      )}
    </a>
  );
}

export const Arrow = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" className="transition-transform group-hover:translate-x-0.5" aria-hidden>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.3.5-.4.5c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l2 .9c.3.1.5.2.5.3.1.2.1.7-.1 1.4z" />
  </svg>
);
