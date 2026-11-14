"use client";

import { useState } from "react";

export function YoutubeEmbed({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false);

  if (!play) {
    return (
      <button
        type="button"
        onClick={() => setPlay(true)}
        className="relative flex h-full w-full items-center justify-center bg-ink text-left"
      >
        {/* Miniatura de YouTube: más liviana que el reproductor. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <span className="relative inline-flex min-h-12 items-center bg-cyan px-4 text-sm font-semibold text-ink">
          Reproducir: {title}
        </span>
      </button>
    );
  }

  return (
    <iframe
      className="h-full w-full"
      src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}
