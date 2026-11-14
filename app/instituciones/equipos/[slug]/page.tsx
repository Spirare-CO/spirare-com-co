import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { getCategory, getProduct, products, quoteMessageForProduct } from "@/lib/equipment";
import { meta } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Equipo" };
  return meta(`/instituciones/equipos/${product.slug}`, product.name, product.description);
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const category = getCategory(product.categorySlug);

  return (
    <main className="bg-paper">
      <header className="bg-deep text-white">
        <div className="mx-auto max-w-[1100px] px-4 pb-12 pt-28 md:px-8 md:pt-36">
          <Breadcrumbs
            items={[
              { href: "/instituciones/equipos", label: "Equipos" },
              { label: product.name },
            ]}
          />
          <p className="kicker mt-8 text-cyan">{category?.name}</p>
          <h1 className="display mt-3 text-4xl md:text-6xl">{product.name}</h1>
          <p className="mt-3 text-white/70">
            {[product.brand, product.model].filter(Boolean).join(" · ") || "Marca y modelo por confirmar en la ficha."}
          </p>
        </div>
      </header>
      <article className="mx-auto grid max-w-[1100px] gap-10 px-4 py-12 md:px-8 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          {product.images[0] ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={product.images[0].src} alt={product.images[0].alt} className="mb-8 w-full bg-ice object-cover" />
          ) : null}
          <p className="text-lg leading-relaxed">{product.description}</p>
          {product.features.length > 0 ? (
            <section className="mt-8">
              <h2 className="display text-2xl">Características</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {product.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>
          ) : null}
          {product.applications.length > 0 ? (
            <section className="mt-8">
              <h2 className="display text-2xl">Aplicaciones</h2>
              <ul className="mt-3 space-y-2 text-sm">
                {product.applications.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}
          <p className="mt-8 text-sm text-ink/60">El precio no se publica hasta contar con una condición comercial confirmada.</p>
        </div>
        <aside className="h-fit bg-white p-5">
          {product.availability ? <p className="text-sm">Disponibilidad: {product.availability}</p> : <p className="text-sm text-ink/60">Disponibilidad por confirmar.</p>}
          {product.datasheet ? (
            <a href={product.datasheet} className="mt-4 inline-flex text-sm font-semibold text-electric">
              Descargar ficha técnica
            </a>
          ) : null}
          <WhatsAppCTA
            intent="equipos"
            message={quoteMessageForProduct(product)}
            event="cotizar_equipo"
            eventParams={{ slug: product.slug }}
            className="mt-6 w-full"
          >
            Solicitar cotización
          </WhatsAppCTA>
          <Link href="/instituciones/equipos" className="mt-4 inline-flex text-sm">
            Volver al catálogo
          </Link>
        </aside>
      </article>
    </main>
  );
}
