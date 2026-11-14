import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { ShareResource } from "@/components/share-resource";
import { YoutubeEmbed } from "@/components/youtube-embed";
import { categoryById, getPublishedResource, publishedResources } from "@/lib/education";
import { meta } from "@/lib/seo";

type Params = { slug: string };

export function generateStaticParams() {
  return publishedResources().map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const resource = getPublishedResource(slug);
  if (!resource) return { title: "Recurso educativo" };
  return meta(`/pacientes/educacion/${resource.slug}`, resource.title, resource.description);
}

function youtubeId(url: string) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) return parsed.pathname.slice(1);
    if (parsed.hostname.includes("youtube.com")) return parsed.searchParams.get("v");
  } catch {
    return null;
  }
  return null;
}

export default async function ResourcePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const resource = getPublishedResource(slug);
  if (!resource) notFound();
  const category = categoryById(resource.categoryId);
  const video = youtubeId(resource.videoUrl);
  const related = publishedResources().filter((item) => resource.relatedIds.includes(item.id) || (item.categoryId === resource.categoryId && item.id !== resource.id));

  return (
    <main className="bg-paper">
      <header className="bg-abyss text-white">
        <div className="mx-auto max-w-[1000px] px-4 pb-12 pt-28 md:px-8 md:pt-36">
          <Breadcrumbs
            items={[
              { href: "/", label: "Inicio" },
              { href: "/pacientes/educacion", label: "Educación" },
              { label: resource.title },
            ]}
          />
          <p className="kicker mt-8 text-cyan">{category?.name}</p>
          <h1 className="display mt-3 text-4xl md:text-6xl">{resource.title}</h1>
        </div>
      </header>
      <article className="mx-auto max-w-[1000px] px-4 py-10 md:px-8">
        <div className="aspect-video bg-ink">
          {video ? (
            <YoutubeEmbed id={video} title={resource.title} />
          ) : (
            <a href={resource.videoUrl} className="flex h-full items-center justify-center text-cyan" rel="noopener noreferrer">
              Abrir video
            </a>
          )}
        </div>
        <p className="mt-6 text-lg leading-relaxed">{resource.description}</p>
        <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
          <div>
            <dt className="kicker text-electric">Fuente</dt>
            <dd className="mt-1">{resource.source}</dd>
          </div>
          {resource.author ? (
            <div>
              <dt className="kicker text-electric">Responsable</dt>
              <dd className="mt-1">{resource.author}</dd>
            </div>
          ) : null}
          {resource.reviewedAt ? (
            <div>
              <dt className="kicker text-electric">Revisión</dt>
              <dd className="mt-1">{resource.reviewedAt}</dd>
            </div>
          ) : null}
          {resource.duration ? (
            <div>
              <dt className="kicker text-electric">Duración</dt>
              <dd className="mt-1">{resource.duration}</dd>
            </div>
          ) : null}
        </dl>
        <div className="mt-8">
          <ShareResource title={resource.title} slug={resource.slug} />
        </div>
        <p className="mt-8 text-sm text-ink/65">
          Este material es educativo. No sustituye la consulta ni indica un tratamiento para una persona concreta.
        </p>
        {related.length > 0 ? (
          <section className="mt-12">
            <h2 className="display text-3xl">Relacionados</h2>
            <ul className="mt-4 space-y-3">
              {related.slice(0, 4).map((item) => (
                <li key={item.id}>
                  <Link href={`/pacientes/educacion/${item.slug}`} className="underline-offset-4 hover:underline">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        <Link href="/pacientes/educacion" className="mt-10 inline-flex text-sm font-semibold">
          Volver a la biblioteca
        </Link>
      </article>
    </main>
  );
}
