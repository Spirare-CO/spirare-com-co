export type AnalyticsEvent =
  | "agendar_cita"
  | "whatsapp_servicio"
  | "recorrido_pacientes"
  | "recorrido_instituciones"
  | "solicitar_asesoria"
  | "cotizar_equipo"
  | "abrir_recurso"
  | "compartir_video"
  | "visita_servicio";

/** No envía datos clínicos. Solo nombres de eventos y slugs públicos. */
export function track(event: AnalyticsEvent, params?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const detail = { event, params: params ?? {}, at: Date.now() };
  window.dispatchEvent(new CustomEvent("spirare:analytics", { detail }));
  const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === "function") {
    gtag("event", event, params ?? {});
  }
}
