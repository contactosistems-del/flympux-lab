import type { Metadata, Viewport } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import "./globals.css";
import { site } from "@/lib/site";
import { WhatsAppFloat } from "@/components/Social";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Desarrollo de software, sistemas y páginas web`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "desarrollo de software a medida", "páginas web empresariales", "tiendas en línea",
    "sistemas administrativos", "automatización de procesos", "aplicaciones web",
    "soporte técnico", "agencia de software México", "páginas web México", "desarrollo web México",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Transformamos ideas en soluciones digitales`,
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Transformamos ideas en soluciones digitales`,
    description: site.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.png", apple: "/icon.png" },
};

export const viewport: Viewport = { themeColor: "#050505", width: "device-width", initialScale: 1 };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: `+${site.whatsapp}`,
  areaServed: "MX",
  address: { "@type": "PostalAddress", addressCountry: "MX" },
  sameAs: [site.social.facebook, site.social.instagram].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX">
      <body>
        <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black">
          Saltar al contenido
        </a>
        {children}
        <WhatsAppFloat />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
