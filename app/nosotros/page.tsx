import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { meta } from "@/lib/seo";

export const metadata: Metadata = meta(
  "/nosotros",
  "Nosotros",
  "SPIRARE articula atención médica, educación del paciente y tecnología para la salud respiratoria.",
);

const pending = [
  "Historia de la organización",
  "Misión y visión redactadas por el equipo",
  "Profesionales, con nombre y credencial verificada",
  "Fotografías reales de sede y equipo",
  "Habilitación y datos de REPS",
  "Razón social",
];

export default function NosotrosPage() {
  return (
    <main>
      <header className="bg-abyss text-white">
        <div className="mx-auto max-w-[1400px] px-4 pb-16 pt-28 md:px-8 md:pt-36">
          <Breadcrumbs items={[{ href: "/", label: "Inicio" }, { label: "Nosotros" }]} />
          <p className="kicker mt-8 text-cyan">Institucional</p>
          <h1 className="display mt-4 max-w-4xl text-5xl leading-[0.92] md:text-7xl">SPIRARE mira la respiración de cerca.</h1>
        </div>
      </header>
      <section className="bg-paper">
        <div className="mx-auto grid max-w-[1100px] gap-12 px-4 py-16 md:px-8 lg:grid-cols-12">
          <div className="space-y-6 text-lg leading-relaxed lg:col-span-7">
            <p>
              SPIRARE es una marca dedicada a la salud respiratoria. Reúne la consulta y las pruebas que una persona necesita para entender su respiración, la educación que permite continuar ese cuidado en casa, y la tecnología que una institución usa para prestar esos servicios.
            </p>
            <p>
              El enfoque es concreto: menos promesa, más claridad. Un paciente debería saber qué servicio existe y cómo pedir una cita. Una institución debería saber cómo pedir asesoría o una cotización de equipos.
            </p>
            <p>
              Trabajamos en dos líneas. La asistencial acompaña a pacientes con consultas, estudios, terapia y recursos educativos. La institucional acompaña a organizaciones en modelos de contratación para enfermedades respiratorias y en equipos de espirometría, FeNO y nebulización.
            </p>
            <p>
              La educación no es un anexo. Después de una consulta, un profesional puede compartir un video puntual —por ejemplo, el uso de un inhalador— con un enlace directo, sin pedirle al paciente que cree una cuenta.
            </p>
          </div>
          <aside className="lg:col-span-5">
            <h2 className="display text-3xl">Por completar antes de presentarnos con nombres</h2>
            <ul className="mt-4 space-y-3">
              {pending.map((item) => (
                <li key={item} className="border-t border-ink/10 py-3 text-sm">
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-ink/60">Esos bloques no se rellenan con texto provisional.</p>
            <div className="mt-8 flex flex-col gap-3 text-sm font-semibold">
              <Link href="/pacientes">Línea de pacientes</Link>
              <Link href="/instituciones">Línea institucional</Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
