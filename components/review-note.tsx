export function ReviewNote({ items }: { items?: string[] }) {
  return (
    <aside className="border-l-2 border-electric bg-ice/80 px-5 py-4 text-sm leading-relaxed text-ink">
      <p className="font-semibold">Información general, pendiente de validación clínica.</p>
      <p className="mt-1 text-ink/80">
        Este texto orienta. No es una indicación, no promete resultados y no reemplaza la consulta.
      </p>
      {items && items.length > 0 ? (
        <ul className="mt-3 list-disc space-y-1 pl-4 text-ink/75">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </aside>
  );
}
