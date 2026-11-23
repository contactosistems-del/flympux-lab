import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: `Aviso de privacidad de ${site.name}: cómo tratamos los datos personales que nos compartes.`,
  alternates: { canonical: "/aviso-de-privacidad/" },
};

const secciones = [
  ["Responsable", `${site.legalName}, con domicilio en ${site.location}, es responsable del tratamiento de los datos personales que nos proporcionas, conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares.`],
  ["Datos que recabamos", "Nombre, empresa, correo electrónico, teléfono y la información que compartes sobre tu proyecto a través del formulario de contacto, WhatsApp u otros medios."],
  ["Finalidades", "Usamos tus datos para responder tus solicitudes, elaborar cotizaciones, dar seguimiento a los servicios contratados y comunicarnos contigo. No vendemos ni rentamos tu información."],
  ["Transferencias", "Tus datos no se comparten con terceros, salvo con proveedores tecnológicos necesarios para operar nuestros servicios (por ejemplo, mensajería o correo) o cuando lo requiera una autoridad competente."],
  ["Derechos ARCO", "Puedes solicitar el acceso, rectificación, cancelación u oposición al uso de tus datos, así como revocar tu consentimiento, escribiéndonos por WhatsApp al " + site.whatsappDisplay + ". Responderemos en un plazo máximo de 20 días hábiles."],
  ["Cambios al aviso", "Cualquier modificación a este aviso se publicará en esta misma página."],
];

export default function Privacidad() {
  return (
    <>
      <Navbar />
      <main id="contenido" className="mx-auto max-w-3xl px-5 pb-24 pt-36 sm:px-8">
        <p className="text-sm font-medium text-cyan">Legal</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-gradient sm:text-5xl">Aviso de privacidad</h1>
        <p className="mt-4 text-muted">Última actualización: noviembre de 2026</p>
        <div className="mt-12 space-y-10">
          {secciones.map(([t, d]) => (
            <section key={t}>
              <h2 className="font-display text-xl font-semibold text-white">{t}</h2>
              <p className="mt-3 leading-relaxed text-muted">{d}</p>
            </section>
          ))}
        </div>
        <Link href="/" className="mt-14 inline-block text-cyan underline-offset-4 hover:underline">← Volver al inicio</Link>
      </main>
      <Footer />
    </>
  );
}
