import type { MetadataRoute } from "next";
import { publishedResources } from "@/lib/education";
import { products } from "@/lib/equipment";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/pacientes",
    "/pacientes/servicios",
    "/pacientes/educacion",
    "/instituciones",
    "/instituciones/asesoria",
    "/instituciones/equipos",
    "/nosotros",
    "/contacto",
    "/privacidad",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${site.url}${path || "/"}`,
      lastModified: now,
    })),
    ...services.map((service) => ({
      url: `${site.url}/pacientes/servicios/${service.slug}`,
      lastModified: now,
    })),
    ...publishedResources().map((resource) => ({
      url: `${site.url}/pacientes/educacion/${resource.slug}`,
      lastModified: now,
    })),
    ...products.map((product) => ({
      url: `${site.url}/instituciones/equipos/${product.slug}`,
      lastModified: now,
    })),
  ];
}
