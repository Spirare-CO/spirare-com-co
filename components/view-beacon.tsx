"use client";

import { useEffect } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";

export function ViewBeacon({ event, params }: { event: AnalyticsEvent; params?: Record<string, string> }) {
  const signature = JSON.stringify(params ?? {});
  useEffect(() => {
    track(event, params);
    // signature estabiliza el efecto sin reenviar en cada render
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event, signature]);
  return null;
}
