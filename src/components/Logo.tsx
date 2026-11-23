/* eslint-disable @next/next/no-img-element */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src="/img/flx-logo.webp"
        alt="Flympux LAB"
        width={160}
        height={160}
        className="h-11 w-11 rounded-full shadow-[0_0_18px_rgb(124_255_61/.25)]"
      />
      <span className="hidden font-display text-[15px] font-semibold tracking-[0.18em] text-white/85 sm:inline">
        FLYMPUX <span className="text-accent">LAB</span>
      </span>
    </span>
  );
}
