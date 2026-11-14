# Contenido de SPIRARE

Los textos públicos viven en `lib/`. La presentación no debe duplicar el número de WhatsApp ni los mensajes.

## Configurar antes de publicar

Crear `.env.local` (no se commitea):

```
NEXT_PUBLIC_SITE_URL=https://spirare.com.co
NEXT_PUBLIC_WHATSAPP_E164=573001112233
NEXT_PUBLIC_CONTACT_EMAIL=
NEXT_PUBLIC_LEGAL_NAME=
NEXT_PUBLIC_CITY=
NEXT_PUBLIC_ADDRESS=
NEXT_PUBLIC_HOURS=
NEXT_PUBLIC_SOCIAL_INSTAGRAM=
NEXT_PUBLIC_SOCIAL_LINKEDIN=
NEXT_PUBLIC_SOCIAL_YOUTUBE=
NEXT_PUBLIC_GA_MEASUREMENT_ID=
```

`NEXT_PUBLIC_WHATSAPP_E164` son solo dígitos, con indicativo de país. Sin ese valor, los botones llevan a `/contacto` y muestran el mensaje preparado. No se inventó un número.

Pendiente de datos reales, y por eso no aparece en el sitio:

- Razón social, NIT, habilitación REPS y ciudad de atención.
- Dirección, horarios, correo y redes.
- Nombres de profesionales y fotografías.
- Precios, cobertura y disponibilidad.
- Preparaciones clínicas que el responsable aún no validó.
- Videos educativos.
- Marcas, modelos, fichas técnicas y registros sanitarios de equipos.
- Revisión jurídica de `app/privacidad/page.tsx`.

## Servicios

Editar `lib/services.ts`. Cada servicio ya tiene página en `/pacientes/servicios/[slug]` y un mensaje de WhatsApp en `lib/whatsapp.ts`.

## Videos

Agregar objetos a `educationResources` en `lib/education.ts` con `status: "published"`. Mientras el estado sea otro, no se listan ni entran al sitemap.

```ts
{
  id: "inh-001",
  title: "Cómo usar un inhalador de dosis medida",
  slug: "como-usar-inhalador-dosis-medida",
  categoryId: "inhaladores",
  description: "Descripción revisada.",
  videoUrl: "https://www.youtube.com/watch?v=VIDEO",
  coverImage: "/educacion/portada.jpg",
  coverAlt: "Texto alternativo",
  source: "SPIRARE",
  author: "Nombre verificado",
  reviewedAt: "2026-01-15",
  status: "published",
  duration: "3 min",
  relatedIds: [],
}
```

La página individual incluye «Compartir este video» (WhatsApp con título y URL) y «Copiar enlace».

## Equipos

Las tres categorías están en `lib/equipment.ts`. Para una ficha, agregar un `Product` al arreglo `products`. La ruta `/instituciones/equipos/[slug]` y la cotización por WhatsApp salen de esos datos. No cargues productos de ejemplo.

## Analítica

`lib/analytics.ts` emite el evento de navegador `spirare:analytics` y, si existe `window.gtag`, también un evento de GA. No incluye datos clínicos. Cargar el script de medición queda para cuando haya una base legal y un ID real. El layout todavía no inserta ese script a propósito.
