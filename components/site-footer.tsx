import Link from "next/link";
import { BronchialMark } from "@/components/lung";
import { emergencyNotice, site } from "@/lib/site";

export function SiteFooter() {
  const socials = [
    ["Instagram", site.social.instagram],
    ["LinkedIn", site.social.linkedin],
    ["YouTube", site.social.youtube],
  ].filter((entry) => entry[1]);

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-16 md:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2">
            <BronchialMark className="h-8 w-8 text-cyan" />
            <p className="display text-2xl">SPIRARE</p>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            Ciencia, respiración, conocimiento y tecnología. {site.concept}.
          </p>
          <p className="mt-6 max-w-md text-xs leading-relaxed text-white/55">{emergencyNotice}</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-3 lg:col-span-7">
          <div>
            <p className="kicker text-cyan">Pacientes</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link href="/pacientes" className="hover:text-white">Atención</Link></li>
              <li><Link href="/pacientes/servicios" className="hover:text-white">Servicios</Link></li>
              <li><Link href="/pacientes/educacion" className="hover:text-white">Educación</Link></li>
            </ul>
          </div>
          <div>
            <p className="kicker text-cyan">Instituciones</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link href="/instituciones" className="hover:text-white">Soluciones</Link></li>
              <li><Link href="/instituciones/asesoria" className="hover:text-white">Asesoría</Link></li>
              <li><Link href="/instituciones/equipos" className="hover:text-white">Equipos</Link></li>
            </ul>
          </div>
          <div>
            <p className="kicker text-cyan">SPIRARE</p>
            <ul className="mt-4 space-y-2 text-sm text-white/80">
              <li><Link href="/nosotros" className="hover:text-white">Nosotros</Link></li>
              <li><Link href="/contacto" className="hover:text-white">Contacto</Link></li>
              <li><Link href="/privacidad" className="hover:text-white">Privacidad</Link></li>
            </ul>
            {socials.length > 0 ? (
              <ul className="mt-4 space-y-2 text-sm">
                {socials.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="text-white/80 hover:text-white" rel="noopener noreferrer">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-4 py-5 text-xs text-white/50 md:flex-row md:justify-between md:px-8">
          <p>© {new Date().getFullYear()} SPIRARE. Contenido clínico sujeto a revisión profesional.</p>
          <p>Los datos de sede, horarios y habilitación se publican cuando estén confirmados.</p>
        </div>
      </div>
    </footer>
  );
}
