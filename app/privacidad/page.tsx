import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { meta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = meta(
  "/privacidad",
  "Tratamiento de datos personales",
  "Borrador de la política de tratamiento de datos de SPIRARE, pendiente de revisión jurídica.",
);

export default function PrivacidadPage() {
  return (
    <main className="bg-paper">
      <header className="bg-deep text-white">
        <div className="mx-auto max-w-[900px] px-4 pb-12 pt-28 md:px-8 md:pt-36">
          <Breadcrumbs items={[{ href: "/", label: "Inicio" }, { label: "Privacidad" }]} />
          <p className="kicker mt-8 text-cyan">Borrador para revisión jurídica</p>
          <h1 className="display mt-4 text-4xl md:text-6xl">Tratamiento de datos personales</h1>
        </div>
      </header>
      <article className="mx-auto max-w-[900px] space-y-6 px-4 py-12 text-base leading-relaxed md:px-8">
        <p>
          Este texto es un borrador. No está aprobado por un asesor jurídico y no debe leerse como la política definitiva de {site.legalName || "SPIRARE"}. Colombia exige, entre otras normas, observar la Ley 1581 de 2012 y sus decretos reglamentarios antes de tratar datos personales.
        </p>
        <h2 className="display pt-4 text-3xl">Qué hace este sitio</h2>
        <p>
          El sitio informa servicios y permite abrir WhatsApp o copiar un enlace. No tiene formulario de historia clínica, no crea cuentas de pacientes y no pide diagnósticos. No uses el chat para enviar resultados, documentos de identidad o datos de salud si puedes evitarlo: WhatsApp es un servicio de un tercero, con sus propias condiciones.
        </p>
        <h2 className="display pt-4 text-3xl">Responsable</h2>
        <p>
          {site.legalName
            ? `El responsable previsto es ${site.legalName}.`
            : "La razón social, el NIT, la dirección y el correo del responsable todavía no están configurados. Deben completarse antes de publicar la política."}{" "}
          {site.email ? `Contacto publicado: ${site.email}.` : "El correo de contacto tampoco está publicado todavía."}
        </p>
        <h2 className="display pt-4 text-3xl">Analítica</h2>
        <p>
          Si más adelante se activa una herramienta de medición, solo debe registrar eventos de navegación (por ejemplo, que alguien abrió la página de espirometría o pulsó cotizar). No debe usarse para guardar información clínica. Esa activación requiere base legal e información clara al visitante.
        </p>
        <h2 className="display pt-4 text-3xl">Derechos</h2>
        <p>
          Conocer, actualizar, rectificar y suprimir datos, y revocar la autorización, son derechos previstos en la Ley 1581 de 2012. El canal concreto para ejercerlos se publicará con el correo del responsable.
        </p>
        <h2 className="display pt-4 text-3xl">Urgencias</h2>
        <p>Este sitio y su WhatsApp no son un servicio de emergencias ni una teleconsulta.</p>
      </article>
    </main>
  );
}
