# SPIRARE

Sitio de salud respiratoria: pacientes, educación e instituciones. Next.js (App Router), TypeScript y Tailwind CSS.

## Desarrollo

```bash
npm install
npm run dev
```

## Producción

```bash
npm run build
npm start
```

Preparado para Vercel. La URL canónica sale de `NEXT_PUBLIC_SITE_URL`.

Cómo actualizar textos, videos y equipos: [CONTENIDO.md](./CONTENIDO.md).

## Rutas

- `/` inicio
- `/pacientes`, `/pacientes/servicios`, `/pacientes/servicios/[slug]`
- `/pacientes/educacion`, `/pacientes/educacion/[slug]`
- `/instituciones`, `/instituciones/asesoria`, `/instituciones/equipos`, `/instituciones/equipos/[slug]`
- `/nosotros`, `/contacto`, `/privacidad`
