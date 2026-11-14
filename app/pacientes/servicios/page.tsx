import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { meta } from "@/lib/seo";
import { services } from "@/lib/services";

export const metadata: Metadata = meta(
  "/pacientes/servicios",
  "Servicios para pacientes",
  "Consultas de medicina interna y neumología, espirometría, caminata de seis minutos, FeNO, terapia respiratoria, poligrafía domiciliaria y taller de CPAP.",
);

export default function ServiciosPage() {
  return (
    <main>
      <header className="bg-deep text-white">
        <div className="mx-auto max-w-[1400px] px-4 pb-14 pt-28 md:px-8 md:pt-36">
          <Breadcrumbs
            items={[
              { href: "/", label: "Inicio" },
              { href: "/pacientes", label: "Pacientes" },
              { label: "Servicios" },
            ]}
          />
          <h1 className="display mt-8 max-w-3xl text-5xl leading-[0.92] md:text-7xl">Ocho formas de cuidar la respiración.</h1>
          <p className="mt-5 max-w-xl text-white/75">
            Cada servicio tiene su página, con una explicación sencilla y un mensaje de WhatsApp propio. El detalle clínico fino se confirma al agendar.
          </p>
        </div>
      </header>
      <section className="bg-paper">
        <ol className="mx-auto max-w-[1400px] px-4 py-12 md:px-8">
          {services.map((service, index) => (
            <li key={service.slug}>
              <Link
                href={`/pacientes/servicios/${service.slug}`}
                className="grid gap-3 border-t border-ink/10 py-8 md:grid-cols-[5rem_10rem_1fr_auto] md:items-baseline"
              >
                <span className="display text-3xl text-electric">{String(index + 1).padStart(2, "0")}</span>
                <span className="kicker text-ink/50">{service.kicker}</span>
                <span>
                  <span className="display block text-3xl md:text-4xl">{service.name}</span>
                  <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-ink/70">{service.summary}</span>
                </span>
                <span className="text-sm font-semibold">Abrir</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
