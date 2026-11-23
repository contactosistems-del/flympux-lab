/* eslint-disable @next/next/no-img-element */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src="/img/flx-logo.webp"
        alt="Flympux LAB"
        width={400}
        height={225}
        className="h-11 w-auto [mask-image:radial-gradient(ellipse_72%_72%_at_50%_50%,#000_60%,transparent_100%)]"
      />
      <span className="hidden font-display text-[15px] font-semibold tracking-[0.18em] text-white/85 sm:inline">
        FLYMPUX <span className="text-accent">LAB</span>
      </span>
    </span>
  );
}
