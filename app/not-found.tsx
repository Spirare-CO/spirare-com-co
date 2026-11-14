import Link from "next/link";

export default function NotFound() {
  return (
    <main className="bg-abyss text-white">
      <div className="mx-auto max-w-[900px] px-4 pb-24 pt-36">
        <p className="kicker text-cyan">404</p>
        <h1 className="display mt-4 text-5xl">Esa página no está en SPIRARE.</h1>
        <p className="mt-4 text-white/70">El enlace no corresponde a un servicio, un video publicado o un equipo cargado.</p>
        <Link href="/" className="mt-8 inline-flex min-h-12 items-center bg-cyan px-5 font-semibold text-ink">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
