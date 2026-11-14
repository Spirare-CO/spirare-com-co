"use client";

import { useState } from "react";
import { track } from "@/lib/analytics";
import { site } from "@/lib/site";
import { whatsappHref } from "@/lib/whatsapp";

export function ShareResource({ title, slug }: { title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  const url = `${site.url}/pacientes/educacion/${slug}`;
  const message = `${title} — ${url}`;
  const href = whatsappHref(`Te comparto este recurso de SPIRARE: ${message}`);

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="flex flex-wrap gap-3">
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center bg-ink px-5 text-sm font-semibold text-white"
          onClick={() => track("compartir_video", { slug })}
        >
          Compartir este video
        </a>
      ) : null}
      <button type="button" onClick={copy} className="inline-flex min-h-12 items-center border border-ink px-5 text-sm font-semibold">
        {copied ? "Enlace copiado" : "Copiar enlace"}
      </button>
    </div>
  );
}
