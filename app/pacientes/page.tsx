import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Atención para pacientes",
  description:
    "Consultas, pruebas respiratorias y orientación para acompañarte en el cuidado de tu salud en SPIRARE.",
};

export default function PacientesPage() {
  const groups = [
    {
      title: "Consultas",
      copy: "Una conversación médica para ordenar síntomas y decidir el siguiente paso.",
      items: services.filter((service) => service.kicker === "Consulta"),
    },
    {
      title: "Pruebas",
      copy: "Mediciones que aportan datos. El profesional las interpreta junto con lo que te ocurre.",
      items: services.filter((service) => service.kicker === "Prueba" || service.kicker === "Estudio"),
    },
    {
      title: "Terapia y educación",
      copy: "Práctica guiada y recursos para usar bien un dispositivo o entender el cuidado.",
      items: services.filter((service) => service.kicker === "Acompañamiento" || service.kicker === "Educación"),
    },
  ];

  return (
    <main>
      <header className="bg-abyss text-white">
        <div className="mx-auto max-w-[1400px] px-4 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
          <Breadcrumbs items={[{ href: "/", label: "Inicio" }, { label: "Pacientes" }]} />
          <p className="kicker mt-8 text-cyan">Para pacientes</p>
          <h1 className="display mt-4 max-w-4xl text-5xl leading-[0.92] md:text-7xl">
            Tu salud respiratoria merece atención especializada.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Consultas, pruebas respiratorias y orientación para acompañarte en el cuidado de tu salud.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <WhatsAppCTA intent="cita" event="agendar_cita">
              Escribir por WhatsApp
            </WhatsAppCTA>
            <Link href="/pacientes/educacion" className="inline-flex min-h-12 items-center border border-white/30 px-5 text-sm font-semibold">
              Ver educación
            </Link>
          </div>
        </div>
      </header>

      {groups.map((group, index) => (
        <section key={group.title} className={index % 2 === 0 ? "bg-mist" : "bg-white"}>
          <div className="mx-auto grid max-w-[1400px] gap-8 px-4 py-16 md:px-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="kicker text-electric">0{index + 1}</p>
              <h2 className="display mt-3 text-4xl">{group.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/70">{group.copy}</p>
            </div>
            <ul className="lg:col-span-8">
              {group.items.map((service) => (
                <li key={service.slug} className="border-t border-ink/10">
                  <Link href={`/pacientes/servicios/${service.slug}`} className="group grid gap-2 py-6 md:grid-cols-[1fr_auto] md:items-end">
                    <div>
                      <h3 className="display text-2xl md:text-3xl">{service.name}</h3>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink/70">{service.summary}</p>
                    </div>
                    <span className="text-sm text-electric group-hover:translate-x-1">Ver servicio</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </main>
  );
}
