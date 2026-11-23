import type { NextConfig } from "next";

// Exportación estática: el sitio se puede publicar en Vercel, Netlify
// o cualquier hosting con dominio propio (carpeta /out).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
