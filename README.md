# Flympux LAB — Sitio web corporativo

Sitio en **Next.js 15 + React 19 + Tailwind CSS 4**, exportado como sitio estático (carpeta `out/`).

## Comandos
```bash
npm install
npm run dev     # desarrollo en http://localhost:3000
npm run build   # genera /out listo para publicar
```

## Configuración (un solo archivo)
Todo lo editable está en **`src/lib/site.ts`**:
- `whatsapp`, `whatsappDisplay`, `whatsappMessage` — número y mensaje del botón flotante y de todos los botones.
- `social.facebook` y `social.instagram` — **PENDIENTES**. Mientras estén vacíos, los botones aparecen como "pronto" y no llevan a ningún enlace.
- `email` — **PENDIENTE** (opcional).
- `url` — **PENDIENTE**: tu dominio propio (también por variable `NEXT_PUBLIC_SITE_URL`).
- `formEndpoint` — opcional (`NEXT_PUBLIC_FORM_ENDPOINT`). Si configuras Formspree/Web3Forms, el formulario también llega por correo. Sin él, el formulario valida los datos y arma el mensaje para enviarlo por WhatsApp.

## Galería (sin reconstruir el sitio)
La galería se lee en el navegador desde `public/galeria/galeria.json` (en producción: `/galeria/galeria.json`).
1. Sube la foto a la carpeta `galeria/` del sitio publicado (o a `public/galeria/` en el repo).
2. Agrega un objeto a `items`:
```json
{ "src": "galeria/mi-proyecto.webp", "titulo": "Nombre", "categoria": "Páginas web", "descripcion": "Texto corto" }
```
Categorías: `Páginas web`, `Sistemas`, `Aplicaciones`, `Proyectos digitales`. Usa `"ilustrativa": true` o `"etiqueta": "..."` para imágenes de ejemplo. Borra los ejemplos cuando tengas fotos reales.

## Publicar en Vercel con dominio propio
1. Sube este proyecto a GitHub.
2. En Vercel: *Add New → Project* → importa el repo (detecta Next.js solo).
3. *Settings → Domains* → agrega tu dominio y sigue las instrucciones DNS.

## Imágenes
- Fotografías de stock con licencia libre de Unsplash y Pexels (uso comercial permitido, sin atribución obligatoria).
- `public/proyectos/`: capturas de los sitios reales de Flympux LAB. "Atlas" es el nombre público de una plataforma institucional; su captura usa datos de demostración.
