export type EquipmentCategory = {
  slug: string;
  code: string;
  name: string;
  summary: string;
  points: string[];
  quoteMessage: string;
};

export type Product = {
  slug: string;
  name: string;
  brand: string;
  model: string;
  categorySlug: string;
  description: string;
  features: string[];
  applications: string[];
  images: { src: string; alt: string }[];
  datasheet: string | null;
  availability: string | null;
};

export const equipmentCategories: EquipmentCategory[] = [
  {
    slug: "espirometria",
    code: "01",
    name: "Equipos de espirometría",
    summary:
      "Equipos para medir flujos y volúmenes espiratorios en consulta, laboratorio de función pulmonar o jornadas institucionales.",
    points: [
      "Medición de la maniobra espiratoria forzada.",
      "Apoyo a programas de diagnóstico y seguimiento.",
      "La marca, el software y los sensores se detallan cuando haya un modelo confirmado.",
    ],
    quoteMessage:
      "Hola, estoy interesado en recibir información y cotización de un equipo de espirometría de SPIRARE.",
  },
  {
    slug: "feno",
    code: "02",
    name: "Equipos de medición de FeNO",
    summary:
      "Dispositivos para medir la fracción exhalada de óxido nítrico, usados en el estudio y el seguimiento de inflamación de la vía aérea.",
    points: [
      "Medición a flujo controlado.",
      "Resultado numérico para interpretar en contexto clínico.",
      "Especificaciones, consumibles y registro sanitario se publican solo con ficha real.",
    ],
    quoteMessage:
      "Hola, estoy interesado en recibir información y cotización de un equipo de medición de FeNO de SPIRARE.",
  },
  {
    slug: "nebulizadores",
    code: "03",
    name: "Nebulizadores",
    summary:
      "Equipos para administrar medicamento en aerosol, para uso institucional o según la indicación que defina cada organización.",
    points: [
      "Generación de aerosol para tratamiento inhalado.",
      "Selección según el entorno: consulta, hospitalización o domicilio.",
      "No publicamos comparaciones de marcas hasta tener productos confirmados.",
    ],
    quoteMessage:
      "Hola, estoy interesado en recibir información y cotización de nebulizadores de SPIRARE.",
  },
];

/** Vacío hasta cargar productos reales. Ver CONTENIDO.md. */
export const products: Product[] = [];

export function getCategory(slug: string) {
  return equipmentCategories.find((category) => category.slug === slug);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function productsByCategory(slug: string) {
  return products.filter((product) => product.categorySlug === slug);
}

export function quoteMessageForProduct(product: Product) {
  const model = product.model ? `, modelo ${product.model}` : "";
  return `Hola, quisiera solicitar información y cotización de ${product.name}${model} de SPIRARE.`;
}
