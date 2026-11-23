/**
 * ─────────────────────────────────────────────────────────────
 *  CONFIGURACIÓN CENTRAL DE FLYMPUX LAB
 *  Todos los datos de contacto y redes se cambian SOLO aquí.
 *  Los campos marcados como  PENDIENTE  están vacíos a propósito:
 *  mientras estén vacíos, el botón correspondiente se muestra
 *  como "pendiente" y no lleva a ningún enlace inventado.
 * ─────────────────────────────────────────────────────────────
 */
export const site = {
  name: "Flympux LAB",
  legalName: "Flympux LAB",
  tagline: "Software & Digital Innovation",

  // PENDIENTE: tu dominio propio (se usa en SEO, Open Graph y sitemap).
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://flympuxlab.com",

  description:
    "Desarrollo de software a medida, páginas web empresariales, tiendas en línea, sistemas administrativos y automatización de procesos para empresas y emprendedores en México.",

  // WhatsApp: número en formato internacional sin "+" ni espacios.
  whatsapp: "525650886350",
  whatsappDisplay: "56 5088 6350",
  whatsappMessage:
    "Hola, estoy interesado en los servicios de FLYMPUX LAB. Me gustaría recibir información y una cotización.",

  // PENDIENTE: correo de contacto (opcional). Vacío = no se muestra.
  email: "",

  location: "Cuautitlán, Estado de México",
  coverage: "Atención en todo México",

  // PENDIENTE (opcional): endpoint de Formspree / Web3Forms para recibir el formulario por correo.
  // Si queda vacío, el formulario arma el mensaje y lo envía por WhatsApp.
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT || "",

  social: {
    // PENDIENTE: URL de tu página empresarial de Facebook, p. ej. "https://www.facebook.com/tu-pagina"
    facebook: "https://www.facebook.com/Flympuxlab/",
    // PENDIENTE: URL de tu perfil empresarial de Instagram, p. ej. "https://www.instagram.com/tu-usuario"
    instagram: "",
  },
};

export const waLink = (text: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;

export const nav = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#nosotros", label: "Nosotros" },
  { href: "/galeria/", label: "Galería" },
  { href: "/#contacto", label: "Contacto" },
];
