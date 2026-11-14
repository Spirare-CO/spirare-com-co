import Link from "next/link";
import { Lung } from "@/components/lung";
import { TrackedLink } from "@/components/tracked-link";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { educationCategories, publishedResources } from "@/lib/education";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const patientHighlights = [
  ["01", "Consulta médica especializada", "Medicina interna y neumología."],
  ["02", "Pruebas de función respiratoria", "Espirometría, caminata de seis minutos y FeNO."],
  ["03", "Terapia respiratoria", "Técnica, dispositivos y acompañamiento."],
  ["04", "Educación", "Recursos para entender el cuidado después de la consulta."],
];

const institutionHighlights = [
  ["Asesoría", "Modelos de contratación en salud para enfermedades respiratorias."],
  ["Espirometría", "Equipos para medir el flujo de aire."],
  ["FeNO", "Tecnología de medición de óxido nítrico exhalado."],
  ["Nebulizadores", "Equipos para terapia inhalada."],
];

export default function HomePage() {
  const published = publishedResources();

  return (
    <main>
      <section className="relative min-h-[100svh] overflow-hidden bg-abyss text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_42%,rgba(35,153,243,0.35),transparent_42%),radial-gradient(circle_at_20%_80%,rgba(16,29,103,0.9),transparent_40%)]" />
        <Lung
          labelled
          className="pointer-events-none absolute -right-[42%] top-[22%] w-[150%] opacity-35 sm:top-[16%] lg:-right-[4%] lg:top-[6%] lg:w-[54%] lg:opacity-100"
        />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1400px] flex-col px-4 pb-6 pt-24 md:px-8 md:pt-32">
          <p className="kicker text-cyan">SPIRARE · {site.concept}</p>
          <h1 className="display mt-5 max-w-[11ch] text-[12.5vw] leading-[0.88] sm:text-6xl lg:max-w-[9.2ch] lg:text-[6.6rem]">
            Respirar
            <br />
            mejor
            <br />
            <span className="text-cyan">empieza aquí.</span>
          </h1>
          <p className="mt-8 max-w-md text-base leading-relaxed text-white/75 md:text-lg">{site.support}</p>
          <div className="mt-auto grid gap-3 pt-16 md:grid-cols-2">
            <TrackedLink
              href="/pacientes"
              event="recorrido_pacientes"
              className="group bg-abyss px-2 py-5 transition hover:bg-deep md:px-6 md:py-8"
            >
              <span className="kicker text-cyan">Recorrido 01</span>
              <span className="display mt-3 block text-3xl md:text-5xl">Soy paciente</span>
              <span className="mt-2 block max-w-sm text-sm text-white/70">Consultas, pruebas y cuidado respiratorio.</span>
              <span className="mt-6 inline-block text-sm text-cyan group-hover:translate-x-1">Entrar al cuidado →</span>
            </TrackedLink>
            <TrackedLink
              href="/instituciones"
              event="recorrido_instituciones"
              className="group bg-electric/90 px-2 py-6 transition hover:bg-bright md:px-6 md:py-8"
            >
              <span className="kicker text-white/80">Recorrido 02</span>
              <span className="display mt-3 block text-3xl md:text-5xl">Soy institución o empresa</span>
              <span className="mt-2 block max-w-sm text-sm text-white/85">Asesoría especializada y tecnología respiratoria.</span>
              <span className="mt-6 inline-block text-sm group-hover:translate-x-1">Ver soluciones →</span>
            </TrackedLink>
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-4 py-20 md:px-8 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-4">
            <p className="kicker text-electric">La marca</p>
            <p className="display mt-4 text-6xl text-deep/20">01</p>
          </div>
          <div className="lg:col-span-8">
            <h2 className="display text-4xl leading-[1.02] md:text-6xl">
              La salud respiratoria desde una perspectiva integral.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/75">
              Conectamos atención especializada, educación y tecnología para acompañar a los pacientes y fortalecer los servicios de salud.
            </p>
            <div className="mt-12 grid gap-8 border-t border-ink/10 pt-8 sm:grid-cols-3">
              {[
                ["Atención", "Consultas, pruebas y terapia, explicadas en lenguaje claro."],
                ["Conocimiento", "Una biblioteca para que el profesional comparta un video concreto."],
                ["Tecnología", "Asesoría y equipos para organizaciones que prestan servicios respiratorios."],
              ].map(([title, copy]) => (
                <div key={title}>
                  <h3 className="display text-xl">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1400px] lg:grid-cols-12">
          <div className="px-4 py-16 md:px-8 lg:col-span-7 lg:py-24">
            <p className="kicker text-electric">Pacientes</p>
            <h2 className="display mt-3 text-4xl md:text-6xl">Atención para quien respira.</h2>
            <ol className="mt-10">
              {patientHighlights.map(([index, title, copy]) => (
                <li key={index} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-ink/10 py-5">
                  <span className="text-sm text-electric">{index}</span>
                  <div>
                    <h3 className="display text-2xl">{title}</h3>
                    <p className="mt-1 text-sm text-ink/65">{copy}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link href="/pacientes/servicios" className="mt-8 inline-flex min-h-12 items-center bg-ink px-5 text-sm font-semibold text-white">
              Explorar servicios
            </Link>
          </div>
          <div className="relative bg-deep px-4 py-16 text-white md:px-8 lg:col-span-5 lg:py-24">
            <div className="bronchi-field absolute inset-0 opacity-40" />
            <div className="relative">
              <p className="kicker text-cyan">Instituciones</p>
              <h2 className="display mt-3 text-4xl md:text-5xl">Soluciones para quien organiza la atención.</h2>
              <ul className="mt-10 space-y-6">
                {institutionHighlights.map(([title, copy]) => (
                  <li key={title}>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/70">{copy}</p>
                  </li>
                ))}
              </ul>
              <Link href="/instituciones" className="mt-10 inline-flex min-h-12 items-center border border-cyan px-5 text-sm font-semibold text-cyan">
                Conocer soluciones
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ice">
        <div className="mx-auto max-w-[1400px] px-4 py-20 md:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="kicker text-electric">Biblioteca</p>
              <h2 className="display mt-3 max-w-3xl text-4xl md:text-6xl">
                Comprender tu salud también es parte del cuidado.
              </h2>
            </div>
            <Link href="/pacientes/educacion" className="inline-flex min-h-12 items-center text-sm font-semibold underline-offset-4 hover:underline">
              Explorar recursos educativos
            </Link>
          </div>
          <div className="mt-12 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {(published.length > 0 ? published.slice(0, 4).map((item) => ({
              href: `/pacientes/educacion/${item.slug}`,
              title: item.title,
              note: item.description,
            })) : educationCategories.slice(0, 4).map((item) => ({
              href: "/pacientes/educacion",
              title: item.name,
              note: "Categoría lista. Video pendiente de revisión.",
            }))).map((item) => (
              <Link key={item.title} href={item.href} className="bg-ice p-6 transition hover:bg-white">
                <h3 className="display text-2xl leading-tight">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{item.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-abyss text-white">
        <Lung className="pointer-events-none absolute -left-24 bottom-[-20%] w-[420px] opacity-50" />
        <div className="relative mx-auto max-w-[1400px] px-4 py-24 md:px-8 md:py-32">
          <p className="kicker text-cyan">Contacto</p>
          <h2 className="display mt-4 max-w-4xl text-5xl leading-[0.92] md:text-7xl">
            Estamos para acompañarte a respirar mejor.
          </h2>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <WhatsAppCTA intent="cita" event="agendar_cita">
              Agendar cita
            </WhatsAppCTA>
            <WhatsAppCTA intent="asesoria" event="solicitar_asesoria" variant="line">
              Solicitar información institucional
            </WhatsAppCTA>
          </div>
          <p className="mt-8 max-w-xl text-sm text-white/60">
            {services.length} servicios asistenciales descritos para revisión clínica. Los videos y los equipos se publican cuando existan datos confirmados.
          </p>
        </div>
      </section>
    </main>
  );
}
