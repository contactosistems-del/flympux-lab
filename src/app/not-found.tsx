import Link from "next/link";
import { Navbar } from "@/components/Navbar";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="contenido" className="grid min-h-svh place-items-center px-5 text-center">
        <div>
          <p className="font-display text-7xl font-semibold text-accent">404</p>
          <h1 className="mt-4 font-display text-2xl font-semibold text-white">Esta página no existe</h1>
          <Link href="/" className="mt-8 inline-block text-cyan underline-offset-4 hover:underline">Volver al inicio</Link>
        </div>
      </main>
    </>
  );
}
