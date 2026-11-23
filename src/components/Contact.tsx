"use client";
import Link from "next/link";
import { useState, type FormEvent } from "react";
import { Reveal, SectionHeader, WhatsAppIcon } from "./ui";
import { site, waLink } from "@/lib/site";
import { SocialButtons } from "./Social";

const servicios = [
  "Desarrollo de software a medida", "Página web empresarial", "Tienda en línea (e-commerce)",
  "Sistema administrativo", "Automatización de procesos", "Aplicación web", "Mantenimiento y soporte técnico", "Otro",
];
const presupuestos = ["Aún no lo sé", "Menos de $10,000 MXN", "$10,000 – $30,000 MXN", "$30,000 – $80,000 MXN", "Más de $80,000 MXN"];

type Data = { nombre: string; empresa: string; correo: string; telefono: string; servicio: string; presupuesto: string; mensaje: string; acepto: boolean };
type Errors = Partial<Record<keyof Data, string>>;
const empty: Data = { nombre: "", empresa: "", correo: "", telefono: "", servicio: "", presupuesto: "", mensaje: "", acepto: false };

function validate(d: Data): Errors {
  const e: Errors = {};
  if (d.nombre.trim().length < 2) e.nombre = "Escribe tu nombre.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(d.correo.trim())) e.correo = "Escribe un correo válido.";
  if (d.telefono.replace(/\D/g, "").length < 10) e.telefono = "Escribe un teléfono de 10 dígitos.";
  if (!d.servicio) e.servicio = "Selecciona un servicio.";
  if (d.mensaje.trim().length < 15) e.mensaje = "Cuéntanos un poco más (mínimo 15 caracteres).";
  if (!d.acepto) e.acepto = "Debes aceptar el aviso de privacidad.";
  return e;
}

const buildMessage = (d: Data) =>
  [
    "Hola Flympux LAB, quiero solicitar una cotización.",
    `Nombre: ${d.nombre}`, d.empresa && `Empresa: ${d.empresa}`, `Correo: ${d.correo}`, `Teléfono: ${d.telefono}`,
    `Servicio: ${d.servicio}`, d.presupuesto && `Presupuesto: ${d.presupuesto}`, `Proyecto: ${d.mensaje}`,
  ].filter(Boolean).join("\n");

