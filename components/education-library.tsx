"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { track } from "@/lib/analytics";
import {
  categoryById,
  educationCategories,
  publishedResources,
  type EducationResource,
} from "@/lib/education";

export function EducationLibrary() {
  const resources = publishedResources();
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("todas");

  const filteredCategories = useMemo(() => {
    const q = query.trim().toLowerCase();
    return educationCategories.filter((item) => {
      if (category !== "todas" && item.id !== category) return false;
      if (!q) return true;
      return `${item.name} ${item.description}`.toLowerCase().includes(q);
    });
  }, [query, category]);

  const filteredResources = useMemo(() => {
    const q = query.trim().toLowerCase();
    return resources.filter((item) => {
      if (category !== "todas" && item.categoryId !== category) return false;
      if (!q) return true;
      return `${item.title} ${item.description}`.toLowerCase().includes(q);
    });
  }, [resources, query, category]);

  const featured = filteredResources[0];

  return (
    <div>
      <div className="flex flex-col gap-4 border-y border-ink/10 py-5 md:flex-row md:items-end md:justify-between">
        <label className="block flex-1">
          <span className="kicker text-electric">Buscar</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Inhalador, CPAP, espirometría…"
            className="mt-2 w-full border-b border-ink/20 bg-transparent py-2 text-lg outline-none placeholder:text-ink/35"
            type="search"
          />
        </label>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
          <FilterChip active={category === "todas"} onClick={() => setCategory("todas")}>
            Todas
          </FilterChip>
          {educationCategories.map((item) => (
            <FilterChip key={item.id} active={category === item.id} onClick={() => setCategory(item.id)}>
              {item.name}
            </FilterChip>
          ))}
        </div>
      </div>

      {resources.length === 0 ? (
        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kicker text-electric">Biblioteca en preparación</p>
            <h2 className="display mt-3 text-4xl leading-none md:text-5xl">Todavía no hay videos publicados.</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-ink/75">
              Las categorías ya están listas. Un recurso aparece aquí solo después de revisión profesional, con su enlace propio para compartir por WhatsApp. No mostramos videos de ejemplo.
            </p>
          </div>
          <ul className="lg:col-span-7">
            {filteredCategories.length === 0 ? (
              <li className="border-t border-ink/10 py-6 text-ink/70">Ninguna categoría coincide con esa búsqueda.</li>
            ) : (
              filteredCategories.map((item, index) => (
                <li key={item.id} className="grid grid-cols-[auto_1fr] gap-4 border-t border-ink/10 py-5">
                  <span className="display text-cyan text-2xl">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="display text-2xl">{item.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink/70">{item.description}</p>
                    <p className="mt-2 text-xs uppercase tracking-wider text-ink/45">0 recursos publicados</p>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      ) : (
        <div className="mt-10 space-y-12">
          {featured ? <Featured resource={featured} /> : <p>Ningún video coincide con el filtro.</p>}
          <ul className="grid gap-6 md:grid-cols-2">
            {filteredResources.slice(1).map((resource) => (
              <li key={resource.id}>
                <ResourceCard resource={resource} />
              </li>
            ))}
          </ul>
          {filteredResources.length === 0 ? <p>Ningún video coincide con el filtro.</p> : null}
        </div>
      )}
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`min-h-10 px-3 text-left text-xs ${active ? "bg-ink text-white" : "bg-ice text-ink hover:bg-cyan/40"}`}
    >
      {children}
    </button>
  );
}

function Featured({ resource }: { resource: EducationResource }) {
  const category = categoryById(resource.categoryId);
  return (
    <Link
      href={`/pacientes/educacion/${resource.slug}`}
      onClick={() => track("abrir_recurso", { slug: resource.slug })}
      className="grid items-stretch bg-abyss text-white md:grid-cols-2"
    >
      <div className="relative min-h-56 bg-deep bronchi-field">
        {resource.coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={resource.coverImage} alt={resource.coverAlt || ""} className="h-full w-full object-cover" />
        ) : (
          <span className="absolute bottom-4 left-4 kicker text-cyan">Destacado</span>
        )}
      </div>
      <div className="flex flex-col justify-end p-6 md:p-10">
        <p className="kicker text-cyan">{category?.name}</p>
        <h2 className="display mt-3 text-4xl">{resource.title}</h2>
        <p className="mt-3 text-sm leading-relaxed text-white/75">{resource.description}</p>
      </div>
    </Link>
  );
}

function ResourceCard({ resource }: { resource: EducationResource }) {
  const category = categoryById(resource.categoryId);
  return (
    <Link
      href={`/pacientes/educacion/${resource.slug}`}
      onClick={() => track("abrir_recurso", { slug: resource.slug })}
      className="block border-t border-ink/15 pt-4"
    >
      <p className="kicker text-electric">{category?.name}</p>
      <h3 className="display mt-2 text-2xl">{resource.title}</h3>
      <p className="mt-2 text-sm text-ink/70">{resource.description}</p>
    </Link>
  );
}
