import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Gallery } from "@/components/Gallery";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Galería de proyectos",
  description: `Galería de proyectos y fotografías de ${site.name}: páginas web, sistemas, aplicaciones y proyectos digitales.`,
  alternates: { canonical: "/galeria/" },
};

export default function GaleriaPage() {
  return (
    <>
      <Navbar />
      <main id="contenido">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
