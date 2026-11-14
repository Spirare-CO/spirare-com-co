"use client";

import { track, type AnalyticsEvent } from "@/lib/analytics";
import { intents, resolveContactHref, whatsappHref, type IntentId } from "@/lib/whatsapp";

type Props = {
  intent: IntentId;
  message?: string;
  event?: AnalyticsEvent;
  eventParams?: Record<string, string>;
  children: React.ReactNode;
  className?: string;
  variant?: "solid" | "line" | "quiet";
};

const variants: Record<NonNullable<Props["variant"]>, string> = {
  solid:
    "inline-flex min-h-12 items-center justify-center bg-cyan px-5 text-sm font-semibold text-ink transition hover:bg-white",
  line:
    "inline-flex min-h-12 items-center justify-center border border-current px-5 text-sm font-semibold transition hover:bg-white/10",
  quiet: "inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline",
};

export function WhatsAppCTA({
  intent,
  message,
  event = "whatsapp_servicio",
  eventParams,
  children,
  className = "",
  variant = "solid",
}: Props) {
  const text = message ?? intents[intent];
  const href = resolveContactHref(intent, text);
  const external = Boolean(whatsappHref(text));

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`${variants[variant]} ${className}`}
      onClick={() => track(event, eventParams)}
    >
      {children}
      {!external && variant !== "quiet" ? (
        <span className="sr-only"> El número de WhatsApp aún no está configurado. Irás a contacto.</span>
      ) : null}
    </a>
  );
}
