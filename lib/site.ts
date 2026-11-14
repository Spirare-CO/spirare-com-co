/**
 * Configuración central de SPIRARE.
 * Los campos vacíos están pendientes de datos reales. No se publican como si existieran.
 * Documentación: CONTENIDO.md
 */

export const site = {
  name: "SPIRARE",
  concept: "The art of breathing",
  tagline: "Respirar mejor empieza aquí.",
  support:
    "Atención especializada, conocimiento y tecnología para el cuidado de la salud respiratoria.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://spirare.com.co",
  locale: "es_CO",
  /** Número en formato internacional, solo dígitos. Ejemplo: 573001112233 */
  whatsappE164: (process.env.NEXT_PUBLIC_WHATSAPP_E164 ?? "").replace(/\D/g, ""),
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "",
  legalName: process.env.NEXT_PUBLIC_LEGAL_NAME ?? "",
  city: process.env.NEXT_PUBLIC_CITY ?? "",
  address: process.env.NEXT_PUBLIC_ADDRESS ?? "",
  hours: process.env.NEXT_PUBLIC_HOURS ?? "",
  social: {
    instagram: process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM ?? "",
    linkedin: process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN ?? "",
    youtube: process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE ?? "",
  },
} as const;

export const emergencyNotice =
  "Los mensajes de WhatsApp no son un canal de urgencias. Si presentas dificultad respiratoria grave, dolor intenso en el pecho o cualquier señal de emergencia, busca atención inmediata en un servicio de urgencias.";
