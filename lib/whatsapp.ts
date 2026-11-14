import { site } from "@/lib/site";

export const intents = {
  cita: "Hola, quisiera recibir información para agendar una cita en SPIRARE.",
  "medicina-interna":
    "Hola, quisiera recibir información para agendar una consulta de medicina interna en SPIRARE.",
  neumologia: "Hola, quisiera agendar una consulta de neumología en SPIRARE.",
  espirometria:
    "Hola, quisiera solicitar información sobre la espirometría pre y post broncodilatador.",
  caminata:
    "Hola, quisiera solicitar información sobre el test de caminata de seis minutos.",
  feno: "Hola, quisiera solicitar información sobre la medición de FeNO.",
  terapia: "Hola, quisiera conocer cómo solicitar terapia respiratoria.",
  poligrafia:
    "Hola, quisiera información sobre la poligrafía respiratoria domiciliaria.",
  cpap: "Hola, quisiera conocer cómo participar en el taller de adaptación a CPAP.",
  prueba:
    "Hola, quisiera solicitar información sobre una prueba respiratoria en SPIRARE.",
  asesoria:
    "Hola, represento a una institución y quisiera información sobre la asesoría en modelos de contratación en salud respiratoria.",
  equipos: "Hola, quisiera solicitar una cotización de equipos respiratorios.",
  pacientes: "Hola, quisiera información sobre la atención para pacientes en SPIRARE.",
  instituciones:
    "Hola, quisiera información sobre las soluciones de SPIRARE para instituciones.",
} as const;

export type IntentId = keyof typeof intents;

export function whatsappHref(message: string): string | null {
  if (!site.whatsappE164) return null;
  return `https://wa.me/${site.whatsappE164}?text=${encodeURIComponent(message)}`;
}

export function contactFallback(intent: IntentId): string {
  return `/contacto?intencion=${intent}`;
}

export function resolveContactHref(intent: IntentId, message: string = intents[intent]): string {
  return whatsappHref(message) ?? contactFallback(intent);
}