export function Contact() {
  const [d, setD] = useState<Data>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [waUrl, setWaUrl] = useState("");

  const set = <K extends keyof Data>(k: K, v: Data[K]) => {
    setD((p) => ({ ...p, [k]: v }));
    if (errors[k]) setErrors((p) => ({ ...p, [k]: undefined }));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs = validate(d);
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    const url = waLink(buildMessage(d));
    setWaUrl(url);
    if (site.formEndpoint) {
      setStatus("sending");
      try {
        const r = await fetch(site.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) });
        setStatus(r.ok ? "done" : "error");
      } catch { setStatus("error"); }
    } else {
      setStatus("done");
    }
  }

  const field = "mt-2 block w-full rounded-xl border bg-white/[0.03] px-4 py-3.5 text-base text-white placeholder:text-white/30 outline-none transition focus:border-electric focus:bg-white/[0.05] focus:ring-4 focus:ring-electric/15";
  const cls = (k: keyof Data) => `${field} ${errors[k] ? "border-rose-400/70" : "border-white/10"}`;
  const Err = ({ k }: { k: keyof Data }) => errors[k] ? <p id={`e-${k}`} className="mt-1.5 text-sm text-rose-300" role="alert">{errors[k]}</p> : null;
  const aria = (k: keyof Data) => ({ id: `f-${k}`, "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `e-${k}` : undefined });

  return (
    <section id="contacto" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute bottom-0 left-1/2 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-[150px]" aria-hidden />
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeader kicker="Contacto" title={<>Cuéntanos tu idea y te enviamos una cotización</>} text="Cuéntanos qué necesitas y te respondemos con una propuesta a la medida de tu proyecto." />
          <Reveal className="mt-10 space-y-4">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-[#25D366]/60 hover:bg-[#25D366]/[0.06]">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#25D366] text-white"><WhatsAppIcon size={24} /></span>
              <span><span className="block text-sm text-muted">Escríbenos por WhatsApp</span><span className="font-display text-xl font-semibold text-white">{site.whatsappDisplay}</span></span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-electric to-violet text-[#05120a]">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>
              </span>
              <span><span className="block text-sm text-muted">{site.coverage}</span><span className="font-display text-lg font-semibold text-white">{site.location}</span></span>
            </div>
            <div className="pt-2"><p className="mb-3 text-sm text-muted">Síguenos en redes</p><SocialButtons withLabels /></div>
          </Reveal>
        </div>

        <Reveal>
          <div className="ring-gradient rounded-[28px] bg-ink-2/80 p-6 backdrop-blur-xl sm:p-10">
            {status === "done" || status === "error" ? (
              <div className="py-10 text-center" role="status" aria-live="polite">
                <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-cyan to-violet text-ink">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M5 12l5 5L20 7" /></svg>
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                  {status === "done" && site.formEndpoint ? "¡Recibimos tu solicitud!" : "¡Tu solicitud está lista!"}
                </h3>
                <p className="mx-auto mt-3 max-w-md text-muted">
                  {status === "done" && site.formEndpoint
                    ? "Te contactaremos muy pronto. Si quieres una respuesta inmediata, envíala también por WhatsApp."
                    : "Envíala por WhatsApp con un clic: el mensaje ya incluye todos tus datos."}
                </p>
                <a href={waUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-[52px] items-center gap-2.5 rounded-full bg-[#25D366] px-7 font-semibold text-white shadow-[inset_0_1px_0_rgb(255_255_255/.35),0_12px_36px_-8px_rgb(37_211_102/.7)] transition hover:-translate-y-0.5 hover:brightness-110">
                  <WhatsAppIcon /> Enviar por WhatsApp
                </a>
                <button type="button" onClick={() => { setD(empty); setStatus("idle"); }} className="mt-4 block w-full text-sm text-muted underline-offset-4 hover:text-white hover:underline">Hacer otra solicitud</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                <label className="text-sm font-medium text-white/80">Nombre completo *
                  <input {...aria("nombre")} autoComplete="name" className={cls("nombre")} value={d.nombre} onChange={(e) => set("nombre", e.target.value)} placeholder="Tu nombre" /><Err k="nombre" />
                </label>
                <label className="text-sm font-medium text-white/80">Empresa
                  <input {...aria("empresa")} autoComplete="organization" className={cls("empresa")} value={d.empresa} onChange={(e) => set("empresa", e.target.value)} placeholder="Opcional" />
                </label>
                <label className="text-sm font-medium text-white/80">Correo electrónico *
                  <input {...aria("correo")} type="email" autoComplete="email" inputMode="email" className={cls("correo")} value={d.correo} onChange={(e) => set("correo", e.target.value)} placeholder="nombre@empresa.com" /><Err k="correo" />
                </label>
                <label className="text-sm font-medium text-white/80">Teléfono / WhatsApp *
                  <input {...aria("telefono")} type="tel" autoComplete="tel" inputMode="tel" className={cls("telefono")} value={d.telefono} onChange={(e) => set("telefono", e.target.value)} placeholder="55 1234 5678" /><Err k="telefono" />
                </label>
                <label className="text-sm font-medium text-white/80">Servicio de interés *
                  <select {...aria("servicio")} className={`${cls("servicio")} appearance-none`} value={d.servicio} onChange={(e) => set("servicio", e.target.value)}>
                    <option value="" className="bg-ink-2">Selecciona una opción</option>
                    {servicios.map((s) => <option key={s} className="bg-ink-2">{s}</option>)}
                  </select><Err k="servicio" />
                </label>
                <label className="text-sm font-medium text-white/80">Presupuesto estimado
                  <select {...aria("presupuesto")} className={`${cls("presupuesto")} appearance-none`} value={d.presupuesto} onChange={(e) => set("presupuesto", e.target.value)}>
                    <option value="" className="bg-ink-2">Opcional</option>
                    {presupuestos.map((s) => <option key={s} className="bg-ink-2">{s}</option>)}
                  </select>
                </label>
                <label className="text-sm font-medium text-white/80 sm:col-span-2">Cuéntanos sobre tu proyecto *
                  <textarea {...aria("mensaje")} rows={5} className={`${cls("mensaje")} resize-y`} value={d.mensaje} onChange={(e) => set("mensaje", e.target.value)} placeholder="¿Qué necesitas? ¿Qué problema quieres resolver? ¿Tienes alguna fecha en mente?" /><Err k="mensaje" />
                </label>
                <div className="sm:col-span-2">
                  <label className="flex cursor-pointer items-start gap-3 text-sm text-muted">
                    <input {...aria("acepto")} type="checkbox" checked={d.acepto} onChange={(e) => set("acepto", e.target.checked)} className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer accent-[#3b82ff]" />
                    <span>He leído y acepto el <Link href="/aviso-de-privacidad/" className="text-cyan underline-offset-4 hover:underline">aviso de privacidad</Link>.</span>
                  </label>
                  <Err k="acepto" />
                </div>
                <button type="submit" disabled={status === "sending"} className="group relative isolate flex min-h-[56px] items-center justify-center gap-3 overflow-hidden rounded-full bg-[linear-gradient(135deg,#d6ffb8_0%,#7cff3d_45%,#2fd45a_100%)] pl-7 pr-2 text-base font-bold text-[#05120a] shadow-[inset_0_1px_0_rgb(255_255_255/.65),inset_0_-2px_0_rgb(0_0_0/.12),0_12px_40px_-8px_rgb(124_255_61/.7)] transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98] disabled:opacity-60 sm:col-span-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-electric">
                  <span className="pointer-events-none absolute inset-y-0 -left-1/3 -z-10 w-1/3 -skew-x-12 bg-white/40 blur-md opacity-0 group-hover:opacity-100 group-hover:animate-beam" aria-hidden />
                  <span className="ml-auto">{status === "sending" ? "Enviando…" : "Solicitar cotización"}</span>
                  <span className="ml-auto grid h-11 w-11 place-items-center rounded-full bg-[#05120a] text-electric transition-transform duration-500 group-hover:-rotate-45" aria-hidden>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </span>
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
