import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { EducationLibrary } from "@/components/education-library";
import { meta } from "@/lib/seo";

export const metadata: Metadata = meta(
  "/pacientes/educacion",
  "Educación respiratoria",
  "Biblioteca de SPIRARE para compartir con pacientes videos revisados sobre inhaladores, CPAP, dispositivos y pruebas respiratorias.",
);

export default function EducacionPage() {
  return (
    <main className="bg-paper">
      <header className="bg-ink text-white">
        <div className="mx-auto max-w-[1400px] px-4 pb-14 pt-28 md:px-8 md:pt-36">
          <Breadcrumbs
            items={[
              { href: "/", label: "Inicio" },
              { href: "/pacientes", label: "Pacientes" },
              { label: "Educación" },
            ]}
          />
          <p className="kicker mt-8 text-cyan">Biblioteca</p>
          <h1 className="display mt-4 max-w-4xl text-5xl leading-[0.92] md:text-7xl">
            Un video claro, con un enlace para enviar después de la consulta.
          </h1>
          <p className="mt-5 max-w-xl text-white/70">
            Sin registro y sin historia clínica. El paciente abre el recurso directo. Hoy las categorías están armadas y el catálogo espera contenido revisado.
          </p>
        </div>
      </header>
      <section className="mx-auto max-w-[1400px] px-4 py-12 md:px-8 md:py-16">
        <EducationLibrary />
      </section>
    </main>
  );
}
