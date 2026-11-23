import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${site.url}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/galeria/`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.url}/aviso-de-privacidad/`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
