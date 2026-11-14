import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { equipmentCategories, productsByCategory } from "@/lib/equipment";
import { meta } from "@/lib/seo";

export const metadata: Metadata = meta(
  "/instituciones/equipos",
  "Equipos respiratorios",
  "Catálogo de equipos de espirometría, medición de FeNO y nebulizadores de SPIRARE.",
);

export default function EquiposPage() {
  return (
    <main className="bg-paper">
      <header className="bg-abyss text-white">
        <div className="mx-auto max-w-[1400px] px-4 pb-14 pt-28 md:px-8 md:pt-36">
          <Breadcrumbs
            items={[
              { href: "/", label: "Inicio" },
              { href: "/instituciones", label: "Instituciones" },
              { label: "Equipos" },
            ]}
          />
          <h1 className="display mt-8 max-w-3xl text-5xl md:text-7xl">Tecnología respiratoria, sin vitrina ficticia.</h1>
          <p className="mt-5 max-w-xl text-white/70">
            Tres categorías abiertas. Los modelos, marcas, precios y fichas se agregan cuando estén confirmados. Puedes cotizar la categoría hoy.
          </p>
        </div>
      </header>
      <div className="mx-auto max-w-[1400px] px-4 py-12 md:px-8">
        {equipmentCategories.map((category) => {
          const items = productsByCategory(category.slug);
          return (
            <section key={category.slug} id={category.slug} className="scroll-mt-24 border-t border-ink/10 py-12">
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-4">
                  <p className="display text-5xl text-deep/20">{category.code}</p>
                  <h2 className="display mt-2 text-4xl">{category.name}</h2>
                </div>
                <div className="lg:col-span-8">
                  <p className="max-w-2xl leading-relaxed text-ink/80">{category.summary}</p>
                  <ul className="mt-6 space-y-2 text-sm">
                    {category.points.map((point) => (
                      <li key={point} className="border-l-2 border-cyan pl-3">
                        {point}
                      </li>
                    ))}
                  </ul>
                  {items.length > 0 ? (
                    <ul className="mt-8 divide-y divide-ink/10">
                      {items.map((product) => (
                        <li key={product.slug} className="flex items-center justify-between py-4">
                          <div>
                            <Link href={`/instituciones/equipos/${product.slug}`} className="font-semibold hover:underline">
                              {product.name}
                            </Link>
                            <p className="text-sm text-ink/60">
                              {[product.brand, product.model].filter(Boolean).join(" · ")}
                            </p>
                          </div>
                          <Link href={`/instituciones/equipos/${product.slug}`} className="text-sm">
                            Ficha
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-6 text-sm text-ink/60">Aún no hay un modelo publicado en esta categoría.</p>
                  )}
                  <WhatsAppCTA
                    intent="equipos"
                    message={category.quoteMessage}
                    event="cotizar_equipo"
                    eventParams={{ categoria: category.slug }}
                    className="mt-8"
                  >
                    Solicitar cotización
                  </WhatsAppCTA>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
