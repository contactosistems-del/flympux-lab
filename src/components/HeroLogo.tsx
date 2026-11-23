"use client";
/* eslint-disable @next/next/no-img-element */
import { useRef, type MouseEvent } from "react";

/**
 * Logo FLX flotante con:
 *  - inclinación 3D que sigue al cursor
 *  - anillos orbitales y partículas
 *  - destello metálico que recorre el logo
 */
export function HeroLogo() {
  const stage = useRef<HTMLDivElement>(null);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = stage.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-y * 14).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * 18).toFixed(2)}deg`);
  };
  const onLeave = () => {
    stage.current?.style.setProperty("--rx", "0deg");
    stage.current?.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto aspect-square w-full max-w-[580px] [perspective:1200px]"
      aria-hidden
    >
      {/* Resplandor de fondo */}
      <div className="absolute inset-[14%] rounded-full bg-electric/20 blur-[90px] animate-glow" />

      {/* Anillos orbitales */}
      <div className="absolute inset-[4%] rounded-full border border-white/[0.07]" />
      <div className="absolute inset-[4%] rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,#c8ff9e_40deg,#7cff3d_90deg,transparent_160deg)] opacity-70 animate-spin-slow [mask:radial-gradient(circle,transparent_69.3%,#000_69.6%,#000_70.6%,transparent_71%)]" />
      <div className="absolute inset-0 rounded-full border border-dashed border-white/10 animate-spin-rev" />

      {/* Partículas en órbita */}
      <div className="absolute inset-[4%] animate-spin-orbit">
        <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric shadow-[0_0_18px_4px_rgb(124_255_61/.8)]" />
      </div>
      <div className="absolute inset-0 animate-spin-orbit-rev">
        <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-white shadow-[0_0_14px_3px_rgb(255_255_255/.7)]" />
      </div>
      <div className="absolute inset-[2%] animate-spin-orbit [animation-duration:14s]">
        <span className="absolute left-0 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/80 shadow-[0_0_12px_3px_rgb(124_255_61/.6)]" />
      </div>

      {/* Logo flotante con inclinación 3D */}
      <div className="absolute inset-0 grid place-items-center animate-floaty">
        <div
          ref={stage}
          className="relative w-[80%] transition-transform duration-300 ease-out [transform-style:preserve-3d] [transform:rotateX(var(--rx,0deg))_rotateY(var(--ry,0deg))]"
        >
          <img
            src="/img/flx-logo-hero.webp"
            alt="Flympux LAB"
            width={1000}
            height={1000}
            className="relative w-full drop-shadow-[0_0_40px_rgb(124_255_61/.25)]"
          />
          {/* Destello metálico recortado a la forma del logo */}
          <div
            className="pointer-events-none absolute inset-0 overflow-hidden mix-blend-overlay [mask-image:url(/img/flx-logo-hero.webp)] [mask-size:100%_100%] [-webkit-mask-image:url(/img/flx-logo-hero.webp)] [-webkit-mask-size:100%_100%]"
          >
            <span className="absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/90 to-transparent animate-shine" />
          </div>
        </div>
      </div>

      {/* Sombra/reflejo que acompaña la flotación */}
      <div className="absolute bottom-[14%] left-1/2 h-6 w-[46%] -translate-x-1/2 rounded-[50%] bg-electric/25 blur-xl animate-shadow" />

      {/* Notificaciones flotantes */}
      <div className="absolute right-[0%] top-[10%] flex items-center gap-3 rounded-xl border border-white/10 bg-[#0e0e0e]/85 px-3.5 py-2.5 shadow-2xl backdrop-blur-xl animate-floaty [animation-delay:-2s]">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-cyan to-electric">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#05120a" strokeWidth="2.6" strokeLinecap="round"><path d="M5 12l5 5L20 7" /></svg>
        </span>
        <div><p className="text-[11px] font-semibold text-white">Despliegue exitoso</p><p className="text-[10px] text-white/45">Producción · hace 2 s</p></div>
      </div>
      <div className="absolute bottom-[6%] left-[2%] flex items-center gap-2 rounded-full border border-white/10 bg-[#0e0e0e]/85 px-3 py-1.5 text-[11px] font-medium text-white/70 backdrop-blur animate-floaty [animation-delay:-4s]">
        <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse-dot" />Servidor en línea
      </div>
      <div className="absolute bottom-[16%] right-[2%] rounded-xl border border-white/10 bg-[#0a0a0a]/85 px-3.5 py-2.5 font-mono text-[11px] text-white/75 backdrop-blur-xl animate-floaty [animation-delay:-5s]">
        <span className="text-violet">const</span> idea = <span className="text-electric">&quot;realidad&quot;</span>;
      </div>
    </div>
  );
}
