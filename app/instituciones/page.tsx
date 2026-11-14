import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { equipmentCategories } from "@/lib/equipment";
import { meta } from "@/lib/seo";

export const metadata: Metadata = meta(
  "/instituciones",
  "Instituciones y empresas",
  "Asesoría especializada y soluciones tecnológicas para instituciones y empresas del sector salud.",
);

export default function InstitucionesPage() {
  return (
    <main>
      <header className="relative overflow-hidden bg-abyss text-white">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-40 bronchi-field" />
        <div className="relative mx-auto max-w-[1400px] px-4 pb-16 pt-28 md:px-8 md:pb-24 md:pt-36">
          <Breadcrumbs items={[{ href: "/", label: "Inicio" }, { label: "Instituciones" }]} />
          <p className="kicker mt-8 text-cyan">Sector salud</p>
          <h1 className="display mt-4 max-w-4xl text-5xl leading-[0.92] md:text-7xl">
            Conocimiento y tecnología para fortalecer la atención respiratoria.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/75">
            Asesoría especializada y soluciones tecnológicas para instituciones y empresas del sector salud.
          </p>
        </div>
      </header>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-2">
          <Link href="/instituciones/asesoria" className="group border-b border-ink/10 px-4 py-14 md:px-10 lg:border-b-0 lg:border-r">
            <p className="kicker text-electric">Línea 01</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">Asesoría en modelos de contratación.</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/70">
              Para IPS, EPS, clínicas, hospitales y otras organizaciones que necesitan ordenar cómo contratan la atención de enfermedades respiratorias.
            </p>
            <span className="mt-8 inline-block text-sm font-semibold text-electric group-hover:translate-x-1">Solicitar asesoría →</span>
          </Link>
          <Link href="/instituciones/equipos" className="group bg-ice px-4 py-14 md:px-10">
            <p className="kicker text-electric">Línea 02</p>
            <h2 className="display mt-4 text-4xl md:text-5xl">Equipos para medir y tratar.</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/70">
              Espirometría, FeNO y nebulizadores. Sin precios publicados hasta tener condiciones comerciales confirmadas. Sin carrito.
            </p>
            <span className="mt-8 inline-block text-sm font-semibold text-electric group-hover:translate-x-1">Ver catálogo →</span>
          </Link>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-[1400px] px-4 py-16 md:px-8">
          <h2 className="display text-3xl">Categorías de equipo</h2>
          <ul className="mt-8 divide-y divide-ink/10">
            {equipmentCategories.map((category) => (
              <li key={category.slug} className="grid gap-2 py-6 md:grid-cols-[4rem_1fr_auto] md:items-baseline">
                <span className="display text-2xl text-electric">{category.code}</span>
                <div>
                  <h3 className="text-xl font-semibold">{category.name}</h3>
                  <p className="mt-1 max-w-2xl text-sm text-ink/70">{category.summary}</p>
                </div>
                <Link href={`/instituciones/equipos#${category.slug}`} className="text-sm font-semibold">
                  Cotizar categoría
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
