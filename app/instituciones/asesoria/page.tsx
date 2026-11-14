import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { meta } from "@/lib/seo";

export const metadata: Metadata = meta(
  "/instituciones/asesoria",
  "Asesoría en contratación de servicios respiratorios",
  "Asesoría para organizaciones de salud sobre modelos de contratación en la atención de enfermedades respiratorias.",
);

const audiences = ["IPS", "EPS", "Clínicas", "Hospitales", "Aseguradoras y otras organizaciones de atención respiratoria"];

export default function AsesoriaPage() {
  return (
    <main>
      <header className="bg-deep text-white">
        <div className="mx-auto max-w-[1400px] px-4 pb-16 pt-28 md:px-8 md:pt-36">
          <Breadcrumbs
            items={[
              { href: "/", label: "Inicio" },
              { href: "/instituciones", label: "Instituciones" },
              { label: "Asesoría" },
            ]}
          />
          <p className="kicker mt-8 text-cyan">Consultoría</p>
          <h1 className="display mt-4 max-w-4xl text-4xl leading-[0.95] md:text-6xl">
            Asesoría en modelos de contratación en salud para enfermedades respiratorias.
          </h1>
          <p className="mt-5 max-w-2xl text-white/75">
            Un acompañamiento para organizaciones que necesitan definir cómo contratan consulta, pruebas o tratamiento respiratorio. No incluye auditoría, interventoría, consultoría jurídica ni diseño de redes: esas líneas no están confirmadas.
          </p>
        </div>
      </header>
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1100px] gap-12 px-4 py-16 md:px-8 lg:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-10">
            <section>
              <h2 className="display text-3xl">En qué consiste</h2>
              <p className="mt-3 leading-relaxed text-ink/80">
                Revisamos, con el equipo de la institución, cómo está planteada la contratación de servicios ligados a enfermedades respiratorias y qué decisiones conviene ordenar: alcance, población, prestaciones y forma de relacionarse con prestadores o tecnología. El resultado se acuerda en cada encargo. Esta página no promete un entregable único ni cita clientes que no estén documentados.
              </p>
            </section>
            <section>
              <h2 className="display text-3xl">Qué necesidades busca atender</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed">
                <li className="border-t border-ink/10 pt-3">Aclarar qué se contrata cuando la atención respiratoria mezcla consulta, pruebas y dispositivos.</li>
                <li className="border-t border-ink/10 pt-3">Preparar la conversación interna entre áreas clínicas, de contratación y financieras.</li>
                <li className="border-t border-ink/10 pt-3">Identificar vacíos de información antes de comprar equipos o ampliar un servicio.</li>
              </ul>
            </section>
            <section>
              <h2 className="display text-3xl">A quién se dirige</h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {audiences.map((item) => (
                  <li key={item} className="bg-ice px-3 py-2 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-ink/65">
                No afirmamos relaciones contractuales vigentes con estas organizaciones.
              </p>
            </section>
          </div>
          <aside className="h-fit bg-ink p-6 text-white lg:sticky lg:top-24">
            <h2 className="display text-3xl">Cómo solicitar acompañamiento</h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              Escribe por WhatsApp indicando la institución y el motivo. No incluyas historias clínicas ni datos de pacientes.
            </p>
            <WhatsAppCTA intent="asesoria" event="solicitar_asesoria" className="mt-6 w-full">
              Solicitar asesoría especializada
            </WhatsAppCTA>
          </aside>
        </div>
      </section>
    </main>
  );
}
