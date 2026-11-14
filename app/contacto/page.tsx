import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { emergencyNotice, site } from "@/lib/site";
import { intents, type IntentId } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Elige el motivo y abre WhatsApp con un mensaje preparado. SPIRARE no usa este canal para urgencias.",
};

const options: { title: string; copy: string; intent: IntentId }[] = [
  { title: "Quiero agendar una consulta", copy: "Medicina interna, neumología u orientación inicial.", intent: "cita" },
  { title: "Necesito una prueba respiratoria", copy: "Espirometría, caminata, FeNO o poligrafía.", intent: "prueba" },
  { title: "Quiero información sobre terapia", copy: "Terapia respiratoria o taller de adaptación a CPAP.", intent: "terapia" },
  { title: "Soy una institución y necesito asesoría", copy: "Modelos de contratación en salud respiratoria.", intent: "asesoria" },
  { title: "Quiero cotizar equipos", copy: "Espirometría, FeNO o nebulizadores.", intent: "equipos" },
];

export default async function ContactoPage({
  searchParams,
}: {
  searchParams: Promise<{ intencion?: string }>;
}) {
  const { intencion } = await searchParams;
  const active = intencion && intencion in intents ? (intencion as IntentId) : null;
  const facts = [
    site.email ? ["Correo", site.email] : null,
    site.city ? ["Ciudad", site.city] : null,
    site.address ? ["Dirección", site.address] : null,
    site.hours ? ["Horario", site.hours] : null,
    site.legalName ? ["Razón social", site.legalName] : null,
  ].filter(Boolean) as [string, string][];

  return (
    <main>
      <header className="bg-ink text-white">
        <div className="mx-auto max-w-[1400px] px-4 pb-14 pt-28 md:px-8 md:pt-36">
          <Breadcrumbs items={[{ href: "/", label: "Inicio" }, { label: "Contacto" }]} />
          <h1 className="display mt-8 max-w-3xl text-5xl md:text-7xl">Cuéntanos qué necesitas.</h1>
          <p className="mt-4 max-w-xl text-white/70">{emergencyNotice}</p>
        </div>
      </header>
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1100px] gap-12 px-4 py-14 md:px-8 lg:grid-cols-[1.4fr_0.7fr]">
          <ul>
            {options.map((option) => (
              <li key={option.intent} className={`border-t border-ink/10 py-6 ${active === option.intent ? "bg-ice px-4" : ""}`}>
                <h2 className="display text-2xl">{option.title}</h2>
                <p className="mt-1 text-sm text-ink/70">{option.copy}</p>
                <WhatsAppCTA
                  intent={option.intent}
                  event={option.intent === "asesoria" ? "solicitar_asesoria" : option.intent === "equipos" ? "cotizar_equipo" : option.intent === "cita" ? "agendar_cita" : "whatsapp_servicio"}
                  variant="quiet"
                  className="mt-3"
                >
                  Abrir WhatsApp
                </WhatsAppCTA>
              </li>
            ))}
          </ul>
          <aside>
            {active ? (
              <div className="bg-white p-5 text-sm leading-relaxed">
                <p className="kicker text-electric">Mensaje preparado</p>
                <p className="mt-3">{intents[active]}</p>
                {!site.whatsappE164 ? (
                  <p className="mt-3 text-ink/70">
                    El número de WhatsApp todavía no está en la configuración. Cuando se agregue NEXT_PUBLIC_WHATSAPP_E164, este botón abrirá el chat con el texto de arriba.
                  </p>
                ) : null}
              </div>
            ) : null}
            {facts.length > 0 ? (
              <dl className="mt-6 space-y-3 text-sm">
                {facts.map(([label, value]) => (
                  <div key={label}>
                    <dt className="kicker text-electric">{label}</dt>
                    <dd className="mt-1">{value}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="mt-6 text-sm text-ink/60">
                Dirección, ciudad, horarios y correo se muestran aquí en cuanto estén configurados. No publicamos una sede de relleno.
              </p>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
