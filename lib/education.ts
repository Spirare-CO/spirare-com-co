export type EducationCategory = {
  id: string;
  slug: string;
  name: string;
  description: string;
};

export type EducationResource = {
  id: string;
  title: string;
  slug: string;
  categoryId: string;
  description: string;
  videoUrl: string;
  coverImage: string;
  coverAlt: string;
  source: string;
  author: string;
  reviewedAt: string;
  status: "published" | "in_review" | "draft";
  duration: string;
  relatedIds: string[];
};

export const educationCategories: EducationCategory[] = [
  {
    id: "inhaladores",
    slug: "uso-correcto-de-inhaladores",
    name: "Uso correcto de inhaladores",
    description: "Cómo preparar, disparar y coordinar la inhalación para que el medicamento llegue a la vía aérea.",
  },
  {
    id: "inhalocamaras",
    slug: "uso-de-inhalocamaras",
    name: "Uso de inhalocámaras",
    description: "Para qué sirve la cámara espaciadora y cómo usarla con adultos o con quien necesita más tiempo para inhalar.",
  },
  {
    id: "dispositivos",
    slug: "manejo-de-dispositivos",
    name: "Manejo de dispositivos respiratorios",
    description: "Nebulizadores y otros dispositivos de uso frecuente, cuando el contenido esté revisado.",
  },
  {
    id: "cpap",
    slug: "uso-y-adaptacion-cpap",
    name: "Uso y adaptación a CPAP",
    description: "Colocación de la mascarilla, rutina de la noche y cuidados del equipo.",
  },
  {
    id: "preparacion-pruebas",
    slug: "preparacion-pruebas-respiratorias",
    name: "Preparación para pruebas respiratorias",
    description: "Qué esperar antes de una espirometría, un FeNO o una caminata. Solo se publicará lo que el servicio valide.",
  },
  {
    id: "enfermedades",
    slug: "enfermedades-respiratorias",
    name: "Enfermedades respiratorias",
    description: "Explicaciones generales para comprender un diagnóstico ya conversado en consulta.",
  },
  {
    id: "cuidado-general",
    slug: "cuidado-respiratorio",
    name: "Recomendaciones generales de cuidado respiratorio",
    description: "Hábitos y señales de alarma explicadas sin sustituir la indicación individual.",
  },
];

/**
 * Catálogo público. Vacío a propósito: no se fabrican videos.
 * Para publicar uno, agrega un objeto con status "published" y los campos reales.
 * Ejemplo comentado en CONTENIDO.md.
 */
export const educationResources: EducationResource[] = [];

export function publishedResources() {
  return educationResources.filter((resource) => resource.status === "published");
}

export function getPublishedResource(slug: string) {
  return publishedResources().find((resource) => resource.slug === slug);
}

export function categoryById(id: string) {
  return educationCategories.find((category) => category.id === id);
}

export function resourcesInCategory(categoryId: string) {
  return publishedResources().filter((resource) => resource.categoryId === categoryId);
}
