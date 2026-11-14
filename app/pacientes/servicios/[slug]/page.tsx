import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ViewBeacon } from "@/components/view-beacon";
import { ReviewNote } from "@/components/review-note";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { categoryById, resourcesInCategory } from "@/lib/education";
import { meta } from "@/lib/seo";
import { getService, services } from "@/lib/services";

type Params = { slug: string };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return meta(`/pacientes/servicios/${service.slug}`, service.name, service.summary);
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.relatedCategoryIds.flatMap((id) =>
    resourcesInCategory(id).map((resource) => ({ ...resource, category: categoryById(id)?.name ?? "" })),
  );

  return (
    <main>
      <ViewBeacon event="visita_servicio" params={{ slug: service.slug }} />
      <header className="relative overflow-hidden bg-abyss text-white">
        <div className="bronchi-field pointer-events-none absolute inset-0 opacity-25" />
        <div className="relative mx-auto max-w-[1400px] px-4 pb-16 pt-28 md:px-8 md:pt-36">
          <Breadcrumbs
            items={[
              { href: "/", label: "Inicio" },
              { href: "/pacientes", label: "Pacientes" },
              { href: "/pacientes/servicios", label: "Servicios" },
              { label: service.name },
            ]}
          />
          <p className="kicker mt-8 text-cyan">{service.kicker}</p>
          <h1 className="display mt-4 max-w-4xl text-4xl leading-[0.95] md:text-6xl">{service.name}</h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/75">{service.lead}</p>
        </div>
      </header>

      <article className="bg-paper">
        <div className="mx-auto grid max-w-[1100px] gap-10 px-4 py-10 md:px-8 lg:grid-cols-[1fr_16rem] lg:py-14">
          <div className="order-2 space-y-12 lg:order-1">
            <section>
              <h2 className="display text-3xl">Para qué sirve</h2>
              <p className="mt-4 text-base leading-relaxed text-ink/80">{service.purpose}</p>
            </section>
            <section>
              <h2 className="display text-3xl">En qué consiste</h2>
              <ol className="mt-4 space-y-4">
                {service.consistsOf.map((step, index) => (
                  <li key={step} className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-ink/10 pt-4">
                    <span className="text-sm text-electric">{String(index + 1).padStart(2, "0")}</span>
                    <p className="leading-relaxed">{step}</p>
                  </li>
                ))}
              </ol>
            </section>
            <section>
              <h2 className="display text-3xl">Información práctica</h2>
              <ul className="mt-4 space-y-3">
                {service.practical.map((item) => (
                  <li key={item} className="border-l-2 border-cyan pl-4 text-sm leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <ReviewNote items={service.pendingValidation} />
            <section>
              <h2 className="display text-3xl">Preguntas frecuentes</h2>
              <div className="mt-4 divide-y divide-ink/10">
                {service.faqs.map((faq) => (
                  <details key={faq.question} className="group py-4">
                    <summary className="cursor-pointer list-none pr-6 font-semibold marker:content-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-bright">
                      {faq.question}
                    </summary>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink/75">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
            {related.length > 0 ? (
              <section>
                <h2 className="display text-3xl">Recursos relacionados</h2>
                <ul className="mt-4 space-y-3">
                  {related.map((resource) => (
                    <li key={resource.id}>
                      <Link href={`/pacientes/educacion/${resource.slug}`} className="text-electric underline-offset-4 hover:underline">
                        {resource.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : (
              <p className="text-sm text-ink/60">
                Cuando haya videos revisados sobre este tema, aparecerán aquí. Mientras tanto, la biblioteca muestra las categorías preparadas.
              </p>
            )}
          </div>
          <aside className="order-1 h-fit bg-white p-5 lg:sticky lg:top-24 lg:order-2">
            <p className="kicker text-electric">Solicitar</p>
            <p className="mt-3 text-sm leading-relaxed">Escribe con un mensaje ya preparado para este servicio. No envíes datos clínicos sensibles.</p>
            <WhatsAppCTA intent={service.intent} event="whatsapp_servicio" eventParams={{ slug: service.slug }} className="mt-5 w-full">
              Solicitar por WhatsApp
            </WhatsAppCTA>
            <Link href="/pacientes/servicios" className="mt-4 inline-flex text-sm font-semibold underline-offset-4 hover:underline">
              Volver al catálogo
            </Link>
          </aside>
        </div>
      </article>
    </main>
  );
}
